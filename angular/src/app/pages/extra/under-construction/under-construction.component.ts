import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-under-construction",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!-- content -->
        <div class="container-fluid dvh-100 py-3" id="main-content">
            <div class="card adminuiux-card h-100 position-relative overflow-hidden bg-theme-1 theme-orange">
                <figure class="m-0 position-absolute top-0 start-0 h-100 w-100 coverimg opacity-25">
                    <img src="assets/img/background-image/backgorund-image-12.jpg" alt="" />
                </figure>
                <div class="card-body z-index-1">
                    <div class="row align-items-center justify-content-center text-center h-100">
                        <div class="col-auto">
                            <h1 class="fw-bold" style="font-size: 100px;"><i class="bi bi-cone-striped mx-2"></i></h1>
                            <h1>Under <b>Construction</b></h1>
                            <p class=" mb-4">
                                This page is still under construction,<br />
                                subscribe us and get in touch with us
                            </p>
                            <div class="input-group mb-4">
                                <input type="text" class="form-control border-warning" placeholder="Your email address" />
                                <button class="btn btn-warning" type="button">Subscribe</button>
                            </div>

                            <a routerLink="/app/pages" class="btn btn-link text-white"> <i class="bi bi-arrow-left"></i> Back to Pages</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class UnderConstructionComponent {}
