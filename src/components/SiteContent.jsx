import React, {useContext} from 'react';

import BaseCurrencyForm from "./BaseCurrencyForm";
import ConverterForm from "./ConverterForm";
import CurrenciesList from "./CurrenciesList";
import ErrorWithAPI from "./ErrorWithAPI";
import HeaderWithInfo from "./HeaderWithInfo";

import {AppContext} from './AppContext';

const SiteContent = () => {
    const { errorWithAPI, currencies } = useContext(AppContext);
    
    const isBeforeAPIDownload = currencies.length === 0;
    const classForMain = isBeforeAPIDownload ? 'not-visible' : null;

    const siteContent = errorWithAPI ? (
      <ErrorWithAPI />
    ) : (
      <main className={classForMain}>
        <HeaderWithInfo />
        <ConverterForm />
        <BaseCurrencyForm />
        <CurrenciesList />
      </main>
    );
    return siteContent;
}
 
export default SiteContent;