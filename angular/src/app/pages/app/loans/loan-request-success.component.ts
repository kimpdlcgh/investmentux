import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);

@Component({
    selector: "app-loan-request-success",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!-- breadcrumb -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/loan-request-1">Loan Request</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Success</li>
                        </ol>
                    </nav>
                    <h5>Loan Requested Success</h5>
                </div>
                <div class="col-auto col-sm-auto text-end"></div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <div class="row justify-content-center align-items-center mt-5">
                <div class="col-12 col-md-auto">
                    <div class="text-center mb-3">
                        <img src="assets/img/investment/loan-success.png" class="mw-100 mx-auto mb-3" alt="" />
                        <h1 class="text-theme-1 theme-teal">Congratulations!</h1>
                        <h5 class="mb-4">Your loan application is under process!</h5>

                        <p class="text-secondary">You have raise request for $ 22500.00 loan with $130.00 EMI.</p>
                    </div>
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <h5 class="mb-0 fw-medium">Home loan offer</h5>
                                    <p class="small text-secondary">HSBCD Bank</p>
                                </div>
                                <div class="col-auto text-end">
                                    <h5 class="mb-1">10.15%</h5>
                                    <p class="small text-secondary">Interest Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mb-3">
                        <a routerLink="/app/loan-under-process-details" class="btn btn-theme mx-1 my-2">Check Status</a>
                        <a routerLink="/app/loan-list" class="btn btn-outline-theme mx-1 my-2">Back to My Loans <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class LoanRequestSuccessComponent {
    mySummaryChart!: Chart;

    ngAfterViewInit() {
        this.summarychart();
    }
    /* chart  */
    summarychart() {
        const areachartblue = document.getElementById("summarychart") as HTMLCanvasElement;
        const ctx = areachartblue.getContext("2d"); // Get the 2D rendering context
        if (ctx) {
            const gradientgreen = ctx.createLinearGradient(0, 0, 0, 280);
            gradientgreen.addColorStop(0, "rgba(0, 186, 133, 0.85)");
            gradientgreen.addColorStop(1, "rgba(0, 186, 133, 0)");

            this.mySummaryChart = new Chart(areachartblue, {
                type: "line",
                data: {
                    labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
                    datasets: [
                        {
                            label: "EMI",
                            data: [700, 1400, 2100, 2800, 3500, 4200, 4900],
                            radius: 2,
                            backgroundColor: gradientgreen,
                            borderColor: "#00a885",
                            borderWidth: 1,
                            borderRadius: 4,
                            fill: true,
                            tension: 0.5,
                        } as any,
                        {
                            label: "Principal",
                            data: [10000, 9500, 9000, 8500, 8000, 7500, 7000, 6500, 6000, 5500, 5000, 40],
                            radius: 0,
                            backgroundColor: "rgba(0,0,0,0)",
                            borderColor: "#015EC2",
                            borderWidth: 1,
                            borderRadius: 4,
                            fill: true,
                            tension: 0.5,
                        } as any,
                        {
                            label: "Interest",
                            data: [14000, 13400, 12800, 12200, 11600, 11000, 10400, 9800, 9200, 8600, 8000],
                            radius: 0,
                            backgroundColor: "rgba(0,0,0,0)",
                            borderColor: "#fc7a1e",
                            borderWidth: 1,
                            borderRadius: 4,
                            fill: true,
                            tension: 0.5,
                        } as any,
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: true,
                        },
                    },
                    scales: {
                        y: {
                            display: true,
                            beginAtZero: true,
                        },
                        x: {
                            grid: {
                                display: true,
                            },
                            display: true,
                            beginAtZero: true,
                        },
                    },
                },
            });
        }
    }

    generateRandomData() {
        return [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()];
    }
    randomScalingFactor() {
        return Math.round(Math.random() * 20);
    }
}
