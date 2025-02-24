import css from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.search}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
