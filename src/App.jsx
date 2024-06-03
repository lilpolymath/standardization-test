import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
