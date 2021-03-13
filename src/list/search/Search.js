import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UsersList from "./usersList/UsersList";


const Search = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <>
      <form action='/' method='get' >
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          id="outlined-basic"
          label="Search users"
          variant="outlined"
          fullWidth
        />
        <Button type='submit' variant="contained" color='primary'>
          Search
        </Button>
      </form>
      <UsersList userInfo={props.userInfo} search={search} />
    </>
  );
};

export default Search;
