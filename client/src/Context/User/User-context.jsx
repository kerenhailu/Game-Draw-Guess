import { useEffect, useState, createContext } from "react";
import jwt_decode from "jwt-decode";
export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    // const [wordDraw, setWordDraw] = useState("");
    const [guessWord, setGuessWord] = useState("");
    const [rightWord, setRightWord] = useState("");
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() =>{
    //     if (localStorage.token!==undefined) {
    //         const token = localStorage.getItem("token");
    //         const decoded = jwt_decode(token);
    //         setUser(decoded.user);
    //         setIsLoggedIn(true)
    //     }
    //     }, []); 
    return (
        <UsersContext.Provider value={{user, setUser,rightWord, setRightWord,guessWord, setGuessWord} }>
            {children}
        </UsersContext.Provider>
    )
};