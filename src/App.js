import React from "react";
import Gallary from "./components/Gallary/Gallary";
import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
    <>
      <Header />
      <SearchBox />
      <Gallary/>
    </>
  );
};

export default App;
