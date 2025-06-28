import { Component, HostListener, Inject, OnInit, AfterViewInit, OnDestroy, ElementRef, Renderer2 } from "@angular/core";
import { DOCUMENT, CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-main-footer",
    standalone: true,
    imports: [RouterLink, CommonModule],
    template: `
        <!-- standard footer -->
        <footer class="adminuiux-footer has-adminuiux-sidebar mt-auto">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md col-lg py-2">
                        <span class="small">Copyright &#64;2024, Designed by <a href="https://adminuiux.com" target="_blank">MobileUX</a> on Earth ❤️ </span>
                    </div>
                    <div class="col-12 col-md-auto col-lg-auto align-self-center">
                        <ul class="nav small">
                            <li class="nav-item"><a class="nav-link" routerLink="/help-center">Help</a></li>
                            <li class="nav-item">|</li>
                            <li class="nav-item"><a class="nav-link" routerLink="/terms-of-use">Terms of Use</a></li>
                            <li class="nav-item">|</li>
                            <li class="nav-item"><a class="nav-link" routerLink="/privacy-policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        <!-- theming action-->
        <div class="position-fixed bottom-0 end-0 m-3 z-index-5 fixedbuttons" id="fixedbuttons">
            <button class="btn btn-square btn-theme shadow rounded-circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#theming" aria-controls="theming"><i class="bi bi-palette"></i></button>
            <br />
            <button *ngIf="showScrollTop" (click)="scrollToTop()" class="btn btn-theme btn-square shadow mt-2 rounded-circle"><i class="bi bi-arrow-up"></i></button>
        </div>
    `,
})
export class MainFooterComponent {
    showScrollTop: boolean = false;

    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

    @HostListener("window:scroll", ["$event"])
    onScroll() {
        if (window.pageYOffset > 100) {
            this.showScrollTop = true;
        } else {
            this.showScrollTop = false;
        }
    }

    scrollToTop() {
        (function smoothscroll() {
            const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 1); // Adjust the divisor for speed
            }
        })();
    }

    ngOnInit() {}
}
