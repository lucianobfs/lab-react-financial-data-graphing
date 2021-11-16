import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

import InputDate from "./InputDate";
import Highest from "./Highest";
import Lowest from "./Lowest";



function Graph() {
    const [priceData, setPriceData] = useState({});
    const [loading, setLoading] = useState(true);
    const [chart, setChart] = useState(null);

    const [data, setData] = useState({})

    const [link, setLink] = useState(`http://api.coindesk.com/v1/bpi/historical/close.json`)

    console.log(data)

    useEffect(() => {
        setLoading(true)
        axios.get(link).then((response) => {
            setPriceData({...response.data.bpi})
            console.log(priceData)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })

    
        

    }, [data, link])

    useEffect(() => {
        if (data !== {}) {

            // if (chart) {
            //     chart.destroy()
            // }

          setLink(
            `https://api.coindesk.com/v1/bpi/historical/close.json?start=${data.initialDate}&end=${data.finalDate}&currency=${data.currency}`
          );
        }
      }, [data]);


    useEffect(() => {
        if (!loading) {
            function renderChart() {
                let ctx = document.getElementById('myCanvas').getContext('2d')

                if (chart) {
                    chart.destroy()
                }

                let chartInstance = new Chart(ctx, {
                    width: "100px",
                    height: "100px",
                    type: 'line',
                    data: {
                        labels: Object.keys(priceData),
                        datasets: [
                            {
                                label: "Bitcoin Price $BTC",
                                data: Object.values(priceData),
                                borderColor: "#0330fc",
                                backgroundColor: "#03b1fc",
                                fill: true,
                            },
                        ],
                    },
                })

                setChart(chartInstance)

            }

            renderChart()
        }
    }, [loading, priceData, data])

    return (
        <div>

            <div  className="d-flex justify-content-around align-items-end">
                <InputDate setData={setData}/>

            </div>
        
            {loading ? <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : <canvas id="myCanvas" className="mt-5" />}


        <div className="d-flex justify-content-around">
            <Lowest teste={priceData} dados={data}/>

            <Highest teste={priceData} dados={data}/>
        </div>


        </div>
    )

}




export default Graph