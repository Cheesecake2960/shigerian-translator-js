import { translateAny2Shigerian, translateShigerian2Any } from "../src/index.js";
import { expect, test } from "@jest/globals";

test('translate "1" to "イシバ シゲシゲ"', () => {
  expect(translateAny2Shigerian("1")).toBe("イシバ シゲシゲ");
})

test('translate "イシバ シゲシゲ" to "1"', () => {
  expect(translateShigerian2Any("イシバ シゲシゲ")).toBe("1");
})