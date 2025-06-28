import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-pages",
    standalone: true,
    imports: [RouterLink],
    template: ` <!-- breadcrumb  -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">All Pages</li>
                        </ol>
                    </nav>
                    <h5>Pages 60+</h5>
                </div>
                <div class="col-auto py-1"></div>
            </div>
        </div>
        <!-- content -->
        <div class="container mt-3 mt-lg-4" id="main-content">
            <div class="row gx-3 gx-lg-4">
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/dashboard" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Dashboard</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/wallet" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Wallet</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/goals" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Goals</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/create-goal" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Create Goal</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/investment-plans" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Investment Plans</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/mutual-funds" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Mutual Funds</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/mutual-fund-details" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Mutual Fund Details</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/portfolio" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>My Portfolio</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/explore" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Explore</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/calculator" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Calculator</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/transaction" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Transactions</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/statistics" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Statistics</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/company-shares" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Company Shares</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/company-share-details" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Share Details <span class="badge badge-light badge-sm text-bg-danger mx-1">New</span></p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/search-mutual-funds" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Search Mutual Funds</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/loan-list" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>My Loans</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/loan-request-1" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Request Loan</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/loan-details" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Loan Details</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/loan-under-process-details" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Loan Under Process</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/loan-request-success" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Loan Submitted</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/deposit" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Deposit</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/aboutus" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>About us</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/add-blog" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Add Blog</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/add-invoice" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Add Invoice</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/add-ticket" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Add Ticket</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/billing" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Billing</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/earning" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Earning</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/wallet-addmoney" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Add Money</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/wallet-sendmoney" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Send Money</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/wallet-receivemoney" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Receive Money</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/wallet-currencyexchange" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Currency Exchange</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/wallet-qrcode" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>QR Code</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/wallet-myqrcode" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>My QR Code</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/blog-details" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Blog Details</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/blogs" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Blogs</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/auth/change-password" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Change Password</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/chat" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Chat</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/contactus" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Contact us</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/help-center" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Help Center</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/inbox" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Inbox</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/auth/signin" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Login</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/profile-subscription" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>My Subscription</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/onboarding" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Onboarding</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/kyc-1" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Profile KYC Start <span class="badge badge-light badge-sm text-bg-danger mx-1">New</span></p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/kyc-2" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Profile KYC 1</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/kyc-3" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Profile KYC 2</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/search-result" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Search Result</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/personalization" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Personalize</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/profile" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Profile</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/auth/forgot-password" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Forgot Password</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/profile-settings-contact" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Settings Contact</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/profile-settingspayment" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Settings Payment</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/profile-settingstiming" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Settings Timing</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/profile-settingsusers" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Settings Users</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/profile-settings" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Settings</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/referral" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Referral</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/auth/signup-success" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Signup success</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/auth/signup" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Sign up</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/profile-subscription-plans" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Subscription</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/ticket-list" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Ticket List</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/app/users" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row gx-3 gx-lg-4">
                                <div class="col">
                                    <p>Users</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/not-found" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <p>4<i class="bi bi-exclamation-circle mx-1 text-danger"></i>4 - Page not found</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/not-found-2" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <p>4<i class="bi bi-exclamation-circle mx-1 text-danger"></i>4 - Page not found 2</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/not-found-3" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <p>4<i class="bi bi-exclamation-circle mx-1 text-danger"></i>4 - Page not found 3</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/under-construction" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <p>Under Construction</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mb-3 mb-lg-4">
                    <a routerLink="/coming-soon" class="card adminuiux-card style-none">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <p>Coming Soon</p>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-box-arrow-up-right"></i>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>`,
})
export class PagesComponent {}
