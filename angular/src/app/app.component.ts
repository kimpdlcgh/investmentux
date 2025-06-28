import { Component, HostListener, Inject, OnInit, AfterViewChecked, AfterViewInit, ElementRef, Renderer2, ApplicationConfig } from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common";
import { NavigationEnd, ChildActivationEnd, Router, RouterOutlet } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
    name = "Angular";
    lastScrollTop: number = 0;
    pagelength: number = 0;

    constructor(private el: ElementRef, private renderer: Renderer2, private router: Router, @Inject(DOCUMENT) private document: Document) {
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            this.document.documentElement.scrollTop = 0;
            this.document.body.scrollTop = 0; // For Safari
        });
    }

    ngAfterViewChecked(): void {
        this.processCoverImages(); // Process on initial load
        // page direction check
        const lastScrollTop = document.documentElement.scrollTop;
        this.pagelength = this.document.documentElement.scrollHeight - 50;

        // fixed button initial space when mobile footer
        this.fixedButton();
    }

    private processCoverImages() {
        const coverImages = this.el.nativeElement.querySelectorAll(".coverimg");

        coverImages.forEach((coverImage: HTMLElement) => {
            const imgElement = coverImage.querySelector("img");
            if (imgElement) {
                const imgSrc = imgElement.getAttribute("src");
                if (imgSrc) {
                    this.renderer.setStyle(coverImage, "background-image", `url('${imgSrc}')`);
                    this.renderer.removeChild(coverImage, imgElement); // Remove the img element
                }
            }
        });
    }

    @HostListener("window:scroll", ["$event"])
    onWindowScroll() {
        const st = this.document.documentElement.scrollTop;

        if (st + this.document.documentElement.clientHeight <= this.pagelength && st >= 50) {
            if (st > this.lastScrollTop) {
                this.renderer.addClass(this.document.body, "scrolldown");
                this.renderer.removeClass(this.document.body, "scrollup");
            } else if (st <= this.lastScrollTop) {
                this.renderer.addClass(this.document.body, "scrollup");
                this.renderer.removeClass(this.document.body, "scrolldown");
            }
            this.lastScrollTop = st;
        } else {
            this.renderer.addClass(this.document.body, "scrollup");
            this.renderer.removeClass(this.document.body, "scrolldown");
        }
        this.fixedButton();
    }

    fixedButton() {
        /* fixed buttons space */
        const mobileFooter = this.document.querySelector(".adminuiux-mobile-footer") as HTMLElement;
        const fixedButtons = this.document.getElementById("fixedbuttons") as HTMLElement;

        if (mobileFooter && this.document.body.classList.contains("scrollup") && fixedButtons) {
            this.renderer.setStyle(fixedButtons, "paddingBottom", `${mobileFooter.offsetHeight}px`);
        } else if (fixedButtons) {
            this.renderer.setStyle(fixedButtons, "paddingBottom", "0px");
        }
    }
}
