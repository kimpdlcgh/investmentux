import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-auth-header",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!-- Fixed navbar -->
        <nav class="navbar">
            <div class="container-fluid">
                <!-- logo -->
                <a class="navbar-brand" routerLink="/app/dashboard">
                    <img data-bs-img="light" src="assets/img/logo-light.svg" alt="" />
                    <img data-bs-img="dark" src="assets/img/logo.svg" alt="" />
                    <div class="">
                        <span class="h5">Investment<b>UX</b></span>
                        <p class="fs-12 opacity-75">Mobile HTML template</p>
                    </div>
                </a>
                <div class=" ms-auto "></div>
                <!-- right icons button -->
                <div class="ms-auto"></div>
            </div>
        </nav>
    `,
})
export class AuthHeaderComponent {
    constructor(private location: Location) {}
}
