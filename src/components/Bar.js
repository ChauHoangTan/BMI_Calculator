import React, { useContext, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getData } from '../helper/localStorage';
import { UpdateBMIContext } from './Wrapper';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date',
            fontSize: 18,
            fontColor: 'white'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'BMI',
            fontSize: 18,
            fontColor: 'white'
          },
          gridLines: {
            display: false,
            color: 'white'
          },
          ticks: {
            fontColor: 'white',
            fontSize: 16,
            beginAtZero: true
          }
        }
      ]
    },
    tooltips: {
      titleFontSize: 13,
      bodyFontSize: 13
    }
  };




export function Bar() {
    
    const {isUpdateBMI} = useContext(UpdateBMIContext)
    const [data, setData] = useState({ labels: [], datasets: [] });
    
    
    useEffect(()=>{
        let labels = [];
        let arrayData = []
        const arrayLabelLocalStrorage = getData('data');
        if(arrayLabelLocalStrorage !== null){
            labels = arrayLabelLocalStrorage.map((data) => {
                return data.date
            })
            arrayData = arrayLabelLocalStrorage.map((data) => {
                return data.BMI
            })
        }
    
        setData ( {
        labels,
        datasets: [
            {
            label: 'BMI Dataset',
            data: arrayData,
            fill: true,
            backgroundColor: 'rgb(160, 170, 215)',
            tension: 0.3,
            borderColor: '#3F51B5',
            pointRadius: 6,
            pointHoverRadius: 8,
            pointHoverBorderColor: 'white',
            pointHoverBorderWidth: 2
            },
            
        ],
        });
    },[isUpdateBMI])


    return <Line className="bar" options={options} data={data} />;
}
