import { Component } from "@angular/core";

@Component({
    selector: "app-privacy-policy",
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
                            <li class="breadcrumb-item active bi" aria-current="page">Privacy Policy</li>
                        </ol>
                    </nav>
                    <h6>Privacy &amp; Cookie Policy</h6>
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

            <div class="row gx-3 gx-lg-4 justify-content-center mb-3 mb-lg-4">
                <div class="col-12 col-md-10 col-lg-8 mb-3 pb-lg-3">
                    <h5>Who we are</h5>
                    <p>Our website address is: https://www.adminuiux.com.</p>
                    <h5>What personal data we collect and why we collect it</h5>
                    <p><b>Comments:</b> When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.</p>
                    <p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                    <p><b>Media:</b> If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                    <p>
                        <b>Cookies:</b> If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you
                        close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data
                        and simply indicates the post ID of the article you just edited. It expires after 1 day.
                    </p>
                    <p>
                        <b>Embedded content from other websites:</b> Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have
                        an account and are logged in to that website.
                    </p>
                    <p>
                        <b>Analytics:</b> When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and
                        simply indicates the post ID of the article you just edited. It expires after 1 day.
                    </p>
                    <h5>How long we retain your data</h5>
                    <p>
                        If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can
                        also see and edit that information.
                    </p>
                    <h5>What rights you have over your data</h5>
                    <p>You can request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p>
                </div>
            </div>
        </div>
    `,
})
export class PrivacyPolicyComponent {}
