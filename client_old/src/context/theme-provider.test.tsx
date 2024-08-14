import { Mock, beforeEach, describe, expect, test, vi } from "vitest";
import { ThemeProvider } from "./theme-provider";
import { render } from "@testing-library/react";

const localStorageMock = (function () {
  let store: Record<string, string> = {};
  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

type MockMediaQueryList = {
  matches: boolean;
  media: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onchange: null | ((this: MediaQueryList, ev: MediaQueryListEvent) => any);
  addListener: (listener: MockMediaQueryList) => void;
  removeListener: (listener: MockMediaQueryList) => void;
  addEventListener: (type: string, listener: MockMediaQueryList) => void;
  removeEventListener: (type: string, listener: MockMediaQueryList) => void;
  dispatchEvent: (event: Event) => boolean;
};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation(
    (query: string): MockMediaQueryList => ({
      matches: query.includes("dark"),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })
  ),
});

describe("ThemeProvider", () => {
  beforeEach(() => {
    window.localStorage.clear();
    (window.matchMedia as Mock).mockClear();
  });

  test("Should render when using theme", () => {
    <ThemeProvider>
      <div>Test</div>
    </ThemeProvider>;
  });

  test("Should initialize with the default theme if no value is stored in localStorage", () => {
    render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass("dark");
  });

  test("Shuold read the theme from localStorage and apply it", () => {
    window.localStorage.setItem("vite-ui-theme", "light");
    render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass("light");
  });
});
