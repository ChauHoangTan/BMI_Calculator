import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UpdateBMIContext } from './Wrapper';
import getDateTime from '../logic/calculateBMI';
import {addData } from '../helper/localStorage';

function FormBMI() {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const {setIsUpdateBMI} = useContext(UpdateBMIContext)

    const handleChangeWeight = (e) => {
        setWeight(e.target.value)
    }

    const handleChangeHeight = (e) => {
        setHeight(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUpdateBMI(true)

        if(weight !== "" && height !== ""){
            if(typeof(Storage) !== 'undefined'){
                let objectBMI = {
                    weight: weight,
                    height: height,
                    BMI: (parseInt(weight)/((parseInt(height)/100)*(parseInt(height)/100))).toFixed(2),
                    date: getDateTime()
                }

                setHeight("");
                setWeight("");

                // kiểm tra xem localstorage lưu bao nhiêu data
                // nếu > 7 thì xóa cái cũ nhất
                addData(objectBMI)
            }
        }
        
    }

    return ( 
        <form className='formBMI ' onSubmit={handleSubmit}>

            <div className='grid-container'>
                <div className='grid-item'>
                    <label htmlFor="weight">weight (in Kg)</label><br/>
                    <input name='weight' id='weight' className='field' placeholder='50' onChange={handleChangeWeight} value={weight}/>
                </div>
                
                <div className='grid-item'>
                    <label htmlFor="Height">Height (in cm)</label><br/>
                    <input name='Height' id='Height' className='field' placeholder='176' onChange={handleChangeHeight} value={height}/>
                </div>
            </div>
            

            <input className='btnSubmit mt-2' type='submit' value={'Calculate BMI'}/>
        </form>
     );
}

export default FormBMI;