import React from 'react';

import '../sass/ErrorWithAPI.scss';

const ErrorWithAPI = () => {
    return ( 
        <div className="error">
            <p className="error__text">Sorry, we have a problem with API, try again later :)</p>
        </div>
     );
}
 
export default ErrorWithAPI;