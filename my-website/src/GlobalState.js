// GlobalState.js
import React, { createContext, useState, useContext } from 'react';

// Criando um contexto
const GlobalStateContext = createContext();

// Criando um provedor para fornecer o contexto para toda a aplicação
export const GlobalStateProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Função para alterar o valor da variável global
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <GlobalStateContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useGlobalState = () => useContext(GlobalStateContext);
