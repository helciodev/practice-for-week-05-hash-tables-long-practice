const { expect } = require("chai");

const [kth] = require("../phases/03-practice-problems");

describe("Phase 03 bonus phase", () => {
  it("kth most frequent, given a string it should return the kth most frequent element in the string", () => {
    expect(kth("aaabbc", 1)).to.equal("a");
    expect(kth("aaabbc", 2)).to.equal("b");
    expect(kth("aaabbc", 3)).to.equal("c");
  });
});
