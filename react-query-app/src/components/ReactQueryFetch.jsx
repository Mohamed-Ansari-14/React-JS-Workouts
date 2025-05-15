import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const fetchPosts = () => {
  return axios.get("http://localhost:3000/posts1");
};

const ReactQueryFetch = () => {
  const { data, isLoading, isError, error } = useQuery({
    //use of "data" we can fetch the db data.
    queryKey: ["posts2"], //queryKey Must be a Unique End-Point.
    queryFn: () => fetchPosts(),
    // staleTime: 5000,

    //staleTime - After 5 seconds only It will Fetch data the again.
    //staleTime is used to avoid the unwanted fetching of multiple times.

    //Data Pooling:
    refetchInterval: 1000,

    //refetchInterval is Fetch the data from server automatically eg.Grow, Angel-One.

    refetchIntervalInBackground: true,

    //refetchIntervalInBackground by default its false, if we make true it will run in background.(Fetching continously in background)
  });

  // console.log(data);

  if (isLoading) {
    return <h2>Please wait Loading...</h2>;
  }

  if (isError) {
    return <h2>Error in Fetching Data: {error.message}</h2>;
  }

  return (
    <div className="container">
      <h3>React-Query Fetch</h3>

      <ul className="posts">
        {data?.data.map((post) => (
          <Link key={post.id} to={`/react-query/${post.id}`}>
            <li className="post">{post.body}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ReactQueryFetch;
