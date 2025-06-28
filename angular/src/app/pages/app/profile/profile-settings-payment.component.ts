import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();

@Component({
    selector: "app-profile-settings-payment",
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
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
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/profile-settings">Settings</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Payment</li>
                        </ol>
                    </nav>
                    <h5>Settings Basic</h5>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <!-- settings -->
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-4 col-lg-4 col-xl-3">
                    <div class="card adminuiux-card mb-3 ">
                        <div class="card-body">
                            <ul class="nav nav-pills adminuiux-nav-pills flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" routerLink="/app/profile-settings" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-person"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">My Profile</p>
                                            <p class="small opacity-75">Basic Details</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" routerLink="/app/profile-settings-users" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-people fs-4"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">Users</p>
                                            <p class="small opacity-75">Roles, Permission, Access</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" routerLink="/app/profile-settings-timing" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-clock"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">Timing</p>
                                            <p class="small opacity-75">Business hours, Emergency</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" routerLink="/app/profile-settings-payment" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-cash-stack fs-4"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">Payment</p>
                                            <p class="small opacity-75">Online, Devices, Cash</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" routerLink="/app/profile-settings-contact" routerLinkActive="active">
                                        <div class="avatar avatar-28 icon"><i class="bi bi-life-preserver"></i></div>
                                        <div class="col">
                                            <p class="h6 mb-0">Contact</p>
                                            <p class="small opacity-75">Support, Call, Chat, email</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-8 col-lg-8 col-xl-9">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body pb-0">
                            <h6 class="mb-3">My credit cards</h6>
                            <swiper-container slides-per-view="auto" space-between="16px" autoplay="true" class="swiper swipernav mb-2">
                                <swiper-slide class="swiper-slide width-250">
                                    <div class="card adminuiux-card bg-theme-1 w-100 mb-2 overflow-hidden">
                                        <div class="coverimg h-100 w-100 position-absolute top-0 start-0 z-index-0 opacity-50">
                                            <img src="assets/img/modern-ai-image/flamingo-4.jpg" alt="" />
                                        </div>
                                        <div class="card-body z-index-1">
                                            <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                                <div class="col-auto align-self-center">
                                                    <i class="bi bi-credit-card fs-4"></i>
                                                </div>
                                                <div class="col text-end">
                                                    <p>
                                                        <span class="small opacity-75">City Bank</span><br />
                                                        <span class="">Credit Card</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p class="h5 mb-3">000 0000 0001 546598</p>
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col-auto">
                                                    <p class="mb-0 small opacity-75">Expiry</p>
                                                    <p>09/023</p>
                                                </div>
                                                <div class="col text-end">
                                                    <p class="mb-0 small opacity-75">Card Holder</p>
                                                    <p>adminuiux</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col">
                                            <button class="btn btn-link btn-square"><i class="bi bi-pencil"></i></button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-link theme-red text-danger btn-square"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide width-250">
                                    <div class="card bg-theme-1 adminuiux-card w-100 mb-2 overflow-hidden theme-red">
                                        <div class="coverimg h-100 w-100 position-absolute top-0 start-0 z-index-0 blur">
                                            <img src="assets/img/modern-ai-image/tree-4.jpg" alt="" />
                                        </div>
                                        <div class="card-body z-index-1">
                                            <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                                <div class="col-auto align-self-center">
                                                    <i class="bi bi-credit-card fs-4"></i>
                                                </div>
                                                <div class="col text-end">
                                                    <p>
                                                        <span class="small opacity-75">City Bank</span><br />
                                                        <span class="">Credit Card</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p class="h5 mb-3">000 0000 0001 546598</p>
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col-auto">
                                                    <p class="mb-0 small opacity-75">Expiry</p>
                                                    <p>09/023</p>
                                                </div>
                                                <div class="col text-end">
                                                    <p class="mb-0 small opacity-75">Card Holder</p>
                                                    <p>adminuiux</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col">
                                            <button class="btn btn-link btn-square"><i class="bi bi-pencil"></i></button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-link theme-red text-danger btn-square"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide width-250">
                                    <div class="card adminuiux-card w-100 border mb-2 overflow-hidden">
                                        <div class="coverimg h-100 w-100 position-absolute top-0 start-0 z-index-0 opacity-25 rounded">
                                            <img src="assets/img/modern-ai-image/flamingo-4.jpg" alt="" />
                                        </div>
                                        <div class="card-body z-index-1 rounded">
                                            <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                                <div class="col-auto align-self-center">
                                                    <i class="bi bi-credit-card fs-4"></i>
                                                </div>
                                                <div class="col text-end">
                                                    <p>
                                                        <span class="small opacity-75">City Bank</span><br />
                                                        <span class="">Credit Card</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p class="h5 mb-3">000 0000 0001 546598</p>
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col-auto">
                                                    <p class="mb-0 small opacity-75">Expiry</p>
                                                    <p>09/023</p>
                                                </div>
                                                <div class="col text-end">
                                                    <p class="mb-0 small opacity-75">Card Holder</p>
                                                    <p>adminuiux</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col">
                                            <button class="btn btn-link btn-square"><i class="bi bi-pencil"></i></button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-link theme-red text-danger btn-square"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide width-250">
                                    <div class="card bg-theme-l-gradient adminuiux-card w-100 mb-2">
                                        <div class="card-body z-index-1">
                                            <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                                <div class="col-auto align-self-center">
                                                    <i class="bi bi-credit-card fs-4"></i>
                                                </div>
                                                <div class="col text-end">
                                                    <p>
                                                        <span class="small opacity-75">City Bank</span><br />
                                                        <span class="">Credit Card</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <p class="h5 mb-3">000 0000 0001 546598</p>
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col-auto">
                                                    <p class="mb-0 small opacity-75">Expiry</p>
                                                    <p>09/023</p>
                                                </div>
                                                <div class="col text-end">
                                                    <p class="mb-0 small opacity-75">Card Holder</p>
                                                    <p>adminuiux</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col">
                                            <button class="btn btn-link btn-square"><i class="bi bi-pencil"></i></button>
                                        </div>
                                        <div class="col-auto">
                                            <button class="btn btn-link theme-red text-danger btn-square"><i class="bi bi-trash"></i></button>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-slide width-250">
                                    <a href="javascript:void(0)" data-bs-target="#addcreditcard" data-bs-toggle="modal" class="bg-theme-1-subtle text-theme-accent-1 height-180 w-100 rounded text-center d-flex align-items-center justify-content-center style-none">
                                        <div class="py-4">
                                            <i class="bi bi-plus-circle h4 mb-4"></i>
                                            <p class="h5 mb-0">Create New</p>
                                            <p class="opacity-75 small">Add new card</p>
                                        </div>
                                    </a>
                                </swiper-slide>
                            </swiper-container>

                            <h6 class="mb-3">How you receive Payment?</h6>
                            <div class="row gx-3 gx-lg-4 mb-2">
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch mb-2">
                                        <input class="form-check-input" type="checkbox" id="onlinepayment" checked="" />
                                        <label class="form-check-label" for="onlinepayment">Online Payment</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch mb-2">
                                        <input class="form-check-input" type="checkbox" id="pos" checked="" />
                                        <label class="form-check-label" for="pos">Have POS Device</label>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <div class="form-check form-switch mb-2">
                                        <input class="form-check-input" type="checkbox" id="cash" />
                                        <label class="form-check-label" for="cash">Cash</label>
                                    </div>
                                </div>
                            </div>

                            <h6 class="mb-3">
                                PayPal ID
                                <small class="text-secondary fw-normal">- Provide to receive payouts</small>
                            </h6>
                            <div class="row gx-3 gx-lg-4">
                                <div class="col-12 col-md-6 col-lg-4">
                                    <div class="form-floating mb-2">
                                        <input type="email" placeholder="Email" value="testmail&#64;adminuiux.com" required="" class="form-control" />
                                        <label>Email</label>
                                    </div>
                                    <div class="invalid-feedback">Please enter valid input</div>
                                </div>
                                <div class="col-auto align-self-center">
                                    <p class="text-success"><i class="bi bi-patch-check me-1"></i> Verified</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <button class="btn btn-theme">Save</button>
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-link theme-red">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfileSettingsPaymentComponent {
    @ViewChild("fileInput") myElementRef!: ElementRef;

    inputClick() {
        this.myElementRef.nativeElement.click();
    }
}
