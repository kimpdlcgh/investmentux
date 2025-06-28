import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgxEditorComponent, NgxEditorMenuComponent, Editor } from "ngx-editor";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-profile-settings",
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NgxEditorComponent, NgxEditorMenuComponent, FormsModule],
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
                            <li class="breadcrumb-item active bi" aria-current="page">Settings</li>
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
                    <!-- cover -->
                    <div class="card adminuiux-card overflow-hidden mb-3 pt-5">
                        <figure class="coverimg start-0 top-0 w-100 h-100 z-index-0 position-absolute overlay-gradiant">
                            <div class="position-absolute top-0 end-0 m-2">
                                <button class="btn btn-sm btn-theme" (click)="inputClick()"><i class="bi bi-camera"></i> Change Cover</button>
                                <input type="file" class="d-none" />
                            </div>
                            <img src="assets/img/modern-ai-image/flamingo-3.jpg" class="mw-100" alt="" />
                        </figure>

                        <div class="card-body text-center text-white z-index-1">
                            <div class="d-inline-block position-relative w-auto mx-auto my-3">
                                <figure class="avatar avatar-150 coverimg rounded-circle">
                                    <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                </figure>
                                <div class="position-absolute bottom-0 end-0 z-index-1 h-auto">
                                    <button class="btn btn-theme btn-square" (click)="inputClick()">
                                        <i class="bi bi-camera"></i>
                                    </button>
                                    <input type="file" class="d-none" #fileInput />
                                </div>
                            </div>
                            <h4 class="mb-0">AdminUIUX</h4>
                            <p class="opacity-75 mb-3">guest&#64;adminuiux.com</p>
                        </div>
                    </div>

                    <div class="card adminuiux-card overflow-hidden mb-3">
                        <div class="card-body">
                            <h6 class="mb-3">Basic Details</h6>
                            <div class="row gx-3 gx-lg-4 mb-2">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="First Name" value="adminuiux" required="" class="form-control is-valid" />
                                        <label>First Name</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                                    <div class="form-floating">
                                        <input type="text" placeholder="Last Name" value="" required="" class="form-control" />
                                        <label>Last Name</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                                    <div class="form-floating">
                                        <input type="email" placeholder="Email Address" value="guest&#64;adminuiux.com" disabled="" required="" class="form-control" />
                                        <label>Email Address</label>
                                    </div>
                                    <div class="invalid-feedback mb-3">Add .com at last to insert valid data</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="Birth Date" value="26-04-1982" required="" class="form-control datepicker" />
                                        <label>Birth date</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <select class="form-select">
                                            <option>A</option>
                                            <option>A+</option>
                                            <option>B</option>
                                            <option selected>B+</option>
                                            <option>B-</option>
                                            <option>O</option>
                                            <option>O-</option>
                                        </select>
                                        <label>Blood group</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input type="text" placeholder="Weight" value="52" class="form-control" />
                                        <label>Weight (kg)</label>
                                    </div>
                                    <div class="invalid-feedback mb-3">Add .com at last to insert valid data</div>
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

                            <h6 class="mb-3">Professional bio</h6>

                            <div class="NgxEditor__Wrapper mb-3">
                                <ngx-editor-menu [editor]="editor" class=" rounded"> </ngx-editor-menu>
                                <ngx-editor [editor]="editor" [ngModel]="html" [disabled]="false" [placeholder]="'Type here...'" class="rounded"> </ngx-editor>
                            </div>

                            <h6 class="mb-3">Academic qualification</h6>
                            <div class="row mb-2">
                                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                                    <div class="form-floating">
                                        <input type="text" placeholder="Degree" value="I.T." class="form-control" />
                                        <label>Degree</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                                    <div class="form-floating">
                                        <input type="text" placeholder="College/University" value="" class="form-control" />
                                        <label>College/University</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-auto mb-2">
                                    <button class="btn btn-link "><i class="bi bi-plus"></i> Add</button>
                                </div>
                            </div>

                            <h6 class="mb-3">Public Visibility</h6>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch mb-2">
                                        <input class="form-check-input" type="checkbox" id="profileswitch1" checked="" />
                                        <label class="form-check-label" for="profileswitch1">Show profile publicly</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch mb-2">
                                        <input class="form-check-input" type="checkbox" id="profileswitch2" checked="" />
                                        <label class="form-check-label" for="profileswitch2">Show availability</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch mb-2">
                                        <input class="form-check-input" type="checkbox" id="profileswitch3" />
                                        <label class="form-check-label" for="profileswitch3">Show tagline in profile</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="profileswitch4" />
                                        <label class="form-check-label" for="profileswitch4">Make profile inactive</label>
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
export class ProfileSettingsComponent {
    @ViewChild("fileInput") myElementRef!: ElementRef;

    html = "";
    editor!: Editor;
    ngOnInit(): void {
        this.editor = new Editor();
    }

    ngOnDestroy(): void {
        this.editor.destroy();
    }

    inputClick() {
        this.myElementRef.nativeElement.click();
    }
}
