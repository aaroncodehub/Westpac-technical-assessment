import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("App", () => {
  it("renders navigation bar", () => {
    render(<App />);
    const navigationElement = screen.getByRole("navigation", {
      name: /navigation bar/i,
    });
    expect(navigationElement).toBeInTheDocument();
  });
  it("renders title", () => {
    render(<App />);
    const titleElement = screen.getByRole("heading", {
      level: 5,
    });
    expect(titleElement).toBeInTheDocument();
  });
  it("renders password reset form", () => {
    render(<App />);
    const formElement = screen.getByRole("button", {
      name: /submit new password/i,
    });
    expect(formElement).toBeInTheDocument();
  });
});
