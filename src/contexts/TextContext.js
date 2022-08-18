import React, { useEffect, useState } from 'react';
import { createContext, useContext } from "react";

export const TextContext = createContext({})

export const TextProvider = ({children}) => {

    const labels = {
        english: {
            hey: "Hi, ",
            toReceive: "To receive: ",
            received: "Received: ",
            moneySymbol: "U$",
            todayClasses: "Today classes",
        },
        portuguese: {
            hey: "Olá, ",
            toReceive: "À receber: ",
            received: "Recebido: ",
            moneySymbol: "R$",
            todayClasses: "Aulas de hoje",
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