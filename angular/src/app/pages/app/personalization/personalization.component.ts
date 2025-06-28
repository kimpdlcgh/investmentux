import { Component, Renderer2, Inject, ChangeDetectorRef } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
    selector: "app-personalization",
    standalone: true,
    imports: [],
    template: `
        <!-- breadcrumb  -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col-12 col-md">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Personalization</li>
                        </ol>
                    </nav>
                    <h5>Personalization</h5>
                </div>
                <div class="col-12 col-md-auto py-1">
                    <div class="row gx-1 align-items-center justify-content-center mb-3">
                        <div class="col-auto">
                            <div class="d-block text-center">
                                <span class="avatar avatar-30 rounded-circle bg-r-gradient border"> </span>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="d-block text-center">
                                <span class="avatar avatar-30 rounded-circle bg-theme-r-gradient"> </span>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="d-block text-center">
                                <span class="avatar avatar-30 rounded-circle bg-theme-accent-r-gradient"> </span>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="d-block text-center">
                                <span class="avatar avatar-30 rounded-circle bg-theme-l-gradient"> </span>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="d-block text-center">
                                <span class="avatar avatar-30 rounded-circle bg-theme-accent-l-gradient"> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- content -->
        <div class="container mt-3 mt-lg-4" id="main-content">
            <div class="row mb-4">
                <div class="col text-center">
                    <h2 class="mb-3">Do you love to see things around which you like the most?</h2>
                    <p class="text-secondary">Why not for your application? Let's personalize your application experience for user interface now.</p>
                </div>
            </div>

            <div class="accordion adminuiux-accordion" id="personalizeAccord">
                <div class="accordion-item mb-4">
                    <div class="accordion-header" id="personalizeAccordHOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#personalizeAccordOne" aria-expanded="true" aria-controls="personalizeAccordOne">
                            <span class="h6 fw-bold">Choose your desired and loved theme color</span>
                        </button>
                    </div>
                    <div id="personalizeAccordOne" class="accordion-collapse collapse show" aria-labelledby="personalizeAccordHOne" data-bs-parent="#personalizeAccord" style="">
                        <div class="accordion-body">
                            <p class="text-secondary">Theme colors in web design are pivotal as they influence user emotions, perceptions, and actions.Theme colors in web design are pivotal as they influence user emotions, perceptions, and actions.</p>
                            <div class="row theme-select">
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-default" (click)="selectTheme('theme-default', $event)">
                                            <i class="bi bi-arrow-clockwise"></i>
                                        </span>
                                        <p class="small">Default</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-blue" (click)="selectTheme('theme-blue', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-blue"></span>
                                        <p class="small">Blue</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-indigo" (click)="selectTheme('theme-indigo', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-indigo"></span>
                                        <p class="small">Indigo</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-purple" (click)="selectTheme('theme-purple', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-purple"></span>
                                        <p class="small">Purple</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-pink" (click)="selectTheme('theme-pink', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-pink"></span>
                                        <p class="small">Pink</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-red" (click)="selectTheme('theme-red', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-red"></span>
                                        <p class="small">Red</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-orange" (click)="selectTheme('theme-orange', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-orange"></span>
                                        <p class="small">Orange</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-yellow" (click)="selectTheme('theme-yellow', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-yellow"></span>
                                        <p class="small">Yellow</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-green" (click)="selectTheme('theme-green', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-green"></span>
                                        <p class="small">Green</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-teal" (click)="selectTheme('theme-teal', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-teal"></span>
                                        <p class="small">Teal</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-pista" (click)="selectTheme('theme-pista', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-pista"></span>
                                        <p class="small">Pista</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-cyan" (click)="selectTheme('theme-cyan', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-cyan"></span>
                                        <p class="small">Cyan</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-grey" (click)="selectTheme('theme-grey', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-grey"></span>
                                        <p class="small">Grey</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-brown" (click)="selectTheme('theme-brown', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-brown"></span>
                                        <p class="small">Brown</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-chocolate" (click)="selectTheme('theme-chocolate', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-chocolate"></span>
                                        <p class="small">Choco</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box text-center mb-2" data-title="theme-black" (click)="selectTheme('theme-black', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-dark"></span>
                                        <p class="small">Black</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mb-4">
                    <div class="accordion-header" id="personalizeAccordHTwo">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#personalizeAccordTwo" aria-expanded="true" aria-controls="personalizeAccordTwo">
                            <span class="h6 fw-bold">Background</span>
                        </button>
                    </div>
                    <div id="personalizeAccordTwo" class="accordion-collapse collapse show" aria-labelledby="personalizeAccordHTwo" data-bs-parent="#personalizeAccord" style="">
                        <div class="accordion-body">
                            <div class="row theme-background">
                                <div class="col-12 mb-3 mb-lg-4">
                                    <p class="text-secondary">None, white, bg-r-gradient, bg-gradient-1 to 10</p>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-default" (click)="selectBGradient('bg-default', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-default"><i class="bi bi-arrow-clockwise"></i></span>
                                        <p class="small">None</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-white" (click)="selectBGradient('bg-white', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-white"></span>
                                        <p class="small">White</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-r-gradient" (click)="selectBGradient('bg-r-gradient', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-r-gradient"></span>
                                        <p class="small">Theme</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-1" (click)="selectBGradient('bg-gradient-1', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-1"></span>
                                        <p class="small">Grad-1</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-2" (click)="selectBGradient('bg-gradient-2', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-2"></span>
                                        <p class="small">Grad-2</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-3" (click)="selectBGradient('bg-gradient-3', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-3"></span>
                                        <p class="small">Grad-3</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-4" (click)="selectBGradient('bg-gradient-4', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-4"></span>
                                        <p class="small">Grad-4</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-5" (click)="selectBGradient('bg-gradient-5', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-5"></span>
                                        <p class="small">Grad-5</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-6" (click)="selectBGradient('bg-gradient-6', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-6"></span>
                                        <p class="small">Grad-6</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-7" (click)="selectBGradient('bg-gradient-7', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-7"></span>
                                        <p class="small">Grad-7</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-8" (click)="selectBGradient('bg-gradient-8', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-8"></span>
                                        <p class="small">Grad-8</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-9" (click)="selectBGradient('bg-gradient-9', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-9"></span>
                                        <p class="small">Grad-9</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="gradient-box text-center mb-2" data-title="bg-gradient-10" (click)="selectBGradient('bg-gradient-10', $event)">
                                        <span class="avatar avatar-40 rounded-circle mb-2 bg-gradient-10"></span>
                                        <p class="small">Grad-10</p>
                                    </div>
                                </div>
                                <div class="col-12 mb-3 mb-lg-4">
                                    <p class="h6">Images</p>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" data-title="bg-none" (click)="selectBImage('', $event)">
                                        <span class="avatar avatar-40 rounded-circle ">
                                            <i class="bi bi-arrow-clockwise"></i>
                                        </span>
                                        <p class="small">None</p>
                                    </div>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-1.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-1.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 1</p>
                                    </div>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-2.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-2.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 2</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-2.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-3.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 3</p>
                                    </div>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-4.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-4.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 4</p>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-5.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-5.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 5</p>
                                    </div>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-7.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-7.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 6</p>
                                    </div>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-8.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-8.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 7</p>
                                    </div>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-9.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-9.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 8</p>
                                    </div>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-10.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-10.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 9</p>
                                    </div>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-11.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-11.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 10</p>
                                    </div>
                                </div>
                                <div class="col-auto mb-3">
                                    <div class="select-box bgimage-box text-center mb-2" (click)="selectBImage('assets/img/background-image/backgorund-image-12.jpg', $event)">
                                        <span class="avatar avatar-40 rounded-circle coverimg">
                                            <img src="assets/img/background-image/backgorund-image-12.jpg" alt="" class="w-100" />
                                        </span>
                                        <p class="small">Bg 11</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="accordion-item mb-4">
                            <div class="accordion-header" id="personalizeAccordHThree">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#personalizeAccordThree" aria-expanded="true" aria-controls="personalizeAccordThree">
                                    <span class="h6 fw-bold">Sidebar fill color</span>
                                </button>
                            </div>
                            <div id="personalizeAccordThree" class="accordion-collapse collapse show" aria-labelledby="personalizeAccordHThree" data-bs-parent="#personalizeAccord" style="">
                                <div class="accordion-body">
                                    <div class="row" id="personalise-preview-sidebar">
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-fill-none" (click)="selectSidebarFill('adminuiux-sidebar-fill-none', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-default">
                                                    <i class="bi bi-arrow-clockwise"></i>
                                                </span>
                                                <p class="small">None</p>
                                            </div>
                                        </div>
                                        <div class="col-auto" data-bs-img="dark">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-fill-white" (click)="selectSidebarFill('adminuiux-sidebar-fill-white', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-black"></span>
                                                <p class="small">Black</p>
                                            </div>
                                        </div>
                                        <div class="col-auto" data-bs-img="light">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-fill-white" (click)="selectSidebarFill('adminuiux-sidebar-fill-white', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-white"></span>
                                                <p class="small">White</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-fill-bg" (click)="selectSidebarFill('adminuiux-sidebar-fill-bg', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-body-1"></span>
                                                <p class="small">Background</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-fill-theme" (click)="selectSidebarFill('adminuiux-sidebar-fill-theme', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-theme-1"></span>
                                                <p class="small">Theme</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-fill-accent" (click)="selectSidebarFill('adminuiux-sidebar-fill-accent', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-theme-accent-1"></span>
                                                <p class="small">Accent</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <div class="accordion-header" id="personalizeAccordHFive">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#personalizeAccordFive" aria-expanded="true" aria-controls="personalizeAccordFive">
                                    <span class="h6 fw-bold">Sidebar layout</span>
                                </button>
                            </div>
                            <div id="personalizeAccordFive" class="accordion-collapse collapse show" aria-labelledby="personalizeAccordHFive" data-bs-parent="#personalizeAccord" style="">
                                <div class="accordion-body">
                                    <div class="row sidebar-layout">
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-standard" (click)="selectSidebarStyle('adminuiux-sidebar-standard', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-default">
                                                    <i class="bi bi-arrow-clockwise"></i>
                                                </span>
                                                <p class="small">Standard</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-iconic" (click)="selectSidebarStyle('adminuiux-sidebar-iconic', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-default">
                                                    <i class="bi bi-bezier h4"></i>
                                                </span>
                                                <p class="small">Iconic</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-boxed" (click)="selectSidebarStyle('adminuiux-sidebar-boxed', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-default">
                                                    <i class="bi bi-box h5"></i>
                                                </span>
                                                <p class="small">Boxed</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-sidebar-boxed adminuiux-sidebar-iconic" (click)="selectSidebarStyle('adminuiux-sidebar-boxed adminuiux-sidebar-iconic', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-default">
                                                    <i class="bi bi-bounding-box h5"></i>
                                                </span>
                                                <p class="small">IconicBox</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="accordion-item mb-4">
                            <div class="accordion-header" id="personalizeAccordHFour">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#personalizeAccordFour" aria-expanded="true" aria-controls="personalizeAccordFour">
                                    <span class="h6 fw-bold">Header fill color</span>
                                </button>
                            </div>
                            <div id="personalizeAccordFour" class="accordion-collapse collapse show" aria-labelledby="personalizeAccordHFour" data-bs-parent="#personalizeAccord" style="">
                                <div class="accordion-body">
                                    <div class="row" id="personalise-preview-header">
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-header-transparent" (click)="selectHeaderFill('adminuiux-header-transparent', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-default">
                                                    <i class="bi bi-arrow-clockwise"></i>
                                                </span>
                                                <p class="small">None</p>
                                            </div>
                                        </div>
                                        <div class="col-auto" data-bs-img="dark">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-header-fill-white" (click)="selectHeaderFill('adminuiux-header-white', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-black"></span>
                                                <p class="small">Black</p>
                                            </div>
                                        </div>
                                        <div class="col-auto" data-bs-img="light">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-header-fill-white" (click)="selectHeaderFill('adminuiux-header-fill-white', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-white"></span>
                                                <p class="small">White</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-header-fill-bg" (click)="selectHeaderFill('adminuiux-header-fill-bg', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-body-1"></span>
                                                <p class="small">Background</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-header-fill-theme" (click)="selectHeaderFill('adminuiux-header-fill-theme', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-theme-1"></span>
                                                <p class="small">Theme</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-header-fill-accent" (click)="selectHeaderFill('adminuiux-header-accent', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-theme-accent-1"></span>
                                                <p class="small">Accent</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4">
                            <div class="accordion-header" id="personalizeAccordHSix">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#personalizeAccordSix" aria-expanded="true" aria-controls="personalizeAccordSix">
                                    <span class="h6 fw-bold">Header layout</span>
                                </button>
                            </div>
                            <div id="personalizeAccordSix" class="accordion-collapse collapse show" aria-labelledby="personalizeAccordHSix" data-bs-parent="#personalizeAccord" style="">
                                <div class="accordion-body">
                                    <div class="row" id="header-layout">
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-header-standard" (click)="selectHeaderStyle('adminuiux-header-standard', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-default">
                                                    <i class="bi bi-arrow-clockwise"></i>
                                                </span>
                                                <p class="small">None</p>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="select-box text-center mb-2" data-title="adminuiux-header-boxed" (click)="selectHeaderStyle('adminuiux-header-boxed', $event)">
                                                <span class="avatar avatar-40 rounded-circle mb-2 bg-default">
                                                    <i class="bi bi-box h5"></i>
                                                </span>
                                                <p class="small">Boxed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card adminuiux-card mb-4">
                        <div class="card-header">
                            <h6>Change layout color mode</h6>
                        </div>
                        <div class="card-body">
                            <p class="text-secondary">Light mode Preferred in well-lit conditions for better readability and can be more accessible to users with certain visual impairments. Dark mode reduces glare and can help with reducing eye strain in low-light conditions.</p>
                        </div>
                        <div class="card-footer">
                            <!-- light-dark layout -->
                            <div class="row align-items-center no-rtl">
                                <div class="col-auto ">Light</div>
                                <div class="col-auto px-0">
                                    <div class="form-check form-switch sunmoon">
                                        <input class="form-check-input" type="checkbox" role="switch" id="darkModeToggle" (change)="toggleDarkMode($event)" />
                                        <label class="form-check-label" for="darkModeToggle">
                                            <i class="bi bi-brightness-low sun"></i>
                                            <i class="bi bi-moon-stars moon"></i>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-auto">Dark</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="card adminuiux-card mb-4">
                        <div class="card-header">
                            <h6>Change layout text direction mode</h6>
                        </div>
                        <div class="card-body">
                            <p class="text-secondary">RTL (Right-to-Left) layout mode is essential for languages that are read from right to left, such as Arabic, Hebrew, and Persian. Elements like headings, paragraphs, links, images, and form elements should be auto-adjusted to rtl</p>
                        </div>
                        <div class="card-footer">
                            <!-- rtl -->
                            <div class="row align-items-center no-rtl">
                                <!-- avoid rtl direction in some cases when rtl selected by adding "no-rtl" class -->
                                <div class="col-auto ">LTR</div>
                                <div class="col-auto px-0">
                                    <div class="form-check form-switch rtlcheck">
                                        <input class="form-check-input" type="checkbox" role="switch" id="dirModeCheckbox" (change)="toggleDirMode($event)" />
                                        <label class="form-check-label" for="dirModeCheckbox">
                                            <i class="bi bi-justify-left ltrjustify"></i>
                                            <i class="bi bi-justify-right rtljustify"></i>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-auto">RTL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class PersonalizationComponent {
    // dark mode
    htmlElement: any;

    // theme color
    appliedTheme: string | null = null;
    currentTheme: string | null = null;

    // background gradient color
    appliedbgGrad: string | null = null;
    currentbgGrad: string | null = null;

    // background image color
    appliedbgImage: string | null = null;
    currentbgImage: string | null = null;

    // sidebar style set
    appliedSidebarStyle: string | null = null;
    currentSidebarStyle: string | null = null;

    // sidebar fill color set
    appliedSidebarColor: string | null = null;
    currentSidebarColor: string | null = null;

    // header style set
    appliedHeaderStyle: string | null = null;
    currentHeaderStyle: string | null = null;

    // header fill color set
    appliedHeaderColor: string | null = null;
    currentHeaderColor: string | null = null;

    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        // theme color set
        this.appliedTheme = localStorage.getItem("data-theme");
        this.currentTheme = this.document.body.getAttribute("data-theme");

        if (this.appliedTheme && this.currentTheme) {
            this.renderer.removeClass(this.document.body, this.currentTheme);
            this.renderer.addClass(this.document.body, this.appliedTheme);
            this.document.body.setAttribute("data-theme", this.appliedTheme);

            const activeThemeEle = this.document.querySelector(`[data-title="${this.appliedTheme}"]`);
            this.renderer.addClass(activeThemeEle, "active");
        }

        // background Gradient color set
        this.appliedbgGrad = localStorage.getItem("data-bggradient");
        this.currentbgGrad = this.document.body.getAttribute("data-bggradient");

        if (this.appliedbgGrad && this.currentbgGrad) {
            this.renderer.removeClass(this.document.body, this.currentbgGrad);
            this.renderer.addClass(this.document.body, this.appliedbgGrad);
            this.document.body.setAttribute("data-bggradient", this.appliedbgGrad);

            const activebgGradEle = this.document.querySelector(`[data-title="${this.appliedbgGrad}"]`);
            this.renderer.addClass(activebgGradEle, "active");
        }

        // background image set
        this.appliedbgImage = localStorage.getItem("data-bgimage");
        if (this.appliedbgImage) {
            this.document.body.style.setProperty("--adminuiux-main-bg", `url('${this.appliedbgImage}')`);
            const activebgImageEle = this.document.querySelector(`[src="${this.appliedbgImage}"]`);
            this.renderer.addClass(activebgImageEle, "active");
        }

        // sidebar style set
        this.appliedSidebarStyle = localStorage.getItem("data-sidebarlayout");
        this.currentSidebarStyle = this.document.body.getAttribute("data-sidebarlayout");

        if (this.appliedSidebarStyle && this.currentSidebarStyle) {
            const sidebarClassesCurrent = this.currentSidebarStyle.split(" ");
            sidebarClassesCurrent.forEach((sidebarClassCurrent) => {
                if (sidebarClassCurrent) {
                    // Check for empty strings
                    this.renderer.addClass(this.document.body, sidebarClassCurrent);
                }
            });

            const sidebarClasses = this.appliedSidebarStyle.split(" ");
            sidebarClasses.forEach((sidebarClass) => {
                if (sidebarClass) {
                    // Check for empty strings
                    this.renderer.addClass(this.document.body, sidebarClass);
                }
            });
            this.document.body.setAttribute("data-sidebarlayout", this.appliedSidebarStyle);

            const activeSidebarEle = this.document.querySelector(`[data-title="${this.appliedSidebarStyle}"]`);
            this.renderer.addClass(activeSidebarEle, "active");
        }

        // sidebar color set
        this.appliedSidebarColor = localStorage.getItem("data-sidebarfill");
        this.currentSidebarColor = this.document.body.getAttribute("data-sidebarfill");

        if (this.appliedSidebarColor && this.currentSidebarColor) {
            this.renderer.removeClass(this.document.body, this.currentSidebarColor);
            this.renderer.addClass(this.document.body, this.appliedSidebarColor);
            this.document.body.setAttribute("data-sidebarfill", this.appliedSidebarColor);

            const activeSidebarColorEle = this.document.querySelector(`[data-title="${this.appliedSidebarColor}"]`);
            // this.renderer.addClass(activeSidebarColorEle, "active");
        }

        // header style set
        this.appliedHeaderStyle = localStorage.getItem("data-headerlayout");
        this.currentHeaderStyle = this.document.body.getAttribute("data-headerlayout");

        if (this.appliedHeaderStyle && this.currentHeaderStyle) {
            const headerClassesCurrent = this.currentHeaderStyle.split(" ");
            headerClassesCurrent.forEach((headerClassCurrent) => {
                if (headerClassCurrent) {
                    // Check for empty strings
                    this.renderer.addClass(this.document.body, headerClassCurrent);
                }
            });

            const headerClasses = this.appliedHeaderStyle.split(" ");
            headerClasses.forEach((headerClass) => {
                if (headerClass) {
                    // Check for empty strings
                    this.renderer.addClass(this.document.body, headerClass);
                }
            });
            this.document.body.setAttribute("data-sidebarlayout", this.appliedHeaderStyle);

            const activeHeaderEle = this.document.querySelector(`[data-title="${this.appliedHeaderStyle}"]`);
            this.renderer.addClass(activeHeaderEle, "active");
        }

        // header color set
        this.appliedHeaderColor = localStorage.getItem("data-headerfill");
        this.currentHeaderColor = this.document.body.getAttribute("data-headerfill");

        if (this.appliedHeaderColor && this.currentHeaderColor) {
            this.renderer.removeClass(this.document.body, this.currentHeaderColor);
            this.renderer.addClass(this.document.body, this.appliedHeaderColor);
            this.document.body.setAttribute("data-headerfill", this.appliedHeaderColor);

            const activeHeaderColorEle = this.document.querySelector(`[data-title="${this.appliedHeaderColor}"]`);
            // this.renderer.addClass(activeHeaderColorEle, "active");
        }
    }

    ngAfterViewInit() {
        // dark mode event
        this.htmlElement = document.querySelector("html");
        const savedMode = localStorage.getItem("layout-mode");
        const checkboxDarkMode = document.querySelector("#darkModeToggle");
        if (savedMode === "dark") {
            this.renderer.addClass(this.htmlElement, "dark-mode");
            this.renderer.setAttribute(this.htmlElement, "data-bs-theme", "dark");
            if (checkboxDarkMode) {
                this.renderer.setProperty(checkboxDarkMode, "checked", true);
            }
        } else {
            this.renderer.addClass(this.htmlElement, "light-mode");
            this.renderer.setAttribute(this.htmlElement, "data-bs-theme", "light");
            if (checkboxDarkMode) {
                this.renderer.setProperty(checkboxDarkMode, "checked", false);
            }
        }

        // left right readoing mode event
        const dirMode = localStorage.getItem("direction-mode");
        const checkboxDirMode = document.querySelector("#dirModeCheckbox");
        if (dirMode === "rtl") {
            this.renderer.addClass(this.htmlElement, "rtl");
            this.renderer.setAttribute(this.htmlElement, "dir", "rtl");
            if (checkboxDirMode) {
                this.renderer.setProperty(checkboxDirMode, "checked", true);
            }
        } else {
            this.renderer.addClass(this.htmlElement, "ltr");
            this.renderer.setAttribute(this.htmlElement, "dir", "ltr");
            if (checkboxDirMode) {
                this.renderer.setProperty(checkboxDirMode, "checked", false);
            }
        }
    }

    // theme color set
    selectTheme(theme: string, event: MouseEvent) {
        const body = this.document.body;

        // remove previous class
        if (this.currentTheme) {
            this.renderer.removeClass(body, this.currentTheme);
        }
        if (this.appliedTheme) {
            this.renderer.removeClass(body, this.appliedTheme);
            this.appliedTheme = theme;
        } else {
            this.appliedTheme = theme;
        }

        // Add the new theme class
        this.renderer.addClass(body, theme);
        this.renderer.setAttribute(body, "data-theme", theme);

        // set theme as local storage
        localStorage.setItem("data-theme", theme);

        // remove active class from other themes
        if (event.currentTarget) {
            const target = event.currentTarget as HTMLElement;
            const selectBoxes = this.document.querySelectorAll(".select-box");

            selectBoxes.forEach((box) => {
                if (box !== event.currentTarget) {
                    this.renderer.removeClass(box, "active");
                }
            });
            this.renderer.addClass(target, "active");
        }
    }

    // background color set
    selectBGradient(bgGrad: string, event: MouseEvent) {
        const body = this.document.body;
        // remove previous class
        if (this.currentbgGrad) {
            this.renderer.removeClass(body, this.currentbgGrad);
        }

        if (this.appliedbgGrad) {
            this.renderer.removeClass(body, this.appliedbgGrad);
            this.appliedbgGrad = bgGrad;
        } else {
            this.appliedbgGrad = bgGrad;
        }

        // Add the new theme class
        this.renderer.addClass(body, bgGrad);
        this.renderer.setAttribute(body, "data-bggradient", bgGrad);

        // set theme as local storage
        localStorage.setItem("data-bggradient", bgGrad);

        // remove active class from other themes
        if (event.currentTarget) {
            const targetBg = event.currentTarget as HTMLElement;
            const selectBoxes = this.document.querySelectorAll(".gradient-box");

            selectBoxes.forEach((boxBg) => {
                if (boxBg !== event.currentTarget) {
                    this.renderer.removeClass(boxBg, "active");
                }
            });
            this.renderer.addClass(targetBg, "active");
        }
    }

    // background image set
    selectBImage(bgImage: string, event: MouseEvent) {
        const body = this.document.body;
        body.style.setProperty("--adminuiux-main-bg", `url('${bgImage}')`);

        // set image as local storage
        localStorage.setItem("data-bgimage", bgImage);

        // remove active class from other images active
        if (event.currentTarget) {
            const targetBg = event.currentTarget as HTMLElement;
            const selectBoxes = this.document.querySelectorAll(".bgimage-box");

            selectBoxes.forEach((boxBgImage) => {
                if (boxBgImage !== event.currentTarget) {
                    this.renderer.removeClass(boxBgImage, "active");
                }
            });
            this.renderer.addClass(targetBg, "active");
        }
    }

    // sidebar style set
    selectSidebarStyle(sidebarStyle: string, event: MouseEvent) {
        const body = this.document.body;
        // remove previous class
        if (this.currentSidebarStyle) {
            const sidebarClassesCurrent = this.currentSidebarStyle.split(" ");
            sidebarClassesCurrent.forEach((sidebarClassCurrent) => {
                if (sidebarClassCurrent) {
                    // Check for empty strings
                    this.renderer.removeClass(this.document.body, sidebarClassCurrent);
                }
            });
        }

        if (this.appliedSidebarStyle) {
            const sidebarClassesApplied = this.appliedSidebarStyle.split(" ");
            sidebarClassesApplied.forEach((sidebarClass) => {
                if (sidebarClass) {
                    // Check for empty strings
                    this.renderer.removeClass(this.document.body, sidebarClass);
                }
            });
            this.appliedSidebarStyle = sidebarStyle;
        } else {
            this.appliedSidebarStyle = sidebarStyle;
        }

        // Add the new theme class
        const sidebarClasses = sidebarStyle.split(" ");
        sidebarClasses.forEach((sidebarClass) => {
            if (sidebarClass) {
                // Check for empty strings
                this.renderer.addClass(body, sidebarClass);
            }
        });
        this.renderer.setAttribute(body, "data-sidebarlayout", sidebarStyle);

        // set theme as local storage
        localStorage.setItem("data-sidebarlayout", sidebarStyle);

        // remove active class from other themes
        if (event.currentTarget) {
            const targetSidebarStyle = event.currentTarget as HTMLElement;
            const selectSidebarBoxes = this.document.querySelectorAll(".select-box");

            selectSidebarBoxes.forEach((SidebarBox) => {
                if (SidebarBox !== event.currentTarget) {
                    this.renderer.removeClass(SidebarBox, "active");
                }
            });
            this.renderer.addClass(targetSidebarStyle, "active");
        }
    }

    // sidebar fill color set
    selectSidebarFill(sidebarColor: string, event: MouseEvent) {
        const body = this.document.body;

        // remove previous class
        if (this.currentSidebarColor) {
            this.renderer.removeClass(body, this.currentSidebarColor);
        }
        if (this.appliedSidebarColor) {
            this.renderer.removeClass(body, this.appliedSidebarColor);
            this.appliedSidebarColor = sidebarColor;
        } else {
            this.appliedSidebarColor = sidebarColor;
        }

        // Add the new theme class
        this.renderer.addClass(body, sidebarColor);
        this.renderer.setAttribute(body, "data-sidebarfill", sidebarColor);

        // set theme as local storage
        localStorage.setItem("data-sidebarfill", sidebarColor);

        // remove active class from other themes
        if (event.currentTarget) {
            const target = event.currentTarget as HTMLElement;
            const selectBoxes = this.document.querySelectorAll(".select-box");

            selectBoxes.forEach((box) => {
                if (box !== event.currentTarget) {
                    this.renderer.removeClass(box, "active");
                }
            });
            this.renderer.addClass(target, "active");
        }
    }

    // header style set
    selectHeaderStyle(headerStyle: string, event: MouseEvent) {
        const body = this.document.body;
        // remove previous class
        if (this.currentHeaderStyle) {
            const headerClassesCurrent = this.currentHeaderStyle.split(" ");
            headerClassesCurrent.forEach((headerClassCurrent) => {
                if (headerClassCurrent) {
                    // Check for empty strings
                    this.renderer.removeClass(this.document.body, headerClassCurrent);
                }
            });
        }

        if (this.appliedHeaderStyle) {
            const headerClassesApplied = this.appliedHeaderStyle.split(" ");
            headerClassesApplied.forEach((headerClass) => {
                if (headerClass) {
                    this.renderer.removeClass(this.document.body, headerClass);
                }
            });
            this.appliedHeaderStyle = headerStyle;
        } else {
            this.appliedHeaderStyle = headerStyle;
        }

        // Add the new header style class
        const headerClasses = headerStyle.split(" ");
        headerClasses.forEach((headerClass) => {
            console.log(headerClass);
            if (headerClass) {
                // Check for empty strings
                this.renderer.addClass(body, headerClass);
            }
        });
        this.renderer.setAttribute(body, "data-headerlayout", headerStyle);

        // set header style  as local storage
        localStorage.setItem("data-headerlayout", headerStyle);

        // remove active class from other header style
        if (event.currentTarget) {
            const targetHeaderStyle = event.currentTarget as HTMLElement;
            const selectHeaderBoxes = this.document.querySelectorAll(".select-box");

            selectHeaderBoxes.forEach((HeaderBox) => {
                if (HeaderBox !== event.currentTarget) {
                    this.renderer.removeClass(HeaderBox, "active");
                }
            });
            this.renderer.addClass(targetHeaderStyle, "active");
        }
    }

    // header fill color set
    selectHeaderFill(headerColor: string, event: MouseEvent) {
        const body = this.document.body;

        // remove previous class
        if (this.currentHeaderColor) {
            this.renderer.removeClass(body, this.currentHeaderColor);
        }
        if (this.appliedHeaderColor) {
            this.renderer.removeClass(body, this.appliedHeaderColor);
            this.appliedHeaderColor = headerColor;
        } else {
            this.appliedHeaderColor = headerColor;
        }

        // Add the new theme class
        this.renderer.addClass(body, headerColor);
        this.renderer.setAttribute(body, "data-headerfill", headerColor);

        // set theme as local storage
        localStorage.setItem("data-headerfill", headerColor);

        // remove active class from other themes
        if (event.currentTarget) {
            const target = event.currentTarget as HTMLElement;
            const selectBoxes = this.document.querySelectorAll(".select-box");

            selectBoxes.forEach((box) => {
                if (box !== event.currentTarget) {
                    this.renderer.removeClass(box, "active");
                }
            });
            this.renderer.addClass(target, "active");
        }
    }

    // light and dark modes
    toggleDarkMode(event: Event) {
        const target = event.target as HTMLInputElement;

        if (this.htmlElement) {
            if (target.checked) {
                this.renderer.removeClass(this.htmlElement, "light-mode");
                this.renderer.addClass(this.htmlElement, "dark-mode");
                this.renderer.setAttribute(this.htmlElement, "data-bs-theme", "dark");
                localStorage.setItem("layout-mode", "dark");
            } else {
                this.renderer.removeClass(this.htmlElement, "dark-mode");
                this.renderer.addClass(this.htmlElement, "light-mode");
                this.renderer.setAttribute(this.htmlElement, "data-bs-theme", "light");
                localStorage.setItem("layout-mode", "light");
            }
        }
    }
    // ltr and rtl modes
    toggleDirMode(event: Event) {
        const target = event.target as HTMLInputElement;

        if (this.htmlElement) {
            if (target.checked) {
                this.renderer.addClass(this.htmlElement, "rtl");
                this.renderer.removeClass(this.htmlElement, "ltr");
                this.renderer.setAttribute(this.htmlElement, "dir", "rtl");
                localStorage.setItem("direction-mode", "rtl");
            } else {
                this.renderer.addClass(this.htmlElement, "ltr");
                this.renderer.removeClass(this.htmlElement, "rtl");
                this.renderer.setAttribute(this.htmlElement, "dir", "ltr");
                localStorage.setItem("direction-mode", "ltr");
            }
        }
    }
}
