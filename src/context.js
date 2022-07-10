// context creation
// provider 
// consumer lengthy remove useContext hook
// useContext hook 
import React, { useContext } from "react";

const AppContext = React.createContext();

// to create a provider function 
const AppProvider = ({children}) => {
    return (
        <AppContext.Provider value={"test Text"}>
            {children}
        </AppContext.Provider>
    )
}

// custom hook create
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider , useGlobalContext }