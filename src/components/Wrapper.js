import React, { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style.css'
import FormBMI from './FormBMI';
import DataBMI from './DataBMI';
import { clearData } from '../helper/localStorage';
import {Bar} from './Bar.js';


export const UpdateBMIContext = createContext();

function Wrapper() {

    const [isUpdateBMI, setIsUpdateBMI] = useState(false);
    
    const handleClear = () => {
        clearData('data')
        setIsUpdateBMI(true)
    }

    return (  
        <UpdateBMIContext.Provider value={{isUpdateBMI, setIsUpdateBMI}}>
            <div className="wrapper">
                <span className='title'>BMI Tracker</span>
                <FormBMI/>
                <Bar setIsUpdateBMI={setIsUpdateBMI}/>
                <span className='d-flex justify-content-center text-light mt-5 fs-1' >7 Day Data</span>
                <DataBMI/>
                <div className='undo-container'>
                    <button className="undo" onClick={() => handleClear()}>Clear</button>
                </div>
                
            </div>
        </UpdateBMIContext.Provider>
        
    );
}

export default Wrapper;