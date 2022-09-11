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
    const currentDate = (date, texts) => {
        return `${texts.weekDays[date.getDay()]} ${formatNumber(date.getDate())} ${texts.months[date.getMonth()]} ${date.getFullYear()}`
    }

    const openDatePicker = (Android, onChangeDate) => {
        Android.open(
            {value: new Date(),
            onChange: onChangeDate,
            mode: 'date',
        });
    }

    //time
    const currentTime = (currentTime) => {
        return `${formatNumber(currentTime.getHours())}:${formatNumber(currentTime.getMinutes())}`
    }

    const openTimePicker = (Android, onChangeTime) => {
        Android.open(
            {value: new Date(),
            onChange: onChangeTime,
            mode: 'time',
        });
    }

    return(
        <DatePickerContext.Provider value={{
            currentDay,
            openDayPicker,

            currentDate,
            openDatePicker,

            currentTime,
            openTimePicker
        }}>
            {children}
        </DatePickerContext.Provider>
    );
}