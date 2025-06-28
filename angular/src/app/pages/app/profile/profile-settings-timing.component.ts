import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: "app-profile-settings-timing",
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
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
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/profile-settings">Settings</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Timing</li>
                        </ol>
                    </nav>
                    <h5>Settings Basic</h5>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <!-- settings -->
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-4 col-lg-4 col-xl-3">
                    <div class="card adminuiux-card mb-3 ">
                        <div class="card-body">
                            <ul class="nav nav-pills adminuiux-nav-pills flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" routerLink="/app/profile-settings" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-person"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">My Profile</p>
                                            <p class="small opacity-75">Basic Details</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" routerLink="/app/profile-settings-users" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-people fs-4"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">Users</p>
                                            <p class="small opacity-75">Roles, Permission, Access</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" routerLink="/app/profile-settings-timing" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-clock"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">Timing</p>
                                            <p class="small opacity-75">Business hours, Emergency</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" routerLink="/app/profile-settings-payment" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-cash-stack fs-4"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">Payment</p>
                                            <p class="small opacity-75">Online, Devices, Cash</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" routerLink="/app/profile-settings-contact" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-life-preserver"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">Contact</p>
                                            <p class="small opacity-75">Support, Call, Chat, email</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card adminuiux-card mb-3 mb-lg-4" data-bs-target="#navbarpill" data-bs-spy="scroll">
                        <div class="card-body py-0">
                            <div class="position-sticky bg-card py-3 mb-0 z-index-7 header-pt mb-2" id="navbarpill">
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#scrollspayone">Location 1</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#scrollspaytwo">Location 2</a>
                                    </li>
                                </ul>
                            </div>

                            <div id="scrollspayone" class="mb-4 mb-lg-5" style="scroll-margin: 150px;">
                                <h6 class="mb-3"><i class="bi bi-hospital fs-4 me-2 align-middle"></i> Location 1 timing</h6>
                                <nav class="mb-3">
                                    <div class="nav nav-underline" id="nav-tab-loc-1" role="tablist">
                                        <button class="nav-link active" id="nav-Office-tab-loc-1" data-bs-toggle="tab" data-bs-target="#nav-Office-loc-1" type="button" role="tab" aria-controls="nav-Office-loc-1" aria-selected="true">Office</button>
                                        <button class="nav-link" id="nav-agents-tab-loc-1" data-bs-toggle="tab" data-bs-target="#nav-agents-loc-1" type="button" role="tab" aria-controls="nav-agents-loc-1" aria-selected="false">Agents</button>
                                        <button class="nav-link" id="nav-staff-tab-loc-1" data-bs-toggle="tab" data-bs-target="#nav-staff-loc-1" type="button" role="tab" aria-controls="nav-staff-loc-1" aria-selected="false">Staff</button>
                                    </div>
                                </nav>
                                <div class="tab-content mb-3" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="nav-Office-loc-1" role="tabpanel" aria-labelledby="nav-Office-tab-loc-1" tabindex="0">
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Monday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="monday" />
                                                    <label class="form-check-label" for="monday">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Tuesday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="tuesday" />
                                                    <label class="form-check-label" for="tuesday">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Wednesday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="wednesday" />
                                                    <label class="form-check-label" for="wednesday">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Thursday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="thursday" />
                                                    <label class="form-check-label" for="thursday">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Friday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="friday" />
                                                    <label class="form-check-label" for="friday">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Saturday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="saturday" checked />
                                                    <label class="form-check-label" for="saturday">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating opacity-50 mb-3">
                                                    <input type="time" value="09:00" class="form-control" disabled />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating opacity-50 mb-3">
                                                    <input type="time" value="20:00" class="form-control" disabled />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-link mb-3" disabled><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Sunday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="sunday" />
                                                    <label class="form-check-label" for="sunday">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="nav-agents-loc-1" role="tabpanel" aria-labelledby="nav-agents-tab-loc-1" tabindex="0">...</div>
                                    <div class="tab-pane fade" id="nav-staff-loc-1" role="tabpanel" aria-labelledby="nav-staff-tab-loc-1" tabindex="0">...</div>
                                </div>

                                <h6 class="mb-3">Emergency Service</h6>
                                <div class="row gx-3 gx-lg-4">
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="profileswitch2" checked="" />
                                            <label class="form-check-label" for="profileswitch2">24x7 Availability</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="profileswitch4" />
                                            <label class="form-check-label" for="profileswitch4">24x7 Helpline on</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="" id="scrollspaytwo" style="scroll-margin: 150px;">
                                <h6 class="mb-3"><i class="bi bi-hospital fs-4 me-2 align-middle"></i> Location 2 timing</h6>
                                <nav class="mb-3">
                                    <div class="nav nav-underline" id="nav-tab-loc-2" role="tablist">
                                        <button class="nav-link active" id="nav-Office-tab-loc-2" data-bs-toggle="tab" data-bs-target="#nav-Office-loc-2" type="button" role="tab" aria-controls="nav-Office-loc-2" aria-selected="true">Office</button>
                                        <button class="nav-link" id="nav-agents-tab-loc-2" data-bs-toggle="tab" data-bs-target="#nav-agents-loc-2" type="button" role="tab" aria-controls="nav-agents-loc-2" aria-selected="false">Agents</button>
                                        <button class="nav-link" id="nav-staff-tab-loc-2" data-bs-toggle="tab" data-bs-target="#nav-staff-loc-2" type="button" role="tab" aria-controls="nav-staff-loc-2" aria-selected="false">Staff</button>
                                    </div>
                                </nav>
                                <div class="tab-content mb-3" id="nav-tabContent-2">
                                    <div class="tab-pane fade show active" id="nav-Office-loc-2" role="tabpanel" aria-labelledby="nav-Office-tab-loc-2" tabindex="0">
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Monday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="monday2" />
                                                    <label class="form-check-label" for="monday2">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Tuesday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="tuesday2" />
                                                    <label class="form-check-label" for="tuesday2">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Wednesday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="wednesday2" />
                                                    <label class="form-check-label" for="wednesday2">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Thursday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="thursday2" />
                                                    <label class="form-check-label" for="thursday2">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Friday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="friday2" />
                                                    <label class="form-check-label" for="friday2">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Saturday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="saturday2" checked />
                                                    <label class="form-check-label" for="saturday2">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating opacity-50 mb-3">
                                                    <input type="time" value="09:00" class="form-control" disabled />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating opacity-50 mb-3">
                                                    <input type="time" value="20:00" class="form-control" disabled />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-link mb-3" disabled><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>

                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col col-md-3 col-xl-2 mb-3">
                                                <h6>Sunday</h6>
                                            </div>
                                            <div class="col-auto col-sm-auto mb-3">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="sunday2" />
                                                    <label class="form-check-label" for="sunday2">Full Day</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="09:00" class="form-control" />
                                                    <label>Start Time</label>
                                                </div>
                                            </div>
                                            <div class="col-6 col-sm-auto">
                                                <div class="form-floating my-2">
                                                    <input type="time" value="20:00" class="form-control" />
                                                    <label>End Time</label>
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-link mb-3"><i class="bi bi-plus"></i> Add Shift</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="nav-agents-loc-2" role="tabpanel" aria-labelledby="nav-agents-tab-loc-2" tabindex="0">...</div>
                                    <div class="tab-pane fade" id="nav-staff-loc-2" role="tabpanel" aria-labelledby="nav-staff-tab-loc-2" tabindex="0">...</div>
                                </div>

                                <h6 class="mb-3">Emergency Service</h6>
                                <div class="row gx-3 gx-lg-4">
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="profileswitch3" checked="" />
                                            <label class="form-check-label" for="profileswitch3">24x7 Availability</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2">
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="profileswitch5" />
                                            <label class="form-check-label" for="profileswitch5">24x7 Helpline on</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <button class="btn btn-theme">Save</button>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-link theme-red">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class ProfileSettingsTimingComponent {
    @ViewChild("fileInput") myElementRef!: ElementRef;

    inputClick() {
        this.myElementRef.nativeElement.click();
    }
}
