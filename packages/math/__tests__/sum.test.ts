import { sum } from "../src";
import { describe, it, expect } from "vitest";

describe("sum", () => {
  it("should add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
