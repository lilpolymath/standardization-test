import { range } from "../utils";
import { Delete, Star } from "./Icons";

const CartItem = (
  item,
  handleDecrement,
  handleIncrement,
  handleRemoveFromCart
) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <div className="details">
          <img src={item.thumbnail} alt="" />
          <div>
            <h2>{item.title}</h2>
            <div className="price">
              {" "}
              <p>&#8358;{(item.price * item.quantity).toFixed(2)}</p>
              <p>
                &#8358;{item.price} x {item.quantity} Items
              </p>
            </div>
            <p>{item.availabilityStatus}</p>
            <div className="rating">
              <div>
                {range(5).map((num) => {
                  return (
                    <Star
                      className={`${item.rating > num ? "filled" : ""}`}
                      key={num}
                    />
                  );
                })}
              </div>
              {item.reviews.length} Reviews
            </div>
          </div>
        </div>
        <div className="counter">
          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
        </div>
        <div className="price">
          <p>&#8358;{(item.price * item.quantity).toFixed(2)}</p>
          <p>
            &#8358;{item.price} x {item.quantity} Items
          </p>
        </div>
      </div>
      <div className="delete-btn">
        <button className="btn" onClick={() => handleRemoveFromCart(item)}>
          <Delete />
          REMOVE
        </button>
        <div className="counter">
          <button onClick={() => handleDecrement(item)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleIncrement(item)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
