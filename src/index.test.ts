import { solve } from "./index";

describe("Return correct results", () => {

  test("Basic example", () => {
    const result = solve("example1.txt");
    expect(result.text).toBe("ACB");
    expect(result.path).toBe("@---A---+|C|+---+|+-B-x");
  });

  test("Go straight through intersections", () => {
    const result = solve("example2.txt");
    expect(result.text).toBe("ABCD");
    expect(result.path).toBe("@|A+---B--+|+--C-+|-||+---D--+|x");
  });

  test("Letters may be found on turns", () => {
    const result = solve("example3.txt");
    expect(result.text).toBe("ACB");
    expect(result.path).toBe("@---A---+|||C---+|+-B-x");
  });

  test("Do not collect a letter from the same location twice", () => {
    const result = solve("example4.txt");
    expect(result.text).toBe("GOONIES");
    expect(result.path).toBe("@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x");
  });

  test("Keep direction, even in a compact space", () => {
    const result = solve("example5.txt");
    expect(result.text).toBe("BLAH");
    expect(result.path).toBe("@B+++B|+-L-+A+++A-+Hx");
  });

  test("Ignore stuff after end of path", () => {
    const result = solve("example6.txt");
    expect(result.text).toBe("AB");
    expect(result.path).toBe("@-A--+|+-B--x");
  });
});

describe("Throw error on invalid maps", () => {

  test("Missing start character", () => {
    expect(() => solve("example7.txt")).toThrow();
  });

  test("Missing end character", () => {
    expect(() => solve("example8.txt")).toThrow();
  });

  test("Multiple starts", () => {
    expect(() => solve("example9.txt")).toThrow();
  });

  test("Multiple starts", () => {
    expect(() => solve("example10.txt")).toThrow();
  });

  test("Multiple starts", () => {
    expect(() => solve("example11.txt")).toThrow();
  });

  test("Fork in path", () => {
    expect(() => solve("example12.txt")).toThrow();
  });
  test("Broken path", () => {
    expect(() => solve("example13.txt")).toThrow();
  });
  test("Multiple starting paths", () => {
    expect(() => solve("example14.txt")).toThrow();
  });
  test("Fake turn", () => {
    expect(() => solve("example15.txt")).toThrow();
  });
});