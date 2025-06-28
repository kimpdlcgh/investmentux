import { Component, Renderer2, Inject, ElementRef } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { RouterLink, RouterLinkActive, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
    selector: "app-sidebar",
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    template: `
        <!-- Standard sidebar -->
        <div class="adminuiux-sidebar">
            <div class="adminuiux-sidebar-inner">
                <!-- Profile -->
                <div class="px-3 not-iconic mt-2">
                    <div class="row gx-3 gx-lg-4">
                        <div class="col align-self-center ">
                            <h6 class="fw-medium">Main Menu</h6>
                        </div>
                        <div class="col-auto">
                            <a class="btn btn-link btn-square" data-bs-toggle="collapse" data-bs-target="#usersidebarprofile" aria-expanded="false" role="button" aria-controls="usersidebarprofile">
                                <i class="bi bi-person"></i>
                            </a>
                        </div>
                    </div>
                    <div class="text-center collapse " id="usersidebarprofile">
                        <figure class="avatar avatar-100 rounded-circle coverimg my-3">
                            <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                        </figure>
                        <h5 class="mb-1 fw-medium">AdminUIUX</h5>
                        <p class="small">The Investment UI Kit</p>
                    </div>
                </div>

                <ul class="nav flex-column menu-active-line">
                    <!-- investment sidebar -->
                    <li class="nav-item">
                        <a routerLink="/app/dashboard" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-columns-gap"></i>
                            <span class="menu-name">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/app/wallet" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-wallet"></i>
                            <span class="menu-name">Wallet</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/app/goals" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-bullseye"></i>
                            <span class="menu-name">My Goals</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/app/loan-list" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-bank"></i>
                            <span class="menu-name">My Loans</span>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="javascrit:void(0)" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="false">
                            <i class="menu-icon bi bi-piggy-bank"></i>
                            <span class="menu-name">Investment</span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="nav-item">
                                <a routerLink="/app/company-shares" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                                    <i class="menu-icon bi bi-bank"></i>
                                    <span class="menu-name">Company Shares</span>
                                </a>
                            </div>
                            <div class="nav-item">
                                <a routerLink="/app/mutual-funds" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                                    <i class="menu-icon bi bi-cash-coin"></i>
                                    <span class="menu-name">Mutual Fund</span>
                                </a>
                            </div>
                            <div class="nav-item">
                                <a routerLink="/app/deposit" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                                    <i class="menu-icon bi bi-percent"></i>
                                    <span class="menu-name">Deposit</span>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/app/explore" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-search"></i>
                            <span class="menu-name">Explore</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/app/statistics" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-bar-chart-line"></i>
                            <span class="menu-name">Statistics</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/app/calculator" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-calculator"></i>
                            <span class="menu-name">Calculators</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/app/pages" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-layers"></i>
                            <span class="menu-name">Pages</span>
                            <span class="badge text-bg-primary mx-2">60+</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/app/personalization" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-palette h4"></i>
                            <span class="menu-name">Personalize ❤️</span>
                        </a>
                    </li>
                </ul>
                <div class=" mt-auto "></div>
                <!-- quick links -->
                <div class="px-3  not-iconic">
                    <h6 class="mb-3 fw-medium">Quick Links</h6>
                    <div class="card adminuiux-card">
                        <div class="card-body p-2">
                            <div class="row gx-2">
                                <div class="col-12 d-flex justify-content-between">
                                    <a routerLink="/app/search-mutual-funds" routerLinkActive="active" class="btn btn-square btn-link theme-red" (click)="closeSidebar()">
                                        <span class="position-relative">
                                            <i class="bi bi-heart"></i>
                                            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success rounded-circle">
                                                <span class="visually-hidden">New alerts</span>
                                            </span>
                                        </span>
                                    </a>
                                    <a routerLink="/app/schedule" routerLinkActive="active" class="btn btn-square btn-link" (click)="closeSidebar()">
                                        <span class="position-relative">
                                            <i class="bi bi-calendar-week"></i>
                                            <span class="position-absolute top-0 start-100 translate-middle p-1 bg-warning rounded-circle">
                                                <span class="visually-hidden">New alerts</span>
                                            </span>
                                        </span>
                                    </a>
                                    <a routerLink="/app/referral" routerLinkActive="active" class="btn btn-square btn-link" (click)="closeSidebar()">
                                        <i class="bi bi-inboxes"></i>
                                    </a>
                                    <a routerLink="/app/help-center" routerLinkActive="active" class="btn btn-square btn-link" (click)="closeSidebar()">
                                        <i class="bi bi-question-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- User account -->
                <ul class="nav flex-column menu-active-line">
                    <!-- bottom sidebar menu -->
                    <li class="nav-item">
                        <a routerLink="/app/referral" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-people"></i>
                            <span class="menu-name">Referral</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a routerLink="/app/profile-settings" routerLinkActive="active" class="nav-link" (click)="closeSidebar()">
                            <i class="menu-icon bi bi-gear"></i>
                            <span class="menu-name">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `,
})
export class SidebarComponent {
    routerEventsSubscription: Subscription | undefined;

    constructor(private renderer: Renderer2, private router: Router, private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {}

    ngOnInit() {
        this.closeSidebar();
    }

    closeSidebar() {
        const windowWidth = window.innerWidth;
        const body = document.body;

        if (windowWidth < 992) {
            this.renderer.removeClass(body, "sidebar-open");
            this.renderer.addClass(body, "sidebar-close");
        }
    }

    toggleDropdown(event: MouseEvent) {
        event.stopPropagation();
        const clickedToggle = event.currentTarget as HTMLElement;
        const clickedToggleMenu = clickedToggle.nextElementSibling;
        const dropdowns = this.elementRef.nativeElement.querySelectorAll(".dropdown");

        dropdowns.forEach((dropdown: HTMLElement) => {
            const dropdownBtn = dropdown.querySelector(".dropdown-toggle");
            const dropdownMenu = dropdown.querySelector(".dropdown-menu");
            if (dropdownBtn !== clickedToggle && dropdownMenu !== clickedToggleMenu) {
                this.renderer.removeClass(dropdownBtn, "show");
                this.renderer.removeClass(dropdownMenu, "show");
            }
        });
    }
}
