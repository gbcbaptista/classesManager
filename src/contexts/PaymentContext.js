import React, { useEffect, useState, createContext, useContext } from 'react';

export const AccountingContext = createContext({})

export const AccountingProvider = ({children}) => {
    const [ accounting, setAccounting] = useState({received: 0, toReceive: 0})

    useEffect(
        () => setAccounting({received: 1344, toReceive: 2138}),
        []
    )

    return(
        <AccountingContext.Provider value={{
            accounting,
            setAccounting
        }}>
            {children}
        </AccountingContext.Provider>
    );
}