import React, { useEffect, useState, createContext, useContext } from 'react';

export const StudentContext = createContext({})

export const StudentProvider = ({children}) => {

    const students = [
        {id:1, student:{name: 'Raquel', subject: 1, paymentDay: '10', startDate: '08-01-2022', frequency: 0, time: '09:00', studentIcon: 2,}},
        {id:2, student:{name: 'Gabriel', subject: 0, paymentDay: '15', startDate: '07-01-2022', frequency: 1, time: '10:00', studentIcon: 1,}},
        {id:3, student:{name: 'Thamires', subject: 0, paymentDay: '25', startDate: '06-01-2022', frequency: 0, time: '11:00', studentIcon: 2,}},
        {id:4, student:{name: 'Zezefredo', subject: 0, paymentDay: '25', startDate: '06-01-2022', frequency: 0, time: '13:00', studentIcon: 1,}},
        {id:5, student:{name: 'Jeremilda', subject: 1, paymentDay: '30', startDate: '05-09-2022', frequency: 1, time: '14:00', studentIcon: 2,}},
        {id:6, student:{name: 'Palpatone', subject: 0, paymentDay: '15', startDate: '03-15-2021', frequency: 0, time: '15:00', studentIcon: 1,}},
        {id:7, student:{name: 'Marenilda', subject: 0, paymentDay: '20', startDate: '02-27-2020', frequency: 1, time: '16:00', studentIcon: 2,}},
    ]

    const [studentsList, setStudentsList] = useState(students);

    const addStudent = (newStudent) => {
        setStudentsList([...studentsList, newStudent])
    }

    return(
        <StudentContext.Provider value={{
            studentsList,
            addStudent
        }}>
            {children}
        </StudentContext.Provider>
    );
}