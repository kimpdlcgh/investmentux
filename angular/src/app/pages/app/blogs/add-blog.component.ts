import { Component, ViewChild, ElementRef } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgxEditorComponent, NgxEditorMenuComponent, Editor } from "ngx-editor";
import { FormsModule } from "@angular/forms";
import Choices from "choices.js";

@Component({
    selector: "app-add-blog",
    standalone: true,
    imports: [RouterLink, NgxEditorComponent, NgxEditorMenuComponent, FormsModule],
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
                                <a routerLink="/app/blogs">Blogs</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Add Blog</li>
                        </ol>
                    </nav>
                    <h5>Add Blog</h5>
                </div>
                <div class="col-auto py-1">
                    <button class="btn btn-sm btn-theme" routerLink="/app/blogs">
                        <i class="bi bi-globe me-1"></i>
                        <span>Publish</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <div class="row ">
                <div class="col-12 col-md-12 col-lg-12 col-xxl-8">
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <!-- Title -->
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="blogtitle" placeholder="Blog Title" value="Adminuiux template for your all need for business" />
                                <label for="blogtitle">Blog Title</label>
                            </div>
                            <div class="NgxEditor__Wrapper mb-3">
                                <ngx-editor-menu [editor]="editor" class=" rounded"> </ngx-editor-menu>
                                <ngx-editor [editor]="editor" [ngModel]="html" [disabled]="false" [placeholder]="'Type here...'" class="rounded"> </ngx-editor>
                            </div>

                            <h6 class="mb-3">Other Details</h6>
                            <!-- Tags -->
                            <div class="mb-3">
                                <select class="form-select bg-none choices" multiple #choices>
                                    <option selected>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                    <option>X-Large</option>
                                    <option>XX-Large</option>
                                </select>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="blogtags" placeholder="Blog Tags" />
                                <label for="blogtags">Blog Tags</label>
                            </div>

                            <!-- Meta Description -->
                            <div class="form-floating ">
                                <textarea class="form-control" placeholder="Your content here..." id="blogmetadesc"></textarea>
                                <label for="blogmetadesc">Blog Short Description</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-12 col-xxl-4 mb-3">
                    <h6 class="mb-3">Featured Image</h6>
                    <!-- Image upload  -->
                    <div class="row gx-2 mb-3 ">
                        <div class="col-auto">
                            <!-- image as bg style-->
                            <div class="avatar avatar-80 rounded coverimg hover mb-2">
                                <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
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
                </div>
            </div>

            <!-- save and cancel buttons -->
            <div class="row gx-3 gx-lg-4">
                <div class="col">
                    <a routerLink="/app/blogs" class="btn btn-theme my-2"><i class="bi bi-globe me-2"></i>Publish</a>
                    <!-- <button class="btn btn-theme my-2"><i class="bi bi-floppy me-2"></i>Submit</button> -->
                    <button class="btn btn-outline-theme my-2 mx-2">Draft</button>
                </div>
                <div class="col-auto">
                    <button routerLink="/app/blogs" class="btn btn-link my-2">Cancel</button>
                </div>
            </div>
        </div>
    `,
})
export class AddBlogComponent {
    @ViewChild("choices") mySelect!: ElementRef;

    html = "";
    editor!: Editor;
    ngOnInit(): void {
        this.editor = new Editor();
    }
    ngAfterViewInit() {
        const choices = new Choices(this.mySelect.nativeElement, {
            searchEnabled: true,
            removeItemButton: true,
        });
    }

    ngOnDestroy(): void {
        this.editor.destroy();
    }
}
