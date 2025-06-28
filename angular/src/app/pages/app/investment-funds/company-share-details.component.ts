import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Chart, registerables } from "chart.js/auto";
Chart.register(...registerables);
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();

@Component({
    selector: "app-company-share-details",
    standalone: true,
    imports: [],
    template: `
        <!-- breadcrumb -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col-12 col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/company-shares">Company Shares</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Share Details</li>
                        </ol>
                    </nav>
                    <h5>Share Details</h5>
                </div>
            </div>
        </div>

        <!-- Content  -->
        <div class="container mt-4" id="main-content">
            <div class="card adminuiux-card mb-3 mb-lg-4">
                <div class="card-body pb-0">
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-auto mb-3 mb-md-0">
                            <div class="avatar avatar-50 rounded coverimg" style='background-image: url("assets/img/modern-ai-image/tree-3.jpg");'>
                                <img src="assets/img/modern-ai-image/tree-3.jpg" alt="" style="display: none;" />
                            </div>
                        </div>
                        <div class="col mb-3 mb-md-0">
                            <h5 class="mb-0">AdminUIUX LLP</h5>
                            <p class="text-secondary">#ADMINUIUX</p>
                        </div>
                        <div class="col-6 col-md-auto text-md-end">
                            <h5 class="mb-0">$ 20452.00</h5>
                            <p class="text-success"><i class="bi bi-arrow-up-short"></i> 1.05%</p>
                        </div>
                        <div class="col-6 col-md-auto text-end">
                            <button class="btn btn-outline-theme">Buy</button>
                            <button class="btn btn-outline-danger ms-1">Sell</button>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <p class="small text-secondary">Optimize Your Business with creatively hand-crafted HTML Admin Dashboards & Apps – From sales & marketing to AI app, management and SaaS, our comprehensive dashboard templates are tailored with rich user experience. Integrate technology with ease and access the source code instantly.</p>
                </div>
            </div>
            <div class="card adminuiux-card mb-3 mb-lg-4">
                <div class="card-body pb-0">
                    <div class="row">
                        <div class="col-12 col-md-6 col-xl-3 col-xxl-3">
                            <div class="card border-theme-1 theme-green mb-3">
                                <div class="card-header bg-theme-1-subtle border-bottom border-theme-1">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 bg-theme-1 text-white rounded">S</div>
                                        </div>
                                        <div class="col">
                                            <h6 class="text-theme-1 mb-0">Strength</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p>Rising Net Cash Flow and Cash from Operating activity</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-3 col-xxl-3">
                            <div class="card border-theme-1 theme-red mb-3">
                                <div class="card-header bg-theme-1-subtle border-bottom border-theme-1">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 bg-theme-1 text-white rounded">W</div>
                                        </div>
                                        <div class="col">
                                            <h6 class="text-theme-1 mb-0">Weekness</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p>
                                        Decline in Quarterly<br />
                                        Net Profit (YoY)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-3 col-xxl-3">
                            <div class="card border-theme-1 theme-blue mb-3">
                                <div class="card-header bg-theme-1-subtle border-bottom border-theme-1">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 bg-theme-1 text-white rounded">O</div>
                                        </div>
                                        <div class="col">
                                            <h6 class="text-theme-1 mb-0">Opportunity</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p>No Opportunity for this stock, not in forcast</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-xl-3 col-xxl-3">
                            <div class="card border-theme-1 theme-orange mb-3">
                                <div class="card-header bg-theme-1-subtle border-bottom border-theme-1">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-30 bg-theme-1 text-white rounded">T</div>
                                        </div>
                                        <div class="col">
                                            <h6 class="text-theme-1 mb-0">Threats</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <p>Companies with growing costs YoY for long term projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Overview details -->
                        <div class="col-12 col-md-6 col-lg-4">
                            <table class="table table-noborder mb-3">
                                <tbody>
                                    <tr>
                                        <td class="text-secondary">Open</td>
                                        <td class="text-end">104.60</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">Previous Close</td>
                                        <td class="text-end">103.49</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">Volume</td>
                                        <td class="text-end">14,197,743.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">Value (Lacs)</td>
                                        <td class="text-end">14,535.65</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">VWAP</td>
                                        <td class="text-end">102.99</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">Beta</td>
                                        <td class="text-end">2.42, 2.41</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">Mkt Cap (USD. Cr.)</td>
                                        <td class="text-end">45,158</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <table class="table table-noborder mb-3">
                                <tbody>
                                    <tr>
                                        <td class="text-secondary">High</td>
                                        <td class="text-end">104.87</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">Low</td>
                                        <td class="text-end">102.13</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">UC Limit</td>
                                        <td class="text-end">113.83</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">LC Limit</td>
                                        <td class="text-end">93.14</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">52 Week High</td>
                                        <td class="text-end">157.40</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">52 Week Low</td>
                                        <td class="text-end">76.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">Face Value</td>
                                        <td class="text-end">10.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-12 col-md-6 col-lg-4">
                            <table class="table table-noborder mb-3">
                                <tbody>
                                    <tr>
                                        <td class="text-secondary">All Time High</td>
                                        <td class="text-end">157.40</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">All Time Low</td>
                                        <td class="text-end">76.00</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">20D Avg Volume</td>
                                        <td class="text-end">0</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">20D Avg Delivery(%)</td>
                                        <td class="text-end">--</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">Book Value Per Share</td>
                                        <td class="text-end">3.40</td>
                                    </tr>
                                    <tr>
                                        <td class="text-secondary">Dividend Yield</td>
                                        <td class="text-end">0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <!-- Summary chart -->
                <div class="col-12 col-lg-6 col-xl-8">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <!-- chart section -->
                        <div class="card-header">
                            <!-- name -->
                            <h6>Advance Chart View</h6>
                        </div>
                        <div class="card-body">
                            <div class="row align-items-center mb-3">
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
                                <div class="col-auto">
                                    <button class="btn btn-square btn-outline-theme theme-red"><i class="bi bi-heart"></i></button>
                                </div>
                            </div>
                            <div class="w-100 height-260">
                                <canvas id="summarychart"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- risk-o-meter -->
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-header">
                            <h6>Riskometer</h6>
                        </div>
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-12 col-sm-6 col-xl-4 mb-3">
                                    <h6>$ 15.15cr</h6>
                                    <p class="text-secondary small">Your portfolio in good situation</p>
                                </div>
                                <div class="col-12 col-sm-6 col-xl-2 mb-3">
                                    <h6>2 Years</h6>
                                    <p class="text-secondary small">Lock-in</p>
                                </div>
                                <div class="col-12 col-sm-6 col-xl-2 mb-3">
                                    <h6>Moderate</h6>
                                    <p class="text-secondary small">Risk Involved</p>
                                </div>
                            </div>
                            <div class="riskometer moderate mb-2">
                                <!-- low low-moderate moderate moderate-high very-high high-->
                                <div class="indicator"></div>
                            </div>
                        </div>
                    </div>

                    <!-- working sectors -->
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-header">
                            <h6>Industries working Sectors</h6>
                        </div>
                        <div class="card-body">
                            <div class="row mb-3">
                                <div class="col-4 col-lg-3 col-xl-2">
                                    <h6>25.5<small class="fw-normal">%</small></h6>
                                </div>
                                <div class="col">
                                    <p>Financial Sector</p>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="progress height-dynamic mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="25.5" aria-valuemin="0" aria-valuemax="100" style="--h-dynamic:6px">
                                        <div class="progress-bar progress-bar-striped bg-theme-1 theme-indigo" style="width: 25.5%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-4 col-lg-3 col-xl-2">
                                    <h6>9.8<small class="fw-normal">%</small></h6>
                                </div>
                                <div class="col">
                                    <p>Consumer Discretionary</p>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="progress height-dynamic mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="9.8" aria-valuemin="0" aria-valuemax="100" style="--h-dynamic:6px">
                                        <div class="progress-bar progress-bar-striped bg-theme-1 theme-blue" style="width: 9.8%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-4 col-lg-3 col-xl-2">
                                    <h6>5.75<small class="fw-normal">%</small></h6>
                                </div>
                                <div class="col">
                                    <p>Industrial</p>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="progress height-dynamic mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="5.75" aria-valuemin="0" aria-valuemax="100" style="--h-dynamic:6px">
                                        <div class="progress-bar progress-bar-striped bg-theme-1 theme-green" style="width: 5.75%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-4 col-lg-3 col-xl-2">
                                    <h6>4.25<small class="fw-normal">%</small></h6>
                                </div>
                                <div class="col">
                                    <p>Material</p>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="progress height-dynamic mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="4.25" aria-valuemin="0" aria-valuemax="100" style="--h-dynamic:6px">
                                        <div class="progress-bar progress-bar-striped bg-theme-1 theme-yellow" style="width: 4.25%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-4 col-lg-3 col-xl-2">
                                    <h6>3.65<small class="fw-normal">%</small></h6>
                                </div>
                                <div class="col">
                                    <p>Finance Bank and PSU</p>
                                </div>
                                <div class="col-12 mt-2">
                                    <div class="progress height-dynamic mb-2" role="progressbar" aria-label="Basic example" aria-valuenow="3.65" aria-valuemin="0" aria-valuemax="100" style="--h-dynamic:6px">
                                        <div class="progress-bar progress-bar-striped bg-theme-1 theme-orange" style="width: 7.65%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- investment category chart -->
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="row align-items-center">
                            <div class="col-12 col-xl-5">
                                <div class="card-header">
                                    <h6>Major Stock Holdings</h6>
                                </div>
                                <div class="card-body">
                                    <div class="position-relative d-flex align-items-center justify-content-center text-center">
                                        <div class="position-absolute">
                                            <h4 class="mb-0">$ 15.15cr</h4>
                                            <p class="text-secondary small">Stock Holding</p>
                                        </div>
                                        <canvas id="doughnutChart" class="mx-auto width-240 height-240"></canvas>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl">
                                <div class="card-body">
                                    <div class="row mb-2">
                                        <div class="col-6 col-md-6 mb-3">
                                            <p class="text-secondary small mb-2">
                                                <span class="me-1 avatar avatar-10 rounded bg-green"></span>
                                                Indina Bank
                                            </p>
                                            <h5 class="ps-3 fw-medium">
                                                $ 165.52L <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1 fs-14"></i> 25.30%</span>
                                            </h5>
                                        </div>
                                        <div class="col-6 col-md-6 mb-3">
                                            <p class="text-secondary small mb-2">
                                                <span class="me-1 avatar avatar-10 rounded bg-yellow"></span>
                                                CICI Securities
                                            </p>
                                            <h5 class="ps-3 fw-medium">
                                                $ 265.85L <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 21.42%</span>
                                            </h5>
                                        </div>
                                        <div class="col-6 col-md-6 mb-3">
                                            <p class="text-secondary small mb-2">
                                                <span class="me-1 avatar avatar-10 rounded bg-orange"></span>
                                                American Expo Bank
                                            </p>
                                            <h5 class="ps-3 fw-medium">
                                                $ 356.26L <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 20.18%</span>
                                            </h5>
                                        </div>
                                        <div class="col-6 col-md-6 mb-3">
                                            <p class="text-secondary small mb-2">
                                                <span class="me-1 avatar avatar-10 rounded bg-purple"></span>
                                                Forth By One bank
                                            </p>
                                            <h5 class="ps-3 fw-medium">
                                                $ 185.65L <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 15.65%</span>
                                            </h5>
                                        </div>
                                        <div class="col-6 col-md-6">
                                            <p class="text-secondary small mb-2">
                                                <span class="me-1 avatar avatar-10 rounded bg-secondary"></span>
                                                Others
                                            </p>
                                            <h5 class="ps-3 fw-medium">
                                                $ 190.45L <span class="text-success fs-14 fw-normal"><i class="bi bi-caret-up-fill me-1"></i> 18.50%</span>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- summary quick -->
                <div class="col-12 col-lg-6 col-xl-4">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-header text-center">
                            <div class="btn-group" id="myTab" role="tablist">
                                <button class="btn btn-outline-theme active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Buy Now</button>
                                <button class="btn btn-outline-theme" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Start SIP</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                    <div class="input-group mb-1">
                                        <div class="form-floating">
                                            <input type="number" class="form-control" id="amount3" placeholder="Investment Amount" value="10000" />
                                            <label for="amount3">Investment Amount($)</label>
                                        </div>
                                        <button class="btn btn-link border" id="basic-addon" type="button">+500</button>
                                    </div>
                                    <p class="text-secondary small">Min. $ 500 (multiple of 500)</p>

                                    <h6 class="mb-3">Payment Method</h6>
                                    <ul class="list-group adminuiux-list-group mb-3">
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="radio" name="listGroupRadio" value="" id="firstRadio" checked />
                                            <label class="form-check-label stretched-link" for="firstRadio">UPI</label>
                                        </li>
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="radio" name="listGroupRadio" value="" id="secondRadio" />
                                            <label class="form-check-label stretched-link" for="secondRadio">Net Banking</label>
                                        </li>
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="radio" name="listGroupRadio" value="" id="thirdRadio" />
                                            <label class="form-check-label stretched-link" for="thirdRadio">Credit Card</label>
                                        </li>
                                    </ul>
                                    <div class="text-center">
                                        <button class="btn btn-theme">Invest now</button>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                    <div class="input-group mb-1">
                                        <div class="form-floating">
                                            <input type="number" class="form-control" id="amount" placeholder="Investment Amount" value="10000" />
                                            <label for="amount">Investment Amount($)</label>
                                        </div>
                                        <button class="btn btn-link border" id="basic-addon2" type="button">+500</button>
                                    </div>
                                    <p class="text-secondary small mb-3">Min. $ 500 (multiple of 500)</p>

                                    <div class="row">
                                        <div class="col-12 col-sm-6 mb-3">
                                            <div class="form-floating">
                                                <select class="form-select" id="frequency">
                                                    <option>One Time</option>
                                                    <option selected="">Monthly</option>
                                                    <option>Quarterly</option>
                                                    <option>Yearly</option>
                                                </select>
                                                <label for="frequency">Deposit Frequency</label>
                                            </div>
                                        </div>
                                        <div class="col-12 col-sm-6 mb-3">
                                            <div class="form-floating">
                                                <input type="number" class="form-control" id="day" placeholder="Day to Deposit" value="1" />
                                                <label for="day">Day</label>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="mb-3">Payment Method</h6>
                                    <ul class="list-group adminuiux-list-group mb-3">
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="radio" name="listGroupRadio" value="" id="firstRadio2" checked />
                                            <label class="form-check-label stretched-link" for="firstRadio2">UPI</label>
                                        </li>
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="radio" name="listGroupRadio" value="" id="secondRadio2" />
                                            <label class="form-check-label stretched-link" for="secondRadio2">Net Banking</label>
                                        </li>
                                        <li class="list-group-item">
                                            <input class="form-check-input me-2" type="radio" name="listGroupRadio" value="" id="thirdRadio2" />
                                            <label class="form-check-label stretched-link" for="thirdRadio2">Credit Card</label>
                                        </li>
                                    </ul>
                                    <div class="text-center">
                                        <button class="btn btn-theme">Invest now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- investment -->
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6>My Investment</h6>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-sm btn-square btn-link"><i class="bi bi-arrow-clockwise"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h4 class="fw-medium">$ 1152.25k</h4>
                            <p class="text-secondary">
                                Total net revenue is $ 756.83 <span class="text-success fs-14"><i class="bi bi-arrow-up-short"></i> 11.5%</span> increased in last week
                            </p>

                            <!-- chart blue -->
                            <div class="summarychart height-100 w-100 ">
                                <canvas id="barchart"></canvas>
                            </div>
                        </div>
                    </div>

                    <!-- sip -->
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h6>SIP Details</h6>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-sm btn-square btn-link"><i class="bi bi-pencil"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="fw-medium">$ 500.00</h5>
                            <p class="text-secondary">Monthly Investment, Next due date is 15-04-2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class CompanyShareDetailsComponent {
    mySummaryChart!: Chart;
    mySummaryChart2!: Chart;
    doughnutCharts!: Chart;

    ngAfterViewInit() {
        this.summarychart();
        this.doughnutChart();
        this.barchart();

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
            const gradient2 = ctx.createLinearGradient(0, 0, 0, 240);
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
