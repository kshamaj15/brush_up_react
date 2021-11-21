import { useEffect } from "react";

const useUpdateLogger = (value) => {
    useEffect(() => {
        console.log('Updated', value);
        return () => console.log('Prev', value);
    }, [value])
}

export default useUpdateLogger;