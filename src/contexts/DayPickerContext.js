import React, { useEffect, useState, createContext, useContext } from 'react';
import { formatNumber } from '../helpers/dateHandler';

export const DayPickerContext = createContext({})

export const DayPickerProvider = ({children}) => {

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
        <DayPickerContext.Provider value={{
            currentDay,
            openDayPicker
        }}>
            {children}
        </DayPickerContext.Provider>
    );
}