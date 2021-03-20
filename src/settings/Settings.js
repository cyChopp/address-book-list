import React, { useContext, useState } from "react";

import ChevronLeftSharpIcon from "@material-ui/icons/ChevronLeftSharp";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Checkbox, FormGroup } from "@material-ui/core";
import { FilterContext } from "../context/FilterProvider";

const Settings = () => {
  const { filter, changeNationality } = useContext(FilterContext);

  const history = useHistory();

  const [CH, SetCH] = useState(filter.CH);
  const [ES, SetES] = useState(filter.ES);
  const [FR, SetFR] = useState(filter.FR);
  const [GB, SetGB] = useState(filter.GB);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("::CH");
    history.push("/");
  };

  const handleChangeCH = (event) => {
    SetCH(event.target.checked);
  };
  const handleChangeES = (event) => {
    SetES(event.target.checked);
  };
  const handleChangeFR = (event) => {
    SetFR(event.target.checked);
  };
  const handleChangeGB = (event) => {
    SetGB(event.target.checked);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          CH:
          <Checkbox
            checked={CH}
            onChange={handleChangeCH}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
            name="CH"
          />
        </label>
        <label>
          ES:
          <Checkbox
            checked={ES}
            onChange={handleChangeES}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
            name="ES"
          />
        </label>
        <label>
          FR:
          <Checkbox
            checked={FR}
            onChange={handleChangeFR}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
            name="FR"
          />
        </label>
        <label>
          GB:
          <Checkbox
            checked={GB}
            onChange={handleChangeGB}
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
            name="GB"
          />
        </label>

        <Button type="submit" variant="contained" color="primary">
          Apply settings
        </Button>
      </form>
    </div>
  );
};

export default Settings;
