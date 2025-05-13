import { createContext, useContext, useState } from 'react';

const FloraMatchContext = createContext();

export const FloraMatchProvider = ({ children }) => {
    const [isMatchForm, setIsMatchForm] = useState(true);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({
        petFriendly: 'cat_safe',
        bloomingSeason: 'spring',
        careDifficulty: 'easy',
        environment: 'full-sun',
    });
    const [matchedFlowers, setMatchedFlowers] = useState([]);
    const [fallbackFlowers, setFallbackFlowers] = useState([]);
    
    return (
        <FloraMatchContext.Provider value={{
            isMatchForm,
            setIsMatchForm,
            filter,
            setFilter,
            matchedFlowers,
            setMatchedFlowers,
            fallbackFlowers,
            setFallbackFlowers,
            loading,
            setLoading
        }}>
            {children}
        </FloraMatchContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFloraMatch = () => useContext(FloraMatchContext);

