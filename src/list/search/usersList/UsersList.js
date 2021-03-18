import React from "react";
import "./UsersList.scss";


import User from "./user/User";

const UsersList = (props) => {
  console.log(props.userInfo.value,'UserInfo :::')
  if(typeof(props.userInfo) !== 'undefined' && props.userInfo.length > 0){
    console.log(props.userInfo,'yes loaded')
  }else{
    console.log('no loaded')
  }
  return (
    <>
    <div className="usersList">
      {typeof(props.userInfo) !== 'undefined' && props.userInfo.length > 0 ? (props.userInfo
        .filter((user) => user.name.first.concat(" ", user.name.last).includes(props.search))
        .map((user,key) => (
            <div  key={key}>
              <User user={user}/>
          </div>
        )) ) : <div>Loading...</div>}
    </div>
    </>
  );
};

export default UsersList;
