import React from "react";

import { render, screen } from "~/tests/utils";
import App from "./App";

describe("App", () => {
  it("should render App", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Today" })).toBeInTheDocument();
  });
});
