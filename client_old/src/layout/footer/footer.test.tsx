import { render } from "@testing-library/react";
import { describe, test } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  test("Should render footer component", () => {
    render(<Footer />);
  });
});
