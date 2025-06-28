import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: "app-profile-settings-contact",
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
                            <li class="breadcrumb-item active bi" aria-current="page">Contact</li>
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
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <h6 class="mb-3">Basic Details</h6>
                            <div class="row gx-3 gx-lg-4 mb-2">
                                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                                    <div class="form-floating">
                                        <input type="text" placeholder="Phone number" value="044985624A125" required="" class="form-control" />
                                        <label>Phone number</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                                    <div class="form-floating">
                                        <input type="email" placeholder="Support Email Address" value="support&#64;adminuiux.com" required="" class="form-control" />
                                        <label>Support Email Address</label>
                                    </div>
                                    <div class="invalid-feedback ">Add .com at last to insert valid data</div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                                    <div class="form-floating">
                                        <input type="email" placeholder="Email Address" value="guest&#64;adminuiux.com" disabled="" required="" class="form-control" />
                                        <label>Email Address</label>
                                    </div>
                                    <div class="invalid-feedback">Add .com at last to insert valid data</div>
                                </div>
                            </div>

                            <h6 class="mb-3">Address Details</h6>
                            <div class="row gx-3 gx-lg-4 mb-2">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="Address Line 1" value="" required="" class="form-control" />
                                        <label>Address Line 1</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="email" placeholder="Address Line 2" required="" class="form-control" />
                                        <label>Address Line 2</label>
                                    </div>
                                    <div class="invalid-feedback mb-3">Add insert valid data</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="Landmark" required="" class="form-control" />
                                        <label>Landmark</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="email" placeholder="Street" required="" class="form-control" />
                                        <label>Street</label>
                                    </div>
                                    <div class="invalid-feedback mb-3">Add insert valid data</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="Country" value="" required="" class="form-control" />
                                        <label>Country</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="Pincode" value="" required="" class="form-control" />
                                        <label>Pincode</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="State" value="" required="" class="form-control" />
                                        <label>State</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="City" value="" required="" class="form-control  is-invalid" />
                                        <label>City</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                            </div>

                            <h6 class="mb-3">Enable Contact page with</h6>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="support1" checked="" />
                                        <label class="form-check-label" for="support1">Enable Chat</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="support2" checked="" />
                                        <label class="form-check-label" for="support2">Show contact form</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="support3" />
                                        <label class="form-check-label" for="support3">Show address</label>
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
export class ProfileSettingsContactComponent {
    @ViewChild("fileInput") myElementRef!: ElementRef;

    inputClick() {
        this.myElementRef.nativeElement.click();
    }
}
