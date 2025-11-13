import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PasswordStrengthComponent } from "../../../components/password-strength/password-strength.component";
import { AuthService } from "../../../services/auth.service";

@Component({
    selector: "app-signup",
    standalone: true,
    imports: [FormsModule, PasswordStrengthComponent, CommonModule],
    template: `
        <!--Page body-->
        <div class="container-fluid h-100">
            <div class="row align-items-center justify-content-center mt-auto z-index-1 dvh-100">
                <div class="col login-box maxwidth-400 text-dark pb-ios">
                    <div class="text-center mb-3">
                        <h1 class="mb-2">Let's get started</h1>
                        <p class="text-secondary">Provide your few details</p>
                    </div>
                    <form class="auth-form" (ngSubmit)="onSubmit()" #signupForm="ngForm">
                        @if (errorMessage) {
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            {{ errorMessage }}
                            <button type="button" class="btn-close" (click)="errorMessage = ''" aria-label="Close"></button>
                        </div>
                        }

                        <div class="row gx-3 gx-lg-4">
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="namef" name="firstName" placeholder="Enter first name" [(ngModel)]="firstName" required autofocus="" />
                                    <label for="namef">First Name</label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="namel" [(ngModel)]="lastName" name="lastName" placeholder="Enter last name" required />
                                    <label for="namel">Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="emailadd" placeholder="Enter email address" [(ngModel)]="email" name="email" required />
                            <label for="emailadd">Email Address</label>
                        </div>

                        <app-password-strength class="mb-3 d-block" [password]="password"></app-password-strength>

                        <div class="position-relative">
                            <div class="form-floating mb-3">
                                <input [type]="showPassword ? 'text' : 'password'" class="form-control" id="passwd" name="password" placeholder="Enter your password" [(ngModel)]="password" required minlength="6" />
                                <label for="passwd">Password</label>
                            </div>
                            <button type="button" class="btn btn-square btn-link text-theme-1 position-absolute end-0 top-0 mt-2 me-2" (click)="togglePassword()">
                                <i [class]="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                            </button>
                        </div>

                        <div class="position-relative">
                            <div class="form-floating mb-3">
                                <input [type]="showConfirmPassword ? 'text' : 'password'" class="form-control" id="confirmpasswd" name="confirmPassword" placeholder="Confirm your password" [(ngModel)]="confirmPassword" required />
                                <label for="confirmpasswd">Confirm Password</label>
                            </div>
                            <button type="button" class="btn btn-square btn-link text-theme-1 position-absolute end-0 top-0 mt-2 me-2" (click)="toggleConfirmPassword()">
                                <i [class]="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                            </button>
                        </div>

                        @if (password && confirmPassword && password !== confirmPassword) {
                        <div class="text-danger small mb-3">Passwords do not match</div>
                        }

                        <button type="submit" class="btn btn-lg btn-theme w-100 mb-4" [disabled]="isLoading || !signupForm.valid || password !== confirmPassword">
                            @if (isLoading) {
                            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            } {{ isLoading ? "Creating account..." : "Signup" }}
                        </button>
                    </form>

                    <div class="text-center mb-3">Already have password? <a routerLink="/auth/signin" class="style-none">Login</a> here.</div>
                </div>
            </div>
        </div>
    `,
})
export class SignupComponent {
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    password: string = "";
    confirmPassword: string = "";
    showPassword: boolean = false;
    showConfirmPassword: boolean = false;
    isLoading: boolean = false;
    errorMessage: string = "";

    constructor(private router: Router, private authService: AuthService) {}

    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }

    toggleConfirmPassword(): void {
        this.showConfirmPassword = !this.showConfirmPassword;
    }

    async onSubmit(): Promise<void> {
        if (!this.email || !this.password || !this.firstName || !this.lastName) {
            this.errorMessage = "Please fill in all required fields";
            return;
        }

        if (this.password !== this.confirmPassword) {
            this.errorMessage = "Passwords do not match";
            return;
        }

        if (this.password.length < 6) {
            this.errorMessage = "Password must be at least 6 characters long";
            return;
        }

        this.isLoading = true;
        this.errorMessage = "";

        try {
            await this.authService.signup(this.email, this.password);
            // Navigate to success page
            this.router.navigate(["auth/signup-success"]);
        } catch (error: any) {
            this.errorMessage = error.message || "Failed to create account. Please try again.";
        } finally {
            this.isLoading = false;
        }
    }

    ngAfterViewInit(): void {
        // Bootstrap tooltip initialization
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
}
