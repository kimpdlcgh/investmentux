import { Component, ElementRef, Renderer2 } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-create-goal3",
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
                            <li class="breadcrumb-item active bi" aria-current="page">Create Goal 3</li>
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
                            <a class="nav-link active theme-green" routerLink="/app/create-goal3">
                                <div class="num avatar avatar-30 bg-theme-1 rounded-circle mb-2">3</div>
                                <div>
                                    <p class="h6 text-theme-1 mb-0">Investment</p>
                                </div>
                            </a>
                        </li>
                    </ul>

                    <div class="card-body pb-0">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col-12 col-md-6">
                                <div class="card text-center mb-3">
                                    <div class="card-header">
                                        <h5 class="mb-0">Goal: Sweet Home</h5>
                                        <p class="text-secondary small">Choose your investment plan</p>
                                    </div>
                                    <div class="card-body">
                                        <h4 class="mb-0">$ 22500.00</h4>
                                        <p class="text-secondary small mb-3">Targeted Goal Amount</p>

                                        <div class="card adminuiux-card bg-theme-1-subtle theme-green">
                                            <div class="card-body">
                                                <h4 class="mb-0">$ 750.00</h4>
                                                <p class="opacity-75 small">You will need to save per month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="mb-3">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-12 col-sm mb-3">
                                            <p>Targeted Amount</p>
                                        </div>
                                        <div class="col-12 col-sm-5 mb-3">
                                            <div class="input-group">
                                                <span class="input-group-text bg-none">$</span>
                                                <input type="text" class="form-control text-end rangevalues" value="22500.00" id="value1" />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="range" id="range1" class="range1 rangevalue" min="100" max="150000" value="22500.00" data-value="value1" />
                                </div>
                                <div class="mb-3">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-12 col-sm mb-3">
                                            <p>Expected goal duration</p>
                                        </div>
                                        <div class="col-12 col-sm-5 mb-3">
                                            <div class="input-group">
                                                <span class="input-group-text bg-none">Months</span>
                                                <input type="text" class="form-control text-end rangevalues" value="24" id="value2" />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="range" id="range2" class="range1 rangevalue" min="1" max="60" step="1" value="24" data-value="value2" />
                                </div>
                                <div class="mb-3">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-12 col-sm mb-3">
                                            <p>Time period in Year</p>
                                        </div>
                                        <div class="col-12 col-sm-5 mb-3">
                                            <div class="input-group">
                                                <span class="input-group-text bg-none">$</span>
                                                <input type="text" class="form-control text-end rangevalues" value="1000" id="value3" />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="range" id="range3" class="range1 rangevalue" min="500" max="20000" step="500" value="1000" data-value="value3" />
                                </div>
                            </div>
                        </div>
                        <h5 class="text-center">Choose funds for your plan from suggestion</h5>
                        <p class="text-secondary text-center small mb-3">You can select any one or multiple and in each total amount should be of $ 750.00/month.</p>

                        <div class="row gx-3 gx-lg-4">
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card selectable active mb-3" (click)="selectable($event)">
                                    <div class="card-body">
                                        <h6 class="fw-medium mb-2">JACKY New age EV and automotive Fund</h6>
                                        <p class="text-secondary small mb-3">Direct <i class="bi bi-chevron-right"></i> Growth <i class="bi bi-chevron-right"></i> Thematic</p>

                                        <div class="row gx-3 gx-lg-4 mb-3">
                                            <div class="col-6 text-start mb-3">
                                                <h6 class="fw-medium">$150.1250</h6>
                                                <p class="text-secondary small">NAV <span>10 Aug 25</span></p>
                                            </div>
                                            <div class="col-6 text-end mb-3">
                                                <h6 class="fw-medium">$2426.50 cr</h6>
                                                <p class="text-secondary small">AUM</p>
                                            </div>
                                            <div class="col-6 text-start">
                                                <h6 class="fw-medium text-success">+32.5%</h6>
                                                <p class="text-secondary small">CAGR <span>5 Years</span></p>
                                            </div>
                                            <div class="col-6 text-end">
                                                <h6 class="fw-medium">0.79%</h6>
                                                <p class="text-secondary small">Expanse Ratio</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col">
                                                <div class="input-group">
                                                    <span class="input-group-text bg-none">Invest <b class="mx-1">$</b></span>
                                                    <input type="text" class="form-control form-control-sm text-end rangevalues" value="375.00" />
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-square btn-outline-theme theme-red"><i class="bi bi-heart"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card selectable active mb-3" (click)="selectable($event)">
                                    <div class="card-body">
                                        <h6 class="fw-medium mb-2">OrganicX Agriculture and innovation Fund</h6>
                                        <p class="text-secondary small mb-3">Direct <i class="bi bi-chevron-right"></i> Growth <i class="bi bi-chevron-right"></i> FoF</p>

                                        <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                            <div class="col-6 text-start mb-3">
                                                <h6 class="fw-medium">$205.6530</h6>
                                                <p class="text-secondary small">NAV <span>10 Aug 25</span></p>
                                            </div>
                                            <div class="col-6 text-end mb-3">
                                                <h6 class="fw-medium">$9586.50 cr</h6>
                                                <p class="text-secondary small">AUM</p>
                                            </div>
                                            <div class="col-6 text-start">
                                                <h6 class="fw-medium text-success">+15.5%</h6>
                                                <p class="text-secondary small">CAGR <span>5 Years</span></p>
                                            </div>
                                            <div class="col-6 text-end">
                                                <h6 class="fw-medium">0.65%</h6>
                                                <p class="text-secondary small">Expanse Ratio</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col">
                                                <div class="input-group">
                                                    <span class="input-group-text bg-none">Invest <b class="mx-1">$</b></span>
                                                    <input type="text" class="form-control form-control-sm text-end rangevalues" value="375.00" />
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-square btn-outline-theme theme-red"><i class="bi bi-heart"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="card selectable mb-4" (click)="selectable($event)">
                                    <div class="card-body">
                                        <h6 class="fw-medium mb-2">Energy and New Smart Technology Fund</h6>
                                        <p class="text-secondary small mb-3">Direct <i class="bi bi-chevron-right"></i> Growth <i class="bi bi-chevron-right"></i> ELSS</p>

                                        <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                            <div class="col-6 text-start mb-3">
                                                <h6 class="fw-medium">$156.1250</h6>
                                                <p class="text-secondary small">NAV <span>10 Aug 25</span></p>
                                            </div>
                                            <div class="col-6 text-end mb-3">
                                                <h6 class="fw-medium">$3265.50 cr</h6>
                                                <p class="text-secondary small">AUM</p>
                                            </div>
                                            <div class="col-6 text-start">
                                                <h6 class="fw-medium text-success">+25.5%</h6>
                                                <p class="text-secondary small">CAGR <span>5 Years</span></p>
                                            </div>
                                            <div class="col-6 text-end">
                                                <h6 class="fw-medium">0.65%</h6>
                                                <p class="text-secondary small">Expanse Ratio</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col">
                                                <div class="input-group">
                                                    <span class="input-group-text bg-none">Invest <b class="mx-1">$</b></span>
                                                    <input type="text" class="form-control form-control-sm text-end rangevalues" value="00.00" />
                                                </div>
                                            </div>
                                            <div class="col-auto">
                                                <button class="btn btn-sm btn-square btn-outline-theme theme-red"><i class="bi bi-heart"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-footer">
                        <div class="row gx-3 gx-lg-4">
                            <div class="col">
                                <button class="btn btn-theme" type="button" routerLink="/app/create-goal2">Previous</button>
                            </div>
                            <div class="col-auto">
                                <a class="btn btn-outline-accent mx-2" routerLink="/app/goals">Skip</a>
                                <button class="btn btn-theme mx-2" type="button" style="display: none;" routerLink="/app/create-goal3">Next</button>
                                <a class="btn btn-theme finish-btn" routerLink="/app/goals">Finish</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class CreateGoal3Component {
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
