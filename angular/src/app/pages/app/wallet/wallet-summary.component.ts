import { Component, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from "@angular/core";
import { Chart, registerables } from "chart.js/auto";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();
Chart.register(...registerables);
import { NgCircleProgressModule, CircleProgressOptions } from "ng-circle-progress";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-wallet-summary",
    standalone: true,
    imports: [RouterLink, NgCircleProgressModule],
    providers: [
        {
            provide: CircleProgressOptions,
            useValue: {
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: "#78C000",
                innerStrokeColor: "#C7E596",
                animationDuration: 300,
            },
        },
    ],
    template: `
        <!-- content -->
        <div class="container mt-4" id="main-content">
            <div class="row gx-3 gx-lg-4">
                <!-- balance -->
                <div class="col-12 col-sm-6 col-md-4 mb-3">
                    <div class="card adminuiux-card bg-theme-1">
                        <div class="card-body z-index-1">
                            <div class="row gx-2 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 bg-white-opacity rounded"><i class="bi bi-wallet"></i></div>
                                </div>
                                <div class="col px-0"></div>
                                <div class="col-auto py-1">
                                    <a class="btn btn-lg btn-square btn-outline-light" data-bs-toggle="modal" data-bs-target="#qrcodemodal" title="Scan to pay"><i class="bi bi-qr-code"></i></a>
                                </div>
                                <div class="col-auto py-1">
                                    <a class="btn btn-lg btn-square btn-outline-light" data-bs-toggle="modal" data-bs-target="#sendmoneymodal" title="Send Money"><i class="bi bi-arrow-up-right"></i></a>
                                </div>
                                <div class="col-auto py-1">
                                    <a class="btn btn-lg btn-square btn-outline-light" data-bs-toggle="modal" data-bs-target="#receivemoneymodal" title="Receive Money"><i class="bi bi-arrow-down-left"></i></a>
                                </div>
                                <div class="col-auto py-1">
                                    <a class="btn btn-lg btn-square btn-outline-light" data-bs-toggle="modal" data-bs-target="#addmoneymodal" title="Add Money"><i class="bi bi-plus-lg"></i></a>
                                </div>
                            </div>
                            <h1 class="mb-1">$25052.00</h1>
                            <h6 class="opacity-75 fw-normal mb-1">Your total balance</h6>
                        </div>
                    </div>
                </div>

                <!-- income expense -->
                <div class="col-12 col-sm-12 col-md-8">
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-6 col-sm-6 col-md-3">
                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-body z-index-1">
                                    <div class="avatar avatar-60 bg-success-subtle text-success rounded mb-3"><i class="bi bi-graph-down-arrow"></i></div>
                                    <h4 class="fw-medium mb-0">$5560.50</h4>
                                    <p class="text-secondary small">
                                        Total Income<br /><span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 11.5%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-3">
                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-body z-index-1">
                                    <div class="avatar avatar-60 bg-danger-subtle text-danger rounded mb-3"><i class="bi bi-graph-up-arrow"></i></div>
                                    <h4 class="fw-medium mb-0">$3586.15</h4>
                                    <p class="text-secondary small">
                                        Total Expense<br /><span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 11.5%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-lg-3">
                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-body z-index-1">
                                    <div class="avatar avatar-60 bg-theme-1-subtle text-theme-1 rounded mb-3"><i class="bi bi-bank"></i></div>
                                    <h4 class="fw-medium mb-0">$5560.50</h4>
                                    <p class="text-secondary small">
                                        Share Holdings<br /><span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 25.35%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-lg-3">
                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-body z-index-1">
                                    <circle-progress [percent]="65" [space]="-4" [radius]="34" [outerStrokeWidth]="4" [innerStrokeWidth]="4" [outerStrokeColor]="'#0049e8'" [innerStrokeColor]="'rgba(0, 73, 232, 0.15)'" [animation]="true" [subtitle]="'Savings'" [animationDuration]="300" class="mb-2"></circle-progress>

                                    <h4 class="fw-medium mb-0">$3586.15</h4>
                                    <p class="text-secondary small">
                                        Funds <span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 56.51%</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- chart -->
                <div class="col-12 col-md-12 col-lg-8 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col">
                                    <h6>Cash Flow</h6>
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
                            <div class="height-220 mb-3">
                                <canvas id="summarychart"></canvas>
                            </div>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="card adminuiux-card bg-theme-1">
                                        <div class="card-body z-index-1">
                                            <h4 class="fw-medium text mb-0">$5560.50</h4>
                                            <p class="opacity-75 small">
                                                Income <span class="fs-14"><i class="bi bi-arrow-up"></i> 11.5%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-md-4 col-lg-3">
                                    <div class="card adminuiux-card bg-theme-1-subtle">
                                        <div class="card-body z-index-1">
                                            <h4 class="fw-medium mb-0">$5560.50</h4>
                                            <p class="text-secondary small">
                                                Expense <span class="text-success fs-14"><i class="bi bi-arrow-up"></i> 11.5%</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- quick exchange -->
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col">
                                    <h6>Quick Exchange</h6>
                                </div>
                                <div class="col-auto px-0"></div>
                                <div class="col-auto">
                                    <span class="mx-1 text-secondary small">12s ago</span>
                                    <button class="btn btn-sm btn-square btn-link"><i class="bi bi-arrow-clockwise"></i></button>
                                </div>
                            </div>
                            <input type="number" class="form-control form-control-lg text-center mb-3" id="ihave" placeholder="Convert Amount..." value="100.00" />
                            <div class="row gx-3 gx-lg-4 mb-3">
                                <div class="col">
                                    <div class="form-floating mb-1">
                                        <select class="form-select" id="ihavecurrency">
                                            <option>USD</option>
                                            <option>CAD</option>
                                            <option>AUD</option>
                                        </select>
                                        <label for="ihavecurrency">I have...</label>
                                    </div>
                                    <p class="small text-secondary text-center">1.00 USD</p>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-square btn-theme mt-2"><i class="bi bi-arrow-left-right"></i></button>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-1">
                                        <select class="form-select" id="ihavecurrency2">
                                            <option>USD</option>
                                            <option selected>CAD</option>
                                            <option>AUD</option>
                                        </select>
                                        <label for="ihavecurrency2">I want...</label>
                                    </div>
                                    <p class="small text-secondary text-center">1.38 CAD</p>
                                </div>
                            </div>
                            <div class="text-center">
                                <h5 class="fw-normal"><b class="fw-bold">Great!</b> You will get</h5>
                                <h1 class="text-theme-1">132.00</h1>
                                <p class="text-secondary small mb-3">in Canadian Dollar</p>
                                <button routerLink="/app/wallet-currencyexchange" class="btn btn-sm btn-outline-theme">Exchange now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- recent transaction -->
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col">
                                    <h6>Recent Transactions</h6>
                                </div>
                                <div class="col-auto">
                                    <button routerLink="/app/wallet-sendmoney" class="btn btn-sm btn-outline-theme"><i class="bi bi-arrow-up-right me-1"></i> Send</button>
                                </div>
                            </div>
                            <p class="small text-secondary mb-2">Recently Connected</p>
                            <!-- recent connection -->
                            <swiper-container slides-per-view="auto" space-between="10" autoplay="true" class="swiper swipernav">
                                <swiper-slide class="swiper-slide w-auto">
                                    <div class="avatar avatar-40 rounded-circle border border-dotted border-theme">
                                        <span class="h4">+</span>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide w-auto">
                                    <div class="avatar avatar-40 rounded-circle coverimg">
                                        <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide w-auto">
                                    <div class="avatar avatar-40 rounded-circle coverimg">
                                        <img src="assets/img/modern-ai-image/user-3.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide w-auto">
                                    <div class="avatar avatar-40 rounded-circle coverimg">
                                        <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide w-auto">
                                    <div class="avatar avatar-40 rounded-circle coverimg">
                                        <img src="assets/img/modern-ai-image/user-5.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide w-auto">
                                    <div class="avatar avatar-40 rounded-circle coverimg">
                                        <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide w-auto">
                                    <div class="avatar avatar-40 rounded-circle coverimg">
                                        <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide w-auto">
                                    <div class="avatar avatar-40 rounded-circle coverimg">
                                        <img src="assets/img/modern-ai-image/user-3.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide w-auto">
                                    <div class="avatar avatar-40 rounded-circle coverimg">
                                        <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                                    </div>
                                </swiper-slide>
                            </swiper-container>
                        </div>
                        <!-- recent transaction list -->
                        <ul class="list-group list-group-flush border-top bg-none">
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 rounded-circle border">
                                            <i class="bi bi-arrow-up-right h5"></i>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Send money</p>
                                        <p class="text-secondary small">12 December 2024, 12:50 PM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6>- $ 150.00</h6>
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
                                        <p class="mb-1 fw-medium">Paid Bill</p>
                                        <p class="text-secondary small">11 December 2024, 7:15 AM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6>- $ 145.00</h6>
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
                                        <p class="mb-1 fw-medium">Paid Bill</p>
                                        <p class="text-secondary small">10 November 2024, 1:20 PM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6>- $ 325.00</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item theme-green">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <div class="avatar avatar-40 rounded-circle border border-theme-1 bg-theme-1-subtle text-theme-1">
                                            <i class="bi bi-arrow-down-left h5"></i>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Received money</p>
                                        <p class="text-secondary small">5 November 2024, 1:45 AM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6 class="text-theme-1">+ $ 562.00</h6>
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
                                        <p class="mb-1 fw-medium">Send money</p>
                                        <p class="text-secondary small">3 November 2024, 1:30 PM</p>
                                    </div>
                                    <div class="col-auto">
                                        <h6>- $ 356.00</h6>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item text-center">
                                <a href="javascript:void(0)" class="btn btn-link text-center"> View all <i class="bi bi-arrow-right fs-14"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- goals and Savings -->
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col">
                                    <h6>Goals & Saving</h6>
                                </div>
                                <div class="col-auto">
                                    <button routerLink="/app/create-goal" class="btn btn-sm btn-outline-theme"><i class="bi bi-plus-lg"></i> Create</button>
                                </div>
                            </div>
                            <p class="small text-secondary mb-2">Top-Up your saving</p>
                            <div class="row gx-3 gx-lg-4 py-1 align-items-center">
                                <div class="col-5">
                                    <select class="form-select form-select-sm">
                                        <option>Goal: Sweet Home</option>
                                        <option>Goal: Car</option>
                                        <option>Real Estate Fund</option>
                                    </select>
                                </div>
                                <div class="col-auto">$</div>
                                <div class="col ps-0">
                                    <input type="number" class="form-control form-control-sm" value="100" />
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-sm btn-outline-theme">Invest</button>
                                </div>
                            </div>
                        </div>
                        <!-- list -->
                        <ul class="list-group list-group-flush border-top bg-none">
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-house avatar avatar-40 h5 rounded-circle border"></i>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Goal: Sweet Home</p>
                                        <p class="small text-secondary">$ 22500.00</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 4500.00</h6>
                                        <p class="small text-secondary">20% Completed</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-car-front avatar avatar-40 h5 rounded-circle border"></i>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Goal: Car</p>
                                        <p class="small text-secondary">$ 10500.00</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 3150.00</h6>
                                        <p class="small text-secondary">30% Completed</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-percent avatar avatar-40 h5 rounded-circle border"></i>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Fixed Deposit</p>
                                        <p class="small text-secondary">$ 4000.00</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 4280.00</h6>
                                        <p class="small text-secondary">7.25% Interest</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-percent avatar avatar-40 h5 rounded-circle border"></i>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Fixed Deposit</p>
                                        <p class="small text-secondary">$ 4500.00, 24/45 mo.</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 4280.00</h6>
                                        <p class="small text-secondary">8.00% Interest</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-calendar-event avatar avatar-40 h5 rounded-circle border"></i>
                                    </div>
                                    <div class="col">
                                        <p class="mb-1 fw-medium">Real Estate Fund</p>
                                        <p class="small text-secondary">$ 1500.00</p>
                                    </div>
                                    <div class="col-auto text-end">
                                        <h6>$ 1850.00</h6>
                                        <p class="small text-secondary">25.15% Profit</p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item text-center">
                                <a href="javascript:void(0)" class="btn btn-link text-center"> View all <i class="bi bi-arrow-right fs-14"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- my cards -->
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card overflow-hidden">
                        <div class="card-header">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <h6>My Cards</h6>
                                </div>
                                <div class="col-auto px-0"></div>
                                <div class="col-auto">
                                    <a class="btn btn-sm btn btn-link">Manage</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0">
                            <!-- cards  -->
                            <swiper-container slides-per-view="auto" space-between="10" autoplay="true" class="swiper swipernav">
                                <swiper-slide class="swiper-slide">
                                    <div class="card adminuiux-card bg-theme-1 overflow-hidden width-260 mx-auto mb-1">
                                        <div class="coverimg h-100 w-100 position-absolute top-0 start-0 z-index-0 opacity-50">
                                            <img src="assets/img/modern-ai-image/flamingo-4.jpg" alt="" />
                                        </div>
                                        <div class="card-body z-index-1">
                                            <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                                <div class="col-auto align-self-center">
                                                    <i class="bi bi-credit-card fs-4"></i>
                                                </div>
                                                <div class="col text-end">
                                                    <p>
                                                        <span class="small opacity-75">City Bank</span><br />
                                                        <span class="">Credit Card</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p class="h5 mb-3">000 0000 0001 546598</p>
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col-auto">
                                                    <p class="mb-0 small opacity-75">Expiry</p>
                                                    <p>09/023</p>
                                                </div>
                                                <div class="col text-end">
                                                    <p class="mb-0 small opacity-75">Card Holder</p>
                                                    <p>adminuiux</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 justify-content-center mb-2">
                                        <div class="col-auto">
                                            <button class="btn btn-link btn-square"><i class="bi bi-pencil"></i></button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-link theme-red text-danger btn-square"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                    <!-- list -->
                                    <ul class="list-group list-group-flush border-top bg-none">
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/lion-3.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Lion's dan resort</p>
                                                    <p class="small text-secondary">Hotel & Restaurant</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 252.00</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/tree-4.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Treeview</p>
                                                    <p class="small text-secondary">Grocery</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 300.35</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/flamingo-2.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Flamingo Bar</p>
                                                    <p class="small text-secondary">Hotel & Restaurant</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 500.50</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/tree-5.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Treeview</p>
                                                    <p class="small text-secondary">Grocery</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 300.35</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide">
                                    <div class="card adminuiux-card bg-theme-1 overflow-hidden width-260 mx-auto mb-1">
                                        <div class="card-body z-index-1">
                                            <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                                <div class="col-auto align-self-center">
                                                    <i class="bi bi-credit-card fs-4"></i>
                                                </div>
                                                <div class="col text-end">
                                                    <p>
                                                        <span class="small opacity-75">City Bank</span><br />
                                                        <span class="">Credit Card</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p class="h5 mb-3">000 0000 0001 546598</p>
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col-auto">
                                                    <p class="mb-0 small opacity-75">Expiry</p>
                                                    <p>09/023</p>
                                                </div>
                                                <div class="col text-end">
                                                    <p class="mb-0 small opacity-75">Card Holder</p>
                                                    <p>adminuiux</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 justify-content-center mb-2">
                                        <div class="col-auto">
                                            <button class="btn btn-link btn-square"><i class="bi bi-pencil"></i></button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-link theme-red text-danger btn-square"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                    <!-- list -->
                                    <ul class="list-group list-group-flush border-top bg-none">
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/lion-3.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Lion's dan</p>
                                                    <p class="small text-secondary">Hotel & Restaurant</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 252.00</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/tree-4.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Treeview</p>
                                                    <p class="small text-secondary">Grocery</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 300.35</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/flamingo-2.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Flamingo Bar</p>
                                                    <p class="small text-secondary">Hotel & Restaurant</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 500.50</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide">
                                    <div class="card adminuiux-card border width-260 mx-auto mb-1">
                                        <div class="coverimg h-100 w-100 position-absolute top-0 start-0 z-index-0 opacity-25 rounded">
                                            <img src="assets/img/modern-ai-image/flamingo-4.jpg" alt="" />
                                        </div>
                                        <div class="card-body z-index-1 rounded">
                                            <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                                <div class="col-auto align-self-center">
                                                    <i class="bi bi-credit-card fs-4"></i>
                                                </div>
                                                <div class="col text-end">
                                                    <p>
                                                        <span class="small opacity-75">City Bank</span><br />
                                                        <span class="">Credit Card</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p class="h5 mb-3">000 0000 0001 546598</p>
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col-auto">
                                                    <p class="mb-0 small opacity-75">Expiry</p>
                                                    <p>09/023</p>
                                                </div>
                                                <div class="col text-end">
                                                    <p class="mb-0 small opacity-75">Card Holder</p>
                                                    <p>adminuiux</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 justify-content-center mb-2">
                                        <div class="col-auto">
                                            <button class="btn btn-link btn-square"><i class="bi bi-pencil"></i></button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-link theme-red text-danger btn-square"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                    <!-- list -->
                                    <ul class="list-group list-group-flush border-top bg-none">
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/lion-3.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Lion's dan resort</p>
                                                    <p class="small text-secondary">Hotel & Restaurant</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 252.00</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/tree-4.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Treeview</p>
                                                    <p class="small text-secondary">Grocery</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 300.35</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4 align-items-center">
                                                <div class="col-auto">
                                                    <div class="avatar avatar-40 h5 rounded-circle coverimg">
                                                        <img src="assets/img/modern-ai-image/flamingo-2.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div class="col">
                                                    <p class="mb-1 fw-medium">Flamingo Bar</p>
                                                    <p class="small text-secondary">Hotel & Restaurant</p>
                                                </div>
                                                <div class="col-auto text-end">
                                                    <h6>- $ 500.50</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </swiper-slide>
                            </swiper-container>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- qr code modal -->
        <div class="modal adminuiux-modal fade" id="qrcodemodal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="text-center my-4">
                            <div class="avatar avatar-150 mb-4">
                                <img src="assets/img/adminuiux-qr.png" alt="" class="mw-100 mx-auto" />
                            </div>
                            <h5 class="mb-0">Scan QR Code</h5>
                            <p class="text-secondary">To add money in wallet account</p>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <p class="text-secondary">Name</p>
                            </div>
                            <div class="col-auto mb-3">
                                <p class="fw-medium">AdminUIUX</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <p class="text-secondary">Virtual ID</p>
                            </div>
                            <div class="col-auto mb-3">
                                <p class="fw-medium">00VFGBADMINUIUX02154869</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <p class="text-secondary">Valid Till</p>
                            </div>
                            <div class="col-auto mb-3">
                                <p class="fw-medium">26-09-2026 12:00 am</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col mb-3">
                                <p class="text-secondary">Generated on</p>
                            </div>
                            <div class="col-auto mb-3">
                                <p class="fw-medium">12-04-2024 6:25 am <i class="bi bi-arrow-clockwise text-secondary" data-bs-toggle="tooltip" title="Re-generate"></i></p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-link theme-red" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- send money modal -->
        <div class="modal adminuiux-modal fade" id="sendmoneymodal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="modal-title h5">Send Money</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating mb-4">
                            <input type="text" class="form-control" id="contact" placeholder="Enter contact..." value="Jonathan" />
                            <label for="contact">Send money to</label>
                        </div>

                        <p class="small text-secondary text-center">Recently connected contacts</p>
                        <!-- recent connection -->
                        <swiper-container slides-per-view="auto" space-between="10" autoplay="true" class="swiper swipernav mb-4">
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-50 rounded-circle border border-dotted border-theme">
                                    <span class="h4">+</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-50 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-50 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-3.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-50 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-50 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-5.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-50 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-50 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-50 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-3.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-50 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                                </div>
                            </swiper-slide>
                        </swiper-container>

                        <input type="number" class="form-control form-control-lg text-center mb-3" id="ihavei" placeholder="Convert Amount..." value="100.00" />
                        <div class="row mb-4">
                            <div class="col">
                                <div class="form-floating mb-1">
                                    <select class="form-select" id="ihavecurrencyi">
                                        <option>USD Wallet</option>
                                        <option>CAD Wallet</option>
                                        <option>AUD Wallet</option>
                                    </select>
                                    <label for="ihavecurrencyi">From...</label>
                                </div>
                                <p class="small text-secondary text-center">1.00 USD</p>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-square btn-theme mt-2"><i class="bi bi-arrow-left-right"></i></button>
                            </div>
                            <div class="col">
                                <div class="form-floating mb-1">
                                    <select class="form-select" id="ihavecurrency2i">
                                        <option>USD</option>
                                        <option selected="">CAD</option>
                                        <option>AUD</option>
                                    </select>
                                    <label for="ihavecurrency2i">Send in...</label>
                                </div>
                                <p class="small text-secondary text-center">1.38 CAD</p>
                            </div>
                        </div>
                        <div class="text-center">
                            <h5 class="fw-normal"><b class="fw-bold">Great!</b> You are going to send</h5>
                            <h1 class="mb-0 text-theme-1">100.00</h1>
                            <p class="text-secondary small">in Canadian Dollar</p>
                        </div>

                        <div class="alert alert-danger alert-dismissible fade show mt-4 mb-0" role="alert">
                            <strong><i class="bi bi-exclamation-triangle me-1"></i> Low balance!</strong><br />
                            <small>Your wallet account does not have enough money to send. Kindly add money or choose different wallet account.</small>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button class="btn btn-theme">Send Money</button>
                        <button type="button" class="btn btn-link mx-2 theme-red" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- receive money modal -->
        <div class="modal adminuiux-modal fade" id="receivemoneymodal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="modal-title h5">Receive/Request Money</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating mb-4">
                            <input type="text" class="form-control" id="contact" placeholder="Enter contact..." value="Jonathan" />
                            <label for="contact">Receive money from</label>
                        </div>

                        <p class="small text-secondary text-center">Recently connected contacts</p>
                        <!-- recent connection -->
                        <swiper-container slides-per-view="auto" space-between="10" autoplay="true" class="swiper swipernav mb-4">
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-40 rounded-circle border border-dotted border-theme">
                                    <span class="h4">+</span>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-40 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-40 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-3.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-40 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-40 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-5.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-40 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-40 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-40 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-3.jpg" alt="" />
                                </div>
                            </swiper-slide>
                            <swiper-slide class="swiper-slide w-auto">
                                <div class="avatar avatar-40 rounded-circle coverimg">
                                    <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                                </div>
                            </swiper-slide>
                        </swiper-container>

                        <div class="row mb-4">
                            <div class="col">
                                <input type="number" class="form-control form-control-lg" placeholder="Convert Amount..." value="100.00" />
                            </div>
                            <div class="col-auto">
                                <select class="form-select form-select-lg">
                                    <option>USD Wallet</option>
                                    <option selected>CAD Wallet</option>
                                    <option>AUD Wallet</option>
                                </select>
                            </div>
                        </div>
                        <div class="text-center">
                            <h5 class="fw-normal"><b class="fw-bold">Great!</b> You are going to receive</h5>
                            <h1 class="mb-0 text-theme-1">100.00</h1>
                            <p class="text-secondary small">in CAD wallet</p>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button class="btn btn-theme">Request Money</button>
                        <button type="button" class="btn btn-link mx-2 theme-red" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- add money modal -->
        <div class="modal adminuiux-modal fade" id="addmoneymodal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="modal-title h5">Add Money</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-4">
                            <div class="col">
                                <input type="number" class="form-control form-control-lg text-center" placeholder="Add Amount..." value="100.00" />
                            </div>
                            <div class="col-auto">
                                <select class="form-select form-select-lg">
                                    <option>USD Wallet</option>
                                    <option>CAD Wallet</option>
                                    <option>AUD Wallet</option>
                                </select>
                            </div>
                        </div>
                        <div class="text-center mb-4">
                            <h5 class="fw-normal"><b class="fw-bold">Great!</b> You are going to add</h5>
                            <h1 class="mb-0 text-theme-1">100.00</h1>
                            <p class="text-secondary small">money in CAD Wallet</p>
                        </div>
                        <h6>Add money using</h6>
                        <ul class="list-group adminuiux-list-group">
                            <li class="list-group-item">
                                <input class="form-check-input me-2" type="radio" name="listGroupRadio" value="" id="firstRadio2" checked="" />
                                <label class="form-check-label stretched-link" for="firstRadio2">Net Banking</label>
                            </li>
                            <li class="list-group-item">
                                <input class="form-check-input me-2" type="radio" name="listGroupRadio" value="" id="secondRadio2" />
                                <label class="form-check-label stretched-link" for="secondRadio2">Credit / Debit Card</label>
                            </li>
                            <li class="list-group-item">
                                <input class="form-check-input me-2" type="radio" name="listGroupRadio" value="" id="thirdRadio2" />
                                <label class="form-check-label stretched-link" for="thirdRadio2">UPI Payment</label>
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button class="btn btn-theme">Pay Now</button>
                        <button type="button" class="btn btn-link mx-2 theme-red" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WalletSummaryComponent {
    mySummaryChart!: Chart;

    ngAfterViewInit() {
        // charts
        this.summarychart();
        setInterval(() => {
            this.randomizeChart();
        }, 3000);
    }

    /* chart  */
    summarychart() {
        const canvas = document.getElementById("summarychart") as HTMLCanvasElement;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                const gradientblue = ctx.createLinearGradient(0, 0, 0, 300);
                gradientblue.addColorStop(0, "rgba(0, 73, 232, 1)");
                gradientblue.addColorStop(1, "rgba(0, 73, 232, 0)");

                const gradientred = ctx.createLinearGradient(0, 0, 0, 280);
                gradientred.addColorStop(0, "rgba(0, 73, 232, 0.5)");
                gradientred.addColorStop(1, "rgba(0, 73, 232, 0)");

                this.mySummaryChart = new Chart(ctx, {
                    type: "bar",
                    data: {
                        labels: ["1", "2", "3", "4", "5", "7", "8", "9", "10", "11", "12"],
                        datasets: [
                            {
                                label: "# of Votes",
                                data: this.generateRandomData(),
                                radius: 0,
                                backgroundColor: gradientblue,
                                borderColor: "#015EC2",
                                borderWidth: 0,
                                borderRadius: 4,
                                fill: true,
                                tension: 0.5,
                            } as any,
                            {
                                label: "# of hours",
                                data: this.generateRandomData(),
                                radius: 0,
                                backgroundColor: gradientred,
                                borderColor: "#015EC2",
                                borderWidth: 0,
                                borderRadius: 4,
                                fill: true,
                                tension: 0.5,
                            } as any,
                        ],
                    },
                    options: {
                        animation: true,
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
                                display: true,
                            },
                        },
                    } as any,
                });
            }
        }
    }

    generateRandomData() {
        return [this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor(), this.randomScalingFactor()];
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
