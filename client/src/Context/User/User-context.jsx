import { useEffect, useState, createContext } from "react";
import jwt_decode from "jwt-decode";
export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [rightWord, setrightWord] = useState({});
    // const userON = JSON.parse(localStorage.getItem("user"));
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() =>{
        if (localStorage.token!==undefined) {
            const token = localStorage.getItem("token");
            const decoded = jwt_decode(token);
            setUser(decoded.user);
            setIsLoggedIn(true)
        }
        }, []); 
    return (
        <UsersContext.Provider value={{user, setUser, isLoggedIn, setIsLoggedIn,rightWord, setrightWord} }>
            {children}
        </UsersContext.Provider>
    )
};