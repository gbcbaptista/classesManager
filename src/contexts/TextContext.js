import React, { useEffect, useState } from 'react';
import { createContext, useContext } from "react";

export const TextContext = createContext({})

export const TextProvider = ({children}) => {

    const labels = {
        english: {
            hey: "Hi",
            toReceive: "To receive",
            received: "Received",
            moneySymbol: "U$",
            todayClasses: "Today classes",
            subject: "Subject",
            subjects: ['Piano', 'Organ', 'Musical Theory'],
            paymentDay: "Payment Day",
            day: "Day",
            frequency: "Frequency",
            frequencies: ['Weekly', 'Biweekly'],
            time: 'Time',
            newStudentTitle: "New Student",
            name: "Name",
            startDate: 'Start Date'

        },
        portuguese: {
            hey: "Olá",
            toReceive: "À receber",
            received: "Recebido",
            moneySymbol: "R$",
            todayClasses: "Aulas de hoje",
            subject: "Matéria",
            subjects: ['Piano', 'Orgão', 'Teoria Musical'],
            paymentDay: "Dia de Pagamento",
            day: "Dia",
            frequency: "Frequência",
            frequencies: ['Semanal', 'Quinzenal'],
            time: 'Horário',
            newStudentTitle: "Novo Aluno",
            name: "Nome",
            startDate: 'Data de Inicio',
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