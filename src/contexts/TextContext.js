import React, { useEffect, useState } from 'react';
import { createContext, useContext } from "react";

export const TextContext = createContext({})

export const TextProvider = ({children}) => {

    const labels = {
        english: {
            locale: 'en-US',
            hey: "Hi",
            toReceive: "To receive",
            received: "Received",
            moneySymbol: "U$",
            todayClasses: "Today classes",
            subject: "Subject",
            subjects: [
                {label: 'Piano', value: 0},
                {label: 'Organ', value: 1},
                {label: 'Musical Theory', value: 2}
              ],
            paymentDay: "Payment Day",
            day: "Day",
            frequency: "Frequency",
            frequencies:[
                {label: 'Weekly', value: 0},
                {label: 'Biweekly', value: 1}
              ],
            time: 'Time',
            newStudentTitle: "New Student",
            name: "Name",
            startDate: 'Start Date',
            month: 'Month',
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            day: 'Day',
            weekDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            save: 'Save',
            email: "Email",
            phone: "Phone",

        },
        portuguese: {
            locale: 'pt-br',
            hey: "Olá",
            toReceive: "À receber",
            received: "Recebido",
            moneySymbol: "R$",
            todayClasses: "Aulas de hoje",
            subject: "Matéria",
            subjects: [
                {label: 'Piano', value: 0},
                {label: 'Orgão', value: 1},
                {label: 'Teoria Musical', value: 2}
              ],
            paymentDay: "Dia de Pagamento",
            day: "Dia",
            frequency: "Frequência",
            frequencies: [
                {label: 'Semanal', value: 0},
                {label: 'Quinzenal', value: 1}
              ],
            time: 'Horário',
            newStudentTitle: "Novo Aluno",
            name: "Nome",
            startDate: 'Data de Inicio',
            month: 'Mês',
            months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            day: 'Dia',
            weekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            save: 'Salvar',
            email: "Email",
            phone: "Celular",
        }
    }

    const [language, setLanguage] = useState(true);
    const [texts, setTexts] = useState(labels.portuguese)

    useEffect(
        () => handleTextsLanguageChange(),
        [language]
    )

    const handleTextsLanguageChange = () => {
        if (language){
            setTexts(labels.portuguese);
        } else if (!language) {
            setTexts(labels.english);
        } 
    }

    return(
        <TextContext.Provider value={{
            texts,
            language,
            setLanguage
        }}>
            {children}
        </TextContext.Provider>
    );
}