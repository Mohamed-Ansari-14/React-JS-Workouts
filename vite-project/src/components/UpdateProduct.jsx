import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Atom } from "react-loading-indicators";
import axios from "axios";

const UpdateProduct = () => {
  let paperStyle = {
    width: "400px",
    margin: "20px auto",
    padding: "20px",
  };

  let [updateProduct, setNewProduct] = useState(null);

  let { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setNewProduct(res.data));
  }, []);

  let handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    let { value, name } = e.target;

    let fieldName = name.split("rating.")[1]; //accessing the index 1.

    if (name.includes("rating.")) {
      setNewProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setNewProduct({
        ...updateProduct,
        [name]: value, //Taking name field as a Key.
      });
    }
  };

  let handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    }).then(() => {
      alert("Data Updated Successfully...");
      navigate("/products");
    });
  };

  // console.log(updateProduct);

  if (updateProduct !== null) {
    return (
      <div style={{ marginTop: "100px" }}>
        <Paper elevation={20} style={paperStyle}>
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Update Product
          </Typography>
          <Grid
            component="form"
            style={{ display: "grid", gap: "20px", marginTop: "20px" }}
            onSubmit={handleUpdate}
          >
            <TextField
              value={updateProduct.title}
              name="title"
              label="Title"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              name="category"
              value={updateProduct.category}
              label="Category"
              fullWidth
              variant="outlined"
              onChange={handleChange}
            />

            <Grid container spacing={2}>
              <Grid size={6}>
                <TextField
                  name="rating.rate"
                  value={updateProduct.rating.rate}
                  type="number"
                  label="Rate"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>

              <Grid size={6}>
                <TextField
                  name="rating.count"
                  value={updateProduct.rating.count}
                  type="number"
                  label="Count"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="success" fullWidth>
              Update
            </Button>
          </Grid>
        </Paper>
      </div>
    );
  } else {
    <center style={{ marginTop: "30vh" }}>
      <Atom color="#1e28e3" size="large" text="Loading..." textColor="" />
    </center>;
  }
};

export default UpdateProduct;
