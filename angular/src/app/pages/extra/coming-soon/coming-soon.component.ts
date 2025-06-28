import { Component, OnInit, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";

@Component({
    selector: "app-coming-soon",
    standalone: true,
    imports: [],
    template: `
        <!-- content -->
        <div class="container dvh-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-11 col-sm-8 col-lg-6 col-xxl-5">
                    <div class="row gx-3 gx-lg-4 align-items-center justify-content-center mb-4">
                        <div class="col-auto">
                            <img data-bs-img="light" src="assets/img/logo-light.svg" alt="" class="avatar avatar-40" />
                            <img data-bs-img="dark" src="assets/img/logo.svg" alt="" class="avatar avatar-40" />
                        </div>
                        <div class="col-auto">
                            <h5 class="mb-0">Mobile<span>Shop</span></h5>
                            <p class="small opacity-75">Invest it in uniqueness</p>
                        </div>
                    </div>

                    <!-- subscription -->
                    <div class="card position-relative border-0 shadow bg-theme-1 overflow-hidden mb-3 mb-lg-4">
                        <div class="card-body py-4 py-lg-5">
                            <!-- timers-->
                            <div class="text-center mb-4">
                                <h4 class="fw-normal mb-0">Making business simpler</h4>
                                <h2 class="fw-bold mb-0">The wait is almost over</h2>
                            </div>
                            @if (!countdownFinished) {
                            <div class="row gx-4 gx-lg-5 align-items-center justify-content-center text-center mb-3 mb-lg-4">
                                <div class="col col-md-auto">
                                    <span id="days" class="fw-bold h1">{{ days }}</span
                                    ><br />
                                    <small class="opacity-75">Days</small>
                                </div>
                                <div class="col col-md-auto">
                                    <span id="hrs" class="fw-bold h1">{{ hours }}</span
                                    ><br />
                                    <small class="opacity-75">Hours</small>
                                </div>
                                <div class="col col-md-auto">
                                    <span id="min" class="fw-bold h1">{{ minutes }}</span
                                    ><br />
                                    <small class="opacity-75">Min</small>
                                </div>
                                <div class="col col-md-auto">
                                    <span id="sec" class="fw-bold h1">{{ seconds }}</span
                                    ><br />
                                    <small class="opacity-75">Sec</small>
                                </div>
                            </div>
                            } @if (countdownFinished) {
                            <div id="endtimer" class="mt-lg-4 text-center">{{ finishedMessage }}</div>
                            }
                            <div class="px-lg-3 px-xl-3 pt-lg-3 pt-xl-4 text-center">
                                <div class="input-group w-100 mb-3">
                                    <input type="text" class="form-control border-0" placeholder="Your email address" />
                                    <button class="btn btn-dark border-0" type="button">Subscribe</button>
                                </div>
                                <h6 class="mb-1">Subscribe for our newsletter</h6>
                                <p class="small opacity-75">You will get an email with steps and verification.</p>
                            </div>
                        </div>
                    </div>

                    <!-- social links -->
                    <div class="mb-3 text-center">
                        <a (click)="goBack()" class="btn btn-link" data-toggle="tooltip" title="Dashboard"><i class="bi bi-arrow-left"></i> Home</a>
                        <a href="#" class="btn btn-square btn-link rounded-circle" target="_blank"><i class="bi bi-facebook"></i></a>
                        <a href="#" class="btn btn-square btn-link rounded-circle" target="_blank"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="btn btn-square btn-link rounded-circle" target="_blank"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="btn btn-square btn-link rounded-circle" target="_blank"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class ComingSoonComponent implements OnInit, OnDestroy {
    days: number = 0;
    hours: number = 0;
    minutes: number = 0;
    seconds: number = 0;
    countdownFinished: boolean = false;
    finishedMessage: string = "Our website is live.";
    private intervalId: any;
    private countDownDate: number;

    constructor(private location: Location) {
        this.countDownDate = new Date("October 7, 2025 18:32:25").getTime();
    }

    ngOnInit() {
        this.intervalId = setInterval(() => {
            this.updateCountdown();
        }, 1000);
    }

    ngOnDestroy() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    private updateCountdown() {
        const now = new Date().getTime();
        const distance = this.countDownDate - now;

        if (distance < 0) {
            clearInterval(this.intervalId);
            this.countdownFinished = true;
        } else {
            this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        }
    }

    goBack(): void {
        this.location.back();
    }
}
