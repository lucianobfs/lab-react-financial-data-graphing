import { useState, useEffect } from "react";

function Lowest(props) {

    let [symbol, setSymbol] = useState('US$')

    let menor = Math.min.apply(Math, Object.values(props.teste))

    useEffect(() => {
        if (props.dados.currency === undefined || props.dados.currency === 'USD') {
            setSymbol('US$')
        }

        if (props.dados.currency === 'EUR') {
            setSymbol('€')
        }

        if (props.dados.currency === 'BRL') {
            setSymbol('R$')
        }


    }, [symbol, props.dados.currency])

    
    return (
        <h2>Lower Price: {symbol} {menor}</h2>
    )

}

export default Lowest