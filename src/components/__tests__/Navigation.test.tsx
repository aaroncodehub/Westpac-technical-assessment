import { render, screen } from "@testing-library/react";
import Navigation from "../navigation/Navigation";

describe("Navigation", () => {
  it("renders title", () => {
    render(<Navigation />);
    const imageElement = screen.getByRole("img", {
      name: /westpace logo/i,
    });
    expect(imageElement).toBeInTheDocument();
  });
});
