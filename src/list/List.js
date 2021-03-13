import React, { useEffect, useState } from 'react'
import Search from './search/Search'
import './List.scss'
import axios from 'axios';

import ChevronRightSharpIcon from '@material-ui/icons/ChevronRightSharp';
import { NavLink } from 'react-router-dom';
const List = () => {

    const [userInfo,setUserInfo] = useState([])

    useEffect(()=>{
        axios.get('https://randomuser.me/api/?results=1000').then(res=>{
            setUserInfo(res.data.results)
            console.log(res.data.results,'data')
        })
    },[])
    return (
        <div className="mainContainer">
            <Search userInfo={userInfo}/>
            <NavLink to='/settings'><ChevronRightSharpIcon variant="contained" color='primary'/></NavLink>
        </div>
    )
}

export default List
