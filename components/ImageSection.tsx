const ImageSection = () => {
  return (
    <div
      data-testid="image-section"
      role="region"
      className="relative hidden overflow-hidden rounded-bl-md rounded-tl-md bg-gradient-to-r from-[#bfd0eb] to-[#647894] xl:block"
    >
      <div data-testid="cartoon-img" className="cartoonImg"></div>
      <div data-testid="cloud-one" className="cloudOne"></div>
      <div data-testid="cloud-two" className="cloudTwo"></div>
    </div>
  );
};

export default ImageSection;
