#!/usr/bin/env node
// Fix: remove the line containing bullet character U+2022 from Index.tsx
import { readFileSync, writeFileSync } from 'fs';

const filepath = 'src/pages/Index.tsx';
const content = readFileSync(filepath, 'utf-8');
const lines = content.split('\n');

console.log(`Total lines: ${lines.length}`);

let removed = 0;
const newLines = lines.filter((line, i) => {
  if (line.includes('\u2022')) {
    console.log(`Removing line ${i + 1}: ${JSON.stringify(line)}`);
    removed++;
    return false;
  }
  return true;
});

if (removed === 0) {
  console.log('No bullet lines found. No changes made.');
  process.exit(0);
}

// Also collapse double blank lines that may have been left
const finalLines = [];
let prevBlank = false;
for (const line of newLines) {
  const isBlank = line.trim() === '';
  if (isBlank && prevBlank) {
    // skip consecutive blank line
    continue;
  }
  finalLines.push(line);
  prevBlank = isBlank;
}

writeFileSync(filepath, finalLines.join('\n'), 'utf-8');
console.log(`Done. Removed ${removed} bullet line(s). File now has ${finalLines.length} lines.`);
