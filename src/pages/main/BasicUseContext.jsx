import React, { createContext, useContext } from 'react'

// Cần phải đưa vào route
const ContextMain = createContext(null);

const FatherComp = () => {
    const contextValue = {name: "Spiritus"};

    return(
        <ContextMain.Provider value={contextValue}>
            <SonComp/>
        </ContextMain.Provider>
    );
}

const SonComp = () => {
    const { name } = useContext(ContextMain);
  return (
    <div>{name}</div>
  )
}

export default SonComp;