import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { NewProduct } from "./components/NewProduct";
import UpdateProduct from "./components/UpdateProduct";
import Cart from "./components/Cart";

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([])); //Set
}

// let dataFromWeb = JSON.parse(localStorage.getItem("cart")); //Get
// console.log(dataFromWeb);
// localStorage.removeItem("cart"); //remove

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="details" element={<ProductDetails />} />
          </Route>
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center" }}>Error 404 Not Found!!!</h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
