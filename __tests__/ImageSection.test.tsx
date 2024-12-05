import ImageSection from "@/components/ImageSection";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("ImageSection", () => {
  it("should render the component correctly", () => {
    render(<ImageSection />);

    const container = screen.getByTestId("image-section");
    expect(container).toBeInTheDocument();
  });

  it("should have the correct background gradient", () => {
    render(<ImageSection />);

    const container = screen.getByTestId("image-section");
    expect(container).toHaveStyle(
      "background: linear-gradient(to right, #bfd0eb, #647894)"
    );
  });

  it("should contain 'cartoonImg', 'cloudOne', and 'cloudTwo' divs", () => {
    render(<ImageSection />);

    const cartoonImg = screen.getByTestId("cartoon-img");
    const cloudOne = screen.getByTestId("cloud-one");
    const cloudTwo = screen.getByTestId("cloud-two");

    expect(cartoonImg).toBeInTheDocument();
    expect(cloudOne).toBeInTheDocument();
    expect(cloudTwo).toBeInTheDocument();
  });

  it("should apply the correct CSS classes to the container", () => {
    render(<ImageSection />);

    const container = screen.getByTestId("image-section");
    expect(container).toHaveClass(
      "relative",
      "hidden",
      "overflow-hidden",
      "rounded-bl-md",
      "rounded-tl-md",
      "bg-gradient-to-r",
      "from-[#bfd0eb]",
      "to-[#647894]",
      "xl:block"
    );
  });
});
