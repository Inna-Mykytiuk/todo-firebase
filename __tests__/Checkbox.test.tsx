import Checkbox from "@/components/Checkbox";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Checkbox", () => {
  it("should render checkbox with correct aria-label", () => {
    render(
      <Checkbox checked={false} ariaLabel="Accept terms" onChange={jest.fn()} />
    );

    const checkbox = screen.getByLabelText("Accept terms");
    expect(checkbox).toBeInTheDocument();
  });

  it("should be checked when 'checked' prop is true", () => {
    render(
      <Checkbox checked={true} ariaLabel="Accept terms" onChange={jest.fn()} />
    );

    const checkbox = screen.getByLabelText("Accept terms");
    expect(checkbox).toBeChecked();
  });

  it("should be unchecked when 'checked' prop is false", () => {
    render(
      <Checkbox checked={false} ariaLabel="Accept terms" onChange={jest.fn()} />
    );

    const checkbox = screen.getByLabelText("Accept terms");
    expect(checkbox).not.toBeChecked();
  });

  it("should call onChange with true when checked", () => {
    const onChangeMock = jest.fn();
    render(
      <Checkbox
        checked={false}
        ariaLabel="Accept terms"
        onChange={onChangeMock}
      />
    );

    const checkbox = screen.getByLabelText("Accept terms");
    fireEvent.click(checkbox);

    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  it("should call onChange with false when unchecked", () => {
    const onChangeMock = jest.fn();
    render(
      <Checkbox
        checked={true}
        ariaLabel="Accept terms"
        onChange={onChangeMock}
      />
    );

    const checkbox = screen.getByLabelText("Accept terms");
    fireEvent.click(checkbox);

    expect(onChangeMock).toHaveBeenCalledWith(false);
  });
});
