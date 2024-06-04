import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../slices/cartSlice";
import Button from "./Button";
import { images } from "../constants";
import { toast } from "react-toastify";
import CartItem from "../components/CartItem";

export const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
    toast.info("Item removed from cart");
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity({ id: item.id }));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity({ id: item.id }));
  };

  return (
    <section className="cart-hero">
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
            {items.length < 1 ? (
              <div className="empty-cart">
                <p>No Item in Cart</p>
              </div>
            ) : (
              <div className="cart-items">
                {items.map((item) =>
                  CartItem(
                    item,
                    handleDecrement,
                    handleIncrement,
                    handleRemoveFromCart
                  )
                )}
              </div>
            )}
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
