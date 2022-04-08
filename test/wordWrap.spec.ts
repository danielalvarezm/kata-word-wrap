import { wordWrap } from '../src/wordWrap';

describe('The word wrap kata should', () => {
  it('not break lines smaller than the limit', () => {
    expect(wordWrap('Hello world', 15)).toBe('Hello world');
    expect(wordWrap('This is an example', 20)).toBe('This is an example');
  });

  it('break lines longer than the limit', () => {
    expect(wordWrap('Hello', 3)).toBe('Hel\nlo');
    expect(wordWrap('Hellooooo', 3)).toBe('Hel\nloo\nooo');
  });

  it('prefer breaking lines by a space', () => {
    expect(wordWrap('Hello word', 7)).toBe('Hello\nword');
    expect(wordWrap('This is an example', 7)).toBe('This\nis an\nexample');
  });

  it('contemplate cases with several lines in the same input', () => {
    expect(wordWrap('Hello\nworld', 6)).toBe('Hello\nworld');
    expect(wordWrap('Hello\nwoooorld', 6)).toBe('Hello\nwoooor\nld');
    expect(wordWrap('Hello\nsunny world', 7)).toBe('Hello\nsunny\nworld');
    expect(wordWrap('This is\nan example\ntest', 4)).toBe('This\nis\nan\nexam\nple\ntest');
  });

  it('not accept limits smaller than 1', () => {
    expect(() => wordWrap('Hello world', 0)).toThrowError('Limit must be greater than 0');
    expect(() => wordWrap('Hello world', -1)).toThrowError('Limit must be greater than 0');
  });
});
