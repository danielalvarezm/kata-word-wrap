export const wordWrap = (lines: string, limit: number): string => {
    if (lines.length <= limit) return lines;

    return lines.slice(0, limit) + '\n' + wordWrap(lines.slice(limit), limit);
};