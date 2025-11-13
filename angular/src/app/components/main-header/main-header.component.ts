import { Component, HostListener, OnInit, Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: "app-main-header",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-fluid">
                <!-- main sidebar toggle -->
                <button class="btn btn-link btn-square sidebar-toggler" type="button" (click)="toggleSidebar()">
                    <i class="bi bi-list"></i>
                </button>
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
                <div class="ms-auto">
                    <!-- fullscreen toggle -->
                    <button type="button" class="btn btn-link btn-square btn-icon btn-link-header" (click)="toggleSearch()">
                        <i class="bi bi-search"></i>
                    </button>
                    <!-- dark mode -->
                    <button class="btn btn-link btn-square btnsunmoon btn-link-header" id="btn-layout-modes-dark-page" (click)="toggleDarkMode()">
                        <i class="sun mx-auto bi bi-sun"></i>
                        <i class="moon mx-auto bi bi-moon"></i>
                    </button>
                    <!-- application list dropdown -->
                    <div class="dropdown d-none d-sm-inline-block">
                        <button class="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-grid"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end width-300 pt-0 px-0 overflow-hidden">
                            <div class="py-3 mb-2 dropdown-dontclose text-center">
                                <h5 class="mb-0">Applications</h5>
                                <p class="text-secondary small">Make your app innovative</p>
                            </div>
                            <div class="px-2">
                                <div class="row g-2 text-center mb-2">
                                    <div class="col-4">
                                        <a class="dropdown-item square-item position-relative" routerLink="/#">
                                            <div class="avatar avatar-40 rounded mb-2">
                                                <i class="bi bi-bank fs-4 mx-0"></i>
                                            </div>
                                            <p class="mb-0">Finance</p>
                                            <p class="fs-12 opacity-50 mb-2">Accounting</p>
                                        </a>
                                    </div>
                                    <div class="col-4">
                                        <a class="dropdown-item square-item position-relative" routerLink="/#">
                                            <div class="avatar avatar-40 rounded mb-2">
                                                <i class="bi bi-globe fs-4 mx-0"></i>
                                            </div>
                                            <p class="mb-0">Network</p>
                                            <p class="fs-12 opacity-50 mb-2">Stabilize</p>
                                        </a>
                                    </div>
                                    <div class="col-4">
                                        <a class="dropdown-item square-item position-relative" routerLink="/#">
                                            <div class="avatar avatar-40 rounded mb-2">
                                                <i class="bi bi-box fs-4 mx-0"></i>
                                            </div>
                                            <p class="mb-0">Inventory</p>
                                            <p class="fs-12 opacity-50 mb-2">Assuring</p>
                                        </a>
                                    </div>
                                    <div class="col-4">
                                        <a class="dropdown-item square-item position-relative" routerLink="/#">
                                            <div class="avatar avatar-40 rounded mb-2">
                                                <i class="bi bi-folder fs-4 mx-0"></i>
                                            </div>
                                            <p class="mb-0">Project</p>
                                            <p class="fs-12 opacity-50 mb-2">Management</p>
                                        </a>
                                    </div>
                                    <div class="col-4">
                                        <a class="dropdown-item square-item position-relative" routerLink="/#">
                                            <div class="avatar avatar-40 rounded mb-2">
                                                <i class="bi bi-people fs-4 mx-0"></i>
                                            </div>
                                            <p class="mb-0">Social</p>
                                            <p class="fs-12 opacity-50 mb-2">Tracking</p>
                                        </a>
                                    </div>
                                    <div class="col-4">
                                        <a class="dropdown-item square-item position-relative" routerLink="/#">
                                            <div class="avatar avatar-40 rounded mb-2">
                                                <i class="bi bi-journal-bookmark fs-4 mx-0"></i>
                                            </div>
                                            <p class="mb-0">eComm</p>
                                            <p class="fs-12 opacity-50 mb-2">Make-easy</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <a class="btn btn-link text-center" routerLink="/#">View all <i class="bi bi-arrow-right fs-14"></i> </a>
                            </div>
                        </div>
                    </div>
                    <!-- language dropdown -->
                    <div class="dropdown d-none d-sm-inline-block">
                        <button class="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-translate"></i></button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item active" data-value="EN">EN - English</a></li>
                            <li><a class="dropdown-item" data-value="FR">FR - French</a></li>
                            <li><a class="dropdown-item" data-value="CH">CH - Chinese</a></li>
                            <li><a class="dropdown-item" data-value="HI">HI - Hindi</a></li>
                        </ul>
                    </div>
                    <!-- notification dropdown -->
                    <div class="dropdown d-inline-block">
                        <button class="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-bell"></i>
                            <span class="position-absolute top-0 end-0 badge rounded-pill bg-danger p-1">
                                <small>9+</small>
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end notification-dd sm-mi-45px">
                            <li>
                                <a class="dropdown-item p-2" routerLink="/app/#">
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 rounded-circle bg-pink">
                                                <i class="bi bi-gift text-white"></i>
                                            </figure>
                                        </div>
                                        <div class="col">
                                            <p class="mb-2 small">Congratulation! Your property <span class="fw-bold">#H10215</span> has reached 1000 views.</p>
                                            <span class="row">
                                                <span class="col"><span class="badge badge-light rounded-pill text-bg-warning small">Directory</span></span>
                                                <span class="col-auto small opacity-75">1:00 am</span>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item p-2" routerLink="/app/#">
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 rounded-circle bg-success">
                                                <i class="bi bi-patch-check text-white"></i>
                                            </figure>
                                        </div>
                                        <div class="col">
                                            <p class="mb-2 small">Your property <span class="fw-bold">#H10215</span> is published and live now.</p>
                                            <span class="row">
                                                <span class="col"><span class="badge badge-light rounded-pill text-bg-primary small">System</span></span>
                                                <span class="col-auto small opacity-75">1:00 am</span>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item p-2" routerLink="/app/#">
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 rounded-circle bg-info">
                                                <i class="bi bi-clipboard-check text-white"></i>
                                            </figure>
                                        </div>
                                        <div class="col">
                                            <p class="mb-2 small">User <span class="fw-bold">Rahana</span> has updated <span class="fw-bold">#H10215</span> property.</p>
                                            <span class="row">
                                                <span class="col"><span class="badge badge-light rounded-pill text-bg-success small">team</span></span>
                                                <span class="col-auto small opacity-75">1:00 am</span>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <div class="dropdown-item p-2">
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col-auto">
                                            <figure class="avatar avatar-40 rounded-circle bg-warning ">
                                                <i class="bi bi-bell text-white"></i>
                                            </figure>
                                        </div>
                                        <div class="col">
                                            <p class="mb-2 small">Your subscription going to expire soon. Please <a href="profile-subscription.html">upgrade</a> to get service interrupt free.</p>
                                            <p class="opacity-75 small">4 days ago</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="text-center">
                                <a routerLink="/app/notifications" class="btn btn-link text-center"> View all <i class="bi bi-arrow-right fs-14"></i> </a>
                            </li>
                        </ul>
                    </div>

                    <!-- profile dropdown -->
                    <div class="dropdown d-inline-block">
                        <a class="dropdown-toggle btn btn-link btn-square btn-link-header style-none no-caret px-0" id="userprofiledd" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                            <div class="row gx-0 d-inline-flex">
                                <div class="col-auto align-self-center">
                                    <figure class="avatar avatar-28 rounded-circle coverimg align-middle">
                                        <img src="assets/img/modern-ai-image/user-6.jpg" alt="" id="userphotoonboarding2" />
                                    </figure>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end width-300 pt-0 px-0" aria-labelledby="userprofiledd">
                            <div class="bg-theme-1-space rounded py-3 mb-3 dropdown-dontclose">
                                <div class="row gx-0">
                                    <div class="col-auto px-3">
                                        <figure class="avatar avatar-50 rounded-circle coverimg align-middle">
                                            <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                        </figure>
                                    </div>
                                    <div class="col align-self-center ">
                                        <p class="mb-1"><span>AdminUIUX</span></p>
                                        <p><i class="bi bi-wallet2 me-2"></i> $1100.00 <small class="opacity-50">Balance</small></p>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2">
                                <div>
                                    <a class="dropdown-item" routerLink="/app/profile"><i class="bi bi-person avatar avatar-18 me-1"></i> My Profile</a>
                                </div>
                                <div>
                                    <a class="dropdown-item" routerLink="/app/dashboard">
                                        <div class="row g-0">
                                            <div class="col align-self-center">
                                                <i class="bi bi-grid avatar avatar-18 me-1"></i>
                                                My Dashboard
                                            </div>
                                            <div class="col-auto">
                                                <figure class="avatar avatar-20 coverimg rounded-circle">
                                                    <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
                                                </figure>
                                                <figure class="avatar avatar-20 coverimg rounded-circle">
                                                    <img src="assets/img/modern-ai-image/user-2.jpg" alt="" />
                                                </figure>
                                                <figure class="avatar avatar-20 coverimg rounded-circle">
                                                    <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                                                </figure>
                                                <div class="avatar avatar-20 bg-theme-1 rounded-circle text-center align-middle">
                                                    <small class="fs-10 align-middle">9+</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a class="dropdown-item" routerLink="/app/earning"> <i class="bi bi-cash-stack avatar avatar-18 me-1"></i> Earning </a>
                                </div>
                                <div>
                                    <a class="dropdown-item" routerLink="/app/mysubscription">
                                        <div class="row gx-3 gx-lg-4">
                                            <div class="col"><i class="bi bi-gift avatar avatar-18 me-1"></i> Subscription</div>
                                            <div class="col-auto">
                                                <p class="small text-success">Upgrade</p>
                                            </div>
                                            <div class="col-auto"><span class="arrow bi bi-chevron-right"></span></div>
                                        </div>
                                    </a>
                                </div>
                                <div class="dropdown open-left dropdown-dontclose">
                                    <a class="dropdown-item" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                        <div class="row gx-3 gx-lg-4">
                                            <div class="col"><i class="bi bi-translate avatar avatar-18 me-1"></i> Language</div>
                                            <div class="col-auto"><small class="vm">EN - English</small> <i class="bi bi-translate"></i></div>
                                            <div class="col-auto"><span class="arrow bi bi-chevron-right"></span></div>
                                        </div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <div><a class="dropdown-item active" data-value="EN">EN - English</a></div>
                                        <div><a class="dropdown-item" data-value="FR">FR - French</a></div>
                                        <div><a class="dropdown-item" data-value="CH">CH - Chinese</a></div>
                                        <div><a class="dropdown-item" data-value="HI">HI - Hindi</a></div>
                                    </div>
                                </div>
                                <div>
                                    <a class="dropdown-item" routerLink="/app/profile-settings"> <i class="bi bi-gear avatar avatar-18 me-1"></i> Account Setting </a>
                                </div>
                                <div>
                                    <a class="dropdown-item theme-red" (click)="logout()" style="cursor: pointer;"> <i class="bi bi-power avatar avatar-18 me-1"></i> Logout </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- search global wrap -->
        <div class="adminuiux-search-full">
            <div class="row gx-2 align-items-center">
                <div class="col-auto">
                    <!-- close global search toggle -->
                    <button class="btn btn-link btn-square " type="button" (click)="toggleSearch()">
                        <i class="bi bi-arrow-left"></i>
                    </button>
                </div>
                <div class="col">
                    <input class="form-control pe-0 border-0" type="search" placeholder="Type something here..." />
                </div>
                <div class="col-auto">
                    <!-- filter dropdown -->
                    <div class="dropdown input-group-text border-0 p-0">
                        <button class="dropdown-toggle btn btn-link btn-square no-caret" type="button" id="searchfilter2" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                            <i class="bi bi-sliders"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end width-300">
                            <ul class="nav adminuiux-nav" id="searchtab2" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="searchall-tab2" data-bs-toggle="tab" data-bs-target="#searchall2" type="button" role="tab" aria-controls="searchall2" aria-selected="true">All</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="searchorders-tab2" data-bs-toggle="tab" data-bs-target="#searchorders2" type="button" role="tab" aria-controls="searchorders2" aria-selected="false" tabindex="-1">Orders</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="searchcontacts-tab2" data-bs-toggle="tab" data-bs-target="#searchcontacts2" type="button" role="tab" aria-controls="searchcontacts2" aria-selected="false" tabindex="-1">Contacts</button>
                                </li>
                            </ul>
                            <div class="tab-content py-3" id="searchtabContent">
                                <div class="tab-pane fade active show" id="searchall2" role="tabpanel" aria-labelledby="searchall-tab2">
                                    <ul class="list-group adminuiux-list-group list-group-flush bg-none show">
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Search apps</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch1" />
                                                        <label class="form-check-label" for="searchswitch1"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Include Pages</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch2" checked="" />
                                                        <label class="form-check-label" for="searchswitch2"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Internet resource</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch3" checked="" />
                                                        <label class="form-check-label" for="searchswitch3"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">News and Blogs</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch4" />
                                                        <label class="form-check-label" for="searchswitch4"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="searchorders2" role="tabpanel" aria-labelledby="searchorders-tab2">
                                    <ul class="list-group adminuiux-list-group list-group-flush bg-none show">
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Show order ID</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch5" />
                                                        <label class="form-check-label" for="searchswitch5"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">International Order</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch6" checked="" />
                                                        <label class="form-check-label" for="searchswitch6"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Taxable Product</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch7" checked="" />
                                                        <label class="form-check-label" for="searchswitch7"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Published Product</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch8" />
                                                        <label class="form-check-label" for="searchswitch8"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="searchcontacts2" role="tabpanel" aria-labelledby="searchcontacts-tab2">
                                    <ul class="list-group adminuiux-list-group list-group-flush bg-none show">
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Have email ID</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch9" />
                                                        <label class="form-check-label" for="searchswitch9"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Have phone number</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch10" checked="" />
                                                        <label class="form-check-label" for="searchswitch10"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Photo available</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch11" checked="" />
                                                        <label class="form-check-label" for="searchswitch11"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item">
                                            <div class="row gx-3 gx-lg-4">
                                                <div class="col">Referral</div>
                                                <div class="col-auto">
                                                    <div class="form-check form-switch">
                                                        <input class="form-check-input" type="checkbox" role="switch" id="searchswitch12" />
                                                        <label class="form-check-label" for="searchswitch12"></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="">
                                <div class="row gx-3 gx-lg-4">
                                    <div class="col"><button class="btn btn-link">Reset</button></div>
                                    <div class="col-auto">
                                        <button class="btn btn-theme">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class MainHeaderComponent {
    htmlElement: any | null = null;
    buttonElement: any | null = null;

    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private authService: AuthService) {}

    ngOnInit() {
        this.openSidebar();

        // dark light mode initial
        this.htmlElement = this.document.querySelector("html");
        this.buttonElement = document.querySelector("#btn-layout-modes-dark-page");

        if (localStorage.getItem("layout-mode") === "dark") {
            this.renderer.addClass(this.buttonElement, "active");
            this.renderer.addClass(this.htmlElement, "dark-mode");
            this.renderer.removeClass(this.htmlElement, "dark-mode");
            this.renderer.setAttribute(this.htmlElement, "data-bs-theme", "dark");
        } else {
            this.renderer.removeClass(this.buttonElement, "active");
            this.renderer.removeClass(this.htmlElement, "dark-mode");
            this.renderer.addClass(this.htmlElement, "light-mode");
            this.renderer.setAttribute(this.htmlElement, "data-bs-theme", "light");
        }
    }
    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        this.openSidebar();
    }

    toggleSidebar() {
        const windowWidth = window.innerWidth;
        const body = document.body; // or use this.renderer.selectRootElement(document.body)

        if (windowWidth >= 992) {
            if (body.classList.contains("sidebar-close")) {
                this.renderer.removeClass(body, "sidebar-close");
                this.renderer.addClass(body, "sidebar-open");
            } else {
                this.renderer.removeClass(body, "sidebar-open");
                this.renderer.addClass(body, "sidebar-close");
            }
        } else {
            if (body.classList.contains("sidebar-close")) {
                this.renderer.removeClass(body, "sidebar-close");
                this.renderer.addClass(body, "sidebar-open");
            } else {
                this.renderer.removeClass(body, "sidebar-open");
                this.renderer.addClass(body, "sidebar-close");
            }
        }
    }

    openSidebar() {
        const windowWidth = window.innerWidth;
        const body = document.body;
        if (windowWidth >= 992) {
            this.renderer.addClass(body, "sidebar-open");
            this.renderer.removeClass(body, "sidebar-close");
        } else {
            this.renderer.addClass(body, "sidebar-close");
            this.renderer.removeClass(body, "sidebar-open");
        }
    }

    toggleDarkMode() {
        if (this.htmlElement && this.buttonElement) {
            if (this.buttonElement.classList.contains("active")) {
                this.renderer.removeClass(this.buttonElement, "active");
                this.renderer.removeClass(this.htmlElement, "dark-mode");
                this.renderer.addClass(this.htmlElement, "light-mode");
                this.renderer.setAttribute(this.htmlElement, "data-bs-theme", "light");
                localStorage.setItem("layout-mode", "light");
            } else {
                this.renderer.addClass(this.buttonElement, "active");
                this.renderer.removeClass(this.htmlElement, "light-mode");
                this.renderer.addClass(this.htmlElement, "dark-mode");
                this.renderer.setAttribute(this.htmlElement, "data-bs-theme", "dark");
                localStorage.setItem("layout-mode", "dark");
            }
        }
    }
    toggleSearch() {
        const searchEl = this.document.querySelector(".adminuiux-search-full");
        if (searchEl?.classList.contains("active")) {
            this.renderer.removeClass(searchEl, "active");
        } else {
            this.renderer.addClass(searchEl, "active");
        }
    }

    async logout() {
        try {
            await this.authService.logout();
        } catch (error) {
            console.error("Logout error:", error);
        }
    }
}
