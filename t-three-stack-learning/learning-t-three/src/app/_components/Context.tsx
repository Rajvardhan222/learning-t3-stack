'use client';
import React, { useContext, useState } from 'react'
import { createContext } from 'react';

export const UserContext = createContext('light');
function Context({children} : {children : React.ReactNode}) {
    const [user, setUser] = useState({
        name : "",
        email : "",
        isLoggedIn : false,
        todos : []
    });
    // ...
    return (
      <UserContext.Provider value={{user,setUser}}>
        {children}
      </UserContext.Provider>
    );
}

export const useUserContext = ()=>{
    return useContext(UserContext)
}

export default Context