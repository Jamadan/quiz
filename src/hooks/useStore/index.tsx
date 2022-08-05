import React, { createContext, useContext } from 'react';
import { Store } from '../../types/Store';
import { useQuestions } from './useQuestions';

const StoreContext = createContext<Store>(undefined!);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const questionList = useQuestions();
  return (
    <StoreContext.Provider
      value={{
        questionList,
      }}
    >
      {children};
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
