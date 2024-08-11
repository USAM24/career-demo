import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { initialFormCompanyData, initialUserFormData } from '../data';

// Create a Context for the multi-step process
export const MultiStepContext = createContext();

// Create a provider component
export const MultiStepProvider = ({ children }) => {
  // Define the states
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState(initialUserFormData);
  const [companyData, setCompanyData] = useState(initialFormCompanyData);
  const [finalData, setFinalData] = useState({});

  // Create a value object with the state and functions
  const value = {
    currentStep,
    setCurrentStep,
    userData,
    setUserData,
    companyData,
    setCompanyData,
    finalData,
    setFinalData,
  };

  return (
    <MultiStepContext.Provider value={value}>
      {children}
    </MultiStepContext.Provider>
  );
};

MultiStepProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
