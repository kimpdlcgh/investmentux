import { Component, AfterViewInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";
import { DaterangePickerComponent } from "../../../components/daterange-picker/daterange-picker.component";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);

@Component({
    selector: "app-earning",
    standalone: true,
    imports: [DaterangePickerComponent],
    template: `
        <!-- breadcrumb  -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col-12 col-sm mb-3 mb-sm-0">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Earning</li>
                        </ol>
                    </nav>
                    <h5>Earning</h5>
                </div>
                <div class="col-auto py-1">
                    <div class="alert alert-success py-2 mb-0">
                        <p class="small">$1500.00 withdraw in-process</p>
                    </div>
                </div>
                <div class="col-auto py-1">
                    <button class="btn btn-theme">
                        <i class="bi bi-bank"></i>
                        <span class="">Withdraw</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <!-- Chart and zones-->
            <div class="card adminuiux-card overflow-hidden mb-3">
                <div class="card-header pb-0">
                    <!-- Title-->
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-12 col-lg-4 col-xxl-3 mb-3">
                            <h5>My Earning</h5>
                        </div>
                        <div class="col col-lg-auto ms-auto mb-3">
                            <app-daterange-picker></app-daterange-picker>
                        </div>
                        <div class="col-auto mb-3">
                            <button class="btn btn-theme">
                                <i class="bi bi-box-arrow-in-down me-1 align-middle"></i>
                                <span class="">Export</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class=" row">
                    <div class="col-12 col-lg-7 mb-3 mb-lg-0">
                        <div class="card-body">
                            <!-- chart area -->
                            <div class="height-280 mb-3">
                                <canvas id="earningbyday"></canvas>
                            </div>

                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col-6 col-md-6 col-lg-4">
                                    <div class="card adminuiux-card bg-theme-1 theme-green">
                                        <div class="card-body z-index-1">
                                            <h4 class="fw-medium text">$5560.50</h4>
                                            <p class="opacity-75 small">
                                                Earning <span class="fs-14"><i class="bi bi-arrow-up"></i> 11.5%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-6 col-lg-4">
                                    <div class="card adminuiux-card bg-theme-1 theme-purple">
                                        <div class="card-body z-index-1">
                                            <h4 class="fw-medium">$4146.50</h4>
                                            <p class="opacity-75 small">
                                                Previous <span class="fs-14"><i class="bi bi-arrow-up"></i> 11.5%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Zones -->
                    <div class="col-12 col-lg-5">
                        <div class="card-body">
                            <div class="semidoughnutchart">
                                <div class="expensedatasemidoughnut">
                                    <h4 class="mb-0">$ 4154.00</h4>
                                    <p class="text-secondary small">Zonal Earning</p>
                                </div>
                                <canvas id="semidoughnutchart" class="mx-auto width-260 height-260" width="240" height="240" style="display: block; box-sizing: border-box; height: 240px; width: 240px;"></canvas>
                            </div>

                            <div class="row gx-3 gx-lg-4 mb-2">
                                <div class="col-6 col-md-6 mb-3">
                                    <p class="text-secondary small mb-2">
                                        <span class="me-1 avatar avatar-10 rounded bg-green"></span>
                                        Share holdings
                                    </p>
                                    <h5 class="ps-3 fw-medium">
                                        $ 165.52k <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1 fs-14"></i> 25.30%</span>
                                    </h5>
                                </div>
                                <div class="col-6 col-md-6 mb-3">
                                    <p class="text-secondary small mb-2">
                                        <span class="me-1 avatar avatar-10 rounded bg-yellow"></span>
                                        Mutual Funds
                                    </p>
                                    <h5 class="ps-3 fw-medium">
                                        $ 265.85k <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 21.42%</span>
                                    </h5>
                                </div>
                                <div class="col-6 col-md-6 mb-3">
                                    <p class="text-secondary small mb-2">
                                        <span class="me-1 avatar avatar-10 rounded bg-orange"></span>
                                        Bank Bonds
                                    </p>
                                    <h5 class="ps-3 fw-medium">
                                        $ 356.26k <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 20.18%</span>
                                    </h5>
                                </div>
                                <div class="col-6 col-md-6 mb-3">
                                    <p class="text-secondary small mb-2">
                                        <span class="me-1 avatar avatar-10 rounded bg-purple"></span>
                                        Gov. Securities
                                    </p>
                                    <h5 class="ps-3 fw-medium">
                                        $ 185.65 <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 15.65%</span>
                                    </h5>
                                </div>
                                <div class="col-6 col-md-6">
                                    <p class="text-secondary small mb-2">
                                        <span class="me-1 avatar avatar-10 rounded bg-secondary"></span>
                                        Fixed Deposit
                                    </p>
                                    <h5 class="ps-3 fw-medium">
                                        $ 190.45k <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 18.50%</span>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- summary -->
            <div class="row gx-3 gx-lg-4">
                <!-- Current Balance-->
                <div class="col-6 col-lg-6 col-xxl-3 mb-3">
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="avatar avatar-60 text-center rounded bg-info-subtle text-info-emphasis mb-3">
                                <i class="bi bi-wallet h4"></i>
                            </div>
                            <h4 class="mb-0">$ 980.00</h4>
                            <p class="text-secondary small">Current Account Balance</p>
                        </div>
                    </div>
                </div>

                <!-- Total earning -->
                <div class="col-6 col-lg-6 col-xxl-3 mb-3">
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="avatar avatar-60 text-center rounded bg-success-subtle text-success-emphasis mb-3">
                                <i class="bi bi-cash-stack h4"></i>
                            </div>
                            <h4 class="mb-0">$ 2820.00</h4>
                            <p class="text-secondary small">
                                Total Total Earning
                                <span class="text-success">4% <i class="bi bi-arrow-up"></i> </span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Pending payment -->
                <div class="col-6 col-lg-6 col-xxl-3 mb-3">
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="avatar avatar-60 text-center rounded bg-warning-subtle text-warning-emphasis mb-3">
                                <i class="bi bi-hourglass-bottom h4"></i>
                            </div>
                            <h4 class="mb-0">$ 645.00</h4>
                            <p class="text-secondary small">Total Payment<br />Pending</p>
                        </div>
                    </div>
                </div>

                <!-- Payout -->
                <div class="col-6 col-lg-6 col-xxl-3 mb-3">
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="avatar avatar-60 text-center rounded bg-primary-subtle text-primary-emphasis mb-3">
                                <i class="bi bi-calendar-week h4"></i>
                            </div>
                            <h4 class="mb-0">$ 980.00</h4>
                            <p class="text-secondary small">Next Payout on 2 July 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- earning transaction list fooTable -->
            <div class="card adminuiux-card mb-3 mb-lg-4">
                <div class="card-header">
                    <h6>Earning Transactions</h6>
                </div>
                <div class="card-body px-2 py-0">
                    <table class="table datatable mb-0" id="dataTable">
                        <thead>
                            <tr>
                                <th data-priority="1">ID</th>
                                <th data-priority="2" class="text-nowrap">Time & Date</th>
                                <th data-priority="2">Amount</th>
                                <th data-priority="3">Made by</th>
                                <th data-priority="3">Contact info</th>
                                <th data-priority="2">Status</th>
                                <th data-priority="1">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2054ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">9:10 AM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-success">$ 130.00</p>
                                    <p class="text-secondary small">Net Banking</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-7.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">David Warner</p>
                                            <p class="text-secondary small">United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">david&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-yellow">Pending</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>105ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">10:30 AM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-success">$ 95.00</p>
                                    <p class="text-secondary small">Credit Card</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">Winnie John</p>
                                            <p class="text-secondary small">Australia</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">winnie&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-blue">Waiting</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>058ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">11:30 AM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-danger">- $ 1500.00</p>
                                    <p class="text-secondary small">Withdraw</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/logo-512.png" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">BANK: 89566332559848</p>
                                            <p class="text-secondary small">Company Account</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">alicia&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-green">Complete</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>500ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">11:55 AM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-success">$ 150.00</p>
                                    <p class="text-secondary small">Cash</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-2.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">Jr. Chen Li</p>
                                            <p class="text-secondary small">United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">cheli&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-red">Rejected</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2054ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">12:15 PM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-success">$ 250.00</p>
                                    <p class="text-secondary small">Cash</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-3.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">David Warner</p>
                                            <p class="text-secondary small">United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">david&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-yellow">Pending</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>105ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">1:30 PM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-success">$ 180.00</p>
                                    <p class="text-secondary small">Cash</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">Winnie John</p>
                                            <p class="text-secondary small">Australia</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">winnie&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-blue">Waiting</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>058ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">2:20 AM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-success">$ 90.00</p>
                                    <p class="text-secondary small">Cash</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-5.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">Alicia Smith</p>
                                            <p class="text-secondary small">United States</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">alicia&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-green">Complete</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>500ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">3:30 PM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-success">$ 190.00</p>
                                    <p class="text-secondary small">Cash</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">Jr. Chen Li</p>
                                            <p class="text-secondary small">United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">cheli&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-red">Rejected</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2054ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">9:10 AM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-success">$ 130.00</p>
                                    <p class="text-secondary small">Net Banking</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-7.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">David Warner</p>
                                            <p class="text-secondary small">United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">david&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-yellow">Pending</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>105ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">10:30 AM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-success">$ 95.00</p>
                                    <p class="text-secondary small">Credit Card</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">Winnie John</p>
                                            <p class="text-secondary small">Australia</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">winnie&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-blue">Waiting</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>058ID</td>
                                <td>
                                    <p class="mb-0 fw-medium">11:30 AM</p>
                                    <p class="text-secondary small">9 June 2024</p>
                                </td>
                                <td>
                                    <p class="mb-0 fw-medium text-danger">- $ 1500.00</p>
                                    <p class="text-secondary small">Withdraw</p>
                                </td>
                                <td>
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/logo-512.png" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0">BANK: 89566332559848</p>
                                            <p class="text-secondary small">Company Account</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">alicia&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-sm light bg-green">Complete</span>
                                </td>
                                <td>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Receipt</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Email </a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Dispute</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
})
export class EarningComponent {
    mySummaryChart!: Chart;
    doughnutCharts!: Chart;

    ngAfterViewInit() {
        this.summarychart();
        this.doughnutChart();

        setInterval(() => {
            this.randomizeChart();
        }, 3000);

        // data table
        const table = new DataTable("#dataTable", {
            searching: false,
            lengthChange: false,
            autoWidth: false,
            columnDefs: [{ orderable: false, targets: 4 }],
            order: [[0, "desc"]],
            pageLength: 6,
            responsive: true,
        });
    }

    /* summary chart */
    summarychart() {
        const areachartblue = document.getElementById("earningbyday") as HTMLCanvasElement;
        const ctx = areachartblue.getContext("2d"); // Get the 2D rendering context
        if (ctx) {
            const gradient2 = ctx.createLinearGradient(0, 0, 0, 240);
            gradient2.addColorStop(0, "rgba(8, 160, 70, 0.85)");
            gradient2.addColorStop(1, "rgba(8, 160, 70, 0)");

            const gradient1 = ctx.createLinearGradient(0, 0, 0, 240);
            gradient1.addColorStop(0, "rgba(71, 28, 168, 0.5)");
            gradient1.addColorStop(1, "rgba(71, 28, 168, 0)");

            this.mySummaryChart = new Chart(areachartblue, {
                type: "line",
                data: {
                    labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 0,
                            backgroundColor: gradient2,
                            borderColor: "#08a046",
                            borderWidth: 1,
                            fill: true,
                        } as any,
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 0,
                            backgroundColor: gradient1,
                            borderColor: "#471ca8",
                            borderWidth: 1,
                            fill: true,
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
    doughnutChart() {
        const doughnutChartCanvas = document.getElementById("semidoughnutchart") as HTMLCanvasElement;

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
                    labels: ["Daily Vages", "Cancelled Bookings", "Oxygen", "Manpower", "Medical Facilities"],
                    datasets: [
                        {
                            label: "Expense categories",
                            data: [40, 35, 15, 25, 20],
                            backgroundColor: ["#6faa00", "#ffc107", "#fd7e14", "#5840ef", "#becede"],
                            borderWidth: 0,
                        },
                    ],
                },
                options: {
                    circumference: 180,
                    rotation: -90,
                    responsive: true,
                    cutout: 80,
                    plugins: {
                        legend: {
                            display: false,
                            position: "top",
                        },
                        title: {
                            display: false,
                            text: "Expense Categories",
                            font: {
                                size: 16,
                            },
                        },
                    },
                    layout: {
                        padding: {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        },
                    },
                },
            });
        } else {
            console.error("doughnutChart canvas element not found");
        }
    }

    generateRandomData() {
        return [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()];
    }
    randomScalingFactor() {
        return Math.round(Math.random() * 20);
    }
    randomizeChart() {
        if (this.mySummaryChart) {
            this.mySummaryChart.data.datasets.forEach((dataset) => {
                dataset.data = this.generateRandomData();
            });
            this.mySummaryChart.update();
        }
    }
}
