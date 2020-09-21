import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart() {

    const data = {
        labels: [2020,2021,2022],
        datasets: [
            { 
                data: [86,114,106],
                label: "Africa",
                borderColor: "blue",
                fill: false
            },
            { 
                data: [282,350,411],
                label: "Asia",
                borderColor: "red",
                fill: false
            },
            { 
                data: [168,170,178],
                label: "Europe",
                borderColor: "green",
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
