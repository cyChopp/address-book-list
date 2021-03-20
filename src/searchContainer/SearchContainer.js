import React, { useContext } from "react";
import List from "./list/List";
import "./SearchContainer.scss";
import axios from "axios";
import { FilterContext } from "../context/FilterProvider";

const Search = () => {
  const { userInfo } = useContext(FilterContext);

  return (
    <div className="mainContainer">
      <List userInfo={userInfo} />
    </div>
  );
};

export default Search;
