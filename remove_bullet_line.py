#!/usr/bin/env python3
"""Remove the bullet/irregular-whitespace line from Index.tsx.
Searches for any line containing the bullet U+2022 character and removes it.
Also collapses consecutive blank lines to single blank lines.
"""
import sys

filepath = "src/pages/Index.tsx"

with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")

# Step 1: Remove lines containing the bullet character
removed = 0
filtered = []
for i, line in enumerate(lines):
    if "\u2022" in line:
        print(f"Removing line {i+1} (1-based): {repr(line)}")
        removed += 1
    else:
        filtered.append(line)

if removed == 0:
    print("No bullet lines found. No changes made.")
    sys.exit(0)

# Step 2: Collapse consecutive blank lines (more than 1) into single blank
result = []
blank_count = 0
for line in filtered:
    if line.strip() == "":
        blank_count += 1
        if blank_count <= 1:
            result.append(line)
    else:
        blank_count = 0
        result.append(line)

with open(filepath, "w", encoding="utf-8") as f:
    f.writelines(result)

print(f"Done. Removed {removed} bullet line(s). File: {len(filtered)} lines -> {len(result)} lines after blank-collapse.")
