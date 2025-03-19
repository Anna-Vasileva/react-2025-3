import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ onSearch, inputValue }) {
  const labId = useId();
  return (
    <div className={css.wrap}>
      <label htmlFor={labId}>Find contacts by name:</label>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        id={labId}
        className={css.inp}
        name="search"
        placeholder="Search..."
      ></input>
      {/* <p>{inputValue}</p> */}
    </div>
  );
}
