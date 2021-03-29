import React, { useContext, useState } from "react";

import { AppContext } from "./AppContext";

import "../sass/BaseCurrencyForm.scss";

const BaseCurrencyForm = () => {
  const { currencies, baseCurrency, handleUpdateBaseCurrency, handleUpdateCurrencies } = useContext(
    AppContext
  );
  const [newFormCurrency, setNewFormCurrency] = useState(baseCurrency);

  const currenciesArray = Object.keys(currencies).map((currency) => [
    String(currency),
  ]);

  const listOfCurrenciesForForm = currenciesArray.map((currency) => (
    <option value={currency[0]} key={currency[0]}>
      {currency[0]}
    </option>
  ));

  const handleChanageCurrency = ({ target }) => {
    const { value } = target;
    setNewFormCurrency(value);
  };

  const handleSubmitNewBaseCurrency = (event) => {
    event.preventDefault();
    handleUpdateBaseCurrency(newFormCurrency);
    handleUpdateCurrencies(newFormCurrency);
  };

  return (
    <form className="base-currency-form" onSubmit={handleSubmitNewBaseCurrency}>
      <select
        className="base-currency-form__selector"
        name="currency"
        value={newFormCurrency}
        onChange={handleChanageCurrency}
      >
        {listOfCurrenciesForForm}
      </select>
      <input type="submit" className="button" value="Set new currency" />
    </form>
  );
};

export default BaseCurrencyForm;
