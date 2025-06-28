import { Component, Renderer2, ElementRef } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-create-goal2",
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
                            <li class="breadcrumb-item active bi" aria-current="page">Create Goal 2</li>
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
                            <a class="nav-link active theme-green" routerLink="/app/create-goal2">
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
                                <div class="card h-100 bg-theme-1-subtle theme-blue selectable anyone" (click)="selectable($event)">
                                    <div class="card-body">
                                        <div class="avatar avatar-50 rounded bg-theme-1 mb-3">
                                            <i class="bi bi-house h5"></i>
                                        </div>
                                        <h6 class="text-theme-1">Home</h6>
                                        <p class="opacity-50 small">I want to buy a own home</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                                <div class="card h-100 bg-theme-1-subtle theme-purple selectable anyone" (click)="selectable($event)">
                                    <div class="card-body">
                                        <div class="avatar avatar-50 rounded bg-theme-1 mb-3">
                                            <i class="bi bi-people h5"></i>
                                        </div>
                                        <h6 class="text-theme-1">Family</h6>
                                        <p class="opacity-50 small">I need regular saving for family</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                                <div class="card h-100 bg-theme-1-subtle theme-red selectable anyone" (click)="selectable($event)">
                                    <div class="card-body">
                                        <div class="avatar avatar-50 rounded bg-theme-1 mb-3">
                                            <i class="bi bi-mortarboard h5"></i>
                                        </div>
                                        <h6 class="text-theme-1">Education</h6>
                                        <p class="opacity-50 small">Creating planning for kids</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                                <div class="card h-100 bg-theme-1-subtle theme-orange selectable anyone" (click)="selectable($event)">
                                    <div class="card-body">
                                        <div class="avatar avatar-50 rounded bg-theme-1 mb-3">
                                            <i class="bi bi-luggage h5"></i>
                                        </div>
                                        <h6 class="text-theme-1">Vacation</h6>
                                        <p class="opacity-50 small">Planning for trip</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                                <div class="card h-100 bg-theme-1-subtle theme-brown selectable anyone" (click)="selectable($event)">
                                    <div class="card-body">
                                        <div class="avatar avatar-50 rounded bg-theme-1 mb-3">
                                            <i class="bi bi-person-walking h5"></i>
                                        </div>
                                        <h6 class="text-theme-1">Retirement</h6>
                                        <p class="opacity-50 small">Planning for better future</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3 col-lg-3 col-xl-3 mb-3">
                                <div class="card h-100 bg-theme-1-subtle theme-teal selectable anyone" (click)="selectable($event)">
                                    <div class="card-body">
                                        <div class="avatar avatar-50 rounded bg-theme-1 mb-3">
                                            <i class="bi bi-puzzle h5"></i>
                                        </div>
                                        <h6 class="text-theme-1">Other</h6>
                                        <p class="opacity-50 small">I have independent self plan</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 col-lg-3 col-xl-3 mb-4">
                                <div class="card h-100">
                                    <div class="card-body z-index-1">
                                        <h5 class="fw-normal mb-3">What is your goal name?</h5>
                                        <div class="form-floating text-dark">
                                            <input type="text" class="form-control" id="name" placeholder="Enter name" />
                                            <label for="name">Name</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-3 col-lg-3 col-xl-3 mb-4">
                                <div class="card adminuiux-card position-relative overflow-hidden bg-theme-1 h-100">
                                    <div class="position-absolute top-0 start-0 h-100 w-100 z-index-0 coverimg opacity-50">
                                        <img src="assets/img/modern-ai-image/flamingo-4.jpg" alt="" />
                                    </div>
                                    <div class="card-body z-index-1">
                                        <h5 class="fw-normal mb-3">Your goal target amount?</h5>
                                        <div class="form-floating text-dark">
                                            <input type="number" class="form-control" id="amount" placeholder="Enter amount" />
                                            <label for="amount">Amount</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col">
                                <button class="btn btn-theme" type="button" routerLink="/app/create-goal">Previous</button>
                            </div>
                            <div class="col-auto">
                                <a class="btn btn-outline-accent mx-2" routerLink="/app/goals">Skip</a>
                                <button class="btn btn-theme mx-2" type="button" routerLink="/app/create-goal3">Next</button>
                                <a class="btn btn-theme finish-btn" style="display: none;" routerLink="/app/goals">Finish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class CreateGoal2Component {
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngOnInit() {}

    selectable(event: Event) {
        const selectables = document.querySelectorAll(".selectable");
        let targetElement = event.target as HTMLElement | null;

        while (targetElement && !targetElement.classList.contains("selectable")) {
            targetElement = targetElement.parentElement;
        }
        if (targetElement) {
            if (targetElement.classList.contains("anyone") && !targetElement.classList.contains("active")) {
                this.renderer.addClass(targetElement, "active");
            } else {
                this.renderer.removeClass(targetElement, "active");
            }
        }
    }
}
