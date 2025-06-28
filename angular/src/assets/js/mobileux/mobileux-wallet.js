/*! mobileux dashboard.js | Adminuiux 2025-2026 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* chart js areachart summary  */
    window.randomScalingFactor = function () {
        return Math.round(Math.random() * 20);
    }

    /* summary chart */
    var areachart2 = document.getElementById('summarychart').getContext('2d');
    var gradient3 = areachart2.createLinearGradient(0, 0, 0, 100);
    gradient3.addColorStop(0, 'rgba(255, 138, 84, 0.85)');
    gradient3.addColorStop(1, 'rgba(119, 198, 255, 0)');

    var myareachartCofig2 = {
        type: 'bar',
        data: {
            labels: ['10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30'],
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
                radius: 0,
                backgroundColor: '#0049e8',
                borderColor: '#0049e8',
                borderWidth: 0,
                barThickness: 6,
                fill: true,
                tension: 0.5,
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
                radius: 0,
                backgroundColor: gradient3,
                borderColor: '#03045e',
                borderWidth: 0,
                barThickness: 6,
                fill: true,
                tension: 0.5,
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


    /* doughnut chart js */
    var doughnutchart = document.getElementById('doughnutchart').getContext('2d');
    var doughnutdata = {
        labels: ['IT', 'Bio', 'Designing', 'Other'],
        datasets: [
            {
                label: 'Learning Categories',
                data: [45, 30, 25, 10],
                backgroundColor: ['rgba(246, 50, 72, 0.85)', 'rgba(255, 159, 80, 0.85)', '#0049e8', '#becede'],
                borderWidth: 0,
            }
        ]
    };
    var mydoughnutchartCofig = {
        type: 'doughnut',
        data: doughnutdata,
        options: {
            responsive: true,
            cutout: 50,
            tooltips: {
                position: 'nearest',
                yAlign: 'bottom'
            },
            plugins: {
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: false,
                    text: 'Chart.js Doughnut Chart'
                }
            },
            layout: {
                padding: 0,
            },
        },
    };
    var mydoughnutchart = new Chart(doughnutchart, mydoughnutchartCofig);


    /* circular progress */
    var progressCirclesblue1 = new ProgressBar.Circle(circleprogressblue1, {
        color: '#0049e8',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: 'rgba(0, 73, 232, 0.15)',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#0049e8', width: 10 },
        to: { color: '#0049e8', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "<small>%<small>");
            }

        }
    });
    // progressCirclesblue1.text.style.fontSize = '20px';
    progressCirclesblue1.animate(0.65);  // Number from 0.0 to 1.0

    /* circular progress */
    var progressCirclesgreen1 = new ProgressBar.Circle(circleprogressgreen1, {
        color: '#91C300',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeInOut',
        trailColor: '#eaf4d8',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#91C300', width: 10 },
        to: { color: '#91C300', width: 10 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value + "<small>%<small>");
            }

        }
    });
    // progressCirclesgreen1.text.style.fontSize = '20px';
    progressCirclesgreen1.animate(0.85);  // Number from 0.0 to 1.0

})