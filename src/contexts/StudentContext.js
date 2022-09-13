import React, { useEffect, useState, createContext, useContext } from 'react';

export const StudentContext = createContext({})

export const StudentProvider = ({children}) => {

    const newStudentModel = {
        id: 1,
        student: {
            'name': '',
            'subject': 0,
            'paymentDay': 0,
            'startDate': '',
            'frequency': 0,
            'time': '',
            'gender': 0,
            'email': '',
            'phone': ''
        }
    }

    const students = [
        {id:1, student:{name: 'Raquel', subject: 1, paymentDay: 10, startDate: '2022-09-21T01:03:09.238Z', frequency: 0, time:'2022-09-12T18:13:21.767Z', gender: 0, email: "raquel@gmail.com", phone: '11 978610746'},},
        {id:2, student:{name: 'Gabriel', subject: 1, paymentDay: 15, startDate: '2022-09-21T01:03:09.238Z', frequency: 1, time:'2022-09-12T18:13:21.767Z', gender: 0, email: "gabriel@gmail.com", phone: '11 978610746'},},
        {id:3, student:{name: 'Thamires', subject: 0, paymentDay: 25, startDate: '2022-09-21T01:03:09.238Z', frequency: 0, time:'2022-09-12T18:13:21.767Z', gender: 0, email: "thamires@gmail.com", phone: '11 978610746'},},
        {id:4, student:{name: 'Zezefredo', subject: 0, paymentDay: 25, startDate: '2022-09-21T01:03:09.238Z', frequency: 0, time:'2022-09-12T18:13:21.767Z', gender: 1, email: "zezefredo@gmail.com", phone: '11 978610746'},},
        {id:5, student:{name: 'Jeremilda', subject: 1, paymentDay: 30, startDate: '2022-09-21T01:03:09.238Z', frequency: 1, time:'2022-09-12T18:13:21.767Z', gender: 0, email: "jeremilda@gmail.com", phone: '11 978610746'},},
        {id:6, student:{name: 'Palpatone', subject: 0, paymentDay: 15, startDate: '2022-09-21T01:03:09.238Z', frequency: 0, time:'2022-09-12T18:13:21.767Z', gender: 1, email: "papatone@gmail.com", phone: '11 978610746'},},
        {id:7, student:{name: 'Marenilda', subject: 0, paymentDay: 20, startDate: '2022-09-21T01:03:09.238Z', frequency: 1, time:'2022-09-12T18:13:21.767Z', gender: 0, email: "marenilda@gmail.com", phone: '11 978610746'},},
        {id:8, student:{name: 'Jeremilda', subject: 1, paymentDay: 30, startDate: '2022-09-21T01:03:09.238Z', frequency: 1, time:'2022-09-12T18:13:21.767Z', gender: 0, email: "jeremilda@gmail.com", phone: '11 978610746'},},
        {id:9, student:{name: 'Palpatone', subject: 0, paymentDay: 15, startDate: '2022-09-21T01:03:09.238Z', frequency: 0, time:'2022-09-12T18:13:21.767Z', gender: 1, email: "papatone@gmail.com", phone: '11 978610746'},},
        {id:10, student:{name: 'Marenilda', subject: 0, paymentDay: 20, startDate: '2022-09-21T01:03:09.238Z', frequency: 1, time:'2022-09-12T18:13:21.767Z', gender: 0, email: "marenilda@gmail.com", phone: '11 978610746'},}
    ]

    const [studentsList, setStudentsList] = useState(students);

    const addStudent = (newStudent) => {
        setStudentsList([...studentsList, newStudent])
    }

    return(
        <StudentContext.Provider value={{
            newStudentModel,
            studentsList,
            addStudent
        }}>
            {children}
        </StudentContext.Provider>
    );
}