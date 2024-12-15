import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const submit = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    const text = e.target[0].value;

    searchParams.set("search", text);

    setSearchParams(searchParams);
  };

  const change = (e) => {
    console.log(e.target.value);

    const text = e.target.value;

    searchParams.set("sort", text);

    setSearchParams(searchParams);
  };

  return (
    <div className="filter">
      <select onChange={change} defaultValue={searchParams.get("sort")}>
        <option value="select">Select Category</option>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>

      <form className="input-div" onSubmit={submit}>
        <input
          type="text"
          defaultValue={searchParams.get("search")}
          placeholder="Search..."
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Filter;
