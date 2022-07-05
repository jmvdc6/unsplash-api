import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Header from "./Header";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

import unsplash from "../api/unsplash";

import styles from "./App.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const onSearchSubmit = async (term) => {
    setLoading(true);
    try {
      const { data } = await unsplash.get("/searchphotos", {
        params: { query: term, page: page },
      });
      setImages(data.results);
      setTerm(term);
      setPage(page + 1);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onLoadImages = async () => {
    const { data } = await unsplash.get("/search/photos", {
      params: { query: term, page: page },
    });

    setImages(images.concat(data.results));
    setPage(page + 1);
  };

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.container}>
        <SearchBar onSubmit={onSearchSubmit} />
        <InfiniteScroll
          dataLength={images.length}
          hasMore={true}
          next={onLoadImages}
        >
          <ImageList
            images={images}
            onSubmit={onSearchSubmit}
            loading={loading}
          />
        </InfiniteScroll>
      </main>
    </div>
  );
};

export default App;
