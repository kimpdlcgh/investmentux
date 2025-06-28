import { Component } from "@angular/core";
import { Location } from "@angular/common";

@Component({
    selector: "app-page-not-found",
    standalone: true,
    imports: [],
    template: `
        <!-- content -->
        <div class="container-fluid dvh-100 py-3" id="main-content">
            <div class="card adminuiux-card h-100 position-relative overflow-hidden bg-theme-1 theme-red">
                <figure class="m-0 position-absolute top-0 start-0 h-100 w-100 coverimg opacity-25">
                    <img src="assets/img/modern-ai-image/flamingo-1.jpg" alt="" />
                </figure>
                <div class="card-body z-index-1">
                    <div class="row align-items-center justify-content-center text-center text-white h-100">
                        <div class="col-auto">
                            <h1 class="fw-bold" style="font-size: 100px;">4<i class="bi bi-exclamation-circle mx-2"></i>4</h1>
                            <h1>Something went <b>WRONG</b>!</h1>
                            <p>The page doesn't exist or removed.<br />Please check url or we suggest to go back to home.</p>

                            <button class="btn btn-light" (click)="goBack()"><i class="bi bi-arrow-left"></i> Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class PageNotFoundComponent {
    constructor(private location: Location) {}
    goBack(): void {
        this.location.back();
    }
}
