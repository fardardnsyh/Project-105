import { describe, test } from "vitest";
import Home from "./home";
import { renderWithRouter } from "@/test/test-utils";

describe("Home", () => {
  test("Should render home component", () => {
    renderWithRouter(<Home />);
  });
});
