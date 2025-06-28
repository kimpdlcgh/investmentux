import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-wallet-currencyexchange",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!-- breadcrumb  -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/wallet">Wallet</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Convert Currency</li>
                        </ol>
                    </nav>
                    <h5>Convert Currency</h5>
                </div>
                <div class="col-auto py-1"></div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-3 mt-lg-4" id="main-content">
            <div class="row gx-3 gx-lg-4 justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 col-xxl-4">
                    <div class="card adminuiux-card mb-4">
                        <div class="card-body">
                            <div class="card adminuiux-card bg-theme-1 overflow-hidden mb-3 mb-lg-4">
                                <figure class="coverimg position-absolute top-0 start-0 w-100 h-100 opacity-75 overlay-gradiant z-index-0">
                                    <img src="assets/img/modern-ai-image/shopping-3.jpg" alt="" />
                                </figure>
                                <div class="card-body height-140 z-index-1"></div>
                                <div class="card-footer z-index-1">
                                    <div>
                                        <h5 class="mb-0">Convert Currency</h5>
                                        <p class="opacity-75">Best currency converter</p>
                                    </div>
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
                                            <option selected="selected">CAD</option>
                                            <option>AUD</option>
                                        </select>
                                        <label for="ihavecurrency2">I want...</label>
                                    </div>
                                    <p class="small text-secondary text-center">1.38 CAD</p>
                                </div>
                            </div>
                            <div class="text-center mb-3 mb-lg-4">
                                <h5 class="fw-normal"><b class="fw-bold">Great!</b> You will get</h5>
                                <h1 class="text-theme-1">132.00</h1>
                                <p class="text-secondary small">in Canadian Dollar</p>
                            </div>
                            <a routerLink="/app/dashboard" class="btn btn-lg btn-theme w-100">Exchange now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class WalletCurrencyexchangeComponent {}
