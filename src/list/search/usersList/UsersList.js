import React from "react";
import "./UsersList.scss";


import User from "./user/User";

const UsersList = (props) => {
  console.log(props.userInfo)
  return (
    <div className="usersList">
      {props.userInfo
        .filter((user) => user.name.first.concat(" ", user.name.last).includes(props.search))
        .map((user,key) => (
            <div  key={key}>
              <User user={user}/>
          </div>
        ))}
    </div>
  );
};

export default UsersList;
