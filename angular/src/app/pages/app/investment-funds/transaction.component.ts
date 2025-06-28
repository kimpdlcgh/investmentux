import { Component, AfterViewInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";

@Component({
    selector: "app-transactions",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!-- breadcrumb -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-2 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Transactions</li>
                        </ol>
                    </nav>
                    <h5>Transactions</h5>
                </div>
                <div class="col-auto">
                    <a routerLink="/app/add-invoice" class="btn btn-theme"> <i class="bi bi-plus"></i> <span class="d-none d-md-inline-block">Invoice</span> </a>
                </div>
                <div class="col-auto">
                    <button class="btn btn-link btn-square" data-bs-toggle="collapse" data-bs-target="#filterschedule" aria-expanded="false" aria-controls="filterschedule">
                        <i class="bi bi-filter"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-3 mt-lg-4" id="main-content">
            <!-- filter area -->
            <div class="collapse" id="filterschedule">
                <div class="card adminuiux-card mt-3">
                    <div class="card-body pb-0">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col-12 col-md-6 col-lg-3 mb-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" placeholder="Search..." />
                                    <label>Search...</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 mb-3">
                                <div class="form-floating">
                                    <select class="form-select">
                                        <option selected>All</option>
                                        <option value="1">My Self</option>
                                        <option value="2">Agent</option>
                                        <option value="2">Users</option>
                                    </select>
                                    <label>User Role</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 mb-3">
                                <div class="form-floating">
                                    <select class="form-select">
                                        <option selected>All</option>
                                        <option value="1">Completed</option>
                                        <option value="2">Requested</option>
                                        <option value="3">Pending</option>
                                        <option value="4">Error</option>
                                        <option value="5">Waiting</option>
                                        <option value="6">Blocked</option>
                                    </select>
                                    <label>Status</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- appointment grid view list datatable-->
            <div class="card adminuiux-card mt-3 mb-0">
                <div class="card-body pt-0">
                    <!-- data table -->
                    <table id="dataTable" class="table w-100 nowrap mb-0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th class="all">Date and Time</th>
                                <th data-breakpoints="xs sm">User Name</th>
                                <th data-breakpoints="xs sm md">Contact info</th>
                                <th data-breakpoints="xs sm">Amount</th>
                                <th data-breakpoints="xs sm">Status</th>
                                <th class="all">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2054ID</td>
                                <td>
                                    <p class="mb-0">25-12-2024</p>
                                    <p class="text-secondary small">08:30 PM</p>
                                </td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 mb-0 rounded-circle bg-red text-white">
                                                <span class="h6">MD</span>
                                            </div>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">Mc. Doweelds</p>
                                            <p class="text-secondary small">Storefront, United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">info&#64;maxd..core.com</p>
                                    <p class="text-secondary small">+44 846655****1154</p>
                                </td>
                                <td>
                                    <h6>$ 110.00</h6>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Completed</span>
                                </td>
                                <td>
                                    <a routerLink="/app/invoice-details" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Edit</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Move</a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>105ID</td>
                                <td>
                                    <p class="mb-0">22-12-2024</p>
                                    <p class="text-secondary small">9:00 PM</p>
                                </td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">Winnie John</p>
                                            <p class="text-secondary small">18 years, Australia</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">winnie&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <h6>$ 63.00</h6>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Completed</span>
                                </td>
                                <td>
                                    <a routerLink="/app/invoice-details" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Edit</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Move</a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>058ID</td>
                                <td>
                                    <p class="mb-0">22-12-2024</p>
                                    <p class="text-secondary small">07:15 PM</p>
                                </td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">Alicia Smith</p>
                                            <p class="text-secondary small">30 years, United States</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">alicia&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <h6>$ 75.00</h6>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Completed</span>
                                </td>
                                <td>
                                    <a routerLink="/app/invoice-details" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Edit</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Move</a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>500ID</td>
                                <td>
                                    <p class="mb-0">21-12-2024</p>
                                    <p class="text-secondary small">01:15 PM</p>
                                </td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 mb-0 rounded-circle bg-purple text-white">
                                                <span class="h6">JG</span>
                                            </div>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">JJohnson Bags</p>
                                            <p class="text-secondary small">eCommerce, United States</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">sales&#64;JJohnso..led.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <h6>$ 65.00</h6>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-danger">Error</span>
                                    <button class="btn btn-link btn-square" type="button" data-bs-toggle="tooltip" title="Retry">
                                        <i class="bi bi-arrow-clockwise"></i>
                                    </button>
                                </td>
                                <td>
                                    <a routerLink="/app/invoice-details" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Edit</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Retry</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Move</a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2054ID</td>
                                <td>
                                    <p class="mb-0">20-12-2024</p>
                                    <p class="text-secondary small">08:18 PM</p>
                                </td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-3.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">David Warner</p>
                                            <p class="text-secondary small">30 years, United States</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">david&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <h6>$ 84.00</h6>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-warning">Pending</span>
                                </td>
                                <td>
                                    <a routerLink="/app/invoice-details" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Edit</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Move</a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>105ID</td>
                                <td>
                                    <p class="mb-0">20-12-2024</p>
                                    <p class="text-secondary small">05:07 PM</p>
                                </td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <div class="avatar avatar-40 mb-0 rounded-circle bg-theme-1 text-white">
                                                <span class="h6">WJ</span>
                                            </div>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">Winnie John</p>
                                            <p class="text-secondary small">15 years, Australia</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">winnie&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <h6>$ 65.00</h6>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-info">Pending</span>
                                </td>
                                <td>
                                    <a routerLink="/app/invoice-details" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Edit</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Move</a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>058ID</td>
                                <td>
                                    <p class="mb-0">19-12-2024</p>
                                    <p class="text-secondary small">11:30 AM</p>
                                </td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-5.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">Alicia Smith</p>
                                            <p class="text-secondary small">21 years, United States</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">alicia&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <h6>$ 15.00</h6>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Completed</span>
                                </td>
                                <td>
                                    <a routerLink="/app/invoice-details" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Edit</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Move</a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>501ID</td>
                                <td>
                                    <p class="mb-0">19-12-2024</p>
                                    <p class="text-secondary small">08:30 AM</p>
                                </td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">Jr. Sham Co</p>
                                            <p class="text-secondary small">45 years, United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">cheli&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <h6>$ 212.00</h6>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Completed</span>
                                </td>
                                <td>
                                    <a routerLink="/app/invoice-details" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Edit</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Move</a></li>
                                            <li>
                                                <a class="dropdown-item theme-red" href="javascript:void(0)">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3052ID</td>
                                <td>
                                    <p class="mb-0">19-12-2024</p>
                                    <p class="text-secondary small">12:46 PM</p>
                                </td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-7.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">David Warner</p>
                                            <p class="text-secondary small">55 years, United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">david&#64;sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <h6>$ 180.00</h6>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Completed</span>
                                </td>
                                <td>
                                    <a routerLink="/app/dashboard" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <div class="dropdown d-inline-block">
                                        <a class="btn btn-link no-caret" data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="javascript:void(0)">Edit</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0)">Move</a></li>
                                            <li><a class="dropdown-item theme-red" href="javascript:void(0)">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
})
export class TransactionComponent {
    ngAfterViewInit() {
        // data table
        const table = new DataTable("#dataTable", {
            searching: false,
            lengthChange: false,
            autoWidth: false,
            columnDefs: [{ orderable: false, targets: 4 }],
            order: [[0, "desc"]],
            pageLength: 6,
            responsive: true,
        });
    }
}
