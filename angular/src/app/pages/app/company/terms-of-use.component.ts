import { Component } from "@angular/core";

@Component({
    selector: "app-terms-of-use",
    standalone: true,
    imports: [],
    template: `
        <!-- content -->
        <div class="container mt-2" id="main-content">
            <div class="row gx-3 gx-lg-4 align-items-center mb-3 mb-lg-4">
                <div class="col">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Terms of Use</li>
                        </ol>
                    </nav>
                    <h6>Terms of Use</h6>
                </div>
                <div class="col-auto">
                    <div class="dropdown">
                        <a class="btn btn-link" data-bs-toggle="dropdown" aria-expanded="false" role="button"><small class="vm">EN - English</small> <i class="bi bi-translate"></i> </a>
                        <div class="dropdown-menu dropdown-menu-end">
                            <div><a class="dropdown-item active" data-value="EN">EN - English</a></div>
                            <div><a class="dropdown-item" data-value="FR">FR - French</a></div>
                            <div><a class="dropdown-item" data-value="CH">CH - Chinese</a></div>
                            <div><a class="dropdown-item" data-value="HI">HI - Hindi</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gx-3 gx-lg-4 justify-content-center">
                <div class="col-12 col-md-10 col-lg-8 mb-3 mb-lg-4 pb-lg-3">
                    <p>Last updated: 7-2-2025</p>
                    <p>Please read these Terms and Conditions (“Terms”, “Terms and Conditions”) carefully before using the https://www.adminuiux.com website operated by adminuiux.</p>
                    <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
                    <p><strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</strong></p>
                    <h5>1. Purchases</h5>
                    <p>If you wish to purchase any product or service made available through the Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including, without limitation.</p>
                    <p>Third Party purchase: We have few affiliated/external purchase products which are exclusively sold on other platform. Those products are on our website are for demo and marketing purpose and payment will be collected by third party respective to product. Also plans and latest price may varies as international currency and market plus inn addition if any support plan or taxes, fees collected at source should be payable extra.</p>
                    <h5>2. Subscriptions</h5>
                    <p>Some parts of the Service are billed on a subscription basis (“Subscription(s)”). You will be billed in advance on a recurring</p>
                    <h5>3. Content</h5>
                    <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the</p>
                    <h5>4. Links To Other Web Sites</h5>
                    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by My Company (change this).</p>
                    <p>
                        My Company (change this) has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that My Company (change this) shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such websites or
                        services.
                    </p>
                    <h5>5. Changes</h5>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                    <h5>6. Contact Us</h5>
                    <p>If you have any questions about these Terms, please <a href="https://adminuiux.com/">contact us</a>.</p>
                </div>
            </div>
        </div>
    `,
})
export class TermsOfUseComponent {}
