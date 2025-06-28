import { Component, Inject, ElementRef, Renderer2, HostListener } from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common"; // Import CommonModule
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-extra-layout",
    standalone: true,
    imports: [RouterOutlet, CommonModule],
    template: `
        <div class="adminuiux-wrap">
            <main class="adminuiux-content">
                <router-outlet></router-outlet>
            </main>
        </div>
    `,
})
export class ExtraLayoutComponent {
    constructor(private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        this.adjustPadding();
    }

    ngAfterViewInit() {
        this.adjustPadding();
    }

    ngOnDestroy() {
        this.adjustPadding();
    }

    adjustPadding() {
        const headerElement = this.el.nativeElement.querySelector(".adminuiux-header .navbar");
        const contentPadding = this.el.nativeElement.querySelector(".adminuiux-content");

        if (headerElement) {
            const headerHeight = headerElement.offsetHeight;
            this.renderer.setStyle(contentPadding, "padding-top", `${headerHeight}px`);
        }

        const footerMobileElement = this.el.nativeElement.querySelector(".adminuiux-mobile-footer");

        if (footerMobileElement) {
            const footerMobileHeight = footerMobileElement.offsetHeight;
            this.renderer.setStyle(document.body, "padding-bottom", `calc(${footerMobileHeight}px + 10px + env(safe-area-inset-bottom) )`);
        } else {
            this.renderer.setStyle(document.body, "padding-bottom", "0");
        }
    }
}
