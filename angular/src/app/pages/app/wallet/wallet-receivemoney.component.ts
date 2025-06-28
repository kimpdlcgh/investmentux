import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();

@Component({
    selector: "app-wallet-receivemoney",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!-- breadcrumb  -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/wallet">Wallet</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Request Money</li>
                        </ol>
                    </nav>
                    <h5>Request Money</h5>
                </div>
                <div class="col-auto py-1"></div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-3 mt-lg-4" id="main-content">
            <div class="row gx-3 gx-lg-4 justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 col-xxl-4">
                    <div class="card adminuiux-card mb-4">
                        <div class="card-body">
                            <h6 class="mb-3">Request money from</h6>
                            <!-- <p class="small text-secondary">Step 1: Receive Money </p> -->
                            <div class="card mb-3 mb-lg-4" id="nocontact">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4 align-items-center mb-3 mb-lg-4">
                                        <div class="col-auto">
                                            <div class="avatar avatar-50 rounded bg-theme-1-subtle text-theme-1 align-middle">
                                                <i class="bi bi-person h4"></i>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <h5 class="mb-0">Choose Contact</h5>
                                            <p class="small text-secondary">One contact required</p>
                                        </div>
                                        <div class="col-auto">
                                            <a routerLink="/app/contacts" class="btn btn-square btn-link">
                                                <i class="bi bi-person-vcard h5 text-secondary"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <!-- recent connection -->
                                    <swiper-container slides-per-view="auto" space-between="16" autoplay="true" class="swiper swipernav">
                                        <swiper-slide class="swiper-slide w-auto">
                                            <div class="avatar avatar-50 rounded-circle coverimg">
                                                <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide w-auto">
                                            <div class="avatar avatar-50 rounded-circle coverimg">
                                                <img src="assets/img/modern-ai-image/lion-2.jpg" alt="" />
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide w-auto">
                                            <div class="avatar avatar-50 rounded-circle coverimg">
                                                <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide w-auto">
                                            <div class="avatar avatar-50 rounded-circle coverimg">
                                                <img src="assets/img/modern-ai-image/user-2.jpg" alt="" />
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide w-auto">
                                            <div class="avatar avatar-50 rounded-circle coverimg">
                                                <img src="assets/img/modern-ai-image/user5-kid.jpg" alt="" />
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide w-auto">
                                            <div class="avatar avatar-50 rounded-circle coverimg">
                                                <img src="assets/img/modern-ai-image/user-7.jpg" alt="" />
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide w-auto">
                                            <div class="avatar avatar-50 rounded-circle coverimg">
                                                <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                            </div>
                                        </swiper-slide>
                                        <swiper-slide class="swiper-slide w-auto">
                                            <div class="avatar avatar-50 rounded-circle coverimg">
                                                <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                                            </div>
                                        </swiper-slide>
                                    </swiper-container>
                                </div>
                            </div>
                            <!-- <p class="small text-secondary">Step 2: Receive Money one contact select </p> 
                                <div class="card adminuiux-card mb-3 mb-lg-4" id="onecontact">
                                    <div class="card-body">
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col-auto">
                                                <figure class="avatar avatar-50 rounded coverimg align-middle">
                                                    <img src="assets/img/modern-ai-image/user-6-kid.jpg" alt="" />
                                                </figure>
                                            </div>
                                            <div class="col">
                                                <h5 class="mb-0">Mobileuxer</h5>
                                                <p class="small text-secondary">mobileuxer&#64;gmatest.com</p>
                                            </div>
                                            <div class="col-auto">
                                                <a routerLink="/app/contacts" class="btn btn-square btn-link">
                                                    <i class="bi bi-person-vcard h5 text-secondary"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p class="small text-secondary">Step 2: Receive Money multiple contact select </p> 
                                <div class="card adminuiux-card mb-3 mb-lg-4" id="morecontact">
                                    <div class="card-body">
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col-auto avatar-group">
                                                <figure class="avatar avatar-50 rounded coverimg align-middle">
                                                    <img src="assets/img/modern-ai-image/user-6-kid.jpg" alt="" />
                                                </figure>
                                                <figure class="avatar avatar-50 rounded coverimg align-middle">
                                                    <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
                                                </figure>
                                                <figure class="avatar avatar-50 rounded coverimg align-middle">
                                                    <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                                </figure>
                                            </div>
                                            <div class="col">
                                                <h5 class="mb-0">+2 Contacts</h5>
                                                <p class="small text-secondary">Selected</p>
                                            </div>
                                            <div class="col-auto">
                                                <a routerLink="/app/contacts" class="btn btn-square btn-link">
                                                    <i class="bi bi-person-vcard h5 text-secondary"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                            <h6 class="mb-3">Request Amount</h6>
                            <input type="number" class="form-control form-control-lg text-center mb-3" id="ihavei" placeholder="Amount..." value="100.00" />
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-floating mb-1">
                                        <select class="form-select" id="ihavecurrencyi">
                                            <option>USD</option>
                                            <option>CAD</option>
                                            <option>AUD</option>
                                        </select>
                                        <label for="ihavecurrencyi">Currency</label>
                                    </div>
                                    <p class="small text-secondary text-center">1.00 USD</p>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-square btn-theme mt-2"><i class="bi bi-arrow-left-right"></i></button>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-1">
                                        <select class="form-select" id="ihavecurrency2i">
                                            <option>USD</option>
                                            <option selected="">CAD</option>
                                            <option>AUD</option>
                                        </select>
                                        <label for="ihavecurrency2i">in Wallet</label>
                                    </div>
                                    <p class="small text-secondary text-center">1.38 CAD</p>
                                </div>
                            </div>
                            <div class="text-center mb-4">
                                <h5 class="fw-normal"><b class="fw-bold">Great!</b><br />You are going to receive</h5>
                                <h1 class="mb-0 text-theme-1">138.00</h1>
                                <p class="text-secondary small">in Canadian Dollar</p>
                            </div>

                            <a routerLink="/app/wallet-receivemoney-raised" class="btn btn-lg btn-theme w-100">Request</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WalletReceivemoneyComponent {}
