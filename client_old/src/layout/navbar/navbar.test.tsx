import { renderWithRouter } from "@/test/test-utils";
import { describe, test } from "vitest";
import Navbar from "./navbar";

describe("Navbar", () => {
  test("Should render navbar component", () => {
    renderWithRouter(<Navbar />);
  });
});
