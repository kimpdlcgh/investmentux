import { Component, OnInit, AfterViewInit, AfterContentChecked, OnDestroy, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
import { DaterangePickerComponent } from "../../../components/daterange-picker/daterange-picker.component";
register();
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";

@Component({
    selector: "app-statistics",
    standalone: true,
    imports: [DaterangePickerComponent],
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
                            <li class="breadcrumb-item active bi" aria-current="page">Statistic</li>
                        </ol>
                    </nav>
                    <h5>Statistics</h5>
                </div>
                <div class="col-auto">
                    <app-daterange-picker></app-daterange-picker>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <!-- summary -->
            <div class="row gx-3 gx-lg-4">
                <!-- Total investment -->
                <div class="col-12 col-sm-6 col-xxl-3 mb-3 mb-lg-4">
                    <div class="card adminuiux-card overflow-hidden">
                        <div class="card-body theme-blue">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-1">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 text-center rounded bg-theme-1 text-white">
                                        <i class="bi bi-cash-stack h4"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <h2 class="fw-medium mb-0">$ 15.41L</h2>
                                    <p class="text-secondary small">Investment</p>
                                </div>
                            </div>
                        </div>
                        <div class="summarychart height-40">
                            <canvas id="bluechart"></canvas>
                        </div>
                    </div>
                </div>
                <!-- Total released profit -->
                <div class="col-12 col-sm-6 col-xxl-3 mb-3 mb-lg-4">
                    <div class="card adminuiux-card overflow-hidden">
                        <div class="card-body theme-green">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-1">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 text-center rounded bg-theme-1 text-white">
                                        <i class="bi bi-bank h4"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col">
                                            <h2 class="fw-medium mb-0">$ 1.50k</h2>
                                            <p class="text-secondary small">Released - P&L</p>
                                        </div>
                                        <div class="col-auto text-end">
                                            <h4 class="fw-medium mb-1"><small class="text-success">+2.2%</small></h4>
                                            <p class="text-secondary small">2 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="summarychart height-40">
                            <canvas id="greenchart"></canvas>
                        </div>
                    </div>
                </div>
                <!-- Total unreleased profit loss -->
                <div class="col-12 col-sm-6 col-xxl-3 mb-3 mb-lg-4">
                    <div class="card adminuiux-card overflow-hidden">
                        <div class="card-body theme-orange">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-1">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 text-center rounded bg-theme-1 text-white">
                                        <i class="bi bi-percent h4"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col">
                                            <h2 class="fw-medium mb-0">- $ 5.41k</h2>
                                            <p class="text-secondary small">Unreleased P&L</p>
                                        </div>
                                        <div class="col-auto text-end">
                                            <h4 class="fw-medium mb-1"><small class="text-danger">-1.04%</small></h4>
                                            <p class="text-secondary small">15min</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="summarychart height-40 w-100">
                            <canvas id="yellowchart"></canvas>
                        </div>
                    </div>
                </div>
                <!-- Total expected return-->
                <div class="col-12 col-sm-6 col-xxl-3 mb-3 mb-lg-4">
                    <div class="card adminuiux-card overflow-hidden">
                        <div class="card-body theme-red">
                            <div class="row gx-3 gx-lg-4 mb-1">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 text-center rounded bg-theme-1 text-white">
                                        <i class="bi bi-x-diamond h4"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col">
                                            <h2 class="fw-medium mb-0">$ 1.34k</h2>
                                            <p class="text-secondary small">Expected P&L</p>
                                        </div>
                                        <div class="col-auto text-end">
                                            <h4 class="fw-medium mb-1"><small class="text-success">+1.03%</small></h4>
                                            <p class="text-secondary small">in 3 days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="summarychart height-40">
                            <canvas id="redchart"></canvas>
                        </div>
                    </div>
                </div>

                <!-- visit chart -->
                <div class="col-12 col-lg-6 col-xl-8 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col">
                                    <h6>Profit/Expense</h6>
                                </div>
                                <div class="col-auto">
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

                            <div class="w-100 height-200 mb-3">
                                <canvas id="summarychart"></canvas>
                            </div>

                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="card adminuiux-card bg-theme-1">
                                        <div class="card-body z-index-1">
                                            <h4 class="fw-medium text">$5560.50</h4>
                                            <p class="opacity-75 small">
                                                Income <span class="fs-14"><i class="bi bi-arrow-up"></i> 11.5%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="card adminuiux-card bg-theme-1-subtle">
                                        <div class="card-body z-index-1">
                                            <h4 class="fw-medium">$5560.50</h4>
                                            <p class="text-secondary">
                                                Expense <span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 11.5%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--  Ages distribution -->
                <div class="col-12 col-lg-6 col-xl-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card h-100">
                        <div class="card-body pb-0">
                            <h6 class="mb-3">Ages in Years</h6>
                            <canvas id="polarchart" class="mx-auto mb-3 height-180"></canvas>
                            <p class="text-secondary small">It looks like a children age between 0-15 are have more cases than expected.</p>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-auto mb-3">
                                    <p class="h4 mb-1">40</p>
                                    <p class="text-secondary small"><span class="me-1 avatar avatar-10 rounded bg-green"></span>0-15</p>
                                </div>
                                <div class="col-auto mb-3">
                                    <p class="h4 mb-1">10</p>
                                    <p class="text-secondary small"><span class="me-1 avatar avatar-10 rounded bg-yellow"></span>16-30</p>
                                </div>
                                <div class="col-auto mb-3">
                                    <p class="h4 mb-1">15</p>
                                    <p class="text-secondary small"><span class="me-1 avatar avatar-10 rounded bg-orange"></span>31-45</p>
                                </div>
                                <div class="col-auto mb-3">
                                    <p class="h4 mb-1">25</p>
                                    <p class="text-secondary small"><span class="me-1 avatar avatar-10 rounded bg-purple"></span>46-60</p>
                                </div>
                                <div class="col-auto mb-3">
                                    <p class="h4 mb-1">10</p>
                                    <p class="text-secondary small"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span>60+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Expense quota-->
                <div class="col-12 col-lg-6 col-xl-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card h-100">
                        <div class="card-body">
                            <h6 class="mb-3">Top Investment Categories</h6>

                            <div class="semidoughnutchart">
                                <div class="expensedatasemidoughnut">
                                    <p class="h4 mb-0">$ 15.50k</p>
                                    <p class="text-secondary small">Profit</p>
                                </div>
                                <canvas id="semidoughnutchart" class="mx-auto width-260 height-260"></canvas>
                            </div>

                            <div class="row ">
                                <div class="col-6 col-md-6 mb-3">
                                    <p class="text-secondary small mb-1">
                                        <span class="me-1 avatar avatar-10 rounded bg-green"></span>
                                        Share holdings
                                    </p>
                                    <h4 class="ps-3 fw-medium">
                                        $ 165.52k<br />
                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1 fs-14"></i> 25.30%</span>
                                    </h4>
                                </div>
                                <div class="col-6 col-md-6 mb-3">
                                    <p class="text-secondary small mb-1">
                                        <span class="me-1 avatar avatar-10 rounded bg-yellow"></span>
                                        Mutual Funds
                                    </p>
                                    <h4 class="ps-3 fw-medium">
                                        $ 265.85k<br />
                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 21.42%</span>
                                    </h4>
                                </div>
                                <div class="col-6 col-md-6 mb-3">
                                    <p class="text-secondary small mb-1">
                                        <span class="me-1 avatar avatar-10 rounded bg-orange"></span>
                                        Bank Bonds
                                    </p>
                                    <h4 class="ps-3 fw-medium">
                                        $ 356.26k<br />
                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 20.18%</span>
                                    </h4>
                                </div>
                                <div class="col-6 col-md-6 mb-3">
                                    <p class="text-secondary small mb-1">
                                        <span class="me-1 avatar avatar-10 rounded bg-purple"></span>
                                        Gov. Securities
                                    </p>
                                    <h4 class="ps-3 fw-medium">
                                        $ 185.65<br />
                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 15.65%</span>
                                    </h4>
                                </div>
                                <div class="col-6 col-md-6">
                                    <p class="text-secondary small mb-1">
                                        <span class="me-1 avatar avatar-10 rounded bg-secondary"></span>
                                        Fixed Deposit
                                    </p>
                                    <h4 class="ps-3 fw-medium">
                                        $ 190.45k<br />
                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 18.50%</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- list table -->
                <div class="col-12 col-lg-12 col-xl-8">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body pb-0">
                            <h6>My Holdings Performance</h6>

                            <!-- Assets funds and shares -->
                            <table class="table nowrap mb-0" id="dataTable">
                                <thead>
                                    <tr>
                                        <th data-priority="1">Company</th>
                                        <th data-priority="1">Price</th>
                                        <th>Holding</th>
                                        <th data-priority="2">Profit/Loss</th>
                                        <th data-priority="3">Today's Trend</th>
                                        <th data-priority="4">% Change</th>
                                        <th data-priority="1">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <p class="mb-0">Jintudal</p>
                                                <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0">$ 100.45</p>
                                            <p class="small"><span class="text-secondary" data-bs-toggle="tooltip" title="Last top price">LTP:</span> 152</p>
                                        </td>
                                        <td>
                                            <p class="mb-0">102 units</p>
                                            <p class="small"><span class="text-secondary">Invested:</span> $ 1400.45</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 25.30%</p>
                                            <p class="small"><span class="text-secondary">Profit:</span> $ 305.5</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-graph-up-arrow"></i> Bullish</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 1.24%</p>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-success me-1">Invest</button>
                                            <button class="btn btn-sm btn-outline-danger">Sell</button>
                                            <div class="dropdown d-inline-block">
                                                <a class="btn btn-link btn-square no-caret" data-bs-toggle="dropdown">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Favorite</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">View Chart</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Company Events</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <p class="mb-0">Ciplasc</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0">$ 520.45</p>
                                            <p class="small"><span class="text-secondary" data-bs-toggle="tooltip" title="Last top price">LTP:</span> 521.05</p>
                                        </td>
                                        <td>
                                            <p class="mb-0">50 units</p>
                                            <p class="small"><span class="text-secondary">Invested:</span> $ 1520.45</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 15.40%</p>
                                            <p class="small"><span class="text-secondary">Profit:</span> $ 408.65</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-danger"><i class="bi bi-graph-down-arrow"></i> Bearish</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-danger"><i class="bi bi-caret-down-fill"></i> 0.85%</p>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-success me-1">Invest</button>
                                            <button class="btn btn-sm btn-outline-danger">Sell</button>
                                            <div class="dropdown d-inline-block">
                                                <a class="btn btn-link btn-square no-caret" data-bs-toggle="dropdown">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Favorite</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">View Chart</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Company Events</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <p class="mb-0">Trisha LLC</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0">$ 856.45</p>
                                            <p class="small"><span class="text-secondary" data-bs-toggle="tooltip" title="Last top price">LTP:</span> 856.55</p>
                                        </td>
                                        <td>
                                            <p class="mb-0">20 units</p>
                                            <p class="small"><span class="text-secondary">Invested:</span> $ 2050.00</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 35.15%</p>
                                            <p class="small"><span class="text-secondary">Profit:</span> $ 685.00</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-graph-up-arrow"></i> Bullish</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 1.03%</p>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-success me-1">Invest</button>
                                            <button class="btn btn-sm btn-outline-danger">Sell</button>
                                            <div class="dropdown d-inline-block">
                                                <a class="btn btn-link btn-square no-caret" data-bs-toggle="dropdown">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Favorite</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">View Chart</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Company Events</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <p class="mb-0">Cyborgous</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0">$ 150.00</p>
                                            <p class="small"><span class="text-secondary" data-bs-toggle="tooltip" title="Last top price">LTP:</span> 153.00</p>
                                        </td>
                                        <td>
                                            <p class="mb-0">3 units</p>
                                            <p class="small"><span class="text-secondary">Invested:</span> $ 450.00</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 10.00%</p>
                                            <p class="small"><span class="text-secondary">Profit:</span> $ 45.0</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-danger"><i class="bi bi-graph-down-arrow"></i> Bearish</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-danger"><i class="bi bi-caret-down-fill"></i> 0.65%</p>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-success me-1">Invest</button>
                                            <button class="btn btn-sm btn-outline-danger">Sell</button>
                                            <div class="dropdown d-inline-block">
                                                <a class="btn btn-link btn-square no-caret" data-bs-toggle="dropdown">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Favorite</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">View Chart</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Company Events</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <p class="mb-0">Spanishwebs</p>
                                                <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0">$ 130.45</p>
                                            <p class="small"><span class="text-secondary" data-bs-toggle="tooltip" title="Last top price">LTP:</span> 135.52</p>
                                        </td>
                                        <td>
                                            <p class="mb-0">100 units</p>
                                            <p class="small"><span class="text-secondary">Invested:</span> $ 150.45</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 5.52%</p>
                                            <p class="small"><span class="text-secondary">Profit:</span> $ 10.15</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-graph-up-arrow"></i> Bullish</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 1.24%</p>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-success me-1">Invest</button>
                                            <button class="btn btn-sm btn-outline-danger">Sell</button>
                                            <div class="dropdown d-inline-block">
                                                <a class="btn btn-link btn-square no-caret" data-bs-toggle="dropdown">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Favorite</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">View Chart</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Company Events</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <p class="mb-0">Jintudal</p>
                                                <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0">$ 100.45</p>
                                            <p class="small"><span class="text-secondary" data-bs-toggle="tooltip" title="Last top price">LTP:</span> 152</p>
                                        </td>
                                        <td>
                                            <p class="mb-0">102 units</p>
                                            <p class="small"><span class="text-secondary">Invested:</span> $ 1400.45</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 25.30%</p>
                                            <p class="small"><span class="text-secondary">Profit:</span> $ 305.5</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-graph-up-arrow"></i> Bullish</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 1.24%</p>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-success me-1">Invest</button>
                                            <button class="btn btn-sm btn-outline-danger">Sell</button>
                                            <div class="dropdown d-inline-block">
                                                <a class="btn btn-link btn-square no-caret" data-bs-toggle="dropdown">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Favorite</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">View Chart</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Company Events</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <p class="mb-0">Jintudal</p>
                                                <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0">$ 100.45</p>
                                            <p class="small"><span class="text-secondary" data-bs-toggle="tooltip" title="Last top price">LTP:</span> 152</p>
                                        </td>
                                        <td>
                                            <p class="mb-0">102 units</p>
                                            <p class="small"><span class="text-secondary">Invested:</span> $ 1400.45</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 25.30%</p>
                                            <p class="small"><span class="text-secondary">Profit:</span> $ 305.5</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-graph-up-arrow"></i> Bullish</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 1.24%</p>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-success me-1">Invest</button>
                                            <button class="btn btn-sm btn-outline-danger">Sell</button>
                                            <div class="dropdown d-inline-block">
                                                <a class="btn btn-link btn-square no-caret" data-bs-toggle="dropdown">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Favorite</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">View Chart</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Company Events</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <p class="mb-0">Jintudal</p>
                                                <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0">$ 100.45</p>
                                            <p class="small"><span class="text-secondary" data-bs-toggle="tooltip" title="Last top price">LTP:</span> 152</p>
                                        </td>
                                        <td>
                                            <p class="mb-0">102 units</p>
                                            <p class="small"><span class="text-secondary">Invested:</span> $ 1400.45</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 25.30%</p>
                                            <p class="small"><span class="text-secondary">Profit:</span> $ 305.5</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-graph-up-arrow"></i> Bullish</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 1.24%</p>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-success me-1">Invest</button>
                                            <button class="btn btn-sm btn-outline-danger">Sell</button>
                                            <div class="dropdown d-inline-block">
                                                <a class="btn btn-link btn-square no-caret" data-bs-toggle="dropdown">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Favorite</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">View Chart</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Company Events</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-inline-block align-middle">
                                                <p class="mb-0">Jintudal</p>
                                                <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p class="mb-0">$ 100.45</p>
                                            <p class="small"><span class="text-secondary" data-bs-toggle="tooltip" title="Last top price">LTP:</span> 152</p>
                                        </td>
                                        <td>
                                            <p class="mb-0">102 units</p>
                                            <p class="small"><span class="text-secondary">Invested:</span> $ 1400.45</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 25.30%</p>
                                            <p class="small"><span class="text-secondary">Profit:</span> $ 305.5</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-graph-up-arrow"></i> Bullish</p>
                                        </td>
                                        <td>
                                            <p class="mb-0 text-success"><i class="bi bi-caret-up-fill"></i> 1.24%</p>
                                        </td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-success me-1">Invest</button>
                                            <button class="btn btn-sm btn-outline-danger">Sell</button>
                                            <div class="dropdown d-inline-block">
                                                <a class="btn btn-link btn-square no-caret" data-bs-toggle="dropdown">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Favorite</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">View Chart</a></li>
                                                    <li><a class="dropdown-item" href="javascript:void(0)">Company Events</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- top gainer -->
                <div class="col-12 col-lg-6 col-xl-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <div class="card-header">
                            <h6>Top Gainer</h6>
                        </div>
                        <ul class="list-group list-group-flush border-top bg-none">
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-building-lock avatar avatar-40 h5 rounded-circle border"></i>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Jindaabanda</p>
                                        <p class="small text-secondary">$ 2250.00, 15 Units</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 4500.00</h6>
                                        <p class="small text-success"><i class="bi bi-caret-up-fill"></i> 25.30%</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <span class="avatar avatar-40 rounded-circle border fw-bold small">SIP</span>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Guaranteed Return</p>
                                        <p class="small text-secondary">$ 1500.00, $ 200.00/mo.</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 1800.00</h6>
                                        <p class="small text-success"><i class="bi bi-caret-up-fill"></i> 24.15%</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-percent avatar avatar-40 h5 rounded-circle border"></i>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Fixed Deposit &#64;7.25%</p>
                                        <p class="small text-secondary">$ 4000.00</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 5280.00</h6>
                                        <p class="small text-success"><i class="bi bi-caret-up-fill"></i> 22.65%</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-percent avatar avatar-40 h5 rounded-circle border"></i>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Fixed Deposit &#64;7.00%</p>
                                        <p class="small text-secondary">$ 4500.00, 24/45 mo.</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 5600.00</h6>
                                        <p class="small text-success"><i class="bi bi-caret-up-fill"></i> 18.15%</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <span class="avatar avatar-40 rounded-circle border fw-bold small">SIP</span>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Real Estate Fund</p>
                                        <p class="small text-secondary">$ 1500.00</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 1850.00</h6>
                                        <p class="small text-success"><i class="bi bi-caret-up-fill"></i> 17.65%</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- top loser -->
                <div class="col-12 col-lg-6 col-xl-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <div class="card-header">
                            <h6>Top Loser</h6>
                        </div>
                        <ul class="list-group list-group-flush border-top bg-none">
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Infragistic LLP</p>
                                        <p class="small text-secondary">$ 2250.00, 10 units</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 4500.00</h6>
                                        <p class="small text-danger"><i class="bi bi-caret-down-fill"></i> - 25.30%</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Reliables</p>
                                        <p class="small text-secondary">$ 1200.00, 15 units</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 3150.00</h6>
                                        <p class="small text-danger"><i class="bi bi-caret-down-fill"></i> - 22.65%</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Alsometan</p>
                                        <p class="small text-secondary">$ 2560.00, 11 units</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 4280.00</h6>
                                        <p class="small text-danger"><i class="bi bi-caret-down-fill"></i> - 21.15%</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col">
                                        <p class="mb-1 fw-medium">LinkedJosh</p>
                                        <p class="small text-secondary">$ 850.00, 25 units</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 4280.00</h6>
                                        <p class="small text-danger"><i class="bi bi-caret-down-fill"></i> - 21.05%</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Real Estate Card</p>
                                        <p class="small text-secondary">$ 1325.00, 13 units</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 1850.00</h6>
                                        <p class="small text-danger"><i class="bi bi-caret-down-fill"></i> - 20.75%</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- risk-o-meter -->
                <div class="col-12 col-lg-6 col-xl-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <div class="card-header">
                            <h6>Riskometer</h6>
                        </div>
                        <div class="card-body">
                            <div class="text-center mb-3">
                                <h5>Moderate</h5>
                                <p class="text-secondary small">Your portfolio in good situation</p>
                            </div>
                            <div class="riskometer moderate mb-3">
                                <!-- low low-moderate moderate moderate-high very-high high-->
                                <div class="indicator"></div>
                            </div>
                            <br />
                            <div class="text-center">
                                <h4 class="fw-medium">
                                    $ 15.51k <span class="text-success fs-14"><i class="bi bi-arrow-up-short me-1"></i> 11.5%</span>
                                </h4>
                                <p class="text-secondary">Profit Revenue</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatisticsComponent {
    @ViewChild("swiperContainer") swiperContainer!: ElementRef;
    myRedChart!: Chart;
    myBlueChart!: Chart;
    myGreenChart!: Chart;
    myYellowChart!: Chart;

    mySummaryChart!: Chart;
    myPolarChart2!: Chart;
    doughnutCharts!: Chart;

    ngAfterViewInit() {
        this.redchart();
        this.bluechart();
        this.greenchart();
        this.yellowchart();

        this.summarychart();
        this.polarchart();
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
        const areachartblue = document.getElementById("summarychart") as HTMLCanvasElement;
        const ctx = areachartblue.getContext("2d"); // Get the 2D rendering context
        if (ctx) {
            const gradientblue = ctx.createLinearGradient(0, 0, 0, 200);
            gradientblue.addColorStop(0, "rgba(0, 73, 232, 1.0)");
            gradientblue.addColorStop(1, "rgba(0, 73, 232, 0.5)");

            const gradientblue2 = ctx.createLinearGradient(0, 0, 0, 200);
            gradientblue2.addColorStop(0, "rgba(0, 73, 232, 0.65)");
            gradientblue2.addColorStop(1, "rgba(0, 73, 232, 0)");

            this.mySummaryChart = new Chart(areachartblue, {
                type: "bar",
                data: {
                    labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 0,
                            backgroundColor: gradientblue,
                            borderColor: "#5840ef",
                            borderWidth: 1,
                            fill: true,
                            tension: 0.5,
                        } as any,
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 0,
                            backgroundColor: gradientblue2,
                            borderColor: "rgba(0, 73, 232, 0.75)",
                            borderWidth: 1,
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

    /* red chart  */
    redchart() {
        const redareachart = document.getElementById("redchart") as HTMLCanvasElement;
        const ctx = redareachart.getContext("2d"); // Get the 2D rendering context
        if (ctx) {
            const redareachartGrad = ctx.createLinearGradient(0, 0, 0, 60);
            redareachartGrad.addColorStop(0, "rgba(200, 0, 54, 0.95)");
            redareachartGrad.addColorStop(1, "rgba(200, 0, 54, 0.0)");

            this.myRedChart = new Chart(redareachart, {
                type: "line",
                data: {
                    labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 0,
                            backgroundColor: redareachartGrad,
                            borderColor: "#f03d4f",
                            borderWidth: 0,
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
                            enabled: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        },
                    },
                },
            });
        }
    }

    /* blue chart  */
    bluechart() {
        const blueareachart = document.getElementById("bluechart") as HTMLCanvasElement;
        const ctx = blueareachart.getContext("2d"); // Get the 2D rendering context
        if (ctx) {
            const blueareachartGrad = ctx.createLinearGradient(0, 0, 0, 60);
            blueareachartGrad.addColorStop(0, "rgba(0, 73, 232, 0.95)");
            blueareachartGrad.addColorStop(1, "rgba(0, 73, 232, 0.0)");

            this.myBlueChart = new Chart(blueareachart, {
                type: "line",
                data: {
                    labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 0,
                            backgroundColor: blueareachartGrad,
                            borderColor: "#015EC2",
                            borderWidth: 0,
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
                            enabled: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        },
                    },
                },
            });
        }
    }

    /* green chart  */
    greenchart() {
        const greenareachart = document.getElementById("greenchart") as HTMLCanvasElement;
        const ctx = greenareachart.getContext("2d"); // Get the 2D rendering context
        if (ctx) {
            const greenareachartGrad = ctx.createLinearGradient(0, 0, 0, 60);
            greenareachartGrad.addColorStop(0, "rgba(8, 160, 70, 0.95)");
            greenareachartGrad.addColorStop(1, "rgba(8, 160, 70, 0.0)");

            this.myRedChart = new Chart(greenareachart, {
                type: "line",
                data: {
                    labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 0,
                            backgroundColor: greenareachartGrad,
                            borderColor: "#91C300",
                            borderWidth: 0,
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
                            enabled: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        },
                    },
                },
            });
        }
    }

    /* yellow chart  */
    yellowchart() {
        const yellowareachart = document.getElementById("yellowchart") as HTMLCanvasElement;
        const ctx = yellowareachart.getContext("2d"); // Get the 2D rendering context
        if (ctx) {
            const yellowareachartGrad = ctx.createLinearGradient(0, 0, 0, 60);
            yellowareachartGrad.addColorStop(0, "rgba(252, 122, 30, 0.95)");
            yellowareachartGrad.addColorStop(1, "rgba(252, 122, 30, 0.0)");

            this.myBlueChart = new Chart(yellowareachart, {
                type: "line",
                data: {
                    labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 0,
                            backgroundColor: yellowareachartGrad,
                            borderColor: "#fdba00",
                            borderWidth: 0,
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
                            enabled: false,
                        },
                    },
                    scales: {
                        y: {
                            display: false,
                            beginAtZero: true,
                        },
                        x: {
                            display: false,
                        },
                    },
                },
            });
        }
    }

    polarchart() {
        const polarChart1 = document.getElementById("polarchart") as HTMLCanvasElement;
        const ctx2 = polarChart1.getContext("2d"); // Get the 2D rendering context
        if (ctx2) {
            this.myPolarChart2 = new Chart(polarChart1, {
                type: "polarArea",
                data: {
                    labels: ["0-15", "16-30", "31-45", "46-60", "60+"],
                    datasets: [
                        {
                            label: "Age Range",
                            data: [40, 10, 15, 25, 10],
                            backgroundColor: ["#6faa00", "#ffc107", "#fd7e14", "#0049e8", "#becede"],
                            borderWidth: 0,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: true,
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
                            backgroundColor: ["#6faa00", "#ffc107", "#fd7e14", "#0049e8", "#becede"],
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
