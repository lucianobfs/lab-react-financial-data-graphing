import { useState, useEffect } from "react";


function Highest(props) {

    let [symbol, setSymbol] = useState('US$')

    let maior = Math.max.apply(Math, Object.values(props.teste))

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
        <h2>Highest Price: {symbol} {maior}</h2>
    )

}



export default Highest