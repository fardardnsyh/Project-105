import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Container from "./container";

describe("Container", () => {
  test("Should render container component", () => {
    render(
      <Container>
        <h1>TEST</h1>
      </Container>
    );
  });

  test("Should render the child component", () => {
    render(
      <Container>
        <div data-testid="child">Test Child</div>
      </Container>
    );

    const child = screen.getByTestId("child");
    expect(child).toBeInTheDocument();
    expect(child).toHaveTextContent("Test Child");
  });
});
