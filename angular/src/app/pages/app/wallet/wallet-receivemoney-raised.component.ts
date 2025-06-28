import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-wallet-receivemoney-raised",
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
                            <li class="breadcrumb-item active bi" aria-current="page">Requested Money</li>
                        </ol>
                    </nav>
                    <h5>Requested Money</h5>
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
                                    <div class="avatar avatar-100 rounded-circle text-theme-1 theme-warning mb-2">
                                        <h1 style="font-size:80px"><i class="bi bi-hourglass-split"></i></h1>
                                    </div>
                                    <p class="mb-0">Requested Successful!</p>
                                    <h2 class="fw-bold">USD 100</h2>
                                </div>
                            </div>

                            <div class="card mb-3 mb-lg-4">
                                <div class="card-body pb-0">
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col">Requested To</div>
                                        <div class="col-auto fw-bold">
                                            <div class="avatar avatar-20 rounded-circle coverimg d-inline-block align-middle me-2">
                                                <img src="assets/img/modern-ai-image/user5-kid.jpg" alt="" />
                                            </div>
                                            <span class="align-middle">Alex Doe</span>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col">Coupon</div>
                                        <div class="col-auto fw-bold">10% OFF</div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col">Transaction Charge</div>
                                        <div class="col-auto fw-bold">0.00</div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col">Receive in A/C</div>
                                        <div class="col-auto fw-bold">200525XXXXXX5524</div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4 mb-3">
                                        <div class="col-4">Request ID</div>
                                        <div class="col-8 text-end fw-bold">
                                            <p style="word-break: break-all;">FGDFG44G56G4D1G65G4DSG1S6G4G1SGS6G1S</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4 justify-content-center text-center">
                                <div class="col-auto">
                                    <a routerLink="/app/wallet-summary" class="btn btn-link"><i class="bi bi-arrow-left"></i> Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class WalletReceivemoneyRaisedComponent {}
