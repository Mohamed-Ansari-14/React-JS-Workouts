import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import "../Crud.css";

const API_URL = "http://localhost:3000/posts3";

//Fetch all posts
const fetchPosts = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

//Create Post
const createPost = async (newPost) => {
  const { data } = await axios.post(API_URL, newPost);
  return data;
};

//Delete Post
const deletePost = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

//Upate Post
const updatePost = async (updatedPostData) => {
  const { data } = await axios.put(
    `${API_URL}/${updatedPostData.id}`,
    updatedPostData
  );
  return data;
};

const Home = () => {
  const queryClient = useQueryClient();

  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  const [editPost, setEditPost] = useState(null);

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts3"],
    queryFn: fetchPosts,
  });

  //Create Post Mutation
  const createMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (newData) => {
      //using useQuery it will invalidate the API and Re-Fetch it.
      queryClient.invalidateQueries({ queryKey: ["posts3"] });
      setNewPostTitle("");
      setNewPostBody("");
    },
  });

  //Delete Post Mutation
  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts3"] });
    },
  });

  //Update Post Mutation
  const updateMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts3"] });
      setEditPost(null);
    },
  });

  const handleCreate = () => {
    createMutation.mutate({ title: newPostTitle, body: newPostBody });
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure to delete!!!")) {
      deleteMutation.mutate(id);
    }
  };

  const handleUpdate = () => {
    updateMutation.mutate(editPost);
  };

  if (isLoading) return <h2>Please wait Loading...</h2>;

  if (isError) return <h2>Error in Fetching Data: {error.message}</h2>;

  return (
    <div className="container">
      <h3>Create Read Update Delete</h3>

      <form
        onSubmit={(e) => {
          e.preventDefault(); //Used to avoid Page Refresh...
          handleCreate();
        }}
      >
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="Post Title"
        />
        <input
          type="text"
          value={newPostBody}
          onChange={(e) => setNewPostBody(e.target.value)}
          placeholder="Post Body"
        />
        <button
          type="submit"
          className="home-btn"
          style={{ width: "150px", marginBottom: "30px" }}
        >
          Create Post
        </button>
      </form>

      <div className="post-list">
        {posts.map((post) => {
          return (
            <div key={post.id} className="post-item">
              {editPost?.id === post.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    placeholder="Post Title"
                    value={editPost.title}
                    onChange={(e) =>
                      setEditPost({ ...editPost, title: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Post Body"
                    value={editPost.body}
                    onChange={(e) =>
                      setEditPost({ ...editPost, body: e.target.value })
                    }
                  />

                  <button className="home-btn" onClick={handleUpdate}>
                    Save
                  </button>
                  <button
                    className="home-btn"
                    style={{ backgroundColor: "red" }}
                    onClick={() => setEditPost(null)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="content">{post.title}</h2>
                  <p className="content" style={{ fontSize: "20px" }}>
                    {post.body}
                  </p>
                  <div className="actions">
                    <button
                      onClick={() => setEditPost(post)}
                      style={{ marginRight: "50px" }}
                      className="home-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      style={{ backgroundColor: "red" }}
                      className="home-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
