import { Component, Inject, OnInit, AfterViewInit, AfterViewChecked, ElementRef, Renderer2, HostListener } from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common"; // Import CommonModule
import { RouterOutlet, Router, NavigationEnd } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MainHeaderComponent } from "../../components/main-header/main-header.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { MainFooterComponent } from "../../components/main-footer/main-footer.component";
import { ThemingComponent } from "../../components/theming/theming.component";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-internal-layout",
    standalone: true,
    imports: [RouterOutlet, CommonModule, FormsModule, MainHeaderComponent, SidebarComponent, MainFooterComponent, ThemingComponent],
    template: `
        <!-- header -->
        <app-main-header class="adminuiux-header"></app-main-header>
        <!-- in back button - header you can remove other items -->
        <div class="adminuiux-wrap">
            <!-- sidebar -->
            <app-sidebar></app-sidebar>
            <!-- page content -->
            <main class="adminuiux-content has-sidebar" (click)="contentClick()">
                <router-outlet></router-outlet>
            </main>
        </div>

        <!-- color change pallette -->
        <app-theming class="offcanvas offcanvas-end shadow border-0 width-280" tabindex="-1" id="theming" data-bs-scroll="true" data-bs-backdrop="false" aria-labelledby="theminglabel"></app-theming>

        <!-- standard footer -->
        <app-main-footer></app-main-footer>
    `,
})
export class InternalLayoutComponent implements OnInit, AfterViewInit, AfterViewChecked {
    constructor(private router: Router, private el: ElementRef, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        this.adjustPadding();
    }

    @HostListener("window:scroll", ["$event"])
    onScrolls() {
        const headerElement = this.el.nativeElement.querySelector(".adminuiux-header");
        if (window.pageYOffset > 30) {
            this.renderer.addClass(headerElement, "active");
        } else {
            this.renderer.removeClass(headerElement, "active");
        }
    }

    ngOnInit() {
        this.adjustPadding(); // Adjust padding on initial load
    }
    ngAfterViewInit() {}

    ngAfterViewChecked() {
        this.adjustPadding(); // Adjust padding after view is initialized
    }
    ngOnDestroy() {
        this.adjustPadding();
    }

    adjustPadding() {
        const headerElement = this.el.nativeElement.querySelector(".adminuiux-header .navbar");
        const sidebarPadding = this.el.nativeElement.querySelector(".adminuiux-sidebar");
        const contentPadding = this.el.nativeElement.querySelector(".adminuiux-content");

        if (headerElement) {
            const headerHeight = headerElement.offsetHeight;
            this.renderer.setStyle(contentPadding, "padding-top", `${headerHeight}px`);
            this.renderer.setStyle(sidebarPadding, "padding-top", `${headerHeight}px`);
        }

        const footerMobileElement = this.el.nativeElement.querySelector(".adminuiux-mobile-footer");

        if (footerMobileElement) {
            const footerMobileHeight = footerMobileElement.offsetHeight;
            this.renderer.setStyle(document.body, "padding-bottom", `calc(${footerMobileHeight}px + 10px + env(safe-area-inset-bottom) )`);
        } else {
            this.renderer.setStyle(document.body, "padding-bottom", "0");
        }
    }
    contentClick() {
        const windowWidth = window.innerWidth;
        const body = document.body; // or use this.renderer.selectRootElement(document.body)

        if (windowWidth < 992) {
            this.renderer.removeClass(body, "sidebar-open");
            this.renderer.addClass(body, "sidebar-close");
        }
    }
}
