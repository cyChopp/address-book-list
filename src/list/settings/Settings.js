import React from 'react'

import ChevronLeftSharpIcon from '@material-ui/icons/ChevronLeftSharp';
import { NavLink } from 'react-router-dom';


const Settings = () => {
    return (
        <div>
            Settings...
          <NavLink to='/'><ChevronLeftSharpIcon variant="contained" color='primary'/></NavLink>

        </div>
    )
}

export default Settings
