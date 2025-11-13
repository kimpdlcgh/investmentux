import { Component } from "@angular/core";
import { RouterLink, Router, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-signin",
    standalone: true,
    imports: [RouterLink, FormsModule, CommonModule],
    template: `
        <!--Page body-->
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center mt-auto z-index-1 dvh-100">
                <div class="col-12 col-sm-8 col-md-11 col-xl-11 col-xxl-10 login-box">
                    <form class="auth-form" (ngSubmit)="onSubmit()" #signinForm="ngForm">
                        <div class="text-center mb-3">
                            <h1 class="mb-2">Welcome&#9996;</h1>
                            <p class="text-secondary">Enter your credential to login</p>
                        </div>

                        @if (errorMessage) {
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            {{ errorMessage }}
                            <button type="button" class="btn-close" (click)="errorMessage = ''" aria-label="Close"></button>
                        </div>
                        }

                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="emailadd" name="email" placeholder="Enter email address" [(ngModel)]="email" required autofocus="" />
                            <label for="emailadd">Email Address</label>
                        </div>

                        <div class="position-relative">
                            <div class="form-floating mb-3">
                                <input [type]="showPassword ? 'text' : 'password'" class="form-control" id="passwd" name="password" placeholder="Enter your password" [(ngModel)]="password" required />
                                <label for="passwd">Password</label>
                            </div>
                            <button type="button" class="btn btn-square btn-link text-theme-1 position-absolute end-0 top-0 mt-2 me-2" (click)="togglePassword()">
                                <i [class]="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                            </button>
                        </div>

                        <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                            <div class="col">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="rememberme" id="rememberme" [(ngModel)]="rememberMe" />
                                    <label class="form-check-label" for="rememberme">Remember me</label>
                                </div>
                            </div>
                            <div class="col-auto">
                                <a routerLink="/auth/forgot-password" class="style-none">Forget Password?</a>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-lg btn-theme w-100 mb-3" [disabled]="isLoading || !signinForm.valid">
                            @if (isLoading) {
                            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            } {{ isLoading ? "Signing in..." : "Login" }}
                        </button>
                    </form>

                    <div class="text-center mb-3">Don't have account? <a routerLink="/auth/signup" class="style-none">Create Account</a></div>
                </div>
            </div>
        </div>
    `,
})
export class SigninComponent {
    email: string = "";
    password: string = "";
    rememberMe: boolean = false;
    showPassword: boolean = false;
    isLoading: boolean = false;
    errorMessage: string = "";
    returnUrl: string = "/app/dashboard";

    constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService) {
        // Get return url from route parameters or default to '/app/dashboard'
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/app/dashboard";
    }

    togglePassword(): void {
        this.showPassword = !this.showPassword;
    }

    async onSubmit(): Promise<void> {
        if (!this.email || !this.password) {
            this.errorMessage = "Please enter both email and password";
            return;
        }

        this.isLoading = true;
        this.errorMessage = "";

        try {
            await this.authService.signin(this.email, this.password);
            // Navigate to return URL or dashboard on success
            this.router.navigate([this.returnUrl]);
        } catch (error: any) {
            this.errorMessage = error.message || "Failed to sign in. Please try again.";
        } finally {
            this.isLoading = false;
        }
    }
}
