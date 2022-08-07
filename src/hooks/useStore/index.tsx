import React, { createContext, useContext } from 'react';
import { Store } from '../../types/Store';
import { useQuestions } from './useQuestions';

const StoreContext = createContext<Store>(undefined!);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const questionList = useQuestions({
    questionsUrl:
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  });
  return (
    <StoreContext.Provider
      value={{
        questionList,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
