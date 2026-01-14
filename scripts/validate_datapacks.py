#!/usr/bin/env python3
"""
Validate Minecraft 1.20.1 datapack files.

This script checks all datapacks in the datapacks directory to ensure:
1. Valid pack.mcmeta with correct pack_format (15 for 1.20.1)
2. Proper directory structure (data/ folder)
3. Valid JSON syntax in all datapack files
"""

import json
import sys
from pathlib import Path
from typing import List, Tuple, Dict, Any


def validate_json_file(file_path: Path) -> Tuple[bool, str]:
    """
    Validate a single JSON file.
    
    Args:
        file_path: Path to the JSON file to validate
        
    Returns:
        Tuple of (success: bool, error_message: str)
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            json.load(f)
        return True, ""
    except json.JSONDecodeError as e:
        return False, f"Invalid JSON: {e.msg} at line {e.lineno}, column {e.colno}"
    except Exception as e:
        return False, str(e)


def validate_pack_mcmeta(pack_path: Path) -> Tuple[bool, str]:
    """
    Validate pack.mcmeta file for Minecraft 1.20.1 compatibility.
    
    Args:
        pack_path: Path to the datapack directory
        
    Returns:
        Tuple of (success: bool, error_message: str)
    """
    mcmeta_path = pack_path / "pack.mcmeta"
    
    if not mcmeta_path.exists():
        return False, "Missing pack.mcmeta file"
    
    try:
        with open(mcmeta_path, 'r', encoding='utf-8') as f:
            mcmeta = json.load(f)
        
        if "pack" not in mcmeta:
            return False, "pack.mcmeta missing 'pack' section"
        
        pack_format = mcmeta["pack"].get("pack_format")
        if pack_format is None:
            return False, "pack.mcmeta missing 'pack_format' field"
        
        # Minecraft 1.20.1 uses pack_format 15
        if pack_format != 15:
            return False, f"pack_format is {pack_format}, expected 15 for Minecraft 1.20.1"
        
        if "description" not in mcmeta["pack"]:
            return False, "pack.mcmeta missing 'description' field"
        
        return True, ""
        
    except json.JSONDecodeError as e:
        return False, f"Invalid JSON in pack.mcmeta: {e.msg} at line {e.lineno}"
    except Exception as e:
        return False, f"Error reading pack.mcmeta: {str(e)}"


def validate_datapack_structure(pack_path: Path) -> Tuple[bool, str]:
    """
    Validate that datapack has proper structure.
    
    Args:
        pack_path: Path to the datapack directory
        
    Returns:
        Tuple of (success: bool, error_message: str)
    """
    data_dir = pack_path / "data"
    
    if not data_dir.exists():
        return False, "Missing 'data' directory"
    
    if not data_dir.is_dir():
        return False, "'data' exists but is not a directory"
    
    # Check if data directory has any namespace folders
    namespaces = [d for d in data_dir.iterdir() if d.is_dir()]
    if not namespaces:
        return False, "'data' directory is empty (no namespace folders found)"
    
    return True, ""


def validate_datapack(pack_path: Path) -> Dict[str, Any]:
    """
    Validate a complete datapack.
    
    Args:
        pack_path: Path to the datapack directory
        
    Returns:
        Dictionary with validation results
    """
    results = {
        "path": pack_path,
        "success": True,
        "errors": [],
        "warnings": [],
        "file_count": 0
    }
    
    # Validate pack.mcmeta
    success, error = validate_pack_mcmeta(pack_path)
    if not success:
        results["success"] = False
        results["errors"].append(f"pack.mcmeta: {error}")
        return results  # Can't continue without valid pack.mcmeta
    
    # Validate structure
    success, error = validate_datapack_structure(pack_path)
    if not success:
        results["success"] = False
        results["errors"].append(f"Structure: {error}")
    
    # Validate all JSON files in the datapack
    json_files = list(pack_path.rglob("*.json"))
    results["file_count"] = len(json_files)
    
    for json_file in json_files:
        success, error = validate_json_file(json_file)
        if not success:
            results["success"] = False
            relative_path = json_file.relative_to(pack_path)
            results["errors"].append(f"{relative_path}: {error}")
    
    return results


def find_datapacks(base_path: Path) -> List[Path]:
    """
    Find all datapacks in the datapacks directory.
    
    Args:
        base_path: Base directory to search from
        
    Returns:
        List of paths to datapack directories
    """
    datapacks_path = base_path / "datapacks"
    
    if not datapacks_path.exists():
        return []
    
    # Find all directories that contain pack.mcmeta
    datapacks = []
    for item in datapacks_path.iterdir():
        if item.is_dir() and (item / "pack.mcmeta").exists():
            datapacks.append(item)
    
    return datapacks


def main():
    """Main validation function."""
    repo_root = Path(__file__).parent.parent
    datapacks = find_datapacks(repo_root)
    
    if not datapacks:
        print("✓ No datapacks found to validate. Skipping check.")
        return 0
    
    print(f"Found {len(datapacks)} datapack(s) to validate...")
    print()
    
    all_success = True
    
    for datapack in sorted(datapacks):
        relative_path = datapack.relative_to(repo_root)
        print(f"Validating {relative_path}...")
        
        results = validate_datapack(datapack)
        
        if results["success"]:
            print(f"  ✓ Valid datapack ({results['file_count']} JSON files checked)")
        else:
            all_success = False
            print(f"  ✗ Validation failed:")
            for error in results["errors"]:
                print(f"    - {error}")
        
        if results["warnings"]:
            for warning in results["warnings"]:
                print(f"  ⚠ Warning: {warning}")
        
        print()
    
    if not all_success:
        print("❌ Datapack validation failed!")
        print("Please fix the errors above.")
        return 1
    else:
        print(f"✅ All {len(datapacks)} datapack(s) are valid for Minecraft 1.20.1!")
        return 0


if __name__ == "__main__":
    sys.exit(main())
