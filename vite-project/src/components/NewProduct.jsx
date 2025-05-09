import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";

export const NewProduct = () => {
  let paperStyle = {
    width: "400px",
    margin: "20px auto",
    padding: "20px",
  };

  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 6999,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    let { value, name } = e.target;

    let fieldName = name.split("rating.")[1]; //accessing the index 1.

    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value, //Taking name field as a Key.
      });
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => {
      alert("Data Added Successfully...");
      setNewProduct({
        //After Adding the data, the fields should clear.
        title: "",
        price: 6999,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
          rate: 0,
          count: 0,
        },
      });
    });
  };

  console.log(newProduct);

  return (
    <div style={{ marginTop: "100px" }}>
      <Paper elevation={20} style={paperStyle}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Create New Product
        </Typography>
        <Grid
          component="form"
          style={{ display: "grid", gap: "20px", marginTop: "20px" }}
          onSubmit={handleSubmit}
        >
          <TextField
            value={newProduct.title}
            name="title"
            label="Title"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            name="category"
            value={newProduct.category}
            label="Category"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />

          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                name="rating.rate"
                value={newProduct.rating.rate}
                type="number"
                label="Rate"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>

            <Grid size={6}>
              <TextField
                name="rating.count"
                value={newProduct.rating.count}
                type="number"
                label="Count"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth>
            ADD
          </Button>
        </Grid>
      </Paper>
    </div>
  );
};
