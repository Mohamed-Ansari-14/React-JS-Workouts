import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../store/cartSlice";

const Cart = () => {
  let btnStyle = {
    width: "80px",
    height: "50px",
    fontSize: "20px",
    alignItems: "center",
    margin: "auto",
  };

  let cartProducts = useSelector((state) => {
    return state.cart;
  });

  let dispatch = useDispatch();

  let handleDelete = (reduxItemId) => {
    dispatch(removeItem(reduxItemId));
  };

  return (
    <div>
      {cartProducts.length !== 0 ? (
        <section className="products-container">
          {cartProducts.map((product) => (
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
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "100px" }}>
          Your Cart is Empty!!!
        </h3>
      )}
    </div>
  );
};

export default Cart;
