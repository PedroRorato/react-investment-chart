import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

export default function Chart() {

    const data = {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [{
            data: [
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            backgroundColor: [
                'red',
                'green',
                'blue',
                'yellow',
                'purple',
                'orange'
            ],
        }]
    };

    const options = {
        title:{
            display: true,
            text: 'Largest Cities in Massachusetts',
            fontSize: 25,
        },
        legend: {
            display: true,
            position: 'right',
            labels:{
                fontColor: '#000'
            }
        }
    }


    return (
        <Bar
            data={data}

            options={options}
        />
    )
}
