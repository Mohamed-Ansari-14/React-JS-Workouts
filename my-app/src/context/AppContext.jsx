import { createContext } from "react";

export const AppContext = createContext();
//1.Creating Context:
const ContextProvider = (props)=>{
    const phone = "+91 7301248975"; 
    const name = "Jhon Wick";

    return(                         //Passing as Object
        <AppContext.Provider value={ {phone, name} }> 
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;