import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import axios from "axios";



function InputDate(props) {

    let [formData, setFormData] = useState({
        initialDate: '',
        finalDate: '',
        currency: 'USD'
    })



    function handleChange(event) {
        let value = event.target.value

        let valueOpt = event.target.option

        setFormData({...formData, [event.target.name]: value || valueOpt})

        // console.log(formData)
    }

    function handleSubmit(event) {


        event.preventDefault()

        console.log(formData)

        props.setData(formData)
       
    }



    return (
        <div className="d-flex d-row align-items-center">

        <form onSubmit={handleSubmit}>

            <label className="label">
                Start: 
                <input className="form-control" type="date" name="initialDate" value={formData.initialDate} onChange={handleChange}/>
            </label>


            <label className="label">
                End: 
                <input className="form-control" type="date" name="finalDate" value={formData.finalDate} onChange={handleChange}/>
            </label>

            <select class="form-select" aria-label="Default select example" onChange={handleChange} name="currency">
                <option selected value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="BRL" >BRL</option>
            </select>

            <button type="submit"  className="btn btn-light w-100">Filter</button>


        </form>



        </div>
    )

}



export default InputDate