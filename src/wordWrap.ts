const wrapLine = (line: string, limit: number): string => {
  line = line.trim();
  if (line.length <= limit) return line;

  const spaceIndex = line.slice(0, limit).lastIndexOf(' ');
  if (spaceIndex === -1) {
    return line.slice(0, limit) + '\n' + wrapLine(line.slice(limit), limit);  
  }

  return line.slice(0, spaceIndex) + '\n' + wrapLine(line.slice(spaceIndex + 1), limit);
};

export const wordWrap = (lines: string, limit: number): string => {
  return lines.split('\n').map(line => wrapLine(line, limit)).join('\n');
}