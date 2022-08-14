import { useState } from "react";
import React from "react";
import { loadPosts } from "../redux/actions/postAction";
import { useDispatch } from "react-redux";

export default function SearchComponent() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  console.log(value);

  function handleClick() {
    dispatch(loadPosts(1, value,'NEW'));
  }
  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleClick();
    }
  };
  return (
    <div className="c-filter-search">
      <input
        className="form-control"
        type="text"
        placeholder="Tìm kiếm"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handleKeypress}
      ></input>
      <button
        className="c-filter-search__btn"
        type="submit"
        onClick={handleClick}
        
      >
        <i className="icon24-search-black" />
      </button>
    </div>
  );
}
