import "./CustomToast.css";
import PropTypes from "prop-types";

const CustomToast = ({ product }) => {
  return (
    <div className="custom-toast">
      <div className="custom-toast-content">
        <h3>Successfully added to basket</h3>
        <div className="custom-toast-product">
          <img src={product.images[0]} alt={product.title} />
          <div>
            <p>{product.title}</p>
            <p>€ {product.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomToast;
CustomToast.propTypes = {
  product: PropTypes.object,
};
