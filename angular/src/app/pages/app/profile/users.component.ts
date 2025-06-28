import { Component, ElementRef, ViewChild } from "@angular/core";
import DataTable from "datatables.net-dt";
import "datatables.net-responsive-dt";

@Component({
    selector: "app-users",
    standalone: true,
    imports: [],
    template: `
        <!-- breadcrumb -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Users</li>
                        </ol>
                    </nav>
                    <h5>Users</h5>
                </div>
                <div class="col-auto">
                    <a routerLink="/app/settings-users" class="btn btn-square btn-theme">
                        <i class="bi bi-person-add"></i>
                    </a>
                </div>
                <div class="col-auto py-1 ms-auto ms-sm-0">
                    <button class="btn btn-link btn-square btn-icon" data-bs-toggle="collapse" data-bs-target="#filterschedule" aria-expanded="false" aria-controls="filterschedule">
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
                                        <option value="1">Doctor</option>
                                        <option value="2">Staff</option>
                                    </select>
                                    <label>User Role</label>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 mb-3">
                                <div class="form-floating">
                                    <select class="form-select">
                                        <option selected>All</option>
                                        <option value="1">Available</option>
                                        <option value="1">Available in 1hr</option>
                                        <option value="1">Available in 2hr</option>
                                        <option value="2">On Leave</option>
                                    </select>
                                    <label>Availability</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- appointment grid view list datatable-->
            <div class="card adminuiux-card mt-3 mb-0">
                <div class="card-body">
                    <!-- data table -->
                    <table id="dataTable" class="table w-100 nowrap">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th data-breakpoints="xs sm">User Name</th>
                                <th data-breakpoints="xs sm md">Contact info</th>
                                <th data-breakpoints="xs sm">Role</th>
                                <th class="all">Schedule</th>
                                <th data-breakpoints="xs sm">Status</th>
                                <th class="all">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2054ID</td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-7.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">David Warner</p>
                                            <p class="text-secondary small">32 years, United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">david&#64;"sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-theme-accent-1">Doctor</span>
                                </td>
                                <td>
                                    <p class="mb-0">9:10 AM - 08:30 PM</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Available</span>
                                </td>
                                <td>
                                    <a href="investment-myprofile.html" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
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
                                    <p class="mb-0">winnie&#64;"sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-primary">Staff</span>
                                </td>
                                <td>
                                    <p class="mb-0">10:30 AM - 08:30 PM</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Available</span>
                                </td>
                                <td>
                                    <a href="investment-myprofile.html" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
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
                                    <p class="mb-0">alicia&#64;"sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-theme-accent-1">Doctor</span>
                                </td>
                                <td>
                                    <p class="mb-0">11:30 AM - 08:30 PM</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Available</span>
                                </td>
                                <td>
                                    <a href="investment-myprofile.html" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
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
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-2.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">Jr. Chen Li</p>
                                            <p class="text-secondary small">29 years, United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">cheli&#64;"sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-primary">Staff</span>
                                </td>
                                <td>
                                    <p class="mb-0">11:55 PM - 09:00 AM</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-danger">Unavailable</span>
                                </td>
                                <td>
                                    <a href="investment-myprofile.html" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
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
                                <td>2054ID</td>
                                <td>
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-3.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">David Warner</p>
                                            <p class="text-secondary small">30 years, United Kingdom</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">david&#64;"sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-theme-accent-1">Doctor</span>
                                </td>
                                <td>
                                    <p class="mb-0">12:15 PM - 09:00 AM</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Available</span>
                                </td>
                                <td>
                                    <a href="investment-myprofile.html" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
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
                                    <div class="row align-items-center flex-nowrap">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 mb-0 coverimg rounded-circle">
                                                <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div class="col ps-0">
                                            <p class="mb-0 fw-medium">Winnie John</p>
                                            <p class="text-secondary small">15 years, Australia</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0">winnie&#64;"sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-primary">Staff</span>
                                </td>
                                <td>
                                    <p class="mb-0">7:30 AM - 06:30 PM</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Available</span>
                                </td>
                                <td>
                                    <a href="investment-myprofile.html" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
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
                                    <p class="mb-0">alicia&#64;"sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-theme-accent-1">Doctor</span>
                                </td>
                                <td>
                                    <p class="mb-0">2:20 AM - 03:30 PM</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Available</span>
                                </td>
                                <td>
                                    <a href="investment-myprofile.html" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
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
                                    <p class="mb-0">cheli&#64;"sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td><span class="badge badge-light rounded-pill text-bg-theme-accent-1">Revisit</span></td>
                                <td>
                                    <p class="mb-0">3:30 PM - 12:30 PM</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Available</span>
                                </td>
                                <td>
                                    <a href="investment-myprofile.html" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
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
                                    <p class="mb-0">david&#64;"sales..core.com</p>
                                    <p class="text-secondary small">+44 8466585****1154</p>
                                </td>
                                <td><span class="badge badge-light rounded-pill text-bg-theme-accent-1">Doctor</span></td>
                                <td>
                                    <p class="mb-0">9:10 AM - 08:30 PM</p>
                                </td>
                                <td>
                                    <span class="badge badge-light rounded-pill text-bg-success">Available</span>
                                </td>
                                <td>
                                    <a href="investment-view-patient.html" class="btn btn-square btn-link" data-bs-toggle="tooltip" title="View">
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
export class UsersComponent {
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
