import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import SearchBox from "../SearchBox/SearchBox";
import Gallery from "../Gallary/Gallary";

const Body = () => {
  const [images, setImages] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (query, pageNum) => {
    try {
      let url = `https://api.unsplash.com${query?"/search":""}/photos?page=${pageNum}&per_page=20${
        query ? "&query=" + query : ""
      }&client_id=${process.env.REACT_APP_API_KEY}`;

      const response = await axios.get(url);
      const newImages = query ? response.data.results : response.data;

      // If no new images are fetched, set hasMore to false
      if (newImages.length === 0) {
        setHasMore(false);
        return;
      }

      if (page==1) {
        setImages(newImages)
      } else {
        
        setImages((prevImages) => [...prevImages, ...newImages]);
      }

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFetchMore = () => {
    // Increment the page number and fetch more data
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData(searchInput, page);
  }, [page]);

  useEffect(() => {
    // Reset page when searchInput changes
    setPage(1);
    setHasMore(true);

    const timeoutId = setTimeout(() => {
      fetchData(searchInput, 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  return (
    <>
      <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} />
      <InfiniteScroll
        dataLength={images.length}
        next={handleFetchMore}
        hasMore={hasMore}
        loader={
          <div className="w-fit mx-auto mt-1">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        }
      >
        <Gallery images={images} />
      </InfiniteScroll>
    </>
  );
};

export default Body;
