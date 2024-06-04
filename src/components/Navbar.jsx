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
          <Link className={styles.brandName} to="/">
            Bandage
          </Link>
          <div className={styles.navigationContainer}>
            <nav className={styles.mainNavigation}>
              <Link className={styles.navLink} to="/">
                Home
              </Link>
              <select name="shop" id="shop-select" className={styles.navSelect}>
                <option value="">Shop</option>
              </select>
              <p className={styles.navLink}>About</p>
              <Link to="#" className={styles.navLink}>
                Contact
              </Link>
              <p className={styles.navLink}>Pages</p>
            </nav>
            <div className={styles.links}>
              <a href="#" className={styles.navActionLink}>
                <Auth /> Login / Register
              </a>
              <a href="#" className={styles.navActionLink}>
                <Search />
              </a>
              <Link to="/cart" className={styles.navActionLink}>
                <Cart />
                {itemCount}
              </Link>
              <a href="#" className={styles.navActionLink}>
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
                <Hamburger />
              </button>
            </div>
          </div>
        </div>

        <ul className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
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
