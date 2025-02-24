import React, { useState, useEffect } from "react";
import css from "./App";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import fetchImages from "./api/api";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setLoading(true);
      setError(false);

      try {
        const { images: newImages, totalPages } = await fetchImages(
          query,
          page
        );
        setImages((prev) => (page === 1 ? newImages : [...prev, ...newImages]));
        setTotalPages(totalPages);
      } catch (err) {
        setError(true);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [query, page]);

  const handleSearchSubmit = (searchTerm) => {
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term");
      return;
    }
    setQuery(searchTerm);
    setImages([]);
    setPage(1);
  };

  return (
    <div className={css.app}>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage />}
      <ImageGallery images={images} onSelect={setSelectedImage} />
      {loading && <Loader />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default App;
