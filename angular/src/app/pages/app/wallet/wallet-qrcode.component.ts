import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-wallet-qrcode",
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
                            <li class="breadcrumb-item active bi" aria-current="page">QR Code</li>
                        </ol>
                    </nav>
                    <h5>QR Code</h5>
                </div>
                <div class="col-auto py-1"></div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-3 mt-lg-4" id="main-content">
            <div class="row gx-3 gx-lg-4 justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 col-xxl-4">
                    <div class="text-center rounded bg-black py-4 mb-3">
                        <div class="avatar avatar-160 rounded bg-white p-2"><img src="assets/img/adminuiux-qr.png" alt="" class="mw-100 mx-auto" /></div>
                    </div>
                    <div class="text-center mb-3 mb-lg-4">
                        <h5 class="mb-0">Scan QR Code</h5>
                        <p class="text-secondary">To send money from wallet account</p>

                        <button class="btn btn-theme" type="button" disabled>
                            <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                            <span role="status">Scanning...</span>
                        </button>
                    </div>

                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body pb-0">
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

                            <input type="number" class="form-control form-control-lg text-center mb-3" id="ihavei" placeholder="Amount..." value="100.00" />
                            <div class="row mb-3 mb-lg-4">
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
                            <a routerLink="/app/wallet-payment-success" class="btn btn-lg btn-theme w-100 mb-3">Pay</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class WalletQrcodeComponent {}
