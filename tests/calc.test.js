import test from "node:test";
import assert from "node:assert/strict";
import { calculateTip, splitBill } from "../site/calc.js";

test("10% tip on $100 is $10", () => {
  assert.equal(calculateTip(100, 10), 10);
});

test("15% tip on $80 is $12", () => {
  assert.equal(calculateTip(80, 15), 12);
});

test("$110 split between 2 people is $55 each", () => {
  assert.equal(splitBill(110, 2), 55);
});

test("$100 split between 3 people rounds to $33.33", () => {
  assert.equal(splitBill(100, 3), 33.33);
});

test("splitting between 0 people throws an error", () => {
  assert.throws(() => splitBill(100, 0));
});
