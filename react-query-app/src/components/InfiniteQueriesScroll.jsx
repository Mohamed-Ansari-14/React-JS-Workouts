import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const fetchItems = ({ pageParam }) => {
  //In Here the "queryFn" will pass pageNumber by default by using {pageParam}.
  return axios.get(`http://localhost:3000/fruits?_limit=10&_page=${pageParam}`);
};

const InfiniteQueriesScroll = () => {
  const { data, isLoading, isError, error, fetchNextPage, isFetching } =
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

  const { ref, inView } = useInView(); //"inView" by default "false"
  //"ref" trigged means "inView" will become "true"

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    return <h2>Please wait Loading...</h2>;
  }

  if (isError) {
    return <h2>Error in Fetching Data: {error.message}</h2>;
  }

  //   console.log(data);

  return (
    <div className="container">
      <h3>Infinite-Queries Scroll</h3>

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
      <div ref={ref} style={{ fontSize: "18px", marginTop: "10px" }}>
        {isFetching ? "Loading..." : "No More Data !!!"}
      </div>
    </div>
  );
};

export default InfiniteQueriesScroll;
