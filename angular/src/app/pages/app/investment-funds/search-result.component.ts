import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-search-result",
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
                                <a routerLink="/app/explore">Investment</a>
                            </li>
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/mutual-funds">Mutual Funds</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Search</li>
                        </ol>
                    </nav>
                    <h5>Find Mutual Funds</h5>
                </div>
                <div class="col-auto col-sm-auto text-end"></div>
            </div>
        </div>

        <!-- Content  -->
        <div class="container mt-4" id="main-content">
            <!-- search box -->
            <div class="input-group mb-3 ">
                <input class="form-control border-end-0" type="text" placeholder="Search Stocks, ETF, MF etc." />
                <button class="btn btn-lg btn-theme btn-square"><i class="bi bi-search"></i></button>
            </div>

            <div class="row">
                <!-- Search result -->
                <div class="col-12 mb-3 mb-lg-4">
                    <h6>We have found '4' search result...</h6>
                </div>
                <div class="col-12">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-12 col-md mb-3 mb-md-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/tree-3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h6>Apples Computers Inc.</h6>
                                            <p class="text-secondary small">#APPLECOMINC</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-md-auto text-md-end">
                                    <h6>$ 20452.00</h6>
                                    <p class="text-success small"><i class="bi bi-arrow-up-short"></i> 1.05%</p>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-outline-theme">Buy</button>
                                    <button class="btn btn-outline-danger ms-1">Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-12 col-md mb-3 mb-md-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 rounded coverimg">
                                                <img src="assets/img/logo-512.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h6>Adminuiux.com</h6>
                                            <p class="text-secondary small">#ADMINUIUX</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-md-auto text-md-end">
                                    <h6>$ 1024.00</h6>
                                    <p class="text-success small"><i class="bi bi-arrow-up-short"></i> 0.45%</p>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-outline-theme">Buy</button>
                                    <button class="btn btn-outline-danger ms-1">Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-12 col-md mb-3 mb-md-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/flamingo-2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h6>Flamingo Airlines PVT LTD.</h6>
                                            <p class="text-secondary small">#FLAMINGOAIR</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-auto text-end">
                                    <h6>$ 3562.00</h6>
                                    <p class="text-danger small"><i class="bi bi-arrow-down-short"></i> 0.25%</p>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-outline-theme">Buy</button>
                                    <button class="btn btn-outline-danger ms-1">Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-12 col-md mb-3 mb-md-0">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/bus-3.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h6>Easy Trip Transportation.</h6>
                                            <p class="text-secondary small">#EASYTRIPTRANS</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-md-auto text-md-end">
                                    <h6>$ 1325.00</h6>
                                    <p class="text-success small"><i class="bi bi-arrow-up-short"></i> 1.15%</p>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-outline-theme">Buy</button>
                                    <button class="btn btn-outline-danger ms-1">Sell</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center mb-3">
                    <a href="javascript:void(0)" class="btn btn-link">Load more...</a>
                </div>
            </div>
        </div>
    `,
})
export class SearchResultComponent {}
