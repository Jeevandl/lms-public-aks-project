import { capitalize } from "./text";
import { describe, expect, it } from "@jest/globals";

describe("capitalize", () => {
  it("capitalizes the first letter", () => {
    expect(capitalize("foo")).toEqual("Foo");
  });

  it("does not change the rest of the string", () => {
    expect(capitalize("fooBar")).toEqual("FooBar");
  });

  it("works with empty strings", () => {
    expect(capitalize("")).toEqual("");
  });

  it("works with single-character strings", () => {
    expect(capitalize("f")).toEqual("F");
  });
});
