import { Component, ElementRef, ViewChild } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgxEditorComponent, NgxEditorMenuComponent, Editor } from "ngx-editor";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-add-ticket",
    standalone: true,
    imports: [RouterLink, NgxEditorComponent, NgxEditorMenuComponent, FormsModule],
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
                                <a routerLink="/app/ticket-list">Tickets</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Add Ticket</li>
                        </ol>
                    </nav>
                    <h5>Add Ticket</h5>
                </div>
                <div class="col-auto py-1"></div>
            </div>
        </div>

        <!-- Content -->
        <div class="container mt-4" id="main-content">
            <div class="row ">
                <div class="col-12 col-md-12 col-lg-12 col-xxl-8">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <h6 class="mb-3">Ticket Details</h6>

                            <!-- Title -->
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="ticekttitle" placeholder="Ticket Title" value="How to change style for Adminuiux" />
                                <label for="ticekttitle">Ticket Title</label>
                            </div>
                            <!-- Textarea -->
                            <h6 class="mb-3">Explain your issue in details</h6>
                            <div class="NgxEditor__Wrapper mb-3">
                                <ngx-editor-menu [editor]="editor" class=" rounded"> </ngx-editor-menu>
                                <ngx-editor [editor]="editor" [ngModel]="html" [disabled]="false" [placeholder]="'Type here...'" class="rounded"> </ngx-editor>
                            </div>

                            <!-- Tags -->
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="tickettags" placeholder="Ticket Tags" />
                                <label for="tickettags">Ticket Tags</label>
                            </div>

                            <!-- Meta Description -->
                            <div class="form-floating ">
                                <textarea class="form-control" placeholder="Your content here..." id="ticketmetadesc"></textarea>
                                <label for="ticketmetadesc">Ticket Short Description</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-12 col-lg-12 col-xxl-4">
                    <!-- basic details -->
                    <h6 class="mb-3">Your Basic Details</h6>
                    <div class="row ">
                        <div class="col">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control is-valid" id="yourname" placeholder="Enter Your Name" />
                                <label for="yourname">Your Name</label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <figure class="avatar avatar-60 rounded coverimg mb-3">
                                <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                                <button class="btn btn-square btn-accent " (click)="inputClick()">
                                    <i class="bi bi-upload"></i>
                                </button>
                                <input type="file" class="d-none" #fileInput />
                            </figure>
                        </div>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control  is-invalid" id="youremail" placeholder="Enter your email" />
                        <label for="youremail">Your email</label>
                    </div>

                    <!-- Image upload  -->
                    <h6 class="mb-3">Featured Image <small class="text-secondary fw-normal">(Optional)</small></h6>
                    <div class="row gx-2 mb-3 ">
                        <div class="col-auto">
                            <!-- image as bg style-->
                            <div class="avatar avatar-80 rounded coverimg hover mb-2">
                                <img src="assets/img/modern-ai-image/modern-bg-1.jpg" alt="" />
                                <div class="overlay">
                                    <button class="btn btn-square btn-light text-danger">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <p class="text-secondary fs-12">Home1-present...</p>
                        </div>
                    </div>
                    <div class="dropzone text-center position-relative z-index-0 mb-3">
                        <div class="dz-default dz-message my-2">
                            <i class="h1 bi bi-cloud-upload"></i><br />
                            <button class="btn btn-link" type="button">Click here to upload</button>
                        </div>
                        <input type="file" class="position-absolute z-index-1 top-0 start-0 h-100 w-100 rounded opacity-0" />
                    </div>

                    <p class="text-secondary small">Upload only .jpeg, .png, .mp4, .mpeg4 file format max. file size 6MB</p>
                    <br />
                </div>
            </div>

            <div class="alert alert-success">
                <p>
                    <span class="spinner-border spinner-border-sm me-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </span>
                    Please wait... We are creating your ticket, it will be posted in few seconds.
                </p>
            </div>

            <!-- save and cancel buttons -->
            <div class="row gx-3 gx-lg-4 mb-3">
                <div class="col">
                    <button routerLink="/app/help-center" class="btn btn-theme my-2">Create</button>
                </div>
                <div class="col-auto">
                    <button class="btn btn-link my-2">Cancel</button>
                </div>
            </div>
            <hr />
            <div class="my-3 text-center">
                <h4 class="mb-0">Still you can check most relevant topics...</h4>
                <p class="text-secondary small mb-3">We are happy to assist you as well as upgrade our system. Do let us know your query, concern and feedback.</p>
            </div>
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <div class="avatar avatar-40 bg-theme-1-subtle text-theme-1 rounded">
                                        <i class="bi bi-person-circle fs-5"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <h5>Login and Logout</h5>
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
                                    <div class="avatar avatar-40 bg-theme-1-subtle text-theme-1 rounded">
                                        <i class="bi bi-palette fs-5"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <h5>Customization &amp; Settings</h5>
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
                                    <div class="avatar avatar-40 bg-theme-1-subtle text-theme-1 rounded">
                                        <i class="bi bi-award fs-5"></i>
                                    </div>
                                </div>
                                <div class="col">
                                    <h5>License and Usage</h5>
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
        </div>
    `,
})
export class AddTicketComponent {
    @ViewChild("fileInput") myElementRef!: ElementRef;
    html = "";
    editor!: Editor;
    ngOnInit(): void {
        this.editor = new Editor();
    }
    ngOnDestroy(): void {
        this.editor.destroy();
    }

    inputClick() {
        this.myElementRef.nativeElement.click();
    }
}
