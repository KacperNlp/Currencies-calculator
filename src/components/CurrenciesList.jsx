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
      ]).filter((currency) => { //filter to remove didn't match currencies
      let [name, value] = currency;
        const currencyValue = Number((value * converter).toFixed(2))
        value = currencyValue;
        if((searchedCurrency === '' || name.includes(searchedCurrency)) && currencyValue !== 0.00){
            currency[1] = value;
            return  currency;
        }
      })

    const tableRowsWithCurrencies = currenciesArray.map(([name, value]) => <CurrencyTableRow name={name} value={value} key={name}/>)

    const isAnyCurrencyOnList = !!tableRowsWithCurrencies.length ? <CurrenciesTable tableRowsWithCurrencies={tableRowsWithCurrencies}/> : <p className="currencies-table__message">We didn't find any currency, sorry...</p>;

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
                    <input className="search__input" onChange={handleSetInputSearchingValue} type="search" value={searchingCurrency}/>
                </label>
                <button className="fas fa-search button" onClick={handleSubmitSearching}></button>
            </div>
            {isAnyCurrencyOnList}
        </section>
     );
}
 
export default CurrenciesList;