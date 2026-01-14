#!/usr/bin/env python3
"""
Check Minecraft server logs for crashes, errors, and warnings.

This script analyzes Minecraft server logs to detect issues that indicate
the modpack failed to launch properly. It distinguishes between critical
errors that should fail CI and expected warnings that can be safely ignored.
"""

import re
import sys
from pathlib import Path


# Patterns that indicate critical failures - these should fail CI
CRITICAL_PATTERNS = [
    # Crashes and fatal errors
    (r"---- Minecraft Crash Report ----", "Crash report detected"),
    (r"A fatal error has been detected", "Fatal JVM error"),
    (r"FAILED TO LOAD MOD", "Mod failed to load"),
    (r"Missing or unsupported mandatory dependencies", "Missing dependencies"),
    (r"LoaderExceptionModCrash", "Mod loading crash"),
    (r"java\.lang\.OutOfMemoryError", "Out of memory error"),
    (r"Exception in thread.*Error", "Thread error"),
    (r"Unable to launch", "Launch failure"),
    (r"Failed to create mod instance", "Mod instantiation failed"),
    (r"Mod .* has a broken dependency", "Broken mod dependency"),
    (r"\[FATAL\]", "Fatal log message"),
]

# Error patterns that should fail CI unless they're known benign errors
ERROR_PATTERNS = [
    (r"\[ERROR\](?!.*(Unable to resolve|annotation|Optional|deprecated))", "Error message"),
    (r"Exception caught during firing event", "Event handler exception"),
    (r"Failed to load config", "Config load failure"),
    (r"Error during pre-loading", "Pre-loading error"),
    (r"Error constructing", "Construction error"),
]

# Patterns that indicate successful startup - used to verify server started
SUCCESS_PATTERNS = [
    r"Done \(\d+[\.,]\d+s\)! For help, type \"help\"",
    r"Dedicated server took",
    r"Time elapsed: \d+ ms",
]

# Known benign warnings/errors that can be safely ignored
IGNORE_PATTERNS = [
    r"Unable to resolve .* annotation",
    r"Potentially Dangerous alternative prefix",
    r"Mod .* uses the legacy config format",
    r"Coremod .* is not signed",
    r"Configuration file .* is not correct",
    r"Unable to find spawn biome",
    r"Ambiguity between arguments",
    r"Registry .* was not found",
    r"Optional dependency .* is not installed",
    r"SLF4J:",
    r"OpenAL initialized",
    r"Unable to instantiate org.fusesource.jansi",
]


def should_ignore(line: str) -> bool:
    """Check if a line matches any ignore pattern."""
    for pattern in IGNORE_PATTERNS:
        if re.search(pattern, line, re.IGNORECASE):
            return True
    return False


def check_logs(log_path: str) -> tuple[list[tuple[int, str, str]], bool]:
    """
    Parse log file for issues.
    
    Returns:
        Tuple of (issues list, server_started boolean)
        where issues is a list of (line_number, issue_type, line_content)
    """
    issues = []
    server_started = False
    
    log_file = Path(log_path)
    if not log_file.exists():
        print(f"ERROR: Log file not found: {log_path}")
        sys.exit(1)
    
    content = log_file.read_text(errors="replace")
    lines = content.split("\n")
    
    # Check for successful startup
    for pattern in SUCCESS_PATTERNS:
        if re.search(pattern, content):
            server_started = True
            break
    
    # Check each line for issues
    for line_num, line in enumerate(lines, start=1):
        if should_ignore(line):
            continue
        
        # Check critical patterns first
        for pattern, issue_type in CRITICAL_PATTERNS:
            if re.search(pattern, line, re.IGNORECASE):
                issues.append((line_num, f"CRITICAL: {issue_type}", line.strip()))
                break
        else:
            # Check error patterns
            for pattern, issue_type in ERROR_PATTERNS:
                if re.search(pattern, line, re.IGNORECASE):
                    issues.append((line_num, f"ERROR: {issue_type}", line.strip()))
                    break
    
    return issues, server_started


def main():
    if len(sys.argv) < 2:
        print("Usage: check_minecraft_logs.py <logfile>")
        sys.exit(1)
    
    log_path = sys.argv[1]
    print(f"Checking Minecraft logs: {log_path}")
    print("=" * 60)
    
    issues, server_started = check_logs(log_path)
    
    # Filter to only critical issues
    critical_issues = [i for i in issues if "CRITICAL" in i[1]]
    error_issues = [i for i in issues if "ERROR" in i[1]]
    
    if critical_issues:
        print(f"\n❌ Found {len(critical_issues)} CRITICAL issue(s):\n")
        for line_num, issue_type, line in critical_issues[:20]:
            print(f"  Line {line_num}: {issue_type}")
            print(f"    {line[:200]}")
            print()
    
    if error_issues:
        print(f"\n⚠️  Found {len(error_issues)} ERROR(s):\n")
        for line_num, issue_type, line in error_issues[:10]:
            print(f"  Line {line_num}: {issue_type}")
            print(f"    {line[:200]}")
            print()
    
    if server_started:
        print("\n✅ Server started successfully")
    else:
        print("\n⚠️  Could not confirm server startup completed")
    
    print("=" * 60)
    
    # Fail on critical issues
    if critical_issues:
        print(f"\n❌ FAILED: {len(critical_issues)} critical issue(s) found")
        sys.exit(1)
    
    # Warn but don't fail on errors if server started
    if error_issues and not server_started:
        print(f"\n❌ FAILED: Server did not start and {len(error_issues)} error(s) found")
        sys.exit(1)
    
    if error_issues:
        print(f"\n⚠️  WARNING: {len(error_issues)} non-critical error(s) found, but server started")
    
    print("\n✅ PASSED: No critical issues detected")
    sys.exit(0)


if __name__ == "__main__":
    main()
