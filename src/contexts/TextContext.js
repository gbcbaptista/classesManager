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
        },
        portuguese: {
            hey: "Olá, ",
            toReceive: "À receber: ",
            received: "Recebido: ",
            moneySymbol: "R$",
        }
    }

    const [language, setLanguage] = useState(true);
    const [texts, setTexts] = useState(labels.english)

    useEffect(
        () => handleTextsLanguageChange(),
        [language]
    )

    const handleTextsLanguageChange = () => {
        if (language){
            setTexts(labels.english);
        } else if (!language) {
            setTexts(labels.portuguese);
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