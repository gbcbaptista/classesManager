import React, { useEffect, useState } from 'react';
import { createContext, useContext } from "react";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const user = {
        name: 'Gabriel'
    }

    return(
        <UserContext.Provider value={{
            user
        }}>
            {children}
        </UserContext.Provider>
    );
}