import { noop, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchPosts = () => {
  return axios.get("http://localhost:3000/posts1");
};

const ReactQueryFetchByClick = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    //using of "refetch" we can re-fetch the data from server.
    queryKey: ["posts2"],
    queryFn: () => fetchPosts(),
    enabled: false, //it will disable the fectching.
  });

  if (isLoading) {
    return <h2>Please wait Loading...</h2>;
  }

  if (isError) {
    return <h2>Error in Fetching Data: {error.message}</h2>;
  }
  return (
    <div className="container">
      <h3>React-Query Fetch By Click</h3>

      <ul className="posts">
        {data?.data.map((post) => (
          <li key={post.id} className="post">
            {post.body}
          </li>
        ))}
      </ul>
      <button
        onClick={refetch}
        style={{
          backgroundColor: "blue",
          fontSize: "15px",
          color: "white",
          width: "100px",
          height: "40px",
          borderRadius: "10px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Load Data
      </button>
    </div>
  );
};

export default ReactQueryFetchByClick;
