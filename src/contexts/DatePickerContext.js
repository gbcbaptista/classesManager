import React, { useEffect, useState, createContext, useContext } from 'react';
import { formatNumber } from '../helpers/dateHandler';

export const DatePickerContext = createContext({})

export const DatePickerProvider = ({children}) => {

    //day
    const [paymentDay, setPaymentDay] = useState('')

    const currentDay = (day) => {
        return day.getDate()
    }

    const openDayPicker = (Android, onChangeDay) => {
        Android.open(
            {value: new Date(),
            onChange: onChangeDay,
            mode: 'date',
        });
    }

    //date
    const currentDate = (startDate, texts) => {
        return `${texts.weekDays[startDate.getDay()]} ${formatNumber(startDate.getDate())} ${texts.months[startDate.getMonth()]} ${startDate.getFullYear()}`
    }

    const openDatePicker = (Android, onChangeDate) => {
        Android.open(
            {value: new Date(),
            onChange: onChangeDate,
            mode: 'date',
        });
    }

    return(
        <DatePickerContext.Provider value={{
            currentDay,
            openDayPicker,

            currentDate,
            openDatePicker
        }}>
            {children}
        </DatePickerContext.Provider>
    );
}