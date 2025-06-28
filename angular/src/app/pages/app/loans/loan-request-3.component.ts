import { Component, ViewChild, ElementRef } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);

@Component({
    selector: "app-loan-request-3",
    standalone: true,
    imports: [RouterLink],
    template: ` <!-- breadcrumb -->
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
                            <li class="breadcrumb-item active bi" aria-current="page">Loan Request 3</li>
                        </ol>
                    </nav>
                    <h5>Loan Request 3</h5>
                </div>
                <div class="col-auto col-sm-auto text-end"></div>
            </div>
        </div>

        <div class="container mt-4">
            <div>
                <!-- SmartWizard html -->
                <div class="card adminuiux-card overflow-hidden mb-4">
                    <ul class="nav nav-justified">
                        <li class="nav-item">
                            <a class="nav-link active theme-green" routerLink="/app/loan-request-1">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">1</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Loan Type</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active theme-green" routerLink="/app/loan-request-2">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">2</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Criteria</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active theme-green" routerLink="/app/loan-request-3">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">3</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Amount</p>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="card-body pb-0">
                        <div class="card mb-3 mb-lg-4">
                            <div class="card-body pb-0">
                                <div class="row align-items-center mb-3">
                                    <div class="col-auto order-1">
                                        <div class="avatar avatar-60 rounded bg-theme-1-subtle text-theme-1">
                                            <i class="bi bi-house-up h1"></i>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm order-3 order-sm-2 mt-3 mt-sm-0">
                                        <h5 class="text-theme-1">Home Improvements</h5>
                                        <p class="text-secondary">Get a loan for house improvements colors, maintenance, floor up etc.</p>
                                    </div>
                                    <div class="col-auto text-end order-2 order-sm-3 ms-auto ms-sm-0">
                                        <h5 class="text-success">10.15%</h5>
                                        <p class="text-secondary small">Lowest interest rate</p>
                                    </div>
                                </div>

                                <div class="row gx-3 gx-lg-4">
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="card selectable anyone active mb-3">
                                            <div class="card-body pb-0">
                                                <div class="row align-items-center mb-3">
                                                    <div class="col">
                                                        <h5 class="mb-0 fw-medium">Home loan offer</h5>
                                                        <p class="small text-secondary">HSBCD Bank</p>
                                                    </div>
                                                    <div class="col-auto text-end">
                                                        <h5 class="mb-1">10.15%</h5>
                                                        <p class="small text-secondary">Interest Rate</p>
                                                    </div>
                                                </div>

                                                <div class="row gx-3 gx-lg-4 align-items-center">
                                                    <div class="col mb-3">
                                                        <p class="mb-1">5-20 years</p>
                                                        <p class="small text-secondary"><i class="bi bi-calendar-event me-1"></i> Tenure</p>
                                                    </div>
                                                    <div class="col-auto text-end mb-3">
                                                        <button class="btn btn-sm btn-link"><i class="bi bi-plus-lg"></i> Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="card selectable anyone mb-3">
                                            <div class="card-body pb-0">
                                                <div class="row align-items-center mb-3">
                                                    <div class="col">
                                                        <h5 class="mb-0 fw-medium">Maintain Home</h5>
                                                        <p class="small text-secondary">Standard Charts Bank</p>
                                                    </div>
                                                    <div class="col-auto text-end">
                                                        <h5 class="mb-1">10.20%</h5>
                                                        <p class="small text-secondary">Interest Rate</p>
                                                    </div>
                                                </div>

                                                <div class="row gx-3 gx-lg-4 align-items-center">
                                                    <div class="col mb-3">
                                                        <p class="mb-1">5-15 years</p>
                                                        <p class="small text-secondary"><i class="bi bi-calendar-event me-1"></i> Tenure</p>
                                                    </div>
                                                    <div class="col-auto text-end mb-3">
                                                        <button class="btn btn-sm btn-link"><i class="bi bi-plus-lg"></i> Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4">
                                        <div class="card selectable anyone mb-3">
                                            <div class="card-body pb-0">
                                                <div class="row align-items-center mb-3">
                                                    <div class="col">
                                                        <h5 class="mb-0 fw-medium">Home Improwise 25</h5>
                                                        <p class="small text-secondary">LostIland Bank</p>
                                                    </div>
                                                    <div class="col-auto text-end">
                                                        <h5 class="mb-1">10.25%</h5>
                                                        <p class="small text-secondary">Interest Rate</p>
                                                    </div>
                                                </div>

                                                <div class="row gx-3 gx-lg-4 align-items-center">
                                                    <div class="col mb-3">
                                                        <p class="mb-1">2-20 years</p>
                                                        <p class="small text-secondary"><i class="bi bi-calendar-event me-1"></i> Tenure</p>
                                                    </div>
                                                    <div class="col-auto text-end mb-3">
                                                        <button class="btn btn-sm btn-link"><i class="bi bi-plus-lg"></i> Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-3 gx-lg-4 align-items-center">
                            <div class="col-12 col-lg-6 col-xl-5 me-auto">
                                <div class="mb-3">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-12 col-sm mb-3">
                                            <p>Loan Amount</p>
                                        </div>
                                        <div class="col-12 col-sm-5 mb-3">
                                            <div class="input-group">
                                                <span class="input-group-text bg-none">$</span>
                                                <input type="text" class="form-control text-end rangevalues" value="22500.00" id="value1" />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="range" id="range1" class="range1 rangevalue" min="100" max="150000" value="22500.00" data-value="value1" />
                                </div>
                                <div class="mb-3">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-12 col-sm mb-3">
                                            <p>Tenure</p>
                                        </div>
                                        <div class="col-12 col-sm-5 mb-3">
                                            <div class="input-group">
                                                <span class="input-group-text bg-none">Months</span>
                                                <input type="text" class="form-control text-end rangevalues" value="150" id="value2" />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="range" id="range2" class="range1 rangevalue" step="5" value="140" min="60" max="240" data-value="value2" />
                                </div>
                                <div class="mb-3">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-12 col-sm mb-3">
                                            <p>Monthly Income</p>
                                        </div>
                                        <div class="col-12 col-sm-5 mb-3">
                                            <div class="input-group">
                                                <span class="input-group-text bg-none">$</span>
                                                <input type="text" class="form-control text-end rangevalues" value="1000" id="value3" />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="range" id="range3" class="range1 rangevalue" min="1500" max="200000" step="500" value="8000" data-value="value3" />
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 col-xl-6">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-12 col-md-auto">
                                        <div class="position-relative d-flex align-items-center justify-content-center text-center my-3">
                                            <div class="position-absolute">
                                                <h4 class="mb-0">$ 42.00k</h4>
                                                <p class="text-secondary small">Total Repay</p>
                                            </div>
                                            <canvas id="doughnutChart" class="mx-auto width-180 height-180"></canvas>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md">
                                        <h6 class="fw-normal"><b class="fw-bold">Great!</b> Your EMI will be</h6>
                                        <h1 class="mb-0 text-theme-1">130.00<small class="fw-normal fs-14">/month</small></h1>
                                        <p class="opacity-75 small mb-3">in United State Dollar</p>
                                        <div class="row gx-3 gx-lg-4">
                                            <div class="col-12 col-xl-6 mb-3">
                                                <p class="text-secondary small mb-2"><span class="me-1 avatar avatar-10 rounded bg-theme-1"></span> Principle</p>
                                                <h4 class="ps-3 fw-medium">$ 22.50k</h4>
                                            </div>
                                            <div class="col-12 col-xl-6 mb-3">
                                                <p class="text-secondary small mb-2"><span class="me-1 avatar avatar-10 rounded bg-theme-1-subtle"></span> Interest</p>
                                                <h4 class="ps-3 fw-medium">$ 19.50k</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col">
                                <button class="btn btn-theme disabled" type="button" disabled>Previous</button>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-theme mx-2" style="display: none;" type="button" routerLink="/app/loan-list">Next</button>
                                <a class="btn btn-theme finish-btn" routerLink="/app/loan-request-success">Finish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
})
export class LoanRequest3Component {
    doughnutCharts!: Chart;

    ngAfterViewInit() {
        this.doughnutChart();
    }

    doughnutChart() {
        const doughnutChartCanvas = document.getElementById("doughnutChart") as HTMLCanvasElement;

        if (doughnutChartCanvas) {
            const ctx = doughnutChartCanvas.getContext("2d");
            if (!ctx) {
                console.error("Failed to get 2D context for doughnut chart");
                return; // Stop if we can't get the context.
            }

            this.doughnutCharts = new Chart(ctx, {
                // Pass the context, not the canvas element
                type: "doughnut",
                data: {
                    labels: ["Principle", "Interest"],
                    datasets: [
                        {
                            label: "Principle and Interest",
                            data: [55, 45],
                            backgroundColor: ["#0049e8", "#cad8f8"],
                            borderWidth: 0,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    cutout: 70,
                    plugins: {
                        legend: {
                            display: false,
                            position: "top",
                        },
                        title: {
                            display: false,
                            text: "Chart.js Doughnut Chart",
                        },
                    },
                    layout: {
                        padding: 0,
                    },
                },
            });
        } else {
            console.error("doughnutChart canvas element not found");
        }
    }
}
