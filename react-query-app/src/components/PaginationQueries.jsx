import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

//?_limit=10&_page=1        (per page limit is 10 & page number is 1)
const fetchItems = (pageNumber) => {
  return axios.get(
    `http://localhost:3000/fruits?_limit=10&_page=${pageNumber}`
  );
};

const PaginationQueries = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fruits", page],
    queryFn: () => fetchItems(page),
    placeholderData: keepPreviousData, //Used to avoid Flickering of Data!!!
  });

  if (isLoading) {
    return <h2>Please wait Loading...</h2>;
  }

  if (isError) {
    return <h2>Error in Fetching Data: {error.message}</h2>;
  }

  return (
    <div className="container">
      <h3>Pagination Queries</h3>

      <div className="items" style={{ width: "700px" }}>
        {data?.data.map((item) => (
          <div key={item.id} className="item">
            {item.id} - {item.title} - {item.body}
          </div>
        ))}
      </div>
      <button
        className="btn-pagination"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page == 1 ? true : false}
        style={{
          backgroundColor:
            page == 1 ? " rgb(162, 208, 233)" : "rgb(12, 165, 248)",
          cursor: page == 1 ? "no-drop" : "pointer",
        }}
      >
        Previous
      </button>

      {/* { Dummy Array for 1 - 10 Page Numbers } */}
      {Array.from({ length: 10 }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          disabled={page == pageNumber}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            cursor: page === pageNumber ? "no-drop" : "pointer",
            color: page === pageNumber ? "red" : "inherit",
          }}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className="btn-pagination"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page == 10 ? true : false}
        style={{
          backgroundColor:
            page == 10 ? " rgb(162, 208, 233)" : "rgb(12, 165, 248)",
          cursor: page == 10 ? "no-drop" : "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationQueries;
