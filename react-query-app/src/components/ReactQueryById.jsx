import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const fetchPostById = (postId) => {
  return axios.get(`http://localhost:3000/posts1/${postId}`);
};

const ReactQueryById = () => {
  const { postId } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts1", postId],
    queryFn: () => fetchPostById(postId),
  });

  if (isLoading) {
    return <h2>Please wait Loading...</h2>;
  }

  if (isError) {
    return <h2>Error in Fetching Data: {error.message}</h2>;
  }

  const { title, body } = data?.data || {};

  return (
    <div className="container">
      <h3>React-Query By ID</h3>
      <div
        style={{
          border: "3px solid red",
          backgroundColor: "#161515",
          width: "850px",
          height: "200px",
          margin: "auto",
          borderRadius: "20px",
          paddingTop: "60px",
        }}
      >
        <h4 style={{ fontSize: "20px", color: "white" }}>Title: {title}</h4>
        <br />
        <p style={{ fontSize: "18px", color: "white" }}>Body: {body}</p>
      </div>
    </div>
  );
};

export default ReactQueryById;
