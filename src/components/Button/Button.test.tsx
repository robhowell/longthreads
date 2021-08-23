import React from "react";

import { render, screen } from "~/tests/utils";
import Button from "./Button";

describe("Button", () => {
  it("should render button", () => {
    render(<Button onClick={() => {}}>Hello Button</Button>);
    expect(screen.getByText("Hello Button")).toBeInTheDocument();
  });
});
