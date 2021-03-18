import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UsersList from "./usersList/UsersList";
import './Search.scss'
import { DriveEtaOutlined } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";


const Search = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <>
      <form className='search'>
        <TextField
        className='textField'
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
        <Button variant="contained" color="primary">Settings</Button>
      </Link>

      <UsersList  userInfo={props.userInfo} search={search} />
    </>
  );
};

export default Search;
