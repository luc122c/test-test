import { describe, it, expect } from "vitest";
import { mountSuspended, mockNuxtImport } from "@nuxt/test-utils/runtime";

mockNuxtImport("useNow", () => {
  return () => ref(new Date("2021-01-01 12:34:56"));
});

import Clock from "./Clock.vue";
describe("Clock", async () => {
  const component = await mountSuspended(Clock);

  it("renders the correct time", () => {
    const timeEl = component.element.querySelector(".time");
    expect(timeEl).not.toBeNull();
    expect(timeEl!.textContent).toBe("12:34 pm");
  });

  it("renders the correct date", () => {
    const dateEl = component.element.querySelector(".date");

    expect(dateEl).not.toBeNull();
    expect(dateEl!.textContent).toBe("1 January, 2021");
  });
});
