import {useEffect, useState} from 'react';

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json())
        then((res) => {
            setCurrencyInfo(res[currency]);
        }
    )
    },[currency])
    return currencyInfo;
}
export default useCurrencyInfo;
//
// 1. useCurrencyInfo is a custom React hook that fetches currency information from an API.
// 2. It takes a currency code as an argument and returns the corresponding currency information.
// 3. The hook uses the useState and useEffect hooks from React.
// 4. useState is used to manage the state of the currency information.
