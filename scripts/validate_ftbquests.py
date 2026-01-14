#!/usr/bin/env python3
"""
Validate FTBQuests SNBT file formatting.

This script checks all SNBT files in the config/ftbquests directory
to ensure they are properly formatted and can be parsed correctly.
"""

import sys
from pathlib import Path
from typing import List, Tuple

try:
    from ftb_snbt_lib import load
except ImportError:
    print("Error: ftb-snbt-lib is not installed. Please run: pip install ftb-snbt-lib")
    sys.exit(1)


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
        print("✓ No SNBT files found to validate. Skipping check.")
        return 0
    
    print(f"Found {len(snbt_files)} SNBT file(s) to validate...")
    print()
    
    failed_files = []
    
    for snbt_file in sorted(snbt_files):
        relative_path = snbt_file.relative_to(repo_root)
        success, error = validate_snbt_file(snbt_file)
        
        if success:
            print(f"✓ {relative_path}")
        else:
            print(f"✗ {relative_path}")
            print(f"  Error: {error}")
            failed_files.append((relative_path, error))
    
    print()
    
    if failed_files:
        print(f"❌ Validation failed for {len(failed_files)} file(s):")
        for path, error in failed_files:
            print(f"  - {path}: {error}")
        print()
        print("Please fix the formatting issues in the above files.")
        return 1
    else:
        print(f"✅ All {len(snbt_files)} SNBT file(s) are properly formatted!")
        return 0


if __name__ == "__main__":
    sys.exit(main())
