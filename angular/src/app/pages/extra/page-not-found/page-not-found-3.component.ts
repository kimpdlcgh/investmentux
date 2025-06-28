import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-page-not-found-3",
    standalone: true,
    imports: [RouterLink],
    template: `
        <!-- content -->
        <div class="container-fluid mt-2" id="main-content">
            <div class="card adminuiux-card height-dynamic position-relative overflow-hidden bg-theme-1 theme-red" style="--h-dynamic: calc(100vh - 1rem)">
                <figure class="m-0 position-absolute top-0 start-0 h-100 w-100 coverimg opacity-50">
                    <img src="assets/img/background-image/error.jpg" alt="" />
                </figure>
                <div class="card-body z-index-1">
                    <div class="row align-items-center justify-content-center text-center text-white h-100">
                        <div class="col-auto">
                            <h1 class="fw-bold" style="font-size: 100px;">4<i class="bi bi-sign-dead-end mx-2"></i>4</h1>
                            <h1>Something went <b>WRONG</b>!</h1>
                            <p>The page doesn't exist or removed.<br />Please check url or we suggest to go back to home.</p>
                            <br />
                            <a routerLink="/app/pages" class="btn btn-light">Back to Pages <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class PageNotFound3Component {}
