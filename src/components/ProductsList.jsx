import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetProductsQuery } from "../services/api";
import { setProducts } from "../slices/productSlice";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import styles from "./Products.module.css";

function ProductsList({ limit = 10 }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const { data } = useGetProductsQuery({ limit });

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  return (
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductsList;
ProductsList.propTypes = {
  limit: PropTypes.any,
};
