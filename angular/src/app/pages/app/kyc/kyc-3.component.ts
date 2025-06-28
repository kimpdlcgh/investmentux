import { Component, ElementRef, Renderer2 } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-kyc-3",
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
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/kyc-1">KYC Compliance</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">KYC Step 2</li>
                        </ol>
                    </nav>
                    <h5>KYC Step 2</h5>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-3 mt-lg-4" id="main-content">
            <!-- top navigation -->
            <ul class="nav nav-pills justify-content-center mb-3">
                <li class="nav-item">
                    <a class="nav-link" routerLink="/app/kyc-2">1. Basic</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="javascript:void(0)">
                        <i class="bi bi-arrow-right">&nbsp;</i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" routerLink="/app/kyc-3">2. Step</a>
                </li>
            </ul>

            <!-- step 2 -->
            <div class="card adminuiux-card overflow-hidden mb-3">
                <div class="card-body">
                    <div class="row gx-3 gx-lg-4">
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
                    <hr class="mb-3 mt-0" />
                    <h6 class="mb-2">Upload Supportive Document Type</h6>
                    <p class="mb-3 text-secondary small">To avoid delay, make sure you upload valid document which is not expired, clearly visible and not with light glare. <br />Select proof type and upload document.</p>
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-12 col-md-4 col-lg-3 mb-3 mb-lg-4">
                            <div class="card h-100 selectable anyone active" (click)="selectable($event)">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 rounded bg-theme-1-subtle text-theme-1">
                                                <i class="bi bi-person-vcard h5"></i>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h6 class="text-theme-1 mb-1">Passport</h6>
                                            <p class="opacity-50 small">Upload passport photos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3 mb-3 mb-lg-4">
                            <div class="card h-100 selectable anyone" (click)="selectable($event)">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 rounded bg-theme-1-subtle text-theme-1">
                                                <i class="bi bi-lightning-charge h5"></i>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h6 class="text-theme-1 mb-1">Electricity Bill</h6>
                                            <p class="opacity-50 small">Upload ID photos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3 mb-3 mb-lg-4">
                            <div class="card h-100 selectable anyone" (click)="selectable($event)">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 rounded bg-theme-1-subtle text-theme-1">
                                                <i class="bi bi-fuel-pump h5"></i>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h6 class="text-theme-1 mb-1">Gas Bill</h6>
                                            <p class="opacity-50 small">Upload DL photos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-12 col-md-4 col-lg-3 mb-3 mb-lg-4">
                            <p class="mb-3">Front-side of proof</p>
                            <div class="dropzone text-center position-relative z-index-0 mb-3">
                                <div class="dz-default dz-message my-2">
                                    <i class="h1 bi bi-cloud-upload"></i><br />
                                    <button class="btn btn-link" type="button">Click here to upload</button>
                                </div>
                                <input type="file" class="position-absolute z-index-1 top-0 start-0 h-100 w-100 rounded opacity-0" />
                            </div>
                            <p class="text-secondary small">Upload only .jpeg, .jpg, .png format max. file size 2MB</p>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3 mb-3 mb-lg-4">
                            <p class="mb-3">Back-side of proof</p>
                            <div class="dropzone text-center position-relative z-index-0 mb-3">
                                <div class="dz-default dz-message my-2">
                                    <i class="h1 bi bi-cloud-upload"></i><br />
                                    <button class="btn btn-link" type="button">Click here to upload</button>
                                </div>
                                <input type="file" class="position-absolute z-index-1 top-0 start-0 h-100 w-100 rounded opacity-0" />
                            </div>
                            <p class="text-secondary small">Upload only .jpeg, .jpg, .png format max. file size 2MB</p>
                        </div>
                    </div>
                    <div class="form-check mb-3 mb-lg-4">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                        <label class="form-check-label" for="flexCheckChecked"> All the personal details and address details I have provided is correct. </label>
                    </div>
                    <div class="row gx-3 gx-lg-4">
                        <div class="col">
                            <a routerLink="/app/kyc-1" class="btn btn-theme">Submit KYC</a>
                            <!-- <button class="btn btn-theme">Submit KYC</button> -->
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-link theme-red">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class Kyc3Component {
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    selectable(event: Event) {
        const selectables = document.querySelectorAll(".selectable");
        let targetElement = event.target as HTMLElement | null;

        while (targetElement && !targetElement.classList.contains("selectable")) {
            targetElement = targetElement.parentElement;
        }
        if (targetElement) {
            if (targetElement.classList.contains("anyone") && !targetElement.classList.contains("active")) {
                selectables.forEach((selectable) => {
                    selectable.classList.remove("active");
                });
                this.renderer.addClass(targetElement, "active");
            } else {
                this.renderer.removeClass(targetElement, "active");
            }
        }
    }
}
