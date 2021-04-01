import React from 'react';
import Top100 from './Top100'
import BitcoinPrice from './BitcoinPrice'
const CryptoApp = () => {
    return (
        <div>
            wellcome to crypto app
            <BitcoinPrice />
            <Top100 />
        </div>
    );
}

export default CryptoApp;
