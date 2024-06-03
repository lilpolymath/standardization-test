import styles from "./Services.module.css";
import { services } from "../constants";

const Services = () => {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesHeader}>
          <h4>Featured Products</h4>
          <h3> THE BEST SERVICES</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div className="service" key={service.id}>
              <img src={service.icon} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
