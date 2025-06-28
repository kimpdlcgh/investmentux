import { Component } from "@angular/core";

@Component({
    selector: "app-wallet-transactions",
    standalone: true,
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
            <div class="input-group mb-3 mb-lg-4">
                <span class="input-group-text text-secondary" onclick="$(this).next().click()">
                    <i class="bi bi-calendar-event"></i>
                </span>
                <input type="text" class="form-control" id="datepicker" placeholder="Search Transaction..." />
            </div>
            <ul class="list-group list-group-flush rounded mb-3 mb-lg-4">
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Send money</p>
                            <p class="text-secondary small">12 Dec 2024, 12:50 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 150.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Paid Bill</p>
                            <p class="text-secondary small">11 Dec 2024, 7:15 AM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 145.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Paid Bill</p>
                            <p class="text-secondary small">10 Nov 2024, 1:20 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 325.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item theme-green">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border border-theme-1 bg-theme-1-subtle text-theme-1"><i class="bi bi-arrow-down-left h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Received money</p>
                            <p class="text-secondary small">5 Nov 2024, 1:45 AM</p>
                        </div>
                        <div class="col-auto">
                            <h6 class="text-theme-1">+ $ 562.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Send money</p>
                            <p class="text-secondary small">3 Nov 2024, 1:30 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 356.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Send money</p>
                            <p class="text-secondary small">12 Dec 2024, 12:50 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 150.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Paid Bill</p>
                            <p class="text-secondary small">11 Dec 2024, 7:15 AM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 145.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Paid Bill</p>
                            <p class="text-secondary small">10 Nov 2024, 1:20 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 325.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item theme-green">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border border-theme-1 bg-theme-1-subtle text-theme-1"><i class="bi bi-arrow-down-left h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Received money</p>
                            <p class="text-secondary small">5 Nov 2024, 1:45 AM</p>
                        </div>
                        <div class="col-auto">
                            <h6 class="text-theme-1">+ $ 562.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Send money</p>
                            <p class="text-secondary small">3 Nov 2024, 1:30 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 356.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Send money</p>
                            <p class="text-secondary small">12 Dec 2024, 12:50 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 150.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Paid Bill</p>
                            <p class="text-secondary small">11 Dec 2024, 7:15 AM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 145.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Paid Bill</p>
                            <p class="text-secondary small">10 Nov 2024, 1:20 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 325.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item theme-green">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border border-theme-1 bg-theme-1-subtle text-theme-1"><i class="bi bi-arrow-down-left h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Received money</p>
                            <p class="text-secondary small">5 Nov 2024, 1:45 AM</p>
                        </div>
                        <div class="col-auto">
                            <h6 class="text-theme-1">+ $ 562.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Send money</p>
                            <p class="text-secondary small">3 Nov 2024, 1:30 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 356.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Send money</p>
                            <p class="text-secondary small">12 Dec 2024, 12:50 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 150.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Paid Bill</p>
                            <p class="text-secondary small">11 Dec 2024, 7:15 AM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 145.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Paid Bill</p>
                            <p class="text-secondary small">10 Nov 2024, 1:20 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 325.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item theme-green">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border border-theme-1 bg-theme-1-subtle text-theme-1"><i class="bi bi-arrow-down-left h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Received money</p>
                            <p class="text-secondary small">5 Nov 2024, 1:45 AM</p>
                        </div>
                        <div class="col-auto">
                            <h6 class="text-theme-1">+ $ 562.00</h6>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <div class="avatar avatar-40 rounded-circle border"><i class="bi bi-arrow-up-right h5"></i></div>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Send money</p>
                            <p class="text-secondary small">3 Nov 2024, 1:30 PM</p>
                        </div>
                        <div class="col-auto">
                            <h6>- $ 356.00</h6>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    `,
})
export class WalletTransactionsComponent {}
