export const wordWrap = (lines: string, limit: number): string => {
  if (lines.length <= limit) return lines;

  const spaceIndex = lines.slice(0, limit).lastIndexOf(' ');
  if (spaceIndex === -1) {
    return lines.slice(0, limit) + '\n' + wordWrap(lines.slice(limit), limit);    
  }

  return lines.slice(0, spaceIndex) + '\n' + wordWrap(lines.slice(spaceIndex + 1), limit);
};