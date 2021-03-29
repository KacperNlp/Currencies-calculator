import React, {useContext} from 'react';

import ActiveCurrency from "./ActiveCurrency.jsx";
import BaseCurrencyForm from "./BaseCurrencyForm.jsx";
import ConverterForm from "./ConverterForm.jsx";
import CurrenciesList from "./CurrenciesList.jsx";
import ErrorWithAPI from "./ErrorWithAPI.jsx";

import {AppContext} from './AppContext';

const SiteContent = () => {
    const { errorWithAPI, currencies } = useContext(AppContext);
    
    const isBeforeAPIDownload = currencies.length === 0;
    const classForMain = isBeforeAPIDownload ? 'not-visible' : null;

    const siteContent = errorWithAPI ? (
      <ErrorWithAPI />
    ) : (
      <main className={classForMain}>
        <ActiveCurrency />
        <ConverterForm />
        <BaseCurrencyForm />
        <CurrenciesList />
      </main>
    );
    return siteContent;
}
 
export default SiteContent;