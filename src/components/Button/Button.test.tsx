import React from "react";

import { render, screen } from "~/tests/utils";
import Button from "./Button";

describe("Button", () => {
  it("should render button", () => {
    render(<Button onClick={() => {}}>Hello Button</Button>);
    expect(screen.getByText("Hello Button")).toBeInTheDocument();
  });

  it("passes through type", () => {
    render(
      <Button onClick={() => {}} type="submit">
        Submit Button
      </Button>
    );
    const submitButton = screen.getByText("Submit Button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton.getAttribute("type")).toBe("submit");
  });

  it("allows custom element types to be rendered (e.g. <a>)", () => {
    render(
      <Button onClick={() => {}} as="a">
        Link Button
      </Button>
    );
    const linkButton = screen.getByText("Link Button");
    expect(linkButton).toBeInTheDocument();
    expect(linkButton.nodeName.toLowerCase()).toBe("a");
  });
});
