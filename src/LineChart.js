import React from 'react';
import {Line} from 'react-chartjs-2';


export default function LineChart({data}){
  

    
    console.log(data)
    return (
      <div>
        <h2>Line CHart</h2>
        <Line data={data} height={40}/>
      </div>
    );
  
}
