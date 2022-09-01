/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

import Home from "../../pages/Home";
import Products from "../../pages/Products";
import WhatWeDo from '../../pages/WhatWeDo';

const Hero = (props) => {
  const { handleLogout, user, userData } = props;

  const path = "";

  const [selectedProject, setSelectedProject] = useState({});

  return (
    <section className="hero">
      <Routes>
        <Route path={path} exact element={<Home />} />
        <Route path={path + "products"} exact element={<Products />} />
        <Route path={path + "what-we-do"} exact element={<WhatWeDo />}  />
      </Routes>

      {/* <Route path={path + "project"} exact >
          <Project 
          handleLogout={handleLogout}
          user={user}
          userData={userData}
          selectedProject={selectedProject} />
        </Route>

        <Route path={path + "deficiency"} exact >
          <Deficiency 
          handleLogout={handleLogout}
          user={user}
          userData={userData}
          selectedProject={selectedProject} />
        </Route> */}
    </section>
  );
};

export default Hero;
