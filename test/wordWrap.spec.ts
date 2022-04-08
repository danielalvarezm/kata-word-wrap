import { wordWrap } from "../src/wordWrap";

describe("The word wrap kata should", () => {
  it("not break lines smaller than the limit", () => {
    expect(wordWrap('Hello world', 15)).toBe('Hello world');
    expect(wordWrap('This is an example', 20)).toBe('This is an example');
  });

  it("break lines longer than the limit", () => {
    expect(wordWrap('Hello', 3)).toBe('Hel\nlo');
    expect(wordWrap('Hellooooo', 3)).toBe('Hel\nloo\nooo');
  });

  it("prefer breaking lines by a space", () => {
    expect(wordWrap('Hello word', 7)).toBe('Hello\nword');
    expect(wordWrap('This is an example', 6)).toBe('This\nis an\nexample');
  });
});
