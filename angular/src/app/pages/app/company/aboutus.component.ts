import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-aboutus",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!-- breadcrumb -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                    <h5>About us</h5>
                </div>
                <div class="col-auto"></div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <div class="card adminuiux-card position-relative overflow-hidden mb-3">
                <div class="coverimg position-absolute end-0 top-0 w-50 h-100 z-index-0 d-none d-xl-block">
                    <img src="assets/img/investment/banner.png" alt="" class="h-100" />
                </div>
                <div class="card-body position-relative z-index-1">
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-12 col-md-12 col-xl-6 px-xl-4 px-xl-5">
                            <p class="mb-0">AdminUIUX - Invest your money</p>
                            <h2 class="text-theme-1 mb-3">Save money and grow with best investment plans</h2>
                            <h6>#1 The Best Investment Admin ui ux HTML Template</h6>
                            <p class="text-secondary mb-3">We create HTML templates for Enterprise applications, Business applications, eCommerce application, Admin Dashboard Applications, Mobile application, Mobile Websites, Micro websites, Cordova apps etc.</p>
                            <a routerLink="/app/pages" class="btn btn-theme me-1">View Pages <i class="bi bi-arrow-right-short"></i></a>
                            <button class="btn btn-outline-theme me-1"><i class="bi bi-play me-1"></i>Watch</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <i class="bi bi-bullseye h3 avatar avatar-50 bg-theme-1-subtle text-theme-1 rounded-circle mb-3"></i>
                            <h4 class="mb-2 mb-md-3">Our Mission</h4>
                            <p class="text-secondary">Our mission is to provide great UI UX design with flexibility of development at the reliable cost. This will give you best by saving time and money. So, for our customer its all about the Win Win situation.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 ">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <i class="bi bi-window-stack h3 avatar avatar-50 bg-theme-1-subtle text-theme-1 rounded-circle mb-3"></i>
                            <h4 class="mb-2 mb-md-3">What we do</h4>
                            <p class="text-secondary">We do best creative and usable digital products for web and mobile devices, website and universal app development. We create unique, user centric, experience design and creative HTML templates.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 ">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <i class="bi bi-cash-stack h3 avatar avatar-50 bg-theme-1-subtle text-theme-1 rounded-circle mb-3"></i>
                            <h4 class="mb-2 mb-md-3">What you get</h4>
                            <p class="text-secondary">Using ready-to-use HTML templates can be a great way to save time & money when building a website. Templates created by professionals, ensuring a high-quality and visually appealing layout.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class AboutUsComponent {}
