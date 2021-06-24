import { createContext, useState, useContext } from 'react';

const VatContext = createContext(null);

export const useVat = () => {
  const context = useContext(VatContext);

  if (context === null) {
    throw new Error('useVat must be used within VatProvider');
  }

  return context;
};

const vatProvider = ({ children }) => {
  const [incVat, setIncVat] = useState(true);

  const toggle = () => setIncVat(!incVat);

  return (
    <VatContext.Provider value={{ incVat, toggle }}>
      {children}
    </VatContext.Provider>
  );
};

export default vatProvider;
