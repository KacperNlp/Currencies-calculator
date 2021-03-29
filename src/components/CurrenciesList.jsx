import React, { useContext, useState } from 'react';

import CurrencyTableRow from './CurrencyTableRow'
import CurrenciesTable from './CurrenciesTable'
import {AppContext} from './AppContext';

import '../sass/CurrenciesList.scss';

const CurrenciesList = () => {
    const {currencies, converter} = useContext(AppContext);
    const [searchingCurrency, setSearchingCurrency] = useState('');
    const [searchedCurrency, setSearchedCurrency] = useState('')

    const currenciesArray =  Object.keys(currencies).map((currency) => [
        String(currency),
        parseFloat(currencies[currency]).toFixed(2)
      ]).filter(currency => { //filter to remove didn't match currencies
        const currencyValue = Number((currency[1] * converter).toFixed(2))
        currency[1] = currencyValue;
        if((searchedCurrency === '' || currency[0].includes(searchedCurrency)) && currencyValue !== 0.00){
            return  currency;
        }
      })

    const tableRowsWithCurrencies = currenciesArray.map(currency => {
        return  <CurrencyTableRow name={currency[0]} value={currency[1]} key={currency[0]}/>;
    })

    const isAnyCurrencyOnList = tableRowsWithCurrencies.length > 0 ? <CurrenciesTable tableRowsWithCurrencies={tableRowsWithCurrencies}/> : <p className="currencies-table__message">We didn't find any currenyc, sorry...</p>;

    const handleSetInputSearchingValue = ({target}) => {
        const {value} = target;
        setSearchingCurrency(value.toUpperCase());
    }

    const handleSubmitSearching = () =>{
        setSearchedCurrency(searchingCurrency)
        setSearchingCurrency('');
    }

    return ( 
        <section className="table-with-currencies">
            <h2 className="table-with-currencies__header">List of currencies:</h2>
            <div className="search">
                <label>
                    <p className="search__text">Search currency:</p>
                    <input type="search" className="search__input" value={searchingCurrency} onChange={handleSetInputSearchingValue}/>
                </label>
                <button className="fas fa-search button" onClick={handleSubmitSearching}></button>
            </div>
            {isAnyCurrencyOnList}
        </section>
     );
}
 
export default CurrenciesList;