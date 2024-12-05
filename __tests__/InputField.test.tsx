import InputField from "@/components/InputField";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

test("renders as a text input when isTextArea is false", () => {
  render(<InputField name="title" ariaLabel="Title" onBlur={jest.fn()} />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

test("renders as a textarea when isTextArea is true", () => {
  render(
    <InputField
      name="description"
      ariaLabel="Description"
      onBlur={jest.fn()}
      isTextArea={true}
    />
  );
  const textAreaElement = screen.getByRole("textbox");
  expect(textAreaElement).toBeInTheDocument();
});

test("displays error when input is blurred with empty value", () => {
  const handleBlur = jest.fn();
  render(<InputField name="title" ariaLabel="Title" onBlur={handleBlur} />);
  const inputElement = screen.getByRole("textbox");
  fireEvent.blur(inputElement, { target: { value: "" } });

  const errorMessage = screen.getByText("The name field must be filled in.");
  expect(errorMessage).toBeInTheDocument();
  expect(handleBlur).not.toHaveBeenCalled();
});

test("does not display error when input has a value", () => {
  const handleBlur = jest.fn();
  render(<InputField name="title" ariaLabel="Title" onBlur={handleBlur} />);
  const inputElement = screen.getByRole("textbox");
  fireEvent.blur(inputElement, { target: { value: "Some title" } });

  const errorMessage = screen.queryByText("The name field must be filled in.");
  expect(errorMessage).not.toBeInTheDocument();
  expect(handleBlur).toHaveBeenCalledWith("Some title");
});

test("calls onBlur with correct value", () => {
  const handleBlur = jest.fn();
  render(<InputField name="title" ariaLabel="Title" onBlur={handleBlur} />);
  const inputElement = screen.getByRole("textbox");
  fireEvent.blur(inputElement, { target: { value: "New title" } });

  expect(handleBlur).toHaveBeenCalledWith("New title");
});

test("renders disabled input when disabled prop is true", () => {
  render(
    <InputField
      name="title"
      ariaLabel="Title"
      onBlur={jest.fn()}
      disabled={true}
    />
  );
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeDisabled();
});
