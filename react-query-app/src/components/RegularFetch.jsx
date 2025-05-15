import axios from "axios";
import React, { useEffect, useState } from "react";

const RegularFetch = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts1");
      setPosts(response.data);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <h2>Please wait Loading...</h2>;
  }

  if (isError) {
    return <h2>Error in Fetching Data!!!</h2>;
  }

  return (
    <div className="container">
      <h3>RegularFetch</h3>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id} className="post">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegularFetch;
