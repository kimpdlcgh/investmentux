import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../../services/auth.service";

@Component({
    selector: "app-forgot-password",
    standalone: true,
    imports: [FormsModule, RouterLink, CommonModule],
    template: `
        <!--Page body-->
        <div class="container-fluid h-100">
            <div class="row align-items-center justify-content-center mt-auto z-index-1 dvh-100">
                <div class="col login-box maxwidth-400 text-dark pb-ios">
                    <div class="text-center mb-3">
                        <h1 class="mb-0">Sorry!</h1>
                        <h4 class="mb-3">You have to be here</h4>
                        <p class="text-secondary">Provide your registered email address, we will send you an email with change password link with steps.</p>
                    </div>

                    @if (successMessage) {
                    <div class="alert alert-success alert-dismissible fade show" role="alert">
                        {{ successMessage }}
                        <button type="button" class="btn-close" (click)="successMessage = ''" aria-label="Close"></button>
                    </div>
                    } @if (errorMessage) {
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        {{ errorMessage }}
                        <button type="button" class="btn-close" (click)="errorMessage = ''" aria-label="Close"></button>
                    </div>
                    }

                    <form class="auth-form" (ngSubmit)="onSubmit()" #forgotForm="ngForm">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="emailadd" name="email" placeholder="Enter email address" [(ngModel)]="email" required autofocus="" />
                            <label for="emailadd">Email Address</label>
                        </div>

                        <button type="submit" class="btn btn-lg btn-theme w-100 mb-3 mb-lg-4" [disabled]="isLoading || !forgotForm.valid">
                            @if (isLoading) {
                            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            } {{ isLoading ? "Sending..." : "Reset Now" }}
                        </button>
                    </form>

                    <div class="text-center mb-3">Already have password? <a routerLink="/auth/signin" class="style-none">Login</a> here.</div>
                </div>
            </div>
        </div>
    `,
})
export class ForgotPasswordComponent {
    email: string = "";
    isLoading: boolean = false;
    errorMessage: string = "";
    successMessage: string = "";

    constructor(private router: Router, private authService: AuthService) {}

    async onSubmit(): Promise<void> {
        if (!this.email) {
            this.errorMessage = "Please enter your email address";
            return;
        }

        this.isLoading = true;
        this.errorMessage = "";
        this.successMessage = "";

        try {
            await this.authService.resetPassword(this.email);
            this.successMessage = "Password reset email sent! Please check your inbox.";
            // Clear the form
            this.email = "";
        } catch (error: any) {
            this.errorMessage = error.message || "Failed to send reset email. Please try again.";
        } finally {
            this.isLoading = false;
        }
    }
}
