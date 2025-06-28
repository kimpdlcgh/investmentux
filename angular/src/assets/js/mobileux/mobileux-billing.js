/*! mobileux dashboard.js | Adminuiux 2025-2026 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* chart js areachart summary  */
    window.randomScalingFactor = function () {
        return Math.round(Math.random() * 20);
    }

    /* summary chart */
    var areachart2 = document.getElementById('summarychart').getContext('2d');

    var myareachartCofig2 = {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: '# of hours',
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                radius: 1,
                backgroundColor: 'rgba(0, 73, 232, 0.1)',
                borderColor: 'rgba(0, 73, 232, 1)',
                borderWidth: 1,
                fill: true,
                tension: 0.3,
            },
            {
                label: '# of hours',
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                ],
                radius: 1,
                backgroundColor: 'rgba(200, 0, 54, 0.1)',
                borderColor: 'rgba(200, 0, 54, 0.35)',
                borderWidth: 1,
                fill: true,
                tension: 0.3,
            }]
        },
        options: {
            animation: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    display: false,
                    beginAtZero: true,
                },
                x: {
                    grid: {
                        display: false
                    },
                    display: true,
                    beginAtZero: true,
                }
            }
        }
    }
    var myAreaChart2 = new Chart(areachart2, myareachartCofig2);
    /* my area chart randomize */
    setInterval(function () {
        myareachartCofig2.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return randomScalingFactor();
            });
        });
        myAreaChart2.update();
    }, 3000);


})