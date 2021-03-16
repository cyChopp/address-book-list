import React, { useState } from "react";
import "./UsersList.scss";

const UsersList = (props) => {
  return (
    <div className="usersList">
      {props.userInfo && props.userInfo
        .filter((user) => user.name.first.concat(" ", user.name.last).includes(props.search))
        .map((user,key) => (
          <div key={key}>
            {user.name.first} {user.name.last}
          </div>
        ))}
    </div>
  );
};

export default UsersList;
