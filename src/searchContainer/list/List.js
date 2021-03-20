import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import UsersList from "./usersList/UsersList";
import "./List.scss";
import { Link } from "react-router-dom";
const List = (props) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <form className="search">
        <TextField
          className="textField"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          id="outlined-basic"
          label="Search users"
          variant="outlined"
          fullWidth
        />
      </form>
      <Link to="/settings">
        <Button variant="contained" color="primary">
          Settings
        </Button>
      </Link>

      <UsersList userInfo={props.userInfo} search={search} />
    </>
  );
};

export default List;
