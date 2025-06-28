import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();
import { DaterangePickerComponent } from "../../../components/daterange-picker/daterange-picker.component";

@Component({
    selector: "app-company-shares",
    standalone: true,
    imports: [DaterangePickerComponent],
    template: `
        <!-- breadcrumb -->
        <div class="container-fluid mt-3 mb-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Company Shares</li>
                        </ol>
                    </nav>
                    <h5>Company Shares</h5>
                </div>
                <div class="col-auto col-sm-auto text-end"></div>
            </div>
        </div>

        <!-- updates -->
        <div class="container-fluid mb-3">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col">
                    <h6 class="mb-0">Updates:</h6>
                    <p class="small text-secondary">
                        Today <span class="text-danger">Live</span>
                        <button class="btn btn-sm btn-square btn-link"><i class="bi bi-arrow-clockwise"></i></button>
                    </p>
                </div>
                <div class="col-8 col-sm-10">
                    <swiper-container slides-per-view="auto" space-between="0" autoplay="true" class="swiper swipernav">
                        <swiper-slide class="swiper-slide width-180">
                            <h6 class="mb-0 text-success">24,806.00</h6>
                            <p class="small">
                                <span class="text-secondary">GIFTS NIFTYS:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 1.40%</span>
                            </p>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide width-180">
                            <h6 class="mb-0 text-success">41,118.13</h6>
                            <p class="small">
                                <span class="text-secondary">Nikkies 2250:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 0.40%</span>
                            </p>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide width-180">
                            <h6 class="mb-0 text-danger">30,006.00</h6>
                            <p class="small">
                                <span class="text-secondary">JOHN DOUES:</span> <span class="text-danger"><i class="bi bi-caret-down-fill"></i> 0.40%</span>
                            </p>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide width-180">
                            <h6 class="mb-0 text-success">90,105.00</h6>
                            <p class="small">
                                <span class="text-secondary">Adminuiux Love:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 1.40%</span>
                            </p>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide width-180">
                            <h6 class="mb-0 text-success">24,806.00</h6>
                            <p class="small">
                                <span class="text-secondary">GIFTS NIFTYS:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 1.40%</span>
                            </p>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide width-180">
                            <h6 class="mb-0 text-success">41,118.13</h6>
                            <p class="small">
                                <span class="text-secondary">Nikkies 2250:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 0.40%</span>
                            </p>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide width-180">
                            <h6 class="mb-0 text-danger">30,006.00</h6>
                            <p class="small">
                                <span class="text-secondary">JOHN DOUES:</span> <span class="text-danger"><i class="bi bi-caret-down-fill"></i> 0.40%</span>
                            </p>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide width-180">
                            <h6 class="mb-0 text-success">90,105.00</h6>
                            <p class="small">
                                <span class="text-secondary">Adminuiux Love:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 1.40%</span>
                            </p>
                        </swiper-slide>
                    </swiper-container>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 bg-theme-1 text-white rounded"><span class="h6">GCL</span></div>
                                </div>
                                <div class="col">
                                    <h5 class="fw-medium mb-0">Goods Co.</h5>
                                    <p class="text-secondary small">200 Shares</p>
                                </div>
                            </div>
                            <h4 class="fw-medium mb-0">$5560.50</h4>
                            <p class="text-secondary small">
                                $56.1 <span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 1.75%</span> Today
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 bg-indigo text-white rounded"><i class="h5 bi bi-bootstrap"></i></div>
                                </div>
                                <div class="col">
                                    <h5 class="fw-medium mb-0">Bootstraps Co.</h5>
                                    <p class="text-secondary small">150 Shares</p>
                                </div>
                            </div>
                            <h4 class="fw-medium mb-0">$4526.50</h4>
                            <p class="text-secondary small">
                                $51.0 <span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 2.35%</span> Today
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 bg-cyan text-white rounded"><i class="h5 bi bi-twitter"></i></div>
                                </div>
                                <div class="col">
                                    <h5 class="fw-medium mb-0">Tweets LLP.</h5>
                                    <p class="text-secondary small">520 Shares</p>
                                </div>
                            </div>
                            <h4 class="fw-medium mb-0">$8596.50</h4>
                            <p class="text-secondary small">
                                $25.0 <span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 1.5%</span> Today
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 bg-success text-white rounded"><span class="h6">EVS</span></div>
                                </div>
                                <div class="col">
                                    <h5 class="fw-medium mb-0">Eventos SM.</h5>
                                    <p class="text-secondary small">100 Shares</p>
                                </div>
                            </div>
                            <h4 class="fw-medium mb-0">$2541.50</h4>
                            <p class="text-secondary small">
                                $26.0 <span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 2.15%</span> Today
                            </p>
                        </div>
                    </div>
                </div>

                <!-- portfolio chart -->
                <div class="col-12 col-lg-6 col-xl-4 mb-3 mb-lg-4">
                    <!-- summary account -->
                    <div class="card adminuiux-card">
                        <div class="card-body pb-0">
                            <div class="avatar avatar-50 bg-theme-1-subtle text-theme-1 rounded mb-3">
                                <i class="bi bi-bar-chart-line h4"></i>
                            </div>
                            <h5 class="fw-medium">Your portfolio value is</h5>
                            <h1 class="fw-medium">
                                $ 65.52k <span class="text-success fs-14"><i class="bi bi-arrow-up-short me-1"></i> 18.5%</span>
                            </h1>
                            <p class="text-secondary small mb-3">Your portfolio has been grown to<br />$ 152.00 at 7% last week.</p>

                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <div class="card mb-3 mb-lg-4">
                                        <div class="card-body">
                                            <p class="text-secondary small mb-2">Revenue</p>
                                            <h4 class="fw-medium">$ 15.51k</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card mb-3 mb-lg-4">
                                        <div class="card-body">
                                            <p class="text-secondary small mb-2">Investment</p>
                                            <h4 class="fw-medium">$ 45.00k</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 col-xl-8 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <!-- chart section -->
                        <div class="card-header">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination pagination-sm  mb-0">
                                            <li class="page-item"><a class="page-link" href="#">1D</a></li>
                                            <li class="page-item"><a class="page-link active" href="#">1W</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1M</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1Y</a></li>
                                            <li class="page-item"><a class="page-link" href="#">All</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="col-auto position-relative">
                                    <app-daterange-picker></app-daterange-picker>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="w-100 height-240">
                                <canvas id="summarychart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Assets funds and shares -->
                <div class="col-12">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body pb-0 ">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col">
                                    <h6>Technical Trend</h6>
                                </div>
                                <div class="col-auto px-0">
                                    <select class="form-select form-select-sm">
                                        <option selected>All Trend</option>
                                        <option>Bullish</option>
                                        <option>Bearish</option>
                                    </select>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-sm btn-square btn-link"><i class="bi bi-arrow-clockwise"></i></button>
                                </div>
                            </div>
                            <table class="table nowrap mb-0" id="dataTable">
                                <thead>
                                    <tr>
                                        <th class="all">Company</th>
                                        <th class="all">Price</th>
                                        <th class="xs sm md">Holding</th>
                                        <th class="xs sm">Profit/Loss</th>
                                        <th class="xs">Today's Trend</th>
                                        <th class="xs">% Change</th>
                                        <th class="xs">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p class="mb-0">Jintudal</p>
                                            <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
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
                                            <button class="btn btn-sm btn-outline-success">Invest</button>
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
                                            <p class="mb-0">Ciplasc</p>
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
                                            <button class="btn btn-sm btn-outline-success">Invest</button>
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
                                            <p class="mb-0">Trisha LLC</p>
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
                                            <button class="btn btn-sm btn-outline-success">Invest</button>
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
                                            <p class="mb-0">Cyborgous</p>
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
                                            <button class="btn btn-sm btn-outline-success">Invest</button>
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
                                            <p class="mb-0">Spanishwebs</p>
                                            <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
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
                                            <button class="btn btn-sm btn-outline-success">Invest</button>
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
                                            <p class="mb-0">Jintudal</p>
                                            <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
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
                                            <button class="btn btn-sm btn-outline-success">Invest</button>
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
                                            <p class="mb-0">Jintudal</p>
                                            <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
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
                                            <button class="btn btn-sm btn-outline-success">Invest</button>
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
                                            <p class="mb-0">Jintudal</p>
                                            <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
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
                                            <button class="btn btn-sm btn-outline-success">Invest</button>
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
                                            <p class="mb-0">Jintudal</p>
                                            <p class="small text-theme-1"><i class="bi bi-award-fill"></i> Event</p>
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
                                            <button class="btn btn-sm btn-outline-success">Invest</button>
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
            </div>
        </div>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CompanySharesComponent {
    mySummaryChart!: Chart;

    ngAfterViewInit() {
        this.summarychart();

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

    /* chart  */
    summarychart() {
        const areachartblue = document.getElementById("summarychart") as HTMLCanvasElement;
        const ctx = areachartblue.getContext("2d"); // Get the 2D rendering context
        if (ctx) {
            const gradient2 = ctx.createLinearGradient(0, 0, 0, 200);
            gradient2.addColorStop(0, "rgba(0, 73, 232, 0.8)");
            gradient2.addColorStop(0.5, "rgba(229, 10, 142, 0.5)");
            gradient2.addColorStop(1, "rgba(252, 122, 30, 0)");
            this.mySummaryChart = new Chart(areachartblue, {
                type: "line",
                data: {
                    labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 1,
                            backgroundColor: gradient2,
                            borderColor: "#5840ef",
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
