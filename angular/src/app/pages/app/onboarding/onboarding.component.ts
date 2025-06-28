import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Location } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-onboarding",
    standalone: true,
    imports: [RouterLink],
    template: `
        <div class="container mt-4">
            <!-- Onboarding banner -->
            <div class="text-center mb-3">
                <h2>Getting started is easy & quick!</h2>
                <p class="text-secondary">Provide your information to quick start appointment bookings.</p>
            </div>

            <div>
                <!-- SmartWizard html -->
                <div class="card adminuiux-card overflow-hidden mb-4">
                    <ul class="nav nav-justified">
                        <li class="nav-item">
                            <a class="nav-link active theme-green" routerLink="/app/onboarding">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">1</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Details</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link opacity-50" routerLink="/app/onboarding2">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">2</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Address</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link opacity-50" routerLink="/app/onboarding3">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">3</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Interests</p>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="card-body pb-0">
                        <div class="row align-items-center">
                            <div class="col-12 col-lg-3 text-center mb-3">
                                <figure class="avatar avatar-140 coverimg rounded-circle mt-3 mb-3">
                                    <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                    <button class="btn btn-square btn-accent rounded-circle" (click)="inputClick()">
                                        <i class="bi bi-upload"></i>
                                    </button>
                                    <input type="file" class="d-none" #fileInput />
                                </figure>
                                <h5>AdminUIUX</h5>
                            </div>
                            <div class="col">
                                <!-- Details -->
                                <h6 class="mb-3">Investor Details</h6>
                                <div class="row gx-3 gx-lg-4 mb-3">
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="investmentname" placeholder="Enter First Name" value="AdminUIUX" />
                                            <label for="investmentname">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="investmentmname" placeholder="Enter Middle name" />
                                            <label for="investmentmname">Middle Name</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="investmentlname" placeholder="Enter Last name" />
                                            <label for="investmentlname">Last Name</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="phoneon" placeholder="Enter phone" value="+91 4152 21A45488004" />
                                            <label for="phoneon">Enter Phone</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="emailaddresson" placeholder="Enter Email Address" value="alex.smith@tgmail.com" />
                                            <label for="emailaddresson">Email Address</label>
                                        </div>
                                    </div>
                                </div>

                                <!-- Describe -->
                                <h6 class=" mb-3">Describe yourself</h6>
                                <div class="row gx-3 gx-lg-4">
                                    <div class="col-12">
                                        <div class="form-floating mb-3">
                                            <textarea class="form-control height-100" id="describe" placeholder="Enter description"></textarea>
                                            <label for="describe">Short description</label>
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
                                <a class="btn btn-outline-accent mx-2" routerLink="/app/dashboard">Skip</a>
                                <button class="btn btn-theme mx-2" type="button" routerLink="/app/onboarding2">Next</button>
                                <a class="btn btn-theme finish-btn" style="display: none;" routerLink="/app/dashboard">Finish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class OnboardingComponent {
    @ViewChild("fileInput") myElementRef!: ElementRef;

    ngOnInit() {}

    ngAfterViewInit() {}

    inputClick() {
        this.myElementRef.nativeElement.click();
    }
}
