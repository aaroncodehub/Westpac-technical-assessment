import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "../title/Title";
import ResetPasswordText from "../../constants/string";

describe("Title", () => {
  it("renders title", () => {
    render(<Title title={ResetPasswordText.title} />);
    const titleElement = screen.getByText(/Forgot customer password/i);
    expect(titleElement).toBeInTheDocument();
  });
});
