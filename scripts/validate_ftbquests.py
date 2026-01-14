#!/usr/bin/env python3
"""
Validate FTBQuests SNBT file formatting.

This script checks all SNBT files in the config/ftbquests directory
to ensure they are properly formatted and can be parsed correctly.
"""

import re
import sys
from pathlib import Path
from typing import List, Tuple

try:
    from ftb_snbt_lib import load
except ImportError:
    print("Error: ftb-snbt-lib is not installed. Please run: pip install ftb-snbt-lib")
    sys.exit(1)


# Regex pattern to match unescaped ampersand followed by space
# FTBQuests requires & followed by whitespace to be escaped as \&
AMPERSAND_SPACE_PATTERN = r'(?<!\\)& '


def check_ampersand_space(file_path: Path) -> Tuple[bool, List[str]]:
    r"""
    Check for unescaped ampersand followed by whitespace.

    In FTBQuests, any & followed by a space must be escaped as \& to avoid
    in-game errors like "Invalid formatting! You must escape whitespace after & with \&!"

    Args:
        file_path: Path to the SNBT file to check

    Returns:
        Tuple of (success: bool, list of error messages)
    """
    errors = []

    with open(file_path, 'r', encoding='utf-8') as f:
        for line_num, line in enumerate(f, 1):
            # Find unescaped & followed by space
            matches = list(re.finditer(AMPERSAND_SPACE_PATTERN, line))
            for match in matches:
                # Get some context around the match
                start = max(0, match.start() - 10)
                end = min(len(line), match.end() + 10)
                context = line[start:end].strip()
                errors.append(
                    f"Line {line_num}: Unescaped '& ' found. Use '\\& ' instead. "
                    f"Context: ...{context}..."
                )

    return len(errors) == 0, errors


def validate_snbt_file(file_path: Path) -> Tuple[bool, str]:
    """
    Validate a single SNBT file.
    
    Args:
        file_path: Path to the SNBT file to validate
        
    Returns:
        Tuple of (success: bool, error_message: str)
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            load(f)
        return True, ""
    except Exception as e:
        return False, str(e)


def find_snbt_files(base_path: Path) -> List[Path]:
    """
    Find all SNBT files in the FTBQuests directory.
    
    Args:
        base_path: Base directory to search from
        
    Returns:
        List of paths to SNBT files
    """
    ftbquests_path = base_path / "config" / "ftbquests"
    
    if not ftbquests_path.exists():
        print(f"Info: FTBQuests directory not found at {ftbquests_path}")
        print("This is expected if no quest files have been added yet.")
        return []
    
    return list(ftbquests_path.rglob("*.snbt"))


def main():
    """Main validation function."""
    repo_root = Path(__file__).parent.parent
    snbt_files = find_snbt_files(repo_root)
    
    if not snbt_files:
        print("[OK] No SNBT files found to validate. Skipping check.")
        return 0
    
    print(f"Found {len(snbt_files)} SNBT file(s) to validate...")
    print()
    
    failed_files = []
    
    for snbt_file in sorted(snbt_files):
        relative_path = snbt_file.relative_to(repo_root)
        
        # Check for unescaped & followed by space
        formatting_ok, formatting_errors = check_ampersand_space(snbt_file)
        
        # Validate SNBT syntax
        syntax_ok, syntax_error = validate_snbt_file(snbt_file)
        
        if formatting_ok and syntax_ok:
            print(f"[OK] {relative_path}")
        else:
            print(f"[FAIL] {relative_path}")
            
            if not formatting_ok:
                print(f"  Formatting errors:")
                for error in formatting_errors:
                    print(f"    - {error}")
            
            if not syntax_ok:
                print(f"  Syntax error: {syntax_error}")
            
            all_errors = formatting_errors.copy()
            if not syntax_ok:
                all_errors.append(syntax_error)
            
            failed_files.append((relative_path, all_errors))
    
    print()
    
    if failed_files:
        print(f"[ERROR] Validation failed for {len(failed_files)} file(s):")
        for path, errors in failed_files:
            print(f"  - {path}:")
            for error in errors:
                print(f"      {error}")
        print()
        print("Please fix the formatting issues in the above files.")
        print()
        print("Tip: Any '&' followed by a space must be escaped with backslash.")
        print("     Example: 'Oil & Plastic' should be 'Oil \\& Plastic'")
        return 1
    else:
        print(f"[SUCCESS] All {len(snbt_files)} SNBT file(s) are properly formatted!")
        return 0


if __name__ == "__main__":
    sys.exit(main())
