import React, { useContext,useEffect } from 'react';
import { UpdateBMIContext } from './Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { getData, saveData } from '../helper/localStorage';

function DataBMI() {

    const {setIsUpdateBMI} = useContext(UpdateBMIContext)
    
    setIsUpdateBMI(false)

    const handleRemoveData = (index) => {
        
        let arrayData = getData('data');
        arrayData.splice(index,1)
        saveData('data', arrayData)
        console.log(index, arrayData)
        setIsUpdateBMI(true)
    
    }

    return ( 
        <div className='DataBMI-container'>
            { getData('data').length !== 0 ? getData('data').map((data, index) => {
            
            return (
            <div className='DataBMI-item' key={index}>
                
                <FontAwesomeIcon className='removeItem' onClick={() => handleRemoveData(index)} icon={faCircleXmark} />

                <div className='item1'>
                    <span>
                        BMI: {data.BMI}
                    </span>
                    
                </div>

                <div className='item2'>
                    <span>
                        Weight: {data.weight}
                    </span>
                    <span>
                        Height: {data.height}
                    </span>
                    <span>
                        Date: {data.date}
                    </span>
                    
                </div>
            </div>
            );
        }) : <span className='noData d-flex justify-content-center align-items-center fs-3 ' >No data found</span>}
        </div>
     );
}

export default DataBMI;