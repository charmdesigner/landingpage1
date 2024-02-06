import React, { useState } from "react";
import Sresult from "./sresult";

const Search = () => {
  const [img, setImg] = useState("");
  const inputEvent = (e) => {
    const data = e.target.value;
    console.log(data);
    setImg(data);
  };
  return (
    <>
      <div className="search-div">
        <input
          onChange={inputEvent}
          value={img}
          type="text"
          placeholder="Type here..."
        />
      </div>

      {img === "" ? null : <Sresult name={img} />}
    </>
  );
};

export default Search;
