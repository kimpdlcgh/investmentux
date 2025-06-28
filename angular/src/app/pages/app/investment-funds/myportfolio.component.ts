import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();

@Component({
    selector: "app-myportfolio",
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
                            <li class="breadcrumb-item active bi" aria-current="page">My Portfolio</li>
                        </ol>
                    </nav>
                    <h5>My Portfolio</h5>
                </div>
                <div class="col-auto col-sm-auto text-end"></div>
            </div>
        </div>

        <!-- Content  -->
        <div class="container-fluid mt-4" id="main-content">
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-6 col-xl-5 col-xxl-4">
                    <div class="rounded bg-theme-1-subtle d-flex flex-column mb-3">
                        <div class="card adminuiux-card mb-3 mb-lg-4">
                            <div class="card-body pb-0">
                                <!-- Welcome box -->
                                <div class="mb-3">
                                    <h4 class="fw-normal mb-0 text-secondary">Good Morning!</h4>
                                    <h1>John Smith</h1>
                                </div>
                                <div class="row gx-3 gx-lg-4">
                                    <div class="col-6">
                                        <div class="card adminuiux-card bg-theme-1 mb-3">
                                            <div class="card-body">
                                                <p class="text-white small mb-2">Current Value</p>
                                                <h4 class="fw-medium">
                                                    $ 65.52k<br /><span class="text-white fs-14"><i class="bi bi-arrow-up-short me-1"></i> 18.5%</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="card adminuiux-card bg-theme-1-subtle mb-3">
                                            <div class="card-body">
                                                <p class="text-secondary small mb-2">Profit Revenue</p>
                                                <h4 class="fw-medium">
                                                    $ 15.51k<br /><span class="text-success fs-14"><i class="bi bi-arrow-up-short me-1"></i> 11.5%</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="card adminuiux-card bg-theme-1-subtle mb-3">
                                            <div class="card-body">
                                                <p class="text-secondary small mb-2">7 Days Profit</p>
                                                <h4 class="fw-medium">
                                                    $ 4.15k<br /><span class="text-success fs-14"><i class="bi bi-arrow-up-short me-1"></i> 2.54%</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="card adminuiux-card bg-theme-1-subtle mb-3">
                                            <div class="card-body">
                                                <p class="text-secondary small mb-2">Investment</p>
                                                <h4 class="fw-medium">$ 45.00k<br /><span class="text-success fs-14">$1.50k 30 days</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-3">
                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col-auto">
                                            <i class="bi bi-house fs-4 avatar avatar-50 bg-success text-white rounded"></i>
                                        </div>
                                        <div class="col">
                                            <h4 class="mb-0">$ 22500.00</h4>
                                            <p class="small opacity-75">Goal: Sweet Home</p>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-2">
                                        <div class="col-auto">2 months</div>
                                        <div class="col"></div>
                                        <div class="col-auto">22 months</div>
                                    </div>
                                    <div class="progress height-10 mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped bg-success" style="width: 10%"></div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 small text-secondary">
                                        <div class="col-auto">10%</div>
                                        <div class="col"></div>
                                        <div class="col-auto">90%</div>
                                    </div>
                                </div>
                            </div>

                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col-auto">
                                            <i class="bi bi-car-front fs-4 avatar avatar-50 bg-theme-1 text-white rounded"></i>
                                        </div>
                                        <div class="col">
                                            <h4 class="mb-0">$ 10500.00</h4>
                                            <p class="small opacity-75">Goal: Car</p>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-2">
                                        <div class="col-auto">3 months</div>
                                        <div class="col"></div>
                                        <div class="col-auto">9 months</div>
                                    </div>
                                    <div class="progress height-10 mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        <div class="progress-bar progress-bar-striped bg-theme-1" style="width: 30%"></div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 small text-secondary">
                                        <div class="col-auto">30%</div>
                                        <div class="col"></div>
                                        <div class="col-auto">70%</div>
                                    </div>
                                </div>
                            </div>

                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col">
                                            <h5>Refer friends &amp; earn money</h5>
                                            <p class="text-secondary small">Ask your friend to join us &amp; earn 10% of profit they made first time.</p>
                                            <button class="btn btn-sm btn-outline-theme my-1">Invite to Join</button>
                                        </div>
                                        <div class="col-auto">
                                            <div class="avatar avatar-60 rounded bg-theme-1-subtle text-theme-1">
                                                <i class="bi bi-send h1"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card adminuiux-card border border-theme-1 mb-3">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col-12 col-sm-4 auto text-center">
                                            <div class="w-100 height-120 mb-3 mb-sm-0 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/taxoi-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                                <div class="col">
                                                    <p><span class="badge badge-light text-bg-theme-1">G-SEC</span></p>
                                                </div>
                                                <div class="col-auto"><button class="btn btn-sm btn-outline-theme">Place Bid</button></div>
                                            </div>
                                            <h5>New GS 2025</h5>
                                            <p class="small"><span class="text-secondary">Ends on</span> Thu, 1 Aug 2024, <span class="text-secondary">Indicative Yield*</span> 7.05%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-7 col-xxl-8">
                    <div class="row gx-3 gx-lg-4">
                        <!-- Summary chart -->
                        <div class="col-12 col-lg-12 col-xxl-8 mb-3 mb-lg-4">
                            <div class="card adminuiux-card">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4 align-items-center justify-content-center mb-2">
                                        <div class="col-auto position-relative">
                                            <input type="text" class="form-control border-0 d-inline-block w-auto align-middle" id="daterangepicker" />
                                            <button class="btn btn-sm btn-square btn-link d-inline-block align-middle" onclick="$(this).prev().click()">
                                                <i data-feather="calendar" class="text-theme-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row mb-2">
                                        <div class="col-12 px-1">
                                            <div class="w-100 height-200">
                                                <canvas id="summarychart"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination pagination-sm justify-content-center mb-0">
                                            <li class="page-item"><a class="page-link" href="javascript:void(0)">1D</a></li>
                                            <li class="page-item"><a class="page-link active" href="javascript:void(0)">1W</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript:void(0)">1M</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript:void(0)">1Y</a></li>
                                            <li class="page-item"><a class="page-link" href="javascript:void(0)">All</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <!-- summary quick -->
                        <div class="col-12 col-lg-12 col-xxl-4 mb-3 mb-lg-4">
                            <div class="card adminuiux-card position-relative overflow-hidden bg-theme-1 h-100">
                                <div class="position-absolute top-0 start-0 h-100 w-100 z-index-0 coverimg opacity-50">
                                    <img src="assets/img/modern-ai-image/flamingo-4.jpg" alt="" />
                                </div>
                                <div class="card-body z-index-1">
                                    <div class="row align-items-center justify-content-center h-100 py-3">
                                        <div class="col-11">
                                            <h4 class="fw-normal">Your portfolio value has been grown by</h4>
                                            <h1 class="mb-3">$7.52k</h1>
                                            <p>In last 7 days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- updates -->
                        <div class="col-12 mb-3 mb-lg-4">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col-auto">
                                    <h6 class="mb-0">Updates:</h6>
                                    <p class="small text-secondary">
                                        Today
                                        <span class="text-danger">Live</span>
                                        <button class="btn btn-sm btn-square btn-link"><i class="bi bi-arrow-clockwise"></i></button>
                                    </p>
                                </div>
                                <div class="col-7 col-sm-9">
                                    <swiper-container slides-per-view="auto" space-between="0" autoplay="true" class="swiper swipernav">
                                        <swiper-slide class="swiper-slide width-200">
                                            <h6 class="mb-0 text-success">24,806.00</h6>
                                            <p class="small">
                                                <span class="text-secondary">GIFTS NIFTYS:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 1.40%</span>
                                            </p>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide width-200">
                                            <h6 class="mb-0 text-success">41,118.13</h6>
                                            <p class="small">
                                                <span class="text-secondary">Nikkies 2250:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 0.40%</span>
                                            </p>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide width-200">
                                            <h6 class="mb-0 text-danger">30,006.00</h6>
                                            <p class="small">
                                                <span class="text-secondary">JOHN DOUES:</span> <span class="text-danger"><i class="bi bi-caret-down-fill"></i> 0.40%</span>
                                            </p>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide width-200">
                                            <h6 class="mb-0 text-success">90,105.00</h6>
                                            <p class="small">
                                                <span class="text-secondary">Adminuiux Love:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 1.40%</span>
                                            </p>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide width-200">
                                            <h6 class="mb-0 text-success">24,806.00</h6>
                                            <p class="small">
                                                <span class="text-secondary">GIFTS NIFTYS:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 1.40%</span>
                                            </p>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide width-200">
                                            <h6 class="mb-0 text-success">41,118.13</h6>
                                            <p class="small">
                                                <span class="text-secondary">Nikkies 2250:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 0.40%</span>
                                            </p>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide width-200">
                                            <h6 class="mb-0 text-danger">30,006.00</h6>
                                            <p class="small">
                                                <span class="text-secondary">JOHN DOUES:</span> <span class="text-danger"><i class="bi bi-caret-down-fill"></i> 0.40%</span>
                                            </p>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide width-200">
                                            <h6 class="mb-0 text-success">90,105.00</h6>
                                            <p class="small">
                                                <span class="text-secondary">Adminuiux Love:</span> <span class="text-success"><i class="bi bi-caret-up-fill"></i> 1.40%</span>
                                            </p>
                                        </swiper-slide>
                                    </swiper-container>
                                </div>
                            </div>
                        </div>

                        <!-- investment category chart -->
                        <div class="col-12 col-xxl-8 mb-3">
                            <div class="card adminuiux-card">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-12 col-xl-5">
                                        <div class="card-body">
                                            <h6 class="mb-3">Investment Categories</h6>
                                            <div class="position-relative d-flex align-items-center justify-content-center text-center mb-3">
                                                <div class="position-absolute">
                                                    <h4 class="mb-0">$ 1165.30k</h4>
                                                    <p class="text-secondary small">Portfolio Value</p>
                                                </div>
                                                <canvas id="doughnutChart" class="mx-auto width-200 height-200"></canvas>
                                            </div>
                                            <p class="text-secondary small">You have invested in different types of categories shown as above and summary of each category.</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-xl">
                                        <div class="card-body">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col-6 col-md-6 mb-3">
                                                    <p class="text-secondary small mb-2"><span class="me-1 avatar avatar-10 rounded bg-green"></span> Share holdings</p>
                                                    <h5 class="ps-3 fw-medium">
                                                        $ 165.52k<br />
                                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1 fs-14"></i> 25.30%</span>
                                                    </h5>
                                                </div>
                                                <div class="col-6 col-md-6 mb-3">
                                                    <p class="text-secondary small mb-2"><span class="me-1 avatar avatar-10 rounded bg-yellow"></span> Mutual Funds</p>
                                                    <h5 class="ps-3 fw-medium">
                                                        $ 265.85k<br />
                                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 21.42%</span>
                                                    </h5>
                                                </div>
                                                <div class="col-6 col-md-6 mb-3">
                                                    <p class="text-secondary small mb-2"><span class="me-1 avatar avatar-10 rounded bg-orange"></span> Bank Bonds</p>
                                                    <h5 class="ps-3 fw-medium">
                                                        $ 356.26k<br />
                                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 20.18%</span>
                                                    </h5>
                                                </div>
                                                <div class="col-6 col-md-6 mb-3">
                                                    <p class="text-secondary small mb-2"><span class="me-1 avatar avatar-10 rounded bg-purple"></span> Gov. Securities</p>
                                                    <h5 class="ps-3 fw-medium">
                                                        $ 185.65<br />
                                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 15.65%</span>
                                                    </h5>
                                                </div>
                                                <div class="col-6 col-md-6">
                                                    <p class="text-secondary small mb-2"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> Fixed Deposit</p>
                                                    <h5 class="ps-3 fw-medium">
                                                        $ 190.45k<br />
                                                        <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 18.50%</span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- wallet balance -->
                        <div class="col-12 col-xxl-4 mb-3">
                            <div class="card adminuiux-card overflow-hidden">
                                <div class="card-header">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <span class="avatar avatar-30 rounded-circle bg-theme-1-subtle text-theme-1"><i class="bi bi-wallet"></i></span>
                                        </div>
                                        <div class="col px-0">
                                            <h6>My Wallet</h6>
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
                                <div class="card-body">
                                    <h4 class="fw-medium">$ 1152.25k</h4>
                                    <p class="text-secondary small">
                                        $ 756.83 <span class="text-success"><i class="bi bi-arrow-up-short"></i> 11.5%</span> in 7 Days
                                    </p>

                                    <!-- chart blue -->
                                    <div class="summarychart height-90 w-100 mb-3">
                                        <canvas id="barchart"></canvas>
                                    </div>
                                    <div class="card adminuiux-card bg-theme-1-subtle">
                                        <div class="card-body">
                                            <p class="text-secondary small mb-2">Top performance <b class="text-theme-1">Share Holdings</b></p>
                                            <h4 class="fw-medium">
                                                $ 165.52k <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1 fs-14"></i> 25.30%</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- offer -->
                        <div class="col-12 mb-3 mb-lg-4">
                            <div class="card adminuiux-card bg-theme-1">
                                <div class="card-body">
                                    <h2 class="mb-3 fw-medium">Adminuiux Innovation and tech Fund</h2>
                                    <h4 class="h4 mb-3">$ 15.52 <small class="opacity-75 mb-3">Current Nav (Today)</small></h4>

                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col-6 col-sm mb-3">
                                            <h5 class="mb-1">21</h5>
                                            <p class="small opacity-75"><i class="bi bi-speedometer2 me-1"></i> Risk</p>
                                        </div>
                                        <div class="col-6 col-sm mb-3">
                                            <h5 class="mb-1">15.25%</h5>
                                            <p class="small opacity-75"><i class="bi bi-bar-chart-line me-1"></i> CAGR</p>
                                        </div>
                                        <div class="col-6 col-sm mb-3">
                                            <h5 class="mb-1">0.5%</h5>
                                            <p class="small opacity-75"><i class="bi bi-exclamation-triangle me-1"></i> Exit Load</p>
                                        </div>
                                        <div class="col-6 col-sm mb-3">
                                            <h5 class="mb-1">0.25%</h5>
                                            <p class="small opacity-75"><i class="bi bi-cash-stack me-1"></i> Expense Ratio</p>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col">
                                            <button class="btn btn-sm btn-light me-2">Buy</button>
                                            <button class="btn btn-sm btn-light me-2">SIP</button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-sm btn-link text-white me-2">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Assets funds and shares -->
            <div class="card adminuiux-card mb-3 mb-lg-4">
                <div class="card-body pb-0">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-12 col-sm mb-3 md-sm-0">
                            <h6>Market with Technical Trend</h6>
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
                    <table class="table mb-0" id="dataTable">
                        <thead>
                            <tr>
                                <th class="">Company</th>
                                <th>Price</th>
                                <th data-breakpoints="xs">Holding</th>
                                <th data-breakpoints="xs sm">Profit/Loss</th>
                                <th data-breakpoints="xs">Today's Trend</th>
                                <th>% Change</th>
                                <th>Action</th>
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
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyportfolioComponent {
    mySummaryChart!: Chart;
    mySummaryChart2!: Chart;
    doughnutCharts!: Chart;

    ngAfterViewInit() {
        this.summarychart();
        this.barchart();
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

    /* chart  */
    summarychart() {
        const areachartblue = document.getElementById("summarychart") as HTMLCanvasElement;
        const ctx = areachartblue.getContext("2d"); // Get the 2D rendering context
        if (ctx) {
            const gradientblue = ctx.createLinearGradient(0, 0, 0, 200);
            gradientblue.addColorStop(0, "rgba(0, 73, 232, 0.85)");
            gradientblue.addColorStop(1, "rgba(0, 73, 232, 0)");
            this.mySummaryChart = new Chart(areachartblue, {
                type: "line",
                data: {
                    labels: ["10:30", "11:00", "11:30", "12:00", "12:30", "01:00", "01:30"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 1,
                            backgroundColor: gradientblue,
                            borderColor: "#5840ef",
                            borderWidth: 1,
                            fill: true,
                            tension: 0.0,
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
    barchart() {
        const barchart1 = document.getElementById("barchart") as HTMLCanvasElement;
        const ctx2 = barchart1.getContext("2d"); // Get the 2D rendering context
        if (ctx2) {
            const gradientblue = ctx2.createLinearGradient(0, 0, 0, 100);
            gradientblue.addColorStop(0, "rgba(0, 73, 232, 0.85)");
            gradientblue.addColorStop(1, "rgba(0, 73, 232, 0)");
            this.mySummaryChart2 = new Chart(barchart1, {
                type: "bar",
                data: {
                    labels: ["1", "2", "3", "4", "5", "7", "8"],
                    datasets: [
                        {
                            label: "# of Votes",
                            data: this.generateRandomData(),
                            radius: 0,
                            backgroundColor: gradientblue,
                            borderColor: "#5840ef",
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
                    labels: ["Daily Wages", "Cancelled Bookings", "Oxygen", "Manpower", "Medical Facilities"],
                    datasets: [
                        {
                            label: "Expense Categories",
                            data: [40, 35, 15, 25, 20],
                            backgroundColor: ["#6faa00", "#ffc107", "#fd7e14", "#0049e8", "#becede"],
                            borderWidth: 0,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
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
