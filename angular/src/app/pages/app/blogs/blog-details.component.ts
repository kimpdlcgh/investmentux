import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";
register();

@Component({
    selector: "app-blog-details",
    standalone: true,
    imports: [RouterLink],
    template: ` <!-- breadcrumb -->
        <div class="container-fluid mt-3 mt-lg-4">
            <div class="row gx-3 gx-lg-4 align-items-center">
                <div class="col col-sm">
                    <nav aria-label="breadcrumb" class="mb-2">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/dashboard"><i class="bi bi-house-door me-1 fs-14"></i> Dashboard</a>
                            </li>
                            <li class="breadcrumb-item bi">
                                <a routerLink="/app/blogs">Blogs</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Blog Details</li>
                        </ol>
                    </nav>
                    <h5>Blog Details</h5>
                </div>
                <div class="col-auto py-1">
                    <a routerLink="/app/add-blog" class="btn btn-theme">
                        <i class="bi bi-file-earmark-plus me-1"></i>
                        <span class="d-none d-md-inline-block">Post</span>
                    </a>
                </div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <!-- Welcome banner-->
            <div class="card adminuiux-card bg-theme-1 position-relative overflow-hidden mb-3">
                <div class="coverimg h-100 w-100 start-0 top-0 position-absolute z-index-0 opacity-50">
                    <img src="assets/img/modern-ai-image/modern-bg-1.jpg" alt="" />
                </div>
                <div class="card-body z-index-1 p-lg-4 p-xl-5 position-relative">
                    <h2>Investment and Financial Freedom Software App for Investments. Best for investors and individual.</h2>
                    <p class="my-3">Connects and integrates all your investment sources - Website, Leads, Mobile, and reception desk. Everything is in a central appointment management software! Set up appointments for your patients in the most effective way and manage record of patient, set reminder, sent messages etc. with the help of the Investment and Financial Freedom Software App.</p>
                    <p>
                        <span class="badge badge-light rounded-pill bg-pink text-white">Investment Revolution</span>
                        <span class="badge badge-light rounded-pill bg-yellow-subtle text-orange">Featured</span>
                    </p>
                    <p>December 25, 2024 by <a href="javascript:void(0)" class="text-white">Adminuiux</a></p>
                </div>
            </div>

            <!-- blog content -->
            <div class="row gx-3 gx-lg-4 mb-4">
                <div class="col-12 col-md-8">
                    <!-- card content -->
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-body">
                            <article class="blog-post">
                                <h2>Investment and Financial Freedom Software App for Investments. Best for investors and individual.</h2>
                                <p class="text-secondary">December 25, 2024 by <a href="javascript:void(0)" class="text-white">Adminuiux</a></p>

                                <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>
                                <hr />
                                <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                                <h2>Blockquotes</h2>
                                <p>This is an example blockquote in action:</p>
                                <blockquote class="blockquote">
                                    <p>"Quoted text goes here."</p>
                                </blockquote>
                                <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                                <h3>Example lists</h3>
                                <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
                                <ul>
                                    <li>First list item</li>
                                    <li>Second list item with a longer description</li>
                                    <li>Third list item to close it out</li>
                                </ul>
                                <p>And this is an ordered list:</p>
                                <ol>
                                    <li>First list item</li>
                                    <li>Second list item with a longer description</li>
                                    <li>Third list item to close it out</li>
                                </ol>
                                <p>And this is a definition list:</p>
                                <dl>
                                    <dt>HyperText Markup Language (HTML)</dt>
                                    <dd>The language used to describe and define the content of a Web page</dd>
                                    <dt>Cascading Style Sheets (CSS)</dt>
                                    <dd>Used to describe the appearance of Web content</dd>
                                    <dt>JavaScript (JS)</dt>
                                    <dd>The programming language used to build advanced Web sites and applications</dd>
                                </dl>
                                <h2>Inline HTML elements</h2>
                                <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
                                <ul>
                                    <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
                                    <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
                                    <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
                                    <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
                                    <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
                                    <li>
                                        Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript
                                        <sub>text</sub>
                                        uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.
                                    </li>
                                </ul>
                                <p>Most of these elements are styled by browsers with few modifications on our part.</p>
                                <h2>Heading</h2>
                                <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                                <h4>Sub-heading</h4>
                                <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                                <pre><code>Example code block</code></pre>
                                <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                            </article>
                        </div>
                    </div>

                    <!-- navigation -->
                    <div class="row gx-3 gx-lg-4">
                        <div class="col-12 col-md-6 py-3">
                            <a class="style-none" href="#">
                                <div class="row gx-3 gx-lg-4 align-items-center">
                                    <div class="col-auto">
                                        <i class="bi bi-chevron-left"></i>
                                    </div>
                                    <div class="col-auto">
                                        <div class="avatar avatar-60 rounded coverimg">
                                            <img src="assets/img/modern-ai-image/taxi-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <h6 class="text-truncated mb-1">Awesome UI design to fall in love</h6>
                                        <p class="text-truncated mb-2">Just feeling like another world exploring at</p>
                                        <p class="text-secondary small">Previous</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-12 col-md-6 py-3 text-end">
                            <a class="style-none" href="#">
                                <div class="row align-items-center justify-content-end">
                                    <div class="col-7">
                                        <h6 class="text-truncated mb-1">More you see more you will get amazed with template interface design</h6>
                                        <p class="text-truncated mb-2">Just feeling like another world exploring at</p>
                                        <p class="text-secondary small">Next</p>
                                    </div>
                                    <div class="col-auto">
                                        <div class="avatar avatar-60 rounded coverimg">
                                            <img src="assets/img/modern-ai-image/bus-7.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4">
                    <div class="position-sticky" style="top: 5.5rem;">
                        <div class="card adminuiux-card mb-3 mb-lg-4">
                            <div class="card-body">
                                <h5 class="mb-3">About</h5>
                                <p>AdminUIUX is way better than any other template design in terms of user experience design and modern touch of experience design sense. More flexibility and customization available at with easy to develope</p>
                            </div>
                        </div>

                        <h6 class="mb-3">Recent posts</h6>
                        <ul class="list-unstyled mb-3">
                            <li class="pb-3">
                                <a class="style-none" href="#">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-80 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/modern-bg-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col" style="max-width: calc(100% - 110px);">
                                            <h6 class="text-dark text-truncated mb-1">Amazing UI UX design for industries standard to improve accessibility</h6>
                                            <p class="text-dark text-truncated mb-2">Just feeling like another world exploring at</p>
                                            <p class="text-secondary small">December 15, 2024</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="pb-3">
                                <a class="style-none" href="#">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-80 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/tree-18.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col" style="max-width: calc(100% - 110px);">
                                            <h6 class="text-dark text-truncated mb-1">I love the UI design and content flexibility provided by template</h6>
                                            <p class="text-dark text-truncated mb-2">Just feeling like another world exploring at</p>
                                            <p class="text-secondary small">August 27, 2024</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="pb-3">
                                <a class="style-none" href="#">
                                    <div class="row gx-3 gx-lg-4 align-items-center">
                                        <div class="col-auto">
                                            <div class="avatar avatar-80 rounded coverimg">
                                                <img src="assets/img/modern-ai-image/bus-7.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div class="col" style="max-width: calc(100% - 110px);">
                                            <h6 class="text-dark text-truncated mb-1">More you see more you will get amazed with template interface design</h6>
                                            <p class="text-dark text-truncated mb-2">Just feeling like another world exploring at</p>
                                            <p class="text-secondary small">July 20, 2024</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <h6 class="mb-3">Archives</h6>
                        <ol class="list-group adminuiux-list-group list-group-flush mb-3">
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">March 2025</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">February 2025</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">January 2025</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">December 2024</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">November 2024</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">October 2024</a></li>
                        </ol>

                        <h6 class="mb-3">Elsewhere</h6>
                        <ol class="list-group adminuiux-list-group list-group-flush mb-3">
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">GitHub</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">Twitter</a></li>
                            <li class="list-group-item bg-none"><a href="javascript:void(0)" class="style-none">Facebook</a></li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="text-center my-3">
                <h4 class="mb-0">More trending stories to cover</h4>
                <p class="text-secondary small mb-0">Stay up to date with latest trending topics.</p>
            </div>

            <!-- Top trending carousel -->
            <swiper-container slides-per-view="auto" space-between="16px" autoplay="true" class="swiper swipernav mb-3">
                <swiper-slide class="swiper-slide width-280">
                    <div class="card adminuiux-card position-relative overflow-hidden">
                        <div class="card-body z-index-1 p-xl-4 position-relative">
                            <p><span class="badge badge-sm badge-light rounded-pill bg-red text-white">Creative UI UX</span></p>
                            <p class="text-truncated h5">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</p>
                            <p class="text-secondary small mb-3">Connects and integrates all your appointment sources - Website, Leads, Mobile,</p>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <p>
                                        <a routerLink="/app/blog-details" class="btn btn-sm btn-theme theme-red">Read More <i class="bi bi-arrow-right"></i> </a>
                                    </p>
                                </div>
                                <div class="col-auto text-end">
                                    <p><span class="opacity-75">By:</span> Adminuiux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide width-280">
                    <div class="card adminuiux-card bg-success text-white position-relative overflow-hidden">
                        <div class="coverimg h-100 w-100 start-0 top-0 position-absolute z-index-0 opacity-25">
                            <img src="assets/img/modern-ai-image/tree-5.jpg" alt="" />
                        </div>
                        <div class=" card-body z-index-1 p-xl-4 position-relative">
                            <p><span class="badge badge-sm badge-light rounded-pill bg-green text-white">Appointment</span></p>
                            <p class="text-truncated h5">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</p>
                            <p class=" small mb-3">Connects and integrates all your appointment sources - Website, Leads, Mobile,</p>
                            <p>
                                <a routerLink="/app/blog-details" class="btn btn-sm btn-theme theme-green">Read More <i class="bi bi-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide width-280">
                    <div class="card adminuiux-card bg-success text-white position-relative overflow-hidden">
                        <div class="coverimg h-100 w-100 start-0 top-0 position-absolute z-index-0 opacity-50">
                            <img src="assets/img/modern-ai-image/tree-4.jpg" alt="" />
                        </div>
                        <div class="card-body z-index-1 p-xl-4 position-relative">
                            <p><span class="badge badge-sm badge-light rounded-pill bg-orange text-white">Medical Champ</span></p>
                            <p class="text-truncated h5">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</p>
                            <p class=" small mb-3">Connects and integrates all your appointment sources - Website, Leads, Mobile,</p>
                            <p>
                                <a routerLink="/app/blog-details" class="btn btn-sm btn-theme theme-orange">Read More <i class="bi bi-arrow-right"></i></a>
                            </p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide width-280">
                    <div class="card adminuiux-card position-relative overflow-hidden">
                        <div class="card-body z-index-1 p-xl-4 position-relative">
                            <p><span class="badge badge-sm badge-light rounded-pill bg-pink text-white">New to world</span></p>
                            <p class="text-truncated h5">Investment and Financial Freedom Software App for Investments. Best for investors and individual.</p>
                            <p class="text-secondary small mb-3">Connects and integrates all your appointment sources - Website, Leads, Mobile,</p>
                            <div class="row gx-3 gx-lg-4 align-items-center">
                                <div class="col">
                                    <p>
                                        <a routerLink="/app/blog-details" class="btn btn-sm btn-theme theme-red">Read More<i class="bi bi-arrow-right"></i> </a>
                                    </p>
                                </div>
                                <div class="col-auto text-end">
                                    <p><span class="opacity-75">By:</span> Adminuiux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>`,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogDetailsComponent {}
