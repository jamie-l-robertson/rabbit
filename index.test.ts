import { adddNumbers } from "./index";

describe("addNumbers", () => {
  it("should correctly add two positive numbers", () => {
    expect(adddNumbers(2, 3)).toBe(5);
    expect(adddNumbers(10, 20)).toBe(30);
  });

  it("should correctly add when one number is zero", () => {
    expect(adddNumbers(0, 5)).toBe(5);
    expect(adddNumbers(5, 0)).toBe(5);
    expect(adddNumbers(0, 0)).toBe(0);
  });

  it("should correctly add negative numbers", () => {
    expect(adddNumbers(-2, -3)).toBe(-5);
    expect(adddNumbers(-5, 3)).toBe(-2);
    expect(adddNumbers(5, -3)).toBe(2);
  });
});
