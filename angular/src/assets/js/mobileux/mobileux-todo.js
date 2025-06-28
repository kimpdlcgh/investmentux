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
            labels: ['21 Mon', '22 Tue', '23 Wed', '24 Thu', '25 Fri'],
            datasets: [{
                label: '# of active task',
                data: ["22", "24", "23", "21", "20", "18", "16", "14"],
                radius: 1,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#0049e8',
                borderWidth: 1,
                fill: false,
                tension: 0.0,
            },
            {
                label: '# of in-progress',
                data: ["2", "3", "2", "1", "4", "2", "1", "2"],
                radius: 1,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#fc7a1e',
                borderWidth: 1,
                fill: false,
                tension: 0.0,
            },
            {
                label: '# of completed',
                data: ["3", "5", "8", "9", "9", "10", "11", "13"],
                radius: 1,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#00a885',
                borderWidth: 1,
                fill: false,
                tension: 0.0,
            },
            {
                label: '# of cancelled',
                data: ["0", "0", "0", "1", "1", "2", "2", "2"],
                radius: 1,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: '#c80036',
                borderWidth: 1,
                fill: false,
                tension: 0.0,
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



})