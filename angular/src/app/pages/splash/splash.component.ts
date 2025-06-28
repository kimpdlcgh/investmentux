import { Component } from "@angular/core";
import { RouterLink, Router } from "@angular/router";

@Component({
    selector: "app-splash",
    standalone: true,
    imports: [],
    template: `
        <!--Page body-->
        <div class="container-fluid">
            <div class="row align-items-center justify-content-center text-center mt-auto z-index-1 height-dynamic" style="--h-dynamic: 100vh">
                <div class="col-12 mb-auto"></div>

                <div class="col-12">
                    <img src="assets/img/logo.svg" alt="" class="height-60 mb-3" />
                    <p class="h4 mb-0 fw-normal text-secondary">AdminUIUX</p>
                    <p class="h3 mb-3">Investment</p>
                    <div class="loader10 mb-2 mx-auto"></div>
                </div>

                <div class="col-12 mt-auto pb-ios">
                    <p class="text-secondary small mb-4">Mobile HTML template</p>
                </div>
            </div>
        </div>
    `,
})
export class SplashComponent {
    constructor(private router: Router) {}

    ngOnInit(): void {
        setTimeout(() => {
            this.router.navigate(["/landing"]);
        }, 3000);
    }
}
