import React from 'react';

const CurrencyTableRow = ({name, value}) => {
    return ( 
        <tr>
            <td>{name}</td>
            <td>{value}</td>
        </tr>
     );
}
 
export default CurrencyTableRow;