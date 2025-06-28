import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgCircleProgressModule, CircleProgressOptions } from "ng-circle-progress";

@Component({
    selector: "app-goals",
    standalone: true,
    imports: [RouterLink, NgCircleProgressModule],
    providers: [
        {
            provide: CircleProgressOptions,
            useValue: {
                radius: 100,
                outerStrokeWidth: 16,
                innerStrokeWidth: 8,
                outerStrokeColor: "#78C000",
                innerStrokeColor: "#C7E596",
                animationDuration: 300,
            },
        },
    ],
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
                            <li class="breadcrumb-item active bi" aria-current="page">Goals</li>
                        </ol>
                    </nav>
                    <h5>My Goals</h5>
                </div>
                <div class="col-auto col-sm-auto text-end">
                    <a routerLink="/app/create-goal" class="btn btn-theme"> <i class="bi bi-plus-lg"></i> Create <span class="d-none d-md-inline">Goal</span> </a>
                </div>
            </div>
        </div>
        <!-- content -->
        <div class="container mt-4" id="main-content">
            <div class="row gx-3 gx-lg-4">
                <!-- primary goal -->
                <div class="col-12 col-lg-12 col-xxl-4 mb-3 mb-lg-4 theme-teal">
                    <div class="card adminuiux-card position-relative overflow-hidden bg-theme-1 h-100">
                        <div class="position-absolute top-0 start-0 h-100 w-100 z-index-0 coverimg opacity-25">
                            <img src="assets/img/modern-ai-image/tree-15.jpg" alt="" />
                        </div>
                        <div class="card-body z-index-1">
                            <div class="row align-items-center justify-content-center h-100 py-2">
                                <div class="col-11">
                                    <h2 class="fw-normal">Your goals saving has been grown by</h2>
                                    <h1 class="mb-2">$7.45k</h1>
                                    <p>1 goal will be completed soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--goals-->
                <div class="col-12 col-lg-6 col-xxl-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card h-100">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <i class="bi bi-house fs-4 avatar avatar-50 bg-success text-white rounded"></i>
                                </div>
                                <div class="col">
                                    <h5 class="mb-0 fw-medium">Sweet Home</h5>
                                    <p class="small opacity-75">Life Goal</p>
                                </div>
                            </div>
                            <div class="text-center mt-2 mb-3">
                                <div class="height-130 width-140 position-relative d-inline-block mx-auto text-white mb-2">
                                    <circle-progress [percent]="10" [space]="-10" [radius]="50" [outerStrokeWidth]="10" [innerStrokeWidth]="10" [outerStrokeColor]="'#0049e8'" [innerStrokeColor]="'rgba(0, 73, 232, 0.15)'" [animation]="true" [subtitle]="'Savings'" [animationDuration]="300" class="mb-1"></circle-progress>
                                </div>
                                <h2 class="mb-0">$ 22500.00</h2>
                                <p class="text-secondary small">22 months</p>
                            </div>
                            <div class="row gx-3 gx-lg-4 justify-content-center mb-3">
                                <div class="col-auto">
                                    <a routerLink="/app/wallet-addmoney" class="btn btn-sm btn-theme">+ Add Money</a>
                                </div>
                                <div class="col-auto">
                                    <a routerLink="/app/wallet-receivemoney" class="btn btn-sm btn-outline-theme"><i class="bi bi-bank"></i> Withdraw</a>
                                </div>
                            </div>
                            <div class="card mb-3 mb-lg-4">
                                <div class="card-body">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <i class="bi bi-bullseye text-danger h1"></i>
                                        </div>
                                        <div class="col">
                                            <p class="text-secondary small">Your target for sweet home is 10% completed in 2 months</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <i class="bi bi-flag"></i>
                                </div>
                                <div class="col">
                                    <p class="text-secondary small mb-1">Achieved</p>
                                    <p>$ 2250.00</p>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col-auto">
                                    <i class="bi bi-calendar"></i>
                                </div>
                                <div class="col">
                                    <p class="text-secondary small mb-1">Duration</p>
                                    <p>22-09-2027</p>
                                </div>
                            </div>
                            <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                <div class="col-auto">
                                    <i class="bi bi-cash-stack"></i>
                                </div>
                                <div class="col">
                                    <p class="text-secondary small mb-1">Deposit</p>
                                    <p>$ 500.00 every 1st day of month</p>
                                </div>
                                <div class="col-auto">
                                    <a class="btn btn-sm btn-square btn-outline-theme" data-bs-toggle="tooltip" title="Edit"><i class="bi bi-pencil"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--goals-->
                <div class="col-12 col-lg-6 col-xxl-4 mb-3 mb-lg-4">
                    <div class="card adminuiux-card overflow-hidden bg-theme-1">
                        <div class="card-body position-relative">
                            <div class="position-absolute top-0 start-0 h-100 w-100 z-index-0 coverimg opacity-25">
                                <img src="assets/img/modern-ai-image/taxi-1.jpg" alt="" />
                            </div>
                            <div class="row gx-3 gx-lg-4 position-relative z-index-1">
                                <div class="col-12 mb-3 mb-lg-4">
                                    <div class="row gx-3 gx-lg-4">
                                        <div class="col-auto">
                                            <i class="bi bi-car-front fs-4 avatar avatar-50 bg-white-opacity text-white rounded"></i>
                                        </div>
                                        <div class="col">
                                            <h5 class="mb-0 fw-medium">Dream Car</h5>
                                            <p class="small opacity-75">Life Goal</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 text-center mt-2 mb-3">
                                    <div class="height-130 width-140 position-relative d-inline-block mx-auto text-white mb-2">
                                        <circle-progress [percent]="10" [space]="-10" [radius]="50" [outerStrokeWidth]="10" [innerStrokeWidth]="10" [outerStrokeColor]="'#ffffff'" [innerStrokeColor]="'rgba(255, 255, 255, 0.15)'" [animation]="true" [subtitle]="'Savings'" [titleColor]="'#ffffff'" [subtitleColor]="'#ffffff'" [titleFontSize]="'30'" [animationDuration]="300" class="mb-1"></circle-progress>
                                    </div>
                                    <h2 class="mb-0">$ 10500.00</h2>
                                    <p>12 months</p>
                                </div>
                                <div class="col-12">
                                    <div class="row gx-3 gx-lg-4 justify-content-center">
                                        <div class="col-auto">
                                            <a routerLink="/app/wallet-addmoney" class="btn btn-sm btn-light">+ Add Money</a>
                                        </div>
                                        <div class="col-auto">
                                            <a routerLink="/app/wallet-receivemoney" class="btn btn-sm btn-outline-light"><i class="bi bi-bank"></i> Withdraw</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card adminuiux-card">
                            <div class="card-body">
                                <div class="card mb-3 mb-lg-4">
                                    <div class="card-body">
                                        <div class="row gx-3 gx-lg-4 align-items-center">
                                            <div class="col-auto">
                                                <i class="bi bi-bullseye text-danger h1"></i>
                                            </div>
                                            <div class="col">
                                                <p class="text-secondary small">Your target for sweet home is 50% completed in 6 months</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                    <div class="col-auto">
                                        <i class="bi bi-flag"></i>
                                    </div>
                                    <div class="col">
                                        <p class="text-secondary small mb-1">Achieved</p>
                                        <p>$ 5250.00</p>
                                    </div>
                                </div>
                                <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                    <div class="col-auto">
                                        <i class="bi bi-calendar"></i>
                                    </div>
                                    <div class="col">
                                        <p class="text-secondary small mb-1">Duration</p>
                                        <p>19-10-2025</p>
                                    </div>
                                </div>
                                <div class="row gx-3 gx-lg-4 align-items-center mb-2">
                                    <div class="col-auto">
                                        <i class="bi bi-cash-stack"></i>
                                    </div>
                                    <div class="col">
                                        <p class="text-secondary small mb-1">Deposit</p>
                                        <p>$ 1050.00 every 15th day of month</p>
                                    </div>
                                    <div class="col-auto">
                                        <a class="btn btn-sm btn-square btn-outline-theme" data-bs-toggle="tooltip" title="Edit"><i class="bi bi-pencil"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class GoalsComponent {}
