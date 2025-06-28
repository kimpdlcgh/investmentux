import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-forgot-password",
    standalone: true,
    imports: [FormsModule, RouterLink],
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

                    <form class="auth-form" (ngSubmit)="onSubmit()">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="emailadd" placeholder="Enter email address" value="info@adminuiux" autofocus="" />
                            <label for="emailadd">Email Address</label>
                        </div>

                        <button type="submit" class="btn btn-lg btn-theme w-100 mb-3 mb-lg-4">Reset Now</button>
                    </form>

                    <div class="text-center mb-3">Already have password? <a routerLink="/auth/signin" class="style-none">Login</a> here.</div>
                </div>
            </div>
        </div>
    `,
})
export class ForgotPasswordComponent {
    constructor(private router: Router) {}
    email: string = "";

    onSubmit() {
        // Implement forgot password logic
        this.router.navigate(["/auth/change-password"]);
    }
}
