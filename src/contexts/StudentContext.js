import React, { useEffect, useState } from 'react';
import { createContext, useContext } from "react";

export const StudentContext = createContext({})

export const StudentProvider = ({children}) => {

    const students = [
        {id:1, student:{name: 'Raquel', subject: 'Piano', weekDay: 1, frequency: 'Quinzenal', time: '09:00h', studentIcon: 2,}},
        {id:2, student:{name: 'Gabriel', subject: 'Orgão', weekDay: 2, frequency: 'Semanal', time: '11:00h', studentIcon: 1,}},
        {id:3, student:{name: 'Zezefredo', subject: 'Orgão', weekDay: 3, frequency: 'Quinzenal', time: '13:00h', studentIcon: 1,}},
        {id:4, student:{name: 'Jeremilda', subject: 'Piano', weekDay: 4, frequency: 'Semanal', time: '14:00h', studentIcon: 2,}},
        {id:5, student:{name: 'Palpatone', subject: 'Orgão', weekDay: 4, frequency: 'Quinzenal', time: '15:00h', studentIcon: 1,}},
        {id:6, student:{name: 'Marenilda', subject: 'Piano', weekDay: 2, frequency: 'Semanal', time: '16:00h', studentIcon: 2,}},
    ]

    return(
        <UserContext.Provider value={{
            students
        }}>
            {children}
        </UserContext.Provider>
    );
}