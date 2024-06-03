import styles from "./CTA.module.css";
const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.wrapper}>
        <div className={styles.ctaContent}>
          <h6>Designing Better Experience</h6>
          <h2>Problems trying to resolve the conflict between </h2>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:{" "}
          </p>
          <h5>$16.48</h5>
          <button>ADD YOUR CALL TO ACTION</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
