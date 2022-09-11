import React, { useEffect, useState, createContext, useContext } from 'react';
import { formatNumber } from '../helpers/dateHandler';

export const DatePickerContext = createContext({})

export const DatePickerProvider = ({children}) => {

    const [paymentDay, setPaymentDay] = useState('')

    const currentDay = (currentDay) => {
        return currentDay.getDate()
    }

    const openDayPicker = (Android, onChangeDay) => {
        Android.open(
            {value: new Date(),
            onChange: onChangeDay,
            mode: 'date',
        });
    }

    return(
        <DatePickerContext.Provider value={{
            currentDay,
            openDayPicker
        }}>
            {children}
        </DatePickerContext.Provider>
    );
}