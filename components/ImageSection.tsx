import styles from '../styles/Layout.module.css';

const ImageSection = () => {

  return (
    <div className="hidden xl:block relative overflow-hidden bg-gradient-to-r from-[#bfd0eb] to-[#647894] rounded-tl-md rounded-bl-md">
      <div className={styles.cartoonImg}></div>
      <div className={styles.cloud_one}></div>
      <div className={styles.cloud_two}></div>
    </div>
  );
};

export default ImageSection;
