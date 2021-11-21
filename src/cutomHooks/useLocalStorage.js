import { useEffect, useState } from 'react';

const setInLocalStorage = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
}

const getSavedValue = (key, intitialValue) => {
    const val =  JSON.parse(localStorage.getItem(key));
    if(val) return val;

    if(intitialValue instanceof Function) return intitialValue();
    return intitialValue;
}

const useLocalStorage = (key, intitialValue = null) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, intitialValue);
    });

    useEffect(() => {
        setInLocalStorage(key, value);
    }, [value])

    return [value, setValue];
}

export default useLocalStorage;
