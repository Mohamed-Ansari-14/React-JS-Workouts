import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const fetchItems = ({ pageParam }) => {
  //In Here the "queryFn" will pass pageNumber by default by using {pageParam}.
  return axios.get(`http://localhost:3000/fruits?_limit=10&_page=${pageParam}`);
};

const InfiniteQueries = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["fruits"],
      queryFn: fetchItems,
      initialPageParam: 1, //Initial Page Number
      getNextPageParam: (lastPage, allPages) => {
        if (allPages.length < 10) {
          return allPages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  if (isLoading) {
    return <h2>Please wait Loading...</h2>;
  }

  if (isError) {
    return <h2>Error in Fetching Data: {error.message}</h2>;
  }

  //   console.log(data);

  return (
    <div className="container">
      <h3>Infinite Queries</h3>
      <div className="items">
        {data?.pages.map((page) =>
          page.data.map((item) => {
            return (
              <div key={item.id} className="item">
                {item.title}
              </div>
            );
          })
        )}
      </div>
      <button
        onClick={fetchNextPage}
        disabled={!hasNextPage}
        style={{
          marginTop: "25px",
          padding: "10px 10px",
          backgroundColor: !hasNextPage
            ? " rgb(162, 208, 233)"
            : "rgb(12, 165, 248)",
          cursor: !hasNextPage ? "no-drop" : "pointer",
          border: "none",
          color: "white",
          borderRadius: "8px",
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default InfiniteQueries;
