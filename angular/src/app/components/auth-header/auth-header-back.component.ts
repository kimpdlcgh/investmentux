import { Component } from "@angular/core";
import { Location } from "@angular/common";

@Component({
    selector: "app-auth-header-back",
    standalone: true,
    imports: [],
    template: `
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <!-- main sidebar toggle -->
                <button class="btn btn-square btn-link me-2" (click)="goBack()"><i class="bi bi-arrow-left"></i></button>
                <!-- logo -->
                <a class="navbar-brand" routerLink="/app/dashboard">
                    <img data-bs-img="light" src="assets/img/logo-light.svg" alt="" />
                    <img data-bs-img="dark" src="assets/img/logo.svg" alt="" />
                    <div class="">
                        <span class="h5">Investment<b>UX</b></span>
                        <p class="fs-12 opacity-75">Mobile HTML template</p>
                    </div>
                </a>
                <!-- right icons button -->
                <div class="ms-auto"></div>
            </div>
        </nav>
    `,
})
export class AuthHeaderBackComponent {
    constructor(private location: Location) {}
    goBack(): void {
        this.location.back();
    }
}
