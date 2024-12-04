import styles from '../styles/Layout.module.css';

const ImageSection = () => {
  return (
    <div className='hidden lg:block'>
      <div className={styles.imgStyle}>
        <div className={styles.cartoonImg}></div>
        <div className={styles.cloud_one}></div>
        <div className={styles.cloud_two}></div>
      </div>
    </div>
  );
};

export default ImageSection;
