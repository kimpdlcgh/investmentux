import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();

@Component({
    selector: "app-blogs",
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
                            <li class="breadcrumb-item active bi" aria-current="page">Blog</li>
                        </ol>
                    </nav>
                    <h5>Blog</h5>
                </div>
                <div class="col-auto">
                    <a routerLink="/app/add-blog" class="btn btn-theme">
                        <i class="bi bi-file-earmark-plus me-1"></i>
                        <span>Post</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <div class="position-relative">
                <!-- Welcome banner carousel-->
                <swiper-container slides-per-view="auto" space-between="0" autoplay="true" pagination="true" class="swiper mb-2">
                    <swiper-slide class="swiper-slide mb-2">
                        <div class="card adminuiux-card bg-theme-1 position-relative overflow-hidden mb-3">
                            <div class="coverimg h-100 w-100 start-0 top-0 position-absolute z-index-0 opacity-50">
                                <img src="assets/img/modern-ai-image/modern-bg-1.jpg" alt="" />
                            </div>
                            <div class="card-body z-index-1 p-lg-4 p-xl-5 position-relative">
                                <p><span class="badge badge-sm badge-light rounded-pill bg-pink text-white">Investment Revolution</span></p>
                                <h2 class="fw-medium">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</h2>
                                <p class="small my-3">Connects and integrates all your appointment sources - Website, Leads, Mobile, and reception desk. Everything is in a central appointment management software! Set up appointments for your patients in the most effective way and manage record of patient, set reminder, sent messages etc. with the help of the Investment and Financial Freedom Software App.</p>
                                <p><a routerLink="/app/blog-details" class="btn btn-sm btn-accent">Continue reading...</a></p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide mb-2">
                        <div class="card adminuiux-card mb-3 mb-lg-4">
                            <div class="card-body p-lg-4 p-xl-5">
                                <p><span class="badge badge-sm badge-light rounded-pill text-bg-theme-accent-1">Investment Revolution</span></p>
                                <h2 class="fw-medium">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</h2>
                                <p class="small my-3">Connects and integrates all your appointment sources - Website, Leads, Mobile, and reception desk. Everything is in a central appointment management software! Set up appointments for your patients in the most effective way and manage record of patient, set reminder, sent messages etc. with the help of the Investment and Financial Freedom Software App.</p>
                                <p><a routerLink="/app/blog-details" class="btn btn-sm btn-accent">Continue reading...</a></p>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="swiper-slide mb-2">
                        <div class="card adminuiux-card position-relative bg-theme-1 overflow-hidden mb-4">
                            <div class="coverimg h-100 w-100 start-0 top-0 position-absolute z-index-0 opacity-50">
                                <img src="assets/img/modern-ai-image/user-6-kid.jpg" alt="" />
                            </div>
                            <div class="card-body z-index-1 p-lg-4 p-xl-5 position-relative">
                                <p><span class="badge badge-sm badge-light rounded-pill bg-pink text-white">Investment Revolution</span></p>
                                <h2 class="fw-medium">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</h2>
                                <p class="small my-3">Connects and integrates all your appointment sources - Website, Leads, Mobile, and reception desk. Everything is in a central appointment management software! Set up appointments for your patients in the most effective way and manage record of patient, set reminder, sent messages etc. with the help of the Investment and Financial Freedom Software App.</p>
                                <p><a routerLink="/app/blog-details" class="btn btn-sm btn-accent">Continue reading...</a></p>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper-container>
                <div class="swiper-pagination swiper-pagination-1 bottom-0"></div>
            </div>
            <!-- Featured -->
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-6">
                    <div class="card adminuiux-card overflow-hidden mb-3">
                        <div class="row position-relative">
                            <div class="col-12 col-sm-8 order-2 order-sm-1 d-flex flex-column position-static">
                                <div class="card-body">
                                    <p>
                                        <span class="badge badge-sm badge-light rounded-pill bg-blue-subtle text-blue-emphasis">World</span>
                                        <span class="badge badge-sm badge-light rounded-pill bg-yellow-subtle text-yellow-emphasis">Featured</span>
                                    </p>
                                    <p class="h5">Best of Technology</p>
                                    <p class="small text-secondary">Nov 12 2024</p>
                                    <p class="text-secondary small">Now a days AI takes over everywhere in each field to improve productivity and performance but human mind squeezing day by day</p>
                                    <a routerLink="/app/blog-details" class="">Read more <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4 order-1 order-sm-2 d-lg-block position-relative miheight-150">
                                <div class="coverimg h-100 w-100 start-0 top-0 position-absolute z-index-0 ">
                                    <img src="assets/img/modern-ai-image/pet-3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="card adminuiux-card overflow-hidden mb-3">
                        <div class="row position-relative">
                            <div class="col-12 col-sm-8 order-2 order-sm-1 d-flex flex-column position-static">
                                <div class="card-body">
                                    <p>
                                        <span class="badge badge-sm badge-light rounded-pill bg-pink-subtle text-pink-emphasis">Cutest things</span>
                                        <span class="badge badge-sm badge-light rounded-pill bg-yellow-subtle text-yellow-emphasis">Featured</span>
                                    </p>
                                    <p class="h5">Best of Technology</p>
                                    <p class="small text-secondary">Nov 12 2024</p>
                                    <p class="text-secondary small">Now a days AI takes over everywhere in each field to improve productivity and performance but human mind squeezing day by day</p>
                                    <a routerLink="/app/blog-details" class="">Read more <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4 order-1 order-sm-2 d-lg-block position-relative miheight-150">
                                <div class="coverimg h-100 w-100 start-0 top-0 position-absolute z-index-0 ">
                                    <img src="assets/img/modern-ai-image/user-5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- blog list -->
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-8">
                    <div class="card adminuiux-card overflow-hidden mb-3">
                        <div class="card-body">
                            <div class="coverimg miheight-200 w-100 rounded mb-3">
                                <img src="assets/img/modern-ai-image/bus-2.jpg" alt="" />
                            </div>
                            <p>
                                <span class="badge badge-sm badge-light rounded-pill bg-blue-subtle text-blue-emphasis">World</span>
                                <span class="badge badge-sm badge-light rounded-pill bg-yellow-subtle text-yellow-emphasis">Featured</span>
                            </p>
                            <p class="h4">The great debate start when the rule ends at zero gravity</p>
                            <p class="small text-secondary">Nov 12 2024</p>
                            <p class="text-secondary small">Now a days AI takes over everywhere in each field to improve productivity and performance but human mind squeezing day by day</p>
                            <a routerLink="/app/blog-details" class="btn btn-sm btn-theme"> Read more <i class="bi bi-arrow-right"></i> </a>
                        </div>
                    </div>
                    <div class="card adminuiux-card overflow-hidden mb-3">
                        <div class="card-body">
                            <div class="coverimg miheight-200 w-100 rounded mb-3">
                                <img src="assets/img/modern-ai-image/taxi-1.jpg" alt="" />
                            </div>
                            <p>
                                <span class="badge badge-sm badge-light rounded-pill bg-blue-subtle text-blue-emphasis">World</span>
                                <span class="badge badge-sm badge-light rounded-pill bg-yellow-subtle text-yellow-emphasis">Featured</span>
                            </p>
                            <p class="h4">The great debate start when the rule ends at zero gravity</p>
                            <p class="small text-secondary">Nov 12 2024</p>
                            <p class="text-secondary small">Now a days AI takes over everywhere in each field to improve productivity and performance but human mind squeezing day by day</p>
                            <a routerLink="/app/blog-details" class="btn btn-sm btn-theme"> Read more <i class="bi bi-arrow-right"></i> </a>
                        </div>
                    </div>
                    <div class="card adminuiux-card overflow-hidden mb-3">
                        <div class="card-body">
                            <div class="coverimg miheight-200 w-100 rounded mb-3">
                                <img src="assets/img/modern-ai-image/tree-20.jpg" alt="" />
                            </div>
                            <p>
                                <span class="badge badge-sm badge-light rounded-pill bg-blue-subtle text-blue-emphasis">World</span>
                                <span class="badge badge-sm badge-light rounded-pill bg-yellow-subtle text-yellow-emphasis">Featured</span>
                            </p>
                            <p class="h4">The great debate start when the rule ends at zero gravity</p>
                            <p class="small text-secondary">Nov 12 2024</p>
                            <p class="text-secondary small">Now a days AI takes over everywhere in each field to improve productivity and performance but human mind squeezing day by day</p>
                            <a routerLink="/app/blog-details" class="btn btn-sm btn-theme"> Read more <i class="bi bi-arrow-right"></i> </a>
                        </div>
                    </div>
                    <div class="card adminuiux-card overflow-hidden mb-3">
                        <div class="card-body">
                            <div class="coverimg miheight-200 w-100 rounded mb-3">
                                <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
                            </div>
                            <p>
                                <span class="badge badge-sm badge-light rounded-pill bg-blue-subtle text-blue-emphasis">World</span>
                                <span class="badge badge-sm badge-light rounded-pill bg-yellow-subtle text-yellow-emphasis">Featured</span>
                            </p>
                            <p class="h4">The great debate start when the rule ends at zero gravity</p>
                            <p class="small text-secondary">Nov 12 2024</p>
                            <p class="text-secondary small">Now a days AI takes over everywhere in each field to improve productivity and performance but human mind squeezing day by day</p>
                            <a routerLink="/app/blog-details" class="btn btn-sm btn-theme"> Read more <i class="bi bi-arrow-right"></i> </a>
                        </div>
                    </div>
                    <div class="text-center mb-3">
                        <button class="btn btn-link">
                            <span class="spinner-border spinner-border-sm me-2" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </span>
                            Load more...
                        </button>
                    </div>
                </div>

                <div class="col-12 col-md-4">
                    <div class="position-sticky" style="top: 5.5rem;">
                        <div class="card adminuiux-card mb-3 mb-lg-4">
                            <div class="card-body">
                                <h5 class="mb-3">About</h5>
                                <p class="text-secondary small">AdminUIUX is way better than any other template design in terms of user experience design and modern touch of experience design sense. More flexibility and customization available at with easy to develope</p>
                            </div>
                        </div>

                        <h6 class="mb-3">Recent posts</h6>
                        <ul class="list-unstyled mb-3">
                            <li class="pb-3">
                                <a class="style-none" href="javascript:void(0)">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-80 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/modern-bg-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col" style="max-width: calc(100% - 110px);">
                                            <h6 class="text-dark text-truncated mb-1">Amazing UI UX design for industries standard to improve accessibility</h6>
                                            <p class="text-dark text-truncated mb-2">Just feeling like another world exploring at</p>
                                            <p class="text-secondary small">December 15, 2024</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="pb-3">
                                <a class="style-none" href="javascript:void(0)">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-80 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/tree-18.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col" style="max-width: calc(100% - 110px);">
                                            <h6 class="text-dark text-truncated mb-1">I love the UI design and content flexibility provided by template</h6>
                                            <p class="text-dark text-truncated mb-2">Just feeling like another world exploring at</p>
                                            <p class="text-secondary small">August 27, 2024</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="pb-3">
                                <a class="style-none" href="javascript:void(0)">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-80 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/bus-7.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col" style="max-width: calc(100% - 110px);">
                                            <h6 class="text-dark text-truncated mb-1">More you see more you will get amazed with template interface design</h6>
                                            <p class="text-dark text-truncated mb-2">Just feeling like another world exploring at</p>
                                            <p class="text-secondary small">July 20, 2024</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <h6 class="mb-3">Archives</h6>
                        <ol class="list-group adminuiux-list-group list-group-flush mb-3">
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">March 2025</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">February 2025</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">January 2025</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">December 2024</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">November 2024</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">October 2024</a></li>
                        </ol>

                        <h6 class="mb-3">Elsewhere</h6>
                        <ol class="list-group adminuiux-list-group list-group-flush mb-3">
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">GitHub</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">Twitter</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">Facebook</a></li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="text-center my-3">
                <h4 class="mb-0">More trending stories to cover</h4>
                <p class="text-secondary small mb-0">Stay up to date with latest trending topics.</p>
            </div>

            <!-- Top trending carousel -->
            <swiper-container slides-per-view="auto" space-between="16px" autoplay="true" class="swiper swipernav mb-3">
                <swiper-slide class="swiper-slide width-280">
                    <div class="card adminuiux-card position-relative overflow-hidden">
                        <div class="card-body z-index-1 p-xl-4 position-relative">
                            <p><span class="badge badge-sm badge-light rounded-pill bg-red text-white">Creative UI UX</span></p>
                            <p class="text-truncated h5">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</p>
                            <p class="text-secondary small mb-3">Connects and integrates all your appointment sources - Website, Leads, Mobile,</p>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <p>
                                        <a routerLink="/app/blog-details" class="btn btn-sm btn-theme theme-red">Read More <i class="bi bi-arrow-right"></i> </a>
                                    </p>
                                </div>
                                <div class="col-auto text-end">
                                    <p><span class="opacity-75">By:</span> Adminuiux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide width-280">
                    <div class="card adminuiux-card bg-success text-white position-relative overflow-hidden">
                        <div class="coverimg h-100 w-100 start-0 top-0 position-absolute z-index-0 opacity-25">
                            <img src="assets/img/modern-ai-image/tree-5.jpg" alt="" />
                        </div>
                        <div class=" card-body z-index-1 p-xl-4 position-relative">
                            <p><span class="badge badge-sm badge-light rounded-pill bg-green text-white">Appointment</span></p>
                            <p class="text-truncated h5">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</p>
                            <p class=" small mb-3">Connects and integrates all your appointment sources - Website, Leads, Mobile,</p>
                            <p>
                                <a routerLink="/app/blog-details" class="btn btn-sm btn-theme theme-green">Read More <i class="bi bi-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide width-280">
                    <div class="card adminuiux-card bg-success text-white position-relative overflow-hidden">
                        <div class="coverimg h-100 w-100 start-0 top-0 position-absolute z-index-0 opacity-50">
                            <img src="assets/img/modern-ai-image/tree-4.jpg" alt="" />
                        </div>
                        <div class="card-body z-index-1 p-xl-4 position-relative">
                            <p><span class="badge badge-sm badge-light rounded-pill bg-orange text-white">Medical Champ</span></p>
                            <p class="text-truncated h5">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</p>
                            <p class=" small mb-3">Connects and integrates all your appointment sources - Website, Leads, Mobile,</p>
                            <p>
                                <a routerLink="/app/blog-details" class="btn btn-sm btn-theme theme-orange">Read More <i class="bi bi-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide width-280">
                    <div class="card adminuiux-card position-relative overflow-hidden">
                        <div class="card-body z-index-1 p-xl-4 position-relative">
                            <p><span class="badge badge-sm badge-light rounded-pill bg-pink text-white">New to world</span></p>
                            <p class="text-truncated h5">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</p>
                            <p class="text-secondary small mb-3">Connects and integrates all your appointment sources - Website, Leads, Mobile,</p>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <p>
                                        <a routerLink="/app/blog-details" class="btn btn-sm btn-theme theme-red">Read More<i class="bi bi-arrow-right"></i> </a>
                                    </p>
                                </div>
                                <div class="col-auto text-end">
                                    <p><span class="opacity-75">By:</span> Adminuiux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    `,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogsComponent {}
