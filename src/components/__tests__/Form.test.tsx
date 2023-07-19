import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../form/Form";
import ResetPasswordText from "../../constants/string";

describe("Form", () => {
  it("shows error message when old password is not correct", async () => {
    render(<Form />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("old password"), "12345");
    await user.click(
      screen.getByRole("button", {
        name: /submit new password/i,
      }),
    );

    await waitFor(() => {
      expect(
        screen.getByText(/the old password is not correct/i),
      ).toBeInTheDocument();
    });
  });

  it("does not display error message when old password is correct", async () => {
    render(<Form />);
    const user = userEvent.setup();

    await user.type(
      screen.getByLabelText("old password"),
      ResetPasswordText.oldPassword,
    );
    await user.click(
      screen.getByRole("button", {
        name: /submit new password/i,
      }),
    );

    await waitFor(() => {
      expect(
        screen.queryByText(/the old password is not correct/i),
      ).not.toBeInTheDocument();
    });
  });

  it("shows error message when new password did not match passwords rules", async () => {
    render(<Form />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("new password"), "12345");
    await user.click(
      screen.getByRole("button", {
        name: /submit new password/i,
      }),
    );

    await waitFor(() => {
      expect(
        screen.getByText(
          /must contain at least 8 characters, including one number and two special characters or be greater than 15 characters with no restriction/i,
        ),
      ).toBeInTheDocument();
    });
  });

  it("does not display error message when new password matches password rule that must contain at least 8 characters, including one number and two special characters", async () => {
    render(<Form />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("new password"), "test12^*");
    await user.click(
      screen.getByRole("button", {
        name: /submit new password/i,
      }),
    );

    await waitFor(() => {
      expect(
        screen.queryByText(
          /must contain at least 8 characters, including one number and two special characters or be greater than 15 characters with no restriction/i,
        ),
      ).not.toBeInTheDocument();
    });
  });
  it("does not display error message when new password matches password rule that there is no restriction when the characters are more 15", async () => {
    render(<Form />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("new password"), "1234567890111213");
    await user.click(
      screen.getByRole("button", {
        name: /submit new password/i,
      }),
    );

    await waitFor(() => {
      expect(
        screen.queryByText(
          /must contain at least 8 characters, including one number and two special characters or be greater than 15 characters with no restriction/i,
        ),
      ).not.toBeInTheDocument();
    });
  });

  it("shows error message when new password did not match", async () => {
    render(<Form />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("new password"), "test12^*");
    await user.type(
      screen.getByLabelText("re-type new password"),
      "test12^*no",
    );
    await user.click(
      screen.getByRole("button", {
        name: /submit new password/i,
      }),
    );

    await waitFor(() => {
      expect(screen.getByText(/New passwords must match/i)).toBeInTheDocument();
    });
  });
  it("does not display error message when new password matches", async () => {
    render(<Form />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText("new password"), "test12^*");
    await user.type(screen.getByLabelText("re-type new password"), "test12^*");
    await user.click(
      screen.getByRole("button", {
        name: /submit new password/i,
      }),
    );

    await waitFor(() => {
      expect(
        screen.queryByText(/New passwords must match/i),
      ).not.toBeInTheDocument();
    });
  });
});
