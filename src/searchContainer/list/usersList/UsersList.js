import React from "react";
import "./UsersList.scss";

import CircularProgress from "@material-ui/core/CircularProgress";

import User from "./user/User";
import { useContext } from "react";
import { FilterContext } from "../../../context/FilterProvider";

const UsersList = (props) => {
  const { filter, changeNationality } = useContext(FilterContext);

  return (
    <>
      <div className="usersList">
        {typeof props.userInfo !== "undefined" && props.userInfo.length > 0 ? (
          props.userInfo
            .filter((user) =>
              user.name.first.concat(" ", user.name.last).includes(props.search)
            )
            .map((user, key) => (
              <div key={key}>
                <User user={user} />
              </div>
            ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  );
};

export default UsersList;
