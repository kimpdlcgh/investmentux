import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-wallet-myqrcode",
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
                            <li class="breadcrumb-item active bi" aria-current="page">My QR Code</li>
                        </ol>
                    </nav>
                    <h5>My QR Code</h5>
                </div>
                <div class="col-auto py-1"></div>
            </div>
        </div>
        <!-- content -->
        <div class="container mt-3 mt-lg-4" id="main-content">
            <div class="row gx-3 gx-lg-4 justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 col-xxl-4">
                    <div class="text-center mb-3">
                        <div class="avatar avatar-160 rounded bg-white p-2 mb-3"><img src="assets/img/adminuiux-qr.png" alt="" class="mw-100 mx-auto" /></div>
                        <h5 class="mb-0">Your QR Code</h5>
                        <p class="text-secondary">To Receive money in wallet account</p>
                    </div>
                    <div class="card adminuiux-card">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col-auto">
                                    <figure class="avatar avatar-60 rounded coverimg align-middle">
                                        <img src="assets/img/modern-ai-image/user-6-kid.jpg" alt="" style="display: none;" />
                                    </figure>
                                </div>
                                <div class="col">
                                    <h4 class="mb-0">Mobileuxer</h4>
                                    <p class="small text-secondary">mobileuxer&#64;gmatest.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body pb-0">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col mb-3">
                                    <p class="text-secondary">Username</p>
                                </div>
                                <div class="col-auto mb-3">
                                    <p class="fw-medium">AdminUIUX</p>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col mb-3">
                                    <p class="text-secondary">Virtual ID</p>
                                </div>
                                <div class="col-auto mb-3">
                                    <p class="fw-medium">00VFGBADMINUIUX02154869</p>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col mb-3">
                                    <p class="text-secondary">Valid Till</p>
                                </div>
                                <div class="col-auto mb-3">
                                    <p class="fw-medium">26-09-2026 12:00 am</p>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col mb-3">
                                    <p class="text-secondary">Generated on</p>
                                </div>
                                <div class="col-auto mb-3">
                                    <p class="fw-medium">12-04-2024 6:25 am <i class="bi bi-arrow-clockwise text-secondary" data-bs-toggle="tooltip" title="Re-generate"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-3 gx-lg-4 align-items-center mb-4">
                        <div class="col">
                            <hr class="" />
                        </div>
                        <div class="col-auto">
                            <p class="small text-secondary">Do you want to send money?</p>
                        </div>
                        <div class="col">
                            <hr class="" />
                        </div>
                    </div>
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-6 d-grid mb-3 mb-lg-4">
                            <a routerLink="/app/wallet-qrcode" class="btn btn-lg btn-theme"><i class="bi bi-qr-code"></i> Scan now</a>
                        </div>
                        <div class="col-6 d-grid mb-3 mb-lg-4">
                            <a routerLink="/app/wallet-sendmoney" class="btn btn-lg btn-theme theme-black"><i class="bi bi-person"></i> Pay now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class WalletMyqrcodeComponent {}
