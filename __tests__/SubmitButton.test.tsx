import SubmitButton from "@/components/SubmitButton";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useFormStatus } from "react-dom";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(),
}));

describe("SubmitButton", () => {
  it("should render button with text 'Add' when not loading", () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });

    render(<SubmitButton loading={false} />);

    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("should render button with text 'Adding...' when loading", () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });

    render(<SubmitButton loading={true} />);

    expect(screen.getByText("Adding...")).toBeInTheDocument();
  });

  it("should be disabled when loading is true", () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });

    render(<SubmitButton loading={true} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should be disabled when useFormStatus is pending", () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: true });

    render(<SubmitButton loading={false} />);

    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should be enabled when not loading and useFormStatus is not pending", () => {
    (useFormStatus as jest.Mock).mockReturnValue({ pending: false });

    render(<SubmitButton loading={false} />);

    expect(screen.getByRole("button")).toBeEnabled();
  });
});
