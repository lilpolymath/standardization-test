import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import PropTypes from "prop-types";
import { Compare, Love, Star } from "./Icons";
import { range } from "../utils";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };
  let discount = (product.price * product.discountPercentage) / 100;
  discount = discount.toFixed(2);
  return (
    <div className={styles.productCard}>
      <Link to={`/shop/${product.id}`} className={styles.productLink}>
        <div className={styles.productImage}>
          <img src={product.images[0]} alt="" />
          <div className={`${styles.float} ${styles.hidden}`}>
            <p className={styles.discount}>{product.discountPercentage}%</p>
            <div className={styles.icons}>
              <button className={styles.iconButton}>
                <Love />
              </button>
              <button className={styles.iconButton}>
                <Compare />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.productInfo}>
          <div>
            <p className={styles.productCategory}>{product.category}</p>
            <h2 className={styles.productName}>{product.title}</h2>
          </div>
          <div>
            <p className={styles.productPrice}>
              <span className={styles.strikeThrough}>${product.price}</span>{" "}
              <span className={styles.hidden}>${discount}</span>
            </p>
            <div className={styles.productReview}>
              <div className={styles.productStars}>
                {range(5).map((num) => {
                  return (
                    <Star
                      className={`${product.rating > num ? styles.filled : ""}`}
                      key={num}
                    />
                  );
                })}
              </div>
              <span className={styles.productRating}>
                {product.rating} ({product.reviews.length})
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className={`${styles.hidden} ${styles.buttonContainer}`}>
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  product: PropTypes.object,
};
