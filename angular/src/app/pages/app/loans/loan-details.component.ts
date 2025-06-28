import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);

@Component({
    selector: "app-loan-details",
    standalone: true,
    imports: [],
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
                                <a routerLink="/app/my-loans">My Loans</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Loan Details</li>
                        </ol>
                    </nav>
                    <h5>Loan Details</h5>
                </div>
                <div class="col-auto col-sm-auto text-end"></div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <!-- summary loan account-->
            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                <div class="col-3 col-sm-auto">
                    <span class="avatar avatar-70 h4 bg-theme-1-subtle rounded-1 p-2">
                        <img src="assets/img/logo-512.png" alt="" />
                    </span>
                </div>
                <div class="col col-sm">
                    <h4>
                        Home loan premium plus ID254158 <a href="#" class="fs-14 fw-normal text-theme-1 style-none align-middle"><i class="bi bi-file-earmark-pdf text-danger"></i> Brochure</a>
                    </h4>
                    <p class="fw-medium"><span class="text-secondary">Provided by:</span> HSBCD Bank</p>
                </div>
            </div>

            <div class="row gx-3 gx-lg-4">
                <!-- status -->
                <div class="col-6 col-sm-6 col-lg-3">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body z-index-1">
                            <h4 class="fw-medium text-success">$ 12,500.00</h4>
                            <p><span class="text-secondary">Status Active</span></p>
                        </div>
                    </div>
                </div>

                <!-- interest rate -->
                <div class="col-6 col-sm-6 col-lg-3">
                    <div class="card adminuiux-card theme-teal mb-3">
                        <div class="card-body z-index-1">
                            <h4 class="fw-medium">11.05 %</h4>
                            <p><span class="text-secondary">Interest Rate</span></p>
                        </div>
                    </div>
                </div>

                <!-- emi -->
                <div class="col-6 col-sm-6 col-lg-3">
                    <div class="card adminuiux-card theme-orange mb-3">
                        <div class="card-body z-index-1">
                            <h4 class="fw-medium">$ 140.00</h4>
                            <p>
                                <span class="text-secondary">7<span class="opacity-75">/64</span>, Weekly EMI</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- next due -->
                <div class="col-6 col-sm-6 col-lg-3">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body z-index-1">
                            <h4 class="fw-medium text-theme-1 theme-orange">12 July 2025</h4>
                            <p><span class="text-secondary">Next Due date</span></p>
                        </div>
                    </div>
                </div>

                <!-- chart -->
                <div class="col-12 col-md-12 col-xl-12 col-xxl-9 mb-3">
                    <div class="card adminuiux-card">
                        <div class="card-header">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <h6>Loan re-payment flow</h6>
                                </div>
                                <div class="col-auto px-0">
                                    <select class="form-select form-select-sm">
                                        <option>USD</option>
                                        <option>CAD</option>
                                        <option>AUD</option>
                                    </select>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-sm btn-square btn-link"><i class="bi bi-arrow-clockwise"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pb-0">
                            <div class="height-220 mb-3">
                                <canvas id="summarychart"></canvas>
                            </div>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col-12 col-md-6 col-lg mb-3">
                                    <div class="card adminuiux-card bg-theme-1 theme-teal">
                                        <div class="card-body z-index-1">
                                            <h4 class="fw-medium">$140.00</h4>
                                            <p class="">7<small class="opacity-75">/64</small> EMI</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-6 col-lg mb-3">
                                    <div class="card adminuiux-card bg-theme-1-subtle">
                                        <div class="card-body z-index-1">
                                            <h4 class="fw-medium text">$76.50</h4>
                                            <p class="opacity-75">Principle <span class="text-success fs-14">&#64;5.0%</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-6 col-lg mb-3">
                                    <div class="card adminuiux-card bg-theme-1-subtle theme-orange">
                                        <div class="card-body z-index-1">
                                            <h4 class="fw-medium">$67.00</h4>
                                            <p class="text-secondary">
                                                Interest <span class="text-success fs-14"><i class="bi bi-arrow-up"></i>&#64;5.0%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- quick request -->
                <div class="col-12 col-lg-12 col-xl-6 col-xxl-3 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <div class="card-header">
                            <h6>Overview</h6>
                        </div>
                        <div class="card-body pb-0">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-12 mb-3 mb-lg-4">
                                    <h6 class="mb-1">12 December 2024</h6>
                                    <p class="small opacity-75">Loan Start Date</p>
                                </div>
                                <div class="col-12 mb-3 mb-lg-4">
                                    <h6 class="mb-1">30 February 2030</h6>
                                    <p class="small opacity-75">Loan End Date</p>
                                </div>
                                <div class="col-12 mb-3 mb-lg-4">
                                    <h6 class="mb-1">7</h6>
                                    <p class="small opacity-75">Paid EMI</p>
                                </div>
                                <div class="col-12 mb-3 mb-lg-4">
                                    <h6 class="mb-1">57<span class="opacity-50">/64</span></h6>
                                    <p class="small opacity-75">Remaining EMI</p>
                                </div>
                                <div class="col-6 mb-3">
                                    <h6 class="mb-1">Variable</h6>
                                    <p class="small opacity-75">Interest rate</p>
                                </div>
                                <div class="col-6 text-end mb-3">
                                    <h6 class="mb-1">11.50%</h6>
                                    <p class="small opacity-75">From 30-07-2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- EMI transaction -->
                <div class="col-12 col-md-6 col-lg-6 mb-3">
                    <div class="card adminuiux-card">
                        <div class="card-header">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <h6>EMI Transaction</h6>
                                </div>
                                <div class="col-auto px-0">
                                    <a class="btn btn-sm btn btn-link">See All</a>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-sm btn-outline-theme"><i class="bi bi-arrow-up-right me-1"></i> Bulk Pay</button>
                                </div>
                            </div>
                        </div>
                        <!-- EMI transaction list -->
                        <ul class="list-group list-group-flush border-top bg-none">
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Home loan 1</p>
                                        <p class="text-secondary small">Due date 25 July 2025</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6 class="text-success">$ 140.00</h6>
                                        <div class="badge badge-sm badge-light text-bg-warning">Upcoming</div>
                                    </div>
                                    <div class="col-auto">
                                        <button class="avatar avatar-40 rounded-circle border border-theme-1 bg-theme-1-subtle text-theme-1">
                                            <i class="bi bi-arrow-up-right h5"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 rounded-circle border">
                                            <i class="bi bi-arrow-up-right h5"></i>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Home loan 1</p>
                                        <p class="text-secondary small">25 June 2025, 12:50 PM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6>- $ 140.00</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 rounded-circle border">
                                            <i class="bi bi-arrow-up-right h5"></i>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Home loan 1</p>
                                        <p class="text-secondary small">15 May 2025, 12:50 PM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6>- $ 140.00</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 rounded-circle border">
                                            <i class="bi bi-arrow-up-right h5"></i>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Home loan 1</p>
                                        <p class="text-secondary small">12 April 2025, 12:50 PM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6>- $ 140.00</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 rounded-circle border">
                                            <i class="bi bi-arrow-up-right h5"></i>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Home loan 1</p>
                                        <p class="text-secondary small">12 March 2025, 12:50 PM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6>- $ 140.00</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 rounded-circle border">
                                            <i class="bi bi-arrow-up-right h5"></i>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Home loan 1</p>
                                        <p class="text-secondary small">12 February 2025, 12:50 PM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6>- $ 140.00</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- actions timeline -->
                <div class="col-12 col-md-6 col-lg-6 col-xxl-3 mb-3">
                    <div class="card adminuiux-card">
                        <div class="card-header">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <h6>Loan Notifications</h6>
                                </div>
                                <div class="col-5"></div>
                            </div>
                        </div>
                        <div class="card-body height-dynamic overflow-y-auto" style="--h-dynamic:410px">
                            <ul class="timeline circle">
                                <li>
                                    <span class="circle-dot bg-theme-1" data-bs-toggle="tooltip" aria-label="Normal" data-bs-original-title="Normal"></span>
                                    <div>
                                        <p class="h6 mb-2">9 June 2025 11:55 AM</p>
                                        <p class="text-secondary small">Application disbursement letter allocated to applicant and email notification has been sent for the same.</p>
                                    </div>
                                </li>
                                <li>
                                    <span class="circle-dot bg-warning" data-bs-toggle="tooltip" aria-label="Better" data-bs-original-title="Better"></span>
                                    <div>
                                        <p class="h6 mb-2">7 June 2025 10:15 AM</p>
                                        <p class="text-secondary small">EMI received for the loan account: XX-1211. Confirmation message and invoice will be delivered to your inbox in 24 hours.</p>
                                    </div>
                                </li>
                                <li>
                                    <span class="circle-dot bg-danger" data-bs-toggle="tooltip" aria-label="Critical" data-bs-original-title="Critical"></span>
                                    <div>
                                        <p class="h6 mb-2">6 June 2025 5:00 PM</p>
                                        <p class="text-secondary small">Application has a updating request for your current address provided in application form. Error code suggest that there may be city code mismatch.</p>
                                    </div>
                                </li>
                                <li>
                                    <span class="circle-dot bg-theme-1"></span>
                                    <div>
                                        <p class="h6 mb-2">1 June 2025 11:55 AM</p>
                                        <p class="text-secondary small">EMI received for the loan account: XX-1211. Confirmation message and invoice will be delivered to your inbox in 24 hours.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- help center -->
                <div class="col-12 col-md-6 col-lg-6 col-xxl-3 mb-3">
                    <div class="card adminuiux-card">
                        <div class="card-header">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <h6>Raise Query</h6>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-sm btn-outline-theme"><i class="bi bi-telephone"></i> Callback Me</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body overflow-y-auto chat-list height-dynamic" style="--h-dynamic:354px">
                            <div class="row no-margin right-chat">
                                <div class="col-12">
                                    <div class="chat-block">
                                        <div class="row gx-3 gx-lg-4">
                                            <div class="col">Hi! Can you help me for account information?</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-end">
                                    <p class="text-secondary small time"><i class="bi bi-check"></i> 12:00 am</p>
                                </div>
                            </div>
                            <div class="row justify-content-center text-center">
                                <div class="col-auto text-center">
                                    <div class="alert alert-light mx-auto py-1 mb-3 small">26 July 2025</div>
                                </div>
                            </div>
                            <div class="row no-margin left-chat">
                                <div class="col-12">
                                    <div class="chat-block">
                                        <div class="row gx-3 gx-lg-4">
                                            <div class="col">
                                                <p class="small mb-2"><a href="" class="style-none">Alex Smith</a></p>
                                                <p>Hi! <br />We will be happy to help you.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <p class="text-secondary small time"><i class="bi bi-check"></i> 9:00 pm</p>
                                </div>
                            </div>
                            <div class="row no-margin left-chat">
                                <div class="col-12">
                                    <div class="chat-block">
                                        <div class="row gx-3 gx-lg-4">
                                            <div class="col">
                                                <p class="small mb-2"><a href="" class="style-none">Alex Smith</a></p>
                                                <p>Thank you for your response. Tell us more about your query</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <p class="text-secondary small time"><i class="bi bi-check"></i> 9:00 pm</p>
                                </div>
                            </div>
                            <div class="row no-margin right-chat">
                                <div class="col-12">
                                    <div class="chat-block">
                                        <div class="row gx-3 gx-lg-4">
                                            <div class="col">Hello!<br />I wanted to know next due date and amount to pay.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-end">
                                    <p class="text-secondary small time"><i class="bi bi-check"></i> 9:10 pm</p>
                                </div>
                            </div>
                            <div class="row no-margin left-chat">
                                <div class="col-12">
                                    <div class="chat-block">
                                        <div class="row gx-3 gx-lg-4">
                                            <div class="col">
                                                <p class="small mb-2"><a href="" class="style-none">Mr. Jack Mario</a></p>
                                                Adminuiux is amazing and we thank you. How can we buy?
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <p class="text-secondary small time"><i class="bi bi-check-all text-primary"></i> 8:00 pm</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer border-top p-1">
                            <div class="input-group">
                                <button class="btn btn-square btn-link"><i class="bi bi-emoji-smile"></i></button>
                                <button class="btn btn-square btn-link"><i class="bi bi-paperclip"></i></button>
                                <input class="form-control border-0" placeholder="Type your query here... " value="" />
                                <button class="btn btn-square btn-link" type="button"><i class="bi bi-send"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class LoanDetailsComponent {
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
