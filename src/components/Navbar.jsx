import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  Phone,
  Mail,
  Instagram,
  YouTube,
  Facebook,
  Twitter,
  Auth,
  Search,
  Cart,
  Love,
  Hamburger,
} from "./Icons";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navbarConatiner}>
      <div className={`${styles.navbarSection} ${styles.darkSection}`}>
        <div className={styles.navbarContent}>
          <div className={styles.contactInfo}>
            <button className={styles.contactButton}>
              <Phone />
              <span>(225) 555-0118</span>
            </button>
            <button className={styles.contactButton}>
              <Mail />
              michelle.rivera@example.com
            </button>
          </div>
          <p className={styles.promoText}>
            Follow Us and get a chance to win 80% off
          </p>
          <div className={styles.links}>
            <span>Follow Us :</span>
            <a href="" className={styles.socialLink}>
              <Instagram />
            </a>
            <a href="" className={styles.socialLink}>
              <YouTube />
            </a>
            <a href="" className={styles.socialLink}>
              <Facebook />
            </a>
            <a href="" className={styles.socialLink}>
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.navbarSection} ${styles.lightSection}`}>
        <div className={styles.navbarContent}>
          <h3 className={styles.brandName}>Bandage</h3>
          <div className={styles.navigationContainer}>
            <nav className={styles.mainNavigation}>
              <a className={styles.navLink}>Home</a>
              <select name="shop" id="shop-select" className={styles.navSelect}>
                <option value="">Shop</option>
              </select>
              <a className={styles.navLink}>About</a>
              <a className={styles.navLink}>Contact</a>
              <a className={styles.navLink}>Pages</a>
            </nav>
            <div className={styles.links}>
              <a href="" className={styles.navActionLink}>
                <Auth /> Login / Register
              </a>
              <a href="#" className={styles.navActionLink}>
                <Search />
              </a>
              <Link to="/cart" className={styles.navActionLink}>
                <Cart />
                {itemCount}
              </Link>
              <a href="" className={styles.navActionLink}>
                <Love />
              </a>
            </div>
            <div className={`${styles.links} ${styles.mobileOnly}`}>
              <a href="#" className={styles.navActionLink}>
                <Search />
              </a>
              <Link to="/cart" className={styles.navActionLink}>
                <Cart /> {itemCount}
              </Link>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <Hamburger />{" "}
              </button>
            </div>
          </div>
        </div>

        <ul className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <li>
            <a href="" className={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a href="" className={styles.navLink}>
              Product
            </a>
          </li>
          <li>
            <a href="" className={styles.navLink}>
              Pricing
            </a>
          </li>
          <li>
            <a href="" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
