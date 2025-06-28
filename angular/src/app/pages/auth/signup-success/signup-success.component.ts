import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-signup-success",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!--Page body-->
        <div class="container-fluid h-100">
            <div class="row align-items-center justify-content-center mt-auto z-index-1 dvh-100">
                <div class="col login-box maxwidth-400 text-dark pb-ios">
                    <div class="text-center mb-3">
                        <h1 class="mb-2">Congratulations</h1>
                        <p class="text-secondary">You come so far and ready!</p>
                    </div>

                    <a routerLink="/app/onboarding" class="btn btn-outline-theme h-auto w-100 mb-3 text-start">
                        <div class="row gx-3 gx-lg-4 align-items-center">
                            <div class="col-auto">
                                <i class="bi bi-journal-medical fs-2 h-auto w-auto"></i>
                            </div>
                            <div class="col">
                                <p class="h5 mb-1">Are you a individual?</p>
                                <p class="opacity-75 small">Small investment 1-5 staff</p>
                            </div>
                            <div class="col-auto">
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </a>

                    <a routerLink="/app/onboarding" class="btn btn-outline-theme h-auto w-100 mb-3 text-start">
                        <div class="row gx-3 gx-lg-4 align-items-center">
                            <div class="col-auto">
                                <i class="bi bi-hospital fs-2 h-auto w-auto"></i>
                            </div>
                            <div class="col">
                                <p class="h5 mb-1">Are you a company?</p>
                                <p class="opacity-75 small">Company with 5+ staff</p>
                            </div>
                            <div class="col-auto">
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    `,
})
export class SignupSuccessComponent {}
