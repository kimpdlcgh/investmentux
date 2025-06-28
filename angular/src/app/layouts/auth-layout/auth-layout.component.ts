import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthHeaderBackComponent } from "../../components/auth-header/auth-header-back.component";

@Component({
    selector: "app-auth-layout",
    standalone: true,
    imports: [RouterOutlet, AuthHeaderBackComponent],
    template: `
        <!-- main content -->
        <app-auth-header-back class="adminuiux-header"></app-auth-header-back>
        <div class="adminuiux-wrap">
            <main class="adminuiux-content z-index-1 position-relative">
                <router-outlet></router-outlet>
            </main>
        </div>
    `,
})
export class AuthLayoutComponent {}
