import { Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

let renderCount = 0;

let schema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!!!")
    .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter Your FullName!!!"),

  age: Yup.number()
    .integer()
    .positive()
    .required("Age is required!!!")
    .min(18, "Enter age between 18 to 45")
    .max(45, "Enter age between 18 to 45"),

  email: Yup.string()
    .email()
    .required("Email is required!!!")
    .matches(/^[a-z0-9]+@[a-z]{3,5}.[a-z]{3,4}$/, "Enter a Valid Email!!!"),

  password: Yup.string().required("Password is Required!!!"),

  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password Must Match!!!"
  ),
});

const SignUp = () => {
  let paperStyle = {
    width: "400px",
    margin: "70px auto",
    padding: "20px",
    display: "grid",
    gap: "20px",
  };

  renderCount++;

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  let handleData = (data) => {
    console.log(data);
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
      component="form"
      onSubmit={handleSubmit(handleData)}
    >
      <Typography textAlign="center" variant="h6">
        Create Account - {renderCount}
      </Typography>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name} //!! => Converting to boolean
        helperText={errors.name?.message} //? Chaining Operator
      />
      <TextField
        label="Age"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />
      <TextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <Button variant="contained" type="submit">
        Signup
      </Button>
    </Paper>
  );
};

export default SignUp;
