import { images } from "../constants";
import styles from "./Testimonial.module.css";
import { range } from "../utils";
import { Star } from "./Icons";
const Testimonial = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.wrapper}>
        <div className={styles.testimonial}>
          <h3>What they say about us</h3>
          <div className={styles.testimonialInfo}>
            <img src={images.user} alt="" />
            <div className={styles.testimonialStars}>
              {range(5).map((num) => {
                return <Star className={styles.filled} key={num} />;
              })}
            </div>

            <h6>
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <div>
              <p className={styles.name}>Regina Miles</p>
              <p className={styles.role}>Designer</p>
            </div>
          </div>
        </div>
        <div className="gallery">
          <img src={images.product1} alt="" />
          <img src={images.product2} alt="" />
          <img src={images.product3} alt="" />
          <img src={images.product4} alt="" />
          <img src={images.product5} alt="" />
          <img src={images.product6} alt="" />
          <img src={images.product7} alt="" />
          <img src={images.product8} alt="" />
          <img src={images.product9} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
