import "./Cart.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductsList from "../components/ProductsList";
import { ShoppingCart } from "../components/ShoppingCart";

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
        <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
        <hr />
        <ProductsList limit={8} />
      </section>
    </main>
  );
};

export default Cart;
