import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import App from "./App.vue";

describe("App", () => {
  it("should render correctly", () => {
    expect(mount(App).exists()).toBe(true);
  });
});
