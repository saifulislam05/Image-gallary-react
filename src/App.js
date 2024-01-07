import React from "react";
import ImageDetails from "./components/Details/ImageDetails";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/imageDetails/:id" element={<ImageDetails />} />
      </Routes>
    </>
  );
};

export default App;
