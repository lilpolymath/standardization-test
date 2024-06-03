import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroGrid}>
          <div className={styles.productCard1}>
            {/* <img src={images.product1} alt="" /> */}
            <div className={styles.productHeader}>
              <h6>5 items</h6>
              <h6>FURNITURE</h6>
              <h6>Read More</h6>
            </div>
          </div>
          <div className={styles.productCard2}>
            {/* <img src={images.product2} alt="" /> */}
            <div className={styles.productHeader}>
              <h6>5 items</h6>
              <h6>FURNITURE</h6>
              <h6>Read More</h6>
            </div>
          </div>
          <div className={styles.productCard3}>
            {/* <img src={images.product3} alt="" /> */}
            <div className={styles.productHeader}>
              <h6>5 items</h6>
              <h6>FURNITURE</h6>
              <h6>Read More</h6>
            </div>
          </div>
          <div className={styles.productCard4}>
            {/* <img src={images.product4} alt="" /> */}
            <div className={styles.productHeader}>
              <h6>5 items</h6>
              <h6>FURNITURE</h6>
              <h6>Read More</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
