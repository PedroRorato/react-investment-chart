import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import './style.css';

function Chart(props) {

    return (
        <div className="chart-container">
            <Line
                data={props.data}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: { beginAtZero: true }
                            }
                        ]
                    }
                }}
            />
        </div>
        
    );
}
  
export default Chart;