import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Atom } from "react-loading-indicators";
import useFetch from "./custom-hook/useFetch";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/cartSlice";

const ProductList = () => {
  let btnStyle = {
    width: "80px",
    height: "50px",
    fontSize: "20px",
    alignItems: "center",
    margin: "auto",
  };

  let navigate = useNavigate();

  // let [products, setProducts] = useState([]);
  // let [error, setError] = useState("");
  // let [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/products", { method: "GET" })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Search Proper Data");
  //       }
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  let { products, error, isLoading, setProducts } = useFetch(
    "http://localhost:5000/products"
  );

  let handleDelete = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
      let newProductList = products.filter((product) => product.id !== id);

      setProducts(newProductList);
    });
  };

  let dispatch = useDispatch();

  let cartState = useSelector((state) => {
    return state.cart;
  });

  let addItemToCart = (product) => {
    let checkProduct = cartState.some(
      //some is Logical OR //every is Logical AND.
      (cartProduct) => cartProduct.id === product.id
    );
    if (!checkProduct) {
      dispatch(addItem(product));
      Swal.fire({
        title: "Success...",
        text: "Product Added Successfully.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Oops!!!",
        text: "Product already added!!!",
        icon: "error",
      });
    }
  };

  if (isLoading) {
    return (
      <center style={{ marginTop: "30vh" }}>
        <Atom color="#1e28e3" size="large" text="Loading..." textColor="" />
      </center>
    );
  } else {
    return (
      <div>
        <article style={{ marginLeft: "70rem", marginTop: "50px" }}>
          <span style={{ fontSize: "20px", marginRight: "20px" }}>
            To Create New Product
          </span>
          <Button
            style={{ fontSize: "20px", marginBottom: "8px" }}
            onClick={() => navigate("/new-product")}
          >
            Click Me!
          </Button>
        </article>
        <h1>Product List</h1>
        {products.length !== 0 && (
          <section className="products-container">
            {products.map((product) => (
              <Card
                key={product.id}
                style={{ width: "18rem", height: "25rem" }}
                className="product"
              >
                <center>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    style={{ width: "9rem", height: "12rem" }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text style={{ marginTop: "15px" }}>
                    ${product.price}
                  </Card.Text>
                </Card.Body>
                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="primary"
                    style={btnStyle}
                    onClick={() => addItemToCart(product)}
                  >
                    <GiShoppingCart />
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      navigate(`/update-product/${product.id}`);
                    }}
                    style={btnStyle}
                  >
                    <FaRegEdit />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(product.id)}
                    style={btnStyle}
                  >
                    <MdDelete />
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </section>
        )}

        {error && <p>{error}</p>}
      </div>
    );
  }
};

export default ProductList;
