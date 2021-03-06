import React, { createContext, useContext, useEffect, useState } from "react";

const API = "https://api.exchangeratesapi.io/latest?base=";

const defaultContextProps = {
  baseCurrency: "USD",
  converter: 1,
  errorWithAPI: false,
  restCurrencies: [],
};

const getCurrencies = async (baseCurrency) => {
  const response = await fetch(API + baseCurrency);
  return response.json();
};

export const AppContext = createContext(defaultContextProps);

export const AppProvider = ({ children }) => {
  const {
    baseCurrency: defaultBaseCurrency,
    restCurrencies,
    converter: converterDefault,
    errorWithAPI: defaultErrorWithAPI,
  } = useContext(AppContext);
  const [baseCurrency, setBaseCurrency] = useState(defaultBaseCurrency);
  const [currencies, setCurrencies] = useState(restCurrencies);
  const [converter, setConverter] = useState(converterDefault);
  const [errorWithAPI, setErrorWithAPI] = useState(defaultErrorWithAPI);

  const updateCurrencies = (newBaseCurrency = baseCurrency) => {
    const getCurrenciesFromApi = getCurrencies(newBaseCurrency);
    getCurrenciesFromApi
      .then((data) => {
        if (!data.succes) setCurrencies({ USD: 1 });
        else setCurrencies(data.rates);
        setErrorWithAPI(false);
      })
      .catch((err) => {
        setErrorWithAPI(true);
      });
  };

  const handleUpdateCurrencies = (newBaseCurrency) =>
    updateCurrencies(newBaseCurrency);

  const handleUpdateBaseCurrency = (newBaseCurrency) =>
    setBaseCurrency(newBaseCurrency);

  const handleChangeConverter = (value) => setConverter(value);

  useEffect(updateCurrencies, []);

  return (
    <AppContext.Provider
      value={{
        baseCurrency,
        currencies,
        converter,
        errorWithAPI,
        handleUpdateBaseCurrency,
        handleUpdateCurrencies,
        handleChangeConverter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
