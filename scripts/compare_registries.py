#!/usr/bin/env python3
"""
Compare two registry dump files and output the differences.

This script is used by the dump-registry GitHub Action to compare
registry entries between the base branch and the PR branch.
"""

import sys
from pathlib import Path


def parse_registry_dump(file_path: str) -> dict[str, set[str]]:
    """Parse a registry dump file into a dictionary of registry -> entries."""
    registries: dict[str, set[str]] = {}
    current_registry = None
    
    path = Path(file_path)
    if not path.exists():
        return registries
    
    with open(path, 'r') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            
            if line.startswith('=== ') and line.endswith(' ==='):
                current_registry = line[4:-4]
                registries[current_registry] = set()
            elif current_registry is not None:
                registries[current_registry].add(line)
    
    return registries


def compare_registries(
    base_registries: dict[str, set[str]], 
    pr_registries: dict[str, set[str]]
) -> tuple[dict[str, set[str]], dict[str, set[str]]]:
    """
    Compare two registry dumps.
    
    Returns:
        Tuple of (added, removed) dictionaries mapping registry -> entries
    """
    added: dict[str, set[str]] = {}
    removed: dict[str, set[str]] = {}
    
    # Get all registry keys
    all_keys = set(base_registries.keys()) | set(pr_registries.keys())
    
    for key in all_keys:
        base_entries = base_registries.get(key, set())
        pr_entries = pr_registries.get(key, set())
        
        new_entries = pr_entries - base_entries
        removed_entries = base_entries - pr_entries
        
        if new_entries:
            added[key] = new_entries
        if removed_entries:
            removed[key] = removed_entries
    
    return added, removed


def format_markdown_comment(
    added: dict[str, set[str]], 
    removed: dict[str, set[str]]
) -> str:
    """Format the differences as a GitHub comment."""
    lines = []
    lines.append("## 📋 Registry Changes")
    lines.append("")
    
    total_added = sum(len(v) for v in added.values())
    total_removed = sum(len(v) for v in removed.values())
    
    if total_added == 0 and total_removed == 0:
        lines.append("✅ No registry changes detected.")
        return "\n".join(lines)
    
    lines.append(f"**Summary:** {total_added} entries added, {total_removed} entries removed")
    lines.append("")
    
    if added:
        lines.append("### ➕ Added Entries")
        lines.append("")
        for registry in sorted(added.keys()):
            entries = sorted(added[registry])
            lines.append(f"<details>")
            lines.append(f"<summary><strong>{registry}</strong> ({len(entries)} entries)</summary>")
            lines.append("")
            lines.append("```")
            for entry in entries[:100]:  # Limit to 100 entries per registry
                lines.append(entry)
            if len(entries) > 100:
                lines.append(f"... and {len(entries) - 100} more")
            lines.append("```")
            lines.append("")
            lines.append("</details>")
            lines.append("")
    
    if removed:
        lines.append("### ➖ Removed Entries")
        lines.append("")
        for registry in sorted(removed.keys()):
            entries = sorted(removed[registry])
            lines.append(f"<details>")
            lines.append(f"<summary><strong>{registry}</strong> ({len(entries)} entries)</summary>")
            lines.append("")
            lines.append("```")
            for entry in entries[:100]:  # Limit to 100 entries per registry
                lines.append(entry)
            if len(entries) > 100:
                lines.append(f"... and {len(entries) - 100} more")
            lines.append("```")
            lines.append("")
            lines.append("</details>")
            lines.append("")
    
    return "\n".join(lines)


def main():
    if len(sys.argv) < 3:
        print("Usage: compare_registries.py <base_dump> <pr_dump> [output_file]")
        sys.exit(1)
    
    base_file = sys.argv[1]
    pr_file = sys.argv[2]
    output_file = sys.argv[3] if len(sys.argv) > 3 else None
    
    print(f"Comparing registries:")
    print(f"  Base: {base_file}")
    print(f"  PR:   {pr_file}")
    
    base_registries = parse_registry_dump(base_file)
    pr_registries = parse_registry_dump(pr_file)
    
    print(f"  Base registries: {len(base_registries)}")
    print(f"  PR registries:   {len(pr_registries)}")
    
    added, removed = compare_registries(base_registries, pr_registries)
    
    comment = format_markdown_comment(added, removed)
    
    if output_file:
        with open(output_file, 'w') as f:
            f.write(comment)
        print(f"Output written to: {output_file}")
    else:
        print(comment)


if __name__ == "__main__":
    main()
