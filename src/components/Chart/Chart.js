import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart(props) {

    const data = {
        labels: [...props.time],
        datasets: [
            { 
                data: [...props.data],
                label: "",
                borderColor: "blue",
                fill: false
            }
        ],
    };

    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Ano'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Patrimônio'
                }
            }]
        }
    }
        



    return (
        <Line
            data={data}
            options={options}
        />
    )
}
