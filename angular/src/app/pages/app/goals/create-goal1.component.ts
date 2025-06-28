import { Component, Renderer2, ElementRef } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-create-goal1",
    standalone: true,
    imports: [RouterLink],
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
                                <a routerLink="/app/goals">Goals</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Create Goal 1</li>
                        </ol>
                    </nav>
                    <h5>Add Goal</h5>
                </div>
                <div class="col-auto py-1"></div>
            </div>
        </div>
        <div class="container mt-4">
            <div>
                <!-- steps -->
                <div class="card adminuiux-card overflow-hidden mb-4">
                    <ul class="nav nav-justified">
                        <li class="nav-item">
                            <a class="nav-link active theme-green" routerLink="/app/create-goal">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">1</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Saving Type</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link opacity-50" routerLink="/app/create-goal2">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">2</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Goal</p>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link opacity-50" routerLink="/app/create-goal3">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">3</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Investment</p>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="card-body pb-0">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                                <div class="card text-center bg-theme-1-subtle theme-green h-100 selectable" (click)="selectable($event)">
                                    <div class="card-body">
                                        <img src="assets/img/investment/regular-saving.jpg" alt="" class="mw-100 rounded mb-3" />
                                        <h6 class="text-theme-1">Regular Saving</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                                <div class="card text-center bg-theme-1-subtle theme-purple h-100 selectable" (click)="selectable($event)">
                                    <div class="card-body">
                                        <img src="assets/img/investment/tax-saving.jpg" alt="" class="mw-100 rounded mb-3" />
                                        <h6 class="text-theme-1">Save Taxes</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                                <div class="card text-center h-100 bg-theme-1-subtle theme-orange selectable" (click)="selectable($event)">
                                    <div class="card-body">
                                        <img src="assets/img/investment/retirement-saving.jpg" alt="" class="mw-100 rounded mb-3" />
                                        <h6 class="text-theme-1">Retirement Plan</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                                <div class="card text-center bg-theme-1-subtle theme-red h-100 selectable" (click)="selectable($event)">
                                    <div class="card-body">
                                        <img src="assets/img/investment/emergency-saving.jpg" alt="" class="mw-100 rounded mb-3" />
                                        <h6 class="text-theme-1">Emergency</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col">
                                <button class="btn btn-theme disabled" type="button" disabled>Previous</button>
                            </div>
                            <div class="col-auto">
                                <a class="btn btn-outline-accent mx-2" routerLink="/app/goals">Skip</a>
                                <button class="btn btn-theme mx-2" type="button" routerLink="/app/create-goal2">Next</button>
                                <a class="btn btn-theme finish-btn" style="display: none;" routerLink="/app/goals">Finish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class CreateGoal1Component {
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit() {}

    selectable(event: Event) {
        const selectables = document.querySelectorAll(".selectable");
        let targetElement = event.target as HTMLElement | null;

        while (targetElement && !targetElement.classList.contains("selectable")) {
            targetElement = targetElement.parentElement;
        }
        if (targetElement) {
            if (targetElement.classList.contains("anyone") || !targetElement.classList.contains("active")) {
                this.renderer.addClass(targetElement, "active");
            } else {
                this.renderer.removeClass(targetElement, "active");
            }
        }
    }
}
