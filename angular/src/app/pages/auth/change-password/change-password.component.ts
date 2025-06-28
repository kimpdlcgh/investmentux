import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PasswordStrengthComponent } from "../../../components/password-strength/password-strength.component";

@Component({
    selector: "app-change-password",
    standalone: true,
    imports: [FormsModule, PasswordStrengthComponent],
    template: `
        <!--Page body-->
        <div class="container-fluid h-100">
            <div class="row align-items-center justify-content-center mt-auto z-index-1 dvh-100">
                <div class="col login-box maxwidth-400 text-dark pb-ios">
                    <div class="text-center mb-3">
                        <h1 class="mb-0">Thats great step!</h1>
                        <h5 class="mb-2">You are now one step away</h5>
                        <p class="text-secondary small">Provide your new password and confirm password here</p>
                    </div>
                    <form class="auth-form" (ngSubmit)="onSubmit()">
                        <app-password-strength class="mb-3 d-block"></app-password-strength>
                        <div class="position-relative">
                            <div class="form-floating mb-4">
                                <input type="password" class="form-control" id="passwdconfirm" placeholder="Confirm your new password" />
                                <label for="passwdconfirm">Confirm Password</label>
                            </div>
                            <button type="button" class="btn btn-square btn-link text-theme-1 position-absolute end-0 top-0 mt-2 me-2 ">
                                <i class="bi bi-eye"></i>
                            </button>
                        </div>

                        <button type="submit" class="btn btn-lg btn-theme w-100 mb-3 mb-lg-4">Change Now</button>
                    </form>

                    <div class="text-center mb-3">Already have password? <a routerLink="/auth/signin" class="style-none">Login</a> here.</div>
                </div>
            </div>
        </div>
    `,
})
export class ChangePasswordComponent {
    constructor(private router: Router) {}

    newPassword: string = "";
    confirmPassword: string = "";

    onSubmit() {
        // Implement change password logic
        this.router.navigate(["auth/signin"]);
    }
}
