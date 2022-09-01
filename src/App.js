/* eslint-disable no-unused-vars */
import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import Router from "./components/Router";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter forceRefresh={false}>
      <div className="App">
        <ResponsiveAppBar />
        <div style={{ height: "68.5px", backgroundColor: "white" }}></div>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
