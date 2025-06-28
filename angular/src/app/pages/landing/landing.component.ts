import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AuthHeaderComponent } from "../../components/auth-header/auth-header.component";

@Component({
    selector: "app-landing",
    standalone: true,
    imports: [RouterLink, AuthHeaderComponent],
    template: `
        <app-auth-header class="adminuiux-header"></app-auth-header>
        <!--Page body-->
        <div class="container-fluid">
            <div class="row align-items-end justify-content-center mt-auto z-index-1 height-dynamic" style="--h-dynamic: calc(100dvh - 62px)">
                <div class="col login-box maxwidth-400 pb-ios">
                    <div class="text-center mb-3">
                        <img src="assets/img/investment/landing.png" class="maxwidth-260 mb-4 mb-lg-5" alt="" />
                        <h2 class="mb-0">We are welcoming you</h2>
                    </div>

                    <div class="row gx-3 gx-lg-4 justify-content-center">
                        <div class="col-12 col-sm-6 mb-4">
                            <a routerLink="/auth/signup" class="btn btn-lg btn-outline-theme w-100">Sign up</a>
                        </div>
                        <div class="col-12 col-sm-6 mb-3">
                            <a routerLink="/auth/signin" class="btn btn-lg btn-theme w-100">Sign in</a>
                        </div>
                    </div>
                    <div class="row gx-3 gx-lg-4 align-items-center mb-4">
                        <div class="col">
                            <hr />
                        </div>
                        <div class="col-auto">
                            <p class="small text-secondary">OR Continue with</p>
                        </div>
                        <div class="col">
                            <hr />
                        </div>
                    </div>
                    <div class="row gx-3 gx-lg-4 justify-content-center mb-4 mb-lg-5">
                        <div class="col-6 col-sm-auto d-grid">
                            <button class="btn btn-outline-theme"><img src="assets/img/g-logo.png" alt="" class="height-20 me-1" /> Google</button>
                        </div>
                        <div class="col-6 col-sm-auto d-grid">
                            <button class="btn btn-outline-theme"><img src="assets/img/f-logo.png" alt="" class="height-20 me-1" /> Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class LandingComponent {}
