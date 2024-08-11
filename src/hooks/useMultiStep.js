import { useContext } from 'react';
import { MultiStepContext } from '../context/MultiStepContext';

// Custom hook to use the MultiStepContext
export const useMultiStep = () => {
  return useContext(MultiStepContext);
};
