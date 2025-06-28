import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();

@Component({
    selector: "app-wallet-addmoney",
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
                            <li class="breadcrumb-item active bi" aria-current="page">Add Money</li>
                        </ol>
                    </nav>
                    <h5>Add Money</h5>
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
                            <div class="row gx-3 justify-content-center">
                                <div class="col col-sm-auto d-grid mb-3 mb-lg-4">
                                    <input type="radio" name="paymentmode" class="btn-check" id="payment-1" />
                                    <label class="btn btn-outline-theme" for="payment-1">
                                        <i class="bi bi-globe fs-5 my-2"></i><br />
                                        <span class="fs-12">Net Banking</span>
                                    </label>
                                </div>
                                <div class="col col-sm-auto d-grid mb-3 mb-lg-4">
                                    <input type="radio" name="paymentmode" class="btn-check" id="payment-2" />
                                    <label class="btn btn-outline-theme" for="payment-2">
                                        <i class="bi bi-credit-card fs-5 my-2"></i><br />
                                        <span class="fs-12">Credit Card</span>
                                    </label>
                                </div>
                                <div class="col col-sm-auto d-grid mb-3 mb-lg-4">
                                    <input type="radio" name="paymentmode" class="btn-check" id="payment-3" />
                                    <label class="btn btn-outline-theme" for="payment-3">
                                        <i class="bi bi-at fs-5 my-2"></i><br />
                                        <span class="fs-12">UPI Payment</span>
                                    </label>
                                </div>
                            </div>
                            <h6 class="mb-3">Add Amount</h6>
                            <div class="input-group mb-3">
                                <div class="input-group-text">USD</div>
                                <input type="number" class="form-control form-control-lg" id="ihavei" placeholder="Amount..." value="100.00" />
                            </div>
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-floating mb-1">
                                        <select class="form-select" id="ihavecurrency2i">
                                            <option>USD</option>
                                            <option selected>CAD</option>
                                            <option>AUD</option>
                                        </select>
                                        <label for="ihavecurrency2i">in Wallet</label>
                                    </div>
                                    <p class="small text-secondary text-center">1.38 CAD</p>
                                </div>
                            </div>
                            <div class="text-center mb-4">
                                <h5 class="fw-normal"><b class="fw-bold">Great!</b><br />You are going to add</h5>
                                <h1 class="mb-0 text-theme-1">100.00</h1>
                                <p class="text-secondary small">in US Dollar</p>
                            </div>

                            <a routerLink="/app/wallet-payment-success" class="btn btn-lg btn-theme w-100">Add Money</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class WalletAddmoneyComponent {}
