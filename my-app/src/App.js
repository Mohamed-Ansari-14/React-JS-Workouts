import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UseState from "./pages/UseState";
import UseState2 from "./pages/UseState2";
import UseState3 from "./pages/UseState3";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";
import UseRef2 from "./pages/UseRef2";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import UseContext from "./pages/UseContext";
import UseReducer from "./pages/UseReducer";
import UseCustomHook from "./pages/UseCustomHook";
import ConditionalRendering from "./pages/ConditionalRendering";
import Shop from "./props-folder/Shop";
import Content from "./list-rendering/Content";
import ToDo from "./ToDoApp/ToDo";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>React Hooks Practice</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/use-state" style={linkStyle}>
            useState
          </Link>
          <Link to="/use-state2" style={linkStyle}>
            useState-2
          </Link>
          <Link to="/use-state3" style={linkStyle}>
            useState-3
          </Link>
          <Link to="/use-effect" style={linkStyle}>
            useEffect
          </Link>
          <Link to="/use-context" style={linkStyle}>
            useContext
          </Link>
          <Link to="/use-ref" style={linkStyle}>
            useRef
          </Link>
          <Link to="/use-ref2" style={linkStyle}>
            useRef-2
          </Link>
          <Link to="/use-memo" style={linkStyle}>
            useMemo
          </Link>
          <Link to="/use-callback" style={linkStyle}>
            useCallback
          </Link>
          <Link to="/use-reducer" style={linkStyle}>
            useReducer
          </Link>
          <Link to="/custom-hook" style={linkStyle}>
            Custom Hook
          </Link>
          <Link to="/conditional-rendering" style={linkStyle}>
            Conditional-Rendering
          </Link>
          <Link to="/props" style={linkStyle}>
            Props
          </Link>
          <Link to="/list-rendering" style={linkStyle}>
            List
          </Link>
          <Link to="/todo" style={linkStyle}>
            ToDo
          </Link>
          {/* <Link to="/routing-page" style={linkStyle}>
            Routing
          </Link> */}
        </nav>

        <Routes>
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-state2" element={<UseState2 />} />
          <Route path="/use-state3" element={<UseState3 />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-context" element={<UseContext />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-ref2" element={<UseRef2 />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-reducer" element={<UseReducer />} />
          <Route path="/custom-hook" element={<UseCustomHook />} />
          <Route
            path="/conditional-rendering"
            element={<ConditionalRendering />}
          />
          <Route path="/props" element={<Shop />} />
          <Route path="/list-rendering" element={<Content />} />
          <Route path="/todo" element={<ToDo />} />
          {/* <Route path="/routing-page" element={<RoutingPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

// Basic link styling
const linkStyle = {
  marginRight: "25px",
  textDecoration: "none",
  color: "blue",
};

export default App;
