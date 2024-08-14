import { describe, test } from "vitest";
import App from "./app";
import { render } from "@testing-library/react";

describe("App", () => {
  test("Should render the component", () => {
    render(<App />);
  });
});
