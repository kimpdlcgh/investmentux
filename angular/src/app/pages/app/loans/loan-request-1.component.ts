import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-loan-request-1",
    standalone: true,
    imports: [RouterLink],
    template: ` <!-- breadcrumb -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/loan-request-1">Loan Request</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Loan Request</li>
                        </ol>
                    </nav>
                    <h5>Loan Request</h5>
                </div>
                <div class="col-auto col-sm-auto text-end"></div>
            </div>
        </div>
        <div class="container mt-4">
            <div>
                <!-- SmartWizard html -->
                <div class="card adminuiux-card overflow-hidden mb-4">
                    <ul class="nav nav-justified">
                        <li class="nav-item">
                            <a class="nav-link active theme-green" routerLink="/app/loan-request-1">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">1</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Loan Type</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link opacity-50" routerLink="/app/loan-request-2">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">2</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Criteria</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link opacity-50" routerLink="/app/loan-request-3">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">3</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Amount</p>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="card-body pb-0">
                        <div class="row my-2">
                            <div class="col-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                                <div class="card selectable anyone">
                                    <div class="card-body">
                                        <div class="avatar avatar-80 rounded bg-theme-1-subtle text-theme-1 mb-3">
                                            <i class="bi bi-house h1"></i>
                                        </div>
                                        <h5 class="text-theme-1">Home Loan</h5>
                                        <p class="text-secondary mb-2"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> Lowest interest rates</p>
                                        <p class="text-secondary mb-2"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> 1.5+ lacs pre-approved properties</p>
                                        <p class="text-secondary mb-3"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> Avail prepayment for relaxing life</p>
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col">
                                                <h5 class="text-success mb-0">9.55%</h5>
                                                <p class="text-secondary small">Lowest interest rate</p>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link"><i class="bi bi-plus-lg"></i> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                                <div class="card selectable anyone">
                                    <div class="card-body">
                                        <div class="avatar avatar-80 rounded bg-theme-1-subtle text-theme-1 mb-3">
                                            <i class="bi bi-car-front h1"></i>
                                        </div>
                                        <h5 class="text-theme-1">Car Loan</h5>
                                        <p class="text-secondary mb-2"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> Incredible dealer offers</p>
                                        <p class="text-secondary mb-2"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> Insure car along with loan</p>
                                        <p class="text-secondary mb-3"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> Simple online loan process</p>
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col">
                                                <h5 class="text-success mb-0">16.00%</h5>
                                                <p class="text-secondary small">Lowest interest rate</p>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link"><i class="bi bi-plus-lg"></i> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                                <div class="card selectable anyone">
                                    <div class="card-body">
                                        <div class="avatar avatar-80 rounded bg-theme-1-subtle text-theme-1 mb-3">
                                            <i class="bi bi-book h1"></i>
                                        </div>
                                        <h5 class="text-theme-1">Education Loan</h5>
                                        <p class="text-secondary mb-2"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> Lowest interest rates</p>
                                        <p class="text-secondary mb-2"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> 1.5+ lacs pre-approved properties</p>
                                        <p class="text-secondary mb-3"><span class="me-1 avatar avatar-10 rounded bg-secondary"></span> Avail prepayment for relaxing life</p>
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col">
                                                <h5 class="text-success mb-0">12.35%</h5>
                                                <p class="text-secondary small">Lowest interest rate</p>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link"><i class="bi bi-plus-lg"></i> Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col">
                                <button class="btn btn-theme disabled" type="button" disabled>Previous</button>
                            </div>
                            <div class="col-auto">
                                <button class="btn btn-theme mx-2" type="button" routerLink="/app/loan-request-2">Next</button>
                                <a class="btn btn-theme finish-btn" style="display: none;" routerLink="/app/loan-list">Finish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
})
export class LoanRequest1Component {}
