import React from 'react';
import {Bar,Line} from 'react-chartjs-2';
import LineChart from './LineChart';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'TOTAL Stock',
      backgroundColor: 'green',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'yellow',
      hoverBorderColor: 'orange',
      data: [20, 10, 80, 65, 42, 18, 99]
    },
    {
        label: 'PSO Stock',
        backgroundColor: 'lightBlue',
        borderColor: 'green',
        borderWidth: 1,
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'red',
        data: [65, 59, 90, 81, 56, 55, 40]
      }
  ]
};

export default function BarChart(){
//   displayName: 'BarExample';
    return (
      <div>
        <h2>Stock Comparison </h2>
        <Bar
          data={data}
          width={0}
          height={0}
          options={{
            maintainAspectRatio: false
          }}
        />
        <LineChart data={data}  />
      </div>
      
    )
  
        }