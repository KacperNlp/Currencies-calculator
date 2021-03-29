import React from 'react';

const CurrenciesTable = ({tableRowsWithCurrencies}) => {
    return ( 
    <table className="currencies-table">
        <thead className="currencies-table__header">
            <tr>
                <th>Currency</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody className="currencies-table__body">
            {tableRowsWithCurrencies}
        </tbody>
    </table>
     );
}
 
export default CurrenciesTable;