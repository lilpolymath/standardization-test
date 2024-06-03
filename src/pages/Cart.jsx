import "./Cart.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductsList from "../components/ProductsList";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../slices/cartSlice";
import { range } from "../utils";
import { Delete, Star } from "../components/Icons";
import IconButton from "../components/IconButton";
import Button from "../components/Button";
import { images } from "../constants";

const Cart = () => {
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error loading product</p>;
  // }

  return (
    <main>
      <ShoppingCart />
      <section className="products-section">
        <h3>BESTSELLER PRODUCTS</h3>
        <ProductsList classname="four" limit={8} />
      </section>
    </main>
  );
};

export default Cart;

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity({ id: item.id }));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity({ id: item.id }));
  };

  return (
    <section className="product-hero">
      <header>
        <p>
          <span className="home">Home</span> &gt; Shop &gt; Shopping Cart
        </p>
      </header>
      <div className="wrapper">
        <div className="left">
          <h4>Shopping Cart</h4>
          <div>
            <div className="cart-header">
              <p>Item Details</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-info">
                  <div className="details">
                    <img src={item.thumbnail} alt="" />
                    <div>
                      <h2>{item.title}</h2>
                      <div className="price">
                        {" "}
                        <p>${item.price * item.quantity}</p>
                        <p>
                          {item.price} x {item.quantity} Items
                        </p>
                      </div>
                      <p>{item.availabilityStatus}</p>
                      <div className="rating">
                        <div>
                          {range(5).map((num) => {
                            return (
                              <Star
                                className={`${
                                  item.rating > num ? "filled" : ""
                                }`}
                                key={num}
                              />
                            );
                          })}
                        </div>
                        {item.reviews.length} Reviews
                      </div>
                    </div>
                    <div className="counter">
                      <IconButton onClick={() => handleDecrement(item)}>
                        -
                      </IconButton>
                      <span>{item.quantity}</span>
                      <IconButton onClick={() => handleIncrement(item)}>
                        +
                      </IconButton>
                    </div>
                  </div>
                  <div className="counter">
                    <IconButton onClick={() => handleDecrement(item)}>
                      -
                    </IconButton>
                    <span>{item.quantity}</span>
                    <IconButton onClick={() => handleIncrement(item)}>
                      +
                    </IconButton>
                  </div>
                  <div className="price">
                    {" "}
                    <p>${item.price * item.quantity}</p>
                    <p>
                      {item.price} x {item.quantity} Items
                    </p>
                  </div>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  <Delete />
                  REMOVE
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <div>
            <h4>Order Summary</h4>
            <p>{items.length} Items</p>
          </div>
          <div>
            <h4>Delivery Charges</h4>
            <p>
              Add your delivery address to checkout to see delivery charges.
            </p>
          </div>
          <div>
            <h4>Subtotal</h4>
            <p>&#8358;{totalPrice.toFixed(2)}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>&#8358;{totalPrice.toFixed(2)}</p>
          </div>
          <div>
            <p>Excluding Delivery Charges</p>
            <Button color={"#fff"} backgroundColor={"var(--primary-color)"}>
              Proceed to Checkout
            </Button>
          </div>
          <div>
            <img src={images.paystack} /> <img src={images.mastercard} />{" "}
            <img src={images.visa} />
          </div>
        </div>
      </div>
    </section>
  );
};
