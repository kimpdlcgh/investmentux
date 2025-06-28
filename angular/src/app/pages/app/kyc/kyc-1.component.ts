import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-kyc-1",
    standalone: true,
    imports: [RouterLink],
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
                            <li class="breadcrumb-item active bi" aria-current="page">KYC Compliance</li>
                        </ol>
                    </nav>
                    <h5>KYC Compliance</h5>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-5">
                    <!-- card -->
                    <div class="card adminuiux-card overflow-hidden mb-3">
                        <div class="card-body text-center">
                            <div class="card adminuiux-card text-center bg-gradient-5 mb-3">
                                <div class="card-body">
                                    <span class="avatar avatar-100 bg-theme-1-subtle rounded text-theme-1 my-3 my-lg-4">
                                        <i class="h1 bi bi-person-vcard"></i>
                                    </span>
                                </div>
                            </div>
                            <h4>Start your KYC Verification</h4>
                            <p>To protect against fraudulent activity, all participants will be required to complete identity verification (KYC/AML).</p>
                            <p class="text-secondary small">You will have to submit your necessary documents to verify your identity. Please keep your identity proof and address proof handy and make sure your camera is working fine before proceeding with this.</p>

                            <a routerLink="/app/kyc-2" class="btn btn-theme">Let's Start KYC <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="text-center mb-3">
                        <p>If you have any queries. feel free to connect with us at info&#64;adminuiux.coms.</p>
                        <a routerLink="/app/help-center">Need more help?</a>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class Kyc1Component {}
