import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBox from "../SearchBox/SearchBox";
import Gallery from "../Gallary/Gallary";

const Body = () => {
  const [images, setImages] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Initial render
  const fetchData = async (query) => {
    try {
      let url = "";

      if (query) {
        url = `https://api.unsplash.com/search/photos?page=1&per_page=30&${
          query ? "&query=" + query : ""
        }&client_id=${process.env.REACT_APP_API_KEY}`;
      } else {
        url = `https://api.unsplash.com/photos/?page=1&per_page=30&client_id=w52K-FY5dTHfZNbKRh2kUa_bw-cTboeHs5vy5vele0g`;
      }

      const response = await axios.get(url);
      if (query) {
        setImages(response.data.results);
      } else {
        setImages(response.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // On searchInput changes
  useEffect(() => {
    // Use cleanup function to clear the timeout
    const timeoutId = setTimeout(() => {
      fetchData(searchInput);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  return (
    <>
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
      <Gallery images={images} />
    </>
  );
};

export default Body;
