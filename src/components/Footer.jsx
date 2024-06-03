import { Instagram, Facebook, Twitter } from "./Icons";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
        <div className={styles.wrapper}>
          <h3>Bandage</h3>
          <div className={styles.social}>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Twitter />
            </a>
          </div>{" "}
        </div>
      </div>
      <div className={styles.footerMiddle}>
        <div className={styles.wrapper}>
          <div>
            <h6>Company Info</h6>
            <div className={styles.links}>
              <a>About Us</a>
              <a>Carrier</a>
              <a>We are hiring</a>
              <a>Blog</a>
            </div>
          </div>
          <div>
            <h6>Legal</h6>
            <div className={styles.links}>
              <a>About Us</a>
              <a>Carrier</a>
              <a>We are hiring</a>
              <a>Blog</a>
            </div>
          </div>
          <div>
            <h6>Features</h6>
            <div className={styles.links}>
              <a>Business Marketing</a>
              <a>User Analytic</a>
              <a>Live Chat</a>
              <a>Unlimited Support</a>
            </div>
          </div>
          <div>
            <h6>Resources</h6>
            <div className={styles.links}>
              <a>IOS & aNDROID </a>
              <a>Watch a Demo</a>
              <a>Customers</a>
              <a>API</a>
            </div>
          </div>
          <div>
            <h6>Get In Touch</h6>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Your Email" />
              <input type="submit" value="Subscribe" />
            </form>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.wrapper}>
          <p>Made with love by Finland. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
