import React from 'react'

import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Settings = () => {
    return (
        <div>
          <NavLink to='/'><Button variant="contained" color='primary'>Apply settings</Button></NavLink>
        <form>
            CH: <input type='checkbox'/>
            ES: <input type='checkbox'/>
            FR: <input type='checkbox'/>
            GB: <input type='checkbox'/>
        </form>
        </div>
    )
}

export default Settings
