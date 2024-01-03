import React, { createContext,useState } from "react";

export const AppContext=createContext();

const Parentcontext=({children})=>{
    const[state,setState]=useState("")
    return(
        <AppContext.Provider value={{state,setState}}>
        {children}
        </AppContext.Provider>
    )

}

export default Parentcontext;

