import React, { useState } from 'react'

const UsersList = (props) => {
    console.log(props.userInfo,'props')
 // const [input,setInput]=useState(props.search.split(/\b(\s)/))
//  console.log(props.search.split(/\b(\s)/),':::input')
    return (
        <div>
            {props.userInfo !== '' &&
            props.userInfo.map((user,key)=>(
                <div key={key}>
                    {user.name.first}{'  '}{ user.name.last}
                </div>
            ))
            }
        </div>
    )
}

export default UsersList
