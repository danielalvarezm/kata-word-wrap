const wrapLine = (line: string, limit: number): string => {
  line = line.trim();
  if (line.length <= limit) return line;

  const spaceIndex = line.slice(0, limit).lastIndexOf(' ');
  if (spaceIndex === -1) {
    return line.slice(0, limit) + '\n' + wrapLine(line.slice(limit), limit);  
  }

  return line.slice(0, spaceIndex) + '\n' + wrapLine(line.slice(spaceIndex + 1), limit);
};

const checkSyntax = (lines: string, limit: number): void => { 
  if (limit < 1) {
    throw new Error('Limit must be greater than 0');
  }

  if (lines === '') {
    throw new Error('Input cannot be empty');
  }
};

export const wordWrap = (lines: string, limit: number): string => {
  checkSyntax(lines, limit);
  return lines.split('\n').map(line => wrapLine(line, limit)).join('\n');
};
