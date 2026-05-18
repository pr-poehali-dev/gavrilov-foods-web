#!/usr/bin/env python3
"""Remove line 4259 (the bullet line with irregular whitespace) from Index.tsx"""

with open("src/pages/Index.tsx", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Line 4259 is index 4258 (0-based)
target_index = 4258
print(f"Line to remove (repr): {repr(lines[target_index])}")

# Remove the line
new_lines = lines[:target_index] + lines[target_index + 1:]

with open("src/pages/Index.tsx", "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print(f"Done. Removed line 4259. File now has {len(new_lines)} lines (was {len(lines)}).")
