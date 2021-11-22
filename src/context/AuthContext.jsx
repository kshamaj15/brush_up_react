import React, { useContext, useState } from 'react';
// import { auth } from '../firebase';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {

    const [currentUser, setCurrentUser] = useState();
    const contextObj = { currentUser };

    return (
        <AuthContext.Provider value={contextObj}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
