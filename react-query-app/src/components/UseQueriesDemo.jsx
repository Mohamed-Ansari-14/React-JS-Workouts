import { useQueries } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchPostById = async (id) => {
  const response = await axios.get(`http://localhost:3000/posts2/${id}`);
  return response.data;
};

const MultiplePost = ({ postIds }) => {
  const postQueries = useQueries({
    queries: postIds.map((id) => ({
      queryKey: ["posts2", id],
      queryFn: () => fetchPostById(id),
    })),
  });

  //If any one data is Loading means it will return true.
  const isLoading = postQueries.some((query) => query.isLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="posts" style={{ width: "750px" }}>
      <h2>Post Details</h2>
      {postQueries.map((query, index) => (
        <div className="post" key={index}>
          <h4>
            {query.data.id}. {query.data.title}
          </h4>
          <p>{query.data.body}</p>
        </div>
      ))}
    </div>
  );
};

const UseQueriesDemo = () => {
  const postIds = [1, 3, 5, 7, 9];

  return (
    <div className="container">
      <h3>UseQueries Demo</h3>

      <MultiplePost postIds={postIds} />
    </div>
  );
};

export default UseQueriesDemo;
