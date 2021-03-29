import React, { useContext } from "react";

import { AppContext } from "./AppContext";
import "../sass/ActiveCurrency.scss";

const ActiveCurrency = () => {
  const { baseCurrency } = useContext(AppContext);
  return (
    <div className="active-currency">
      <p className="active-currency__text">
        Active currrency:
        <span className="active-currency__currency">{baseCurrency}</span>
      </p>
    </div>
  );
};

export default ActiveCurrency;
