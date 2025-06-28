import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-payment-success",
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
                            <div class="row gx-3 gx-lg-4 justify-content-center text-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-100 rounded-circle text-theme-1 theme-green mb-0">
                                        <h1 style="font-size:80px"><i class="bi bi-patch-check-fill"></i></h1>
                                    </div>
                                    <p class="mb-0">Payment Successful!</p>
                                    <h2 class="fw-bold">USD 100</h2>
                                </div>
                            </div>

                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-body pb-0">
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col">Sub Total</div>
                                        <div class="col-auto fw-bold">$ 100.00</div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col">Cashback</div>
                                        <div class="col-auto fw-bold">$ 10.00</div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col">Transaction Charge</div>
                                        <div class="col-auto fw-bold">0.00</div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col">Net Banking</div>
                                        <div class="col-auto fw-bold">AmericaSpice Bank</div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col">A/C No</div>
                                        <div class="col-auto fw-bold">200525XXXXXX5524</div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col-4">Transaction</div>
                                        <div class="col-8 text-end fw-bold">
                                            <p style="word-break: break-all;">FGDFG44G56G4D1G65G4DSG1S6G4G1SGS6G1S</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4 justify-content-center text-center">
                                <div class="col-auto">
                                    <a routerLink="/app/wallet" class="btn btn-link"><i class="bi bi-arrow-left"></i> Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class WalletPaymentSuccessComponent {}
