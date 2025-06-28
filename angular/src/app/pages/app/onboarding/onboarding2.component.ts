import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { Location } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-onboarding2",
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
                            <a class="nav-link theme-green" routerLink="/app/onboarding">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">1</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Details</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active theme-green" routerLink="/app/onboarding2">
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
                        <div class="row gx-3 gx-lg-4">
                            <div class="col-12 col-lg-3 text-center">
                                <h6 class="mb-3">Locate on Map</h6>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d788.4385190507815!2d-122.4278138198206!3d37.772364180178094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712990839970!5m2!1sen!2sin" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-100 rounded mb-3"></iframe>
                            </div>
                            <div class="col">
                                <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                    <div class="col">
                                        <h6>Investor Address</h6>
                                    </div>
                                    <div class="col-auto">
                                        <button class="btn btn-link"><i data-feather="plus"></i> Add Another</button>
                                    </div>
                                </div>

                                <div class="row gx-3 gx-lg-4 mb-2">
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="house" placeholder="Enter Shop/Door number" value="12" />
                                            <label for="house">Shop/Door Number</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="street" placeholder="Enter Street" value="Featherstone Street" />
                                            <label for="street">Street</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="locality" placeholder="Enter locality" value="Ward" />
                                            <label for="locality">Locality</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="town" placeholder="Enter Town" value="London" />
                                            <label for="town">Town</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="city" placeholder="Enter City" value="London" />
                                            <label for="city">City</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="postcode" placeholder="Enter Postcode" value="NG25 5AY" />
                                            <label for="postcode">Postcode</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="country" placeholder="Enter Country" value="United Kingdom" />
                                            <label for="country">Country</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col">
                                <button class="btn btn-theme" type="button" routerLink="/app/onboarding">Previous</button>
                            </div>
                            <div class="col-auto">
                                <a class="btn btn-outline-accent mx-2" routerLink="/app/dashboard">Skip</a>
                                <button class="btn btn-theme mx-2" type="button" routerLink="/app/onboarding3">Next</button>
                                <a class="btn btn-theme finish-btn" style="display: none;" routerLink="/app/dashboard">Finish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class Onboarding2Component {
    ngOnInit() {}

    ngAfterViewInit() {}
}
