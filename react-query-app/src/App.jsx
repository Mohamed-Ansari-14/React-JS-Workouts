import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import RegularFetch from "./components/RegularFetch";
import Home from "./components/Home";
import "./App.css";
import ReactQueryFetch from "./components/ReactQueryFetch";
import ReactQueryFetchByClick from "./components/ReactQueryFetchByClick";
import ReactQueryById from "./components/ReactQueryById";
import PaginationQueries from "./components/PaginationQueries";
import InfiniteQueries from "./components/InfiniteQueries";
import InfiniteQueriesScroll from "./components/InfiniteQueriesScroll";
import UseQueriesDemo from "./components/UseQueriesDemo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/regular">Regular Fetch</NavLink>
          <NavLink to="/react-query">React-Query</NavLink>
          <NavLink to="/react-click">Load Data By Click</NavLink>
          <NavLink to="/react-pagination">Pagination</NavLink>
          <NavLink to="/react-infinite">Infinite Scroll By Load-More</NavLink>
          <NavLink to="/react-infinite-scroll">Infinite Scroll</NavLink>
          <NavLink to="/react-useQueries">React useQueries</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regular" element={<RegularFetch />} />
          <Route path="/react-query" element={<ReactQueryFetch />} />
          <Route path="/react-query/:postId" element={<ReactQueryById />} />
          <Route path="/react-click" element={<ReactQueryFetchByClick />} />
          <Route path="/react-pagination" element={<PaginationQueries />} />
          <Route path="/react-infinite" element={<InfiniteQueries />} />
          <Route
            path="/react-infinite-scroll"
            element={<InfiniteQueriesScroll />}
          />
          <Route path="/react-useQueries" element={<UseQueriesDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
