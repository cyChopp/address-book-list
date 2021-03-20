import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

import axios from "axios";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState([]);

  let filter = {
    CH: true,
    ES: false,
    FR: true,
    GB: false,
  };

  const changeNationality = () => {
    console.log("Nationality Changed");
  };

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then((res) => {
      setUserInfo(res.data.results);
    });
  }, []);

  return (
    <>
      <FilterContext.Provider value={{ filter, changeNationality, userInfo }}>
        {props.children}
      </FilterContext.Provider>
    </>
  );
};
export default FilterContextProvider;
