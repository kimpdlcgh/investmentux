import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PasswordStrengthComponent } from "../../../components/password-strength/password-strength.component";

@Component({
    selector: "app-signup",
    standalone: true,
    imports: [FormsModule, PasswordStrengthComponent],
    template: `
        <!--Page body-->
        <div class="container-fluid h-100">
            <div class="row align-items-center justify-content-center mt-auto z-index-1 dvh-100">
                <div class="col login-box maxwidth-400 text-dark pb-ios">
                    <div class="text-center mb-3">
                        <h1 class="mb-2">Let's get started</h1>
                        <p class="text-secondary">Provide your few details</p>
                    </div>
                    <form class="auth-form" (ngSubmit)="onSubmit()">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="namef" placeholder="Enter first name" value="Max" autofocus="" />
                                    <label for="namef">First Name</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="namel" [(ngModel)]="name" name="name" placeholder="Enter last name" value="Doe" />
                                    <label for="namel">Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="emailadd" placeholder="Enter email address" [(ngModel)]="email" name="email" value="info@adminuiux" />
                            <label for="emailadd">Email Address</label>
                        </div>
                        <!-- <div class="input-group mb-3">
                        <div class="form-floating maxwidth-100">
                          <select class="form-select" id="code" aria-label="Country code">
                            <option value="1">+1</option>
                            <option selected>+44</option>
                            <option value="3">+66</option>
                            <option value="2">+91</option>
                          </select>
                          <label for="code">Code</label>
                        </div>
                        <div class="form-floating">
                          <input type="text" class="form-control" id="phonen" placeholder="Enter your phone number">
                          <label for="phonen">Phone Number</label>
                        </div>
                      </div> -->

                        <app-password-strength class="mb-3 d-block"></app-password-strength>

                        <div class="position-relative">
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control" id="passwd" placeholder="Confirm your password" />
                                <label for="passwd">Confirm Password</label>
                            </div>
                            <button type="button" class="btn btn-square btn-link text-theme-1 position-absolute end-0 top-0 mt-2 me-2 ">
                                <i class="bi bi-eye"></i>
                            </button>
                        </div>

                        <button type="submit" class="btn btn-lg btn-theme w-100 mb-4">Signup</button>
                    </form>

                    <div class="text-center mb-3">Already have password? <a routerLink="/auth/signin" class="style-none">Login</a> here.</div>
                </div>
            </div>
        </div>
    `,
})
export class SignupComponent {
    constructor(private router: Router) {}

    name: string = "";
    email: string = "";
    password: string = "";

    onSubmit() {
        // Implement sign up logic
        this.router.navigate(["auth/signup-success"]);
    }

    ngAfterViewInit(): void {
        // Bootstrap tooltip initialization
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}
