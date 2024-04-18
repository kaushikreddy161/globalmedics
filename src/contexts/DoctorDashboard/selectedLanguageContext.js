import { createContext, useContext, useState } from 'react';

const selectedLanguageContext = createContext();

export const useSelectedLanguage = () => {
    const context = useContext(selectedLanguageContext);
    if (context === undefined) {
        throw new Error('useSelectedLanguage must be used within a SelectedLanguageProvider');
    }
    return context;
};

export const SelectedLanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("en-US");
    return (
        <selectedLanguageContext.Provider value={[selectedLanguage, setSelectedLanguage]}>
            {children}
        </selectedLanguageContext.Provider>
    );
};