import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-help-center",
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
                            <li class="breadcrumb-item active bi" aria-current="page">Help Center</li>
                        </ol>
                    </nav>
                    <h5>Help Center</h5>
                </div>
                <div class="col-auto ms-auto">
                    <a routerLink="/app/ticket-list" class="btn btn-theme"> Tickets <i data-feather="arrow-right"></i> </a>
                </div>
            </div>
        </div>

        <!-- Content -->
        <div class="container mt-4" id="main-content">
            <!-- Banner title -->
            <div class="row justify-content-center mb-3 py-3">
                <div class="col-11 col-md-10 col-lg-8 col-xl-7 col-xxl-5 text-center position-relative z-index-1">
                    <h3>How can we help you?</h3>
                    <h5 class="fw-normal mb-3">Find solution for your troubles. We have wide range of learning tutorials and supports.</h5>
                    <!-- search -->
                    <div class="input-group">
                        <span class="input-group-text text-theme-1"><i class="bi bi-search"></i></span>
                        <input class="form-control" type="search" placeholder="Search your query here..." />
                    </div>
                </div>
            </div>

            <!-- top queries  -->
            <h5 class="mb-3">Popular Questions</h5>
            <p class="mb-3">
                <a href="javascript:void(0)" class="badge badge-light text-bg-theme-1 me-1 mb-1">How we can do edits in index pages?</a>
                <a href="javascript:void(0)" class="badge badge-light text-bg-theme-1 me-1 mb-1">Is this template comes with Laravel vue js?</a>
                <a href="javascript:void(0)" class="badge badge-light text-bg-theme-1 me-1 mb-1">Is there angular development suggestions before starting work?</a>
                <a href="javascript:void(0)" class="badge badge-light text-bg-theme-1 me-1 mb-1">How to reduce width of any boxes with responsiveness?</a>
                <a href="javascript:void(0)" class="badge badge-light text-bg-theme-1 me-1 mb-1">How can you defined new color set ?</a>
                <a href="javascript:void(0)" class="badge badge-light text-bg-theme-1 me-1 mb-1">What are the primary color set and what to keep in mind?</a>
            </p>

            <!-- top queries categories -->
            <h5 class="mb-3">Help by Categories</h5>
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 bg-theme-1-subtle text-theme-1 rounded">
                                        <i class="bi bi-person-circle h4"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <h5 class="mb-0">Login and Logout</h5>
                                    <p class="text-secondary small">Get correct way to use</p>
                                </div>
                            </div>
                            <div class="list-group adminuiux-list-group list-group-flush">
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">Login purpose </a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">What are the Login options?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">How to reset password?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">How to change password?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">Where from I can logout from?</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 bg-theme-1-subtle text-theme-1 rounded">
                                        <i class="bi bi-palette h4"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <h6 class="mb-0">Customization &amp; Settings</h6>
                                    <p class="text-secondary small">Make it more like yours</p>
                                </div>
                            </div>
                            <div class="list-group adminuiux-list-group list-group-flush">
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">How to change color scheme? </a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">Personalize background images?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">Update colors in theme colors?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">How to create new theme colors set?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">Purpose of the crowd assets?</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-50 bg-theme-1-subtle text-theme-1 rounded">
                                        <i class="bi bi-award h4"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <h6 class="mb-0">License and Usage</h6>
                                    <p class="text-secondary small">Read more about usage & licenses</p>
                                </div>
                            </div>

                            <div class="list-group adminuiux-list-group list-group-flush">
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">What is mean bt free license?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">What is business license?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">How is PRO different from free license?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">Benefits of PRO license?</a>
                                <a href="javascript:void(0)" class="list-group-item list-group-item-action">Personal use limitation and restrictions?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- raise ticket -->
            <div class="mb-3 text-center py-2">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">
                        <h4>Couldn't find what you are looking for?</h4>
                        <p class="text-secondary small mb-3">Its possible human made mistakes and possibly we may missed it. We are happy to assist you as well as upgrade our system. Do let us know your query, concern and feedback.</p>
                        <a routerLink="/app/contactus" class="btn btn-theme mx-1">Connect us</a>
                        <a href="" class="btn btn-outline-theme mx-1">Leave feedback</a>
                    </div>
                </div>
            </div>

            <!-- quick links -->
            <div class="row justify-content-center">
                <div class="col-12 col-md-4 col-lg-4">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <i class="bi bi-chat-right-dots avatar avatar-80 text-theme-1 bg-theme-1-subtle rounded h1 mb-3"></i><br />
                            <h5 class="text-theme-1">Communicate</h5>
                            <p class="text-secondary mb-3">You have live assistant with whom you can share your query &amp; get answered.</p>
                            <a routerLink="/app/ticket-list" class="btn btn-sm btn-theme">Watch Community</a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 col-lg-4">
                    <div class="card adminuiux-card  mb-4">
                        <div class="card-body">
                            <i class="bi bi-life-preserver avatar avatar-80 text-theme-1 bg-theme-1-subtle rounded h1 mb-3"></i><br />
                            <h5 class="text-theme-1">Get Support</h5>
                            <p class="text-secondary mb-3">Connect with our expert by submitting details with photos &amp; documents.</p>
                            <a routerLink="/app/add-ticket" class="btn btn-sm btn-theme">Create Ticket</a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 col-lg-4">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <i class="bi bi-person-video3 avatar avatar-80 text-theme-1 bg-theme-1-subtle rounded h1 mb-3"></i><br />
                            <h5 class="text-theme-1">Schedule a Demo</h5>
                            <p class="text-secondary mb-3">Get details of features and quick look on how it works. Schedule a demo.</p>
                            <a href="javascript:void(0)" class="btn btn-sm btn-theme">Book Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class HelpCenterComponent {}
