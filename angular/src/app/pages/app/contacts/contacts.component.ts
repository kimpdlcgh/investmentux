import { Component } from "@angular/core";

@Component({
    selector: "app-contacts",
    standalone: true,
    imports: [],
    template: `
        <!-- content -->
        <div class="container mt-3 mt-lg-4" id="main-content">
            <div class="row gx-3 gx-lg-4 align-items-center mb-3 mb-lg-4">
                <div class="col">
                    <div class="input-group">
                        <span class="input-group-text text-secondary">
                            <i class="bi bi-search"></i>
                        </span>
                        <input type="text" class="form-control" placeholder="Search contact..." />
                    </div>
                </div>
                <div class="col-auto">
                    <button class="btn btn-square btn-link" data-bs-toggle="collapse" data-bs-target="#invite"><i class="bi bi-plus-lg"></i></button>
                </div>
            </div>
            <div class="collapse" id="invite">
                <div class="row gx-3 gx-lg-4 align-items-center mb-3 mb-lg-4">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Enter email or phone number..." />
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-theme">Invite</button>
                    </div>
                </div>
            </div>
            <ul class="list-group list-group-flush rounded mb-3 mb-lg-4">
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/lion-2.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Henal K</p>
                            <p class="text-secondary small">henal&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-1" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-1"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-6-kid.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Virat Pitt</p>
                            <p class="text-secondary small">viratpitt&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-2" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-2"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-1-kid.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Junnaid</p>
                            <p class="text-secondary small">junnaid&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-3" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-3"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-4.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Nargis</p>
                            <p class="text-secondary small">nargis&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-4" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-4"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Kamal</p>
                            <p class="text-secondary small">kamal&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-5" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-5"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user5-kid.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Umar A</p>
                            <p class="text-secondary small">umara&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-6" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-6"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Trisha</p>
                            <p class="text-secondary small">trisha&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-7" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-7"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Kevin</p>
                            <p class="text-secondary small">kevin&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-8" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-8"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-7-kid.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Rose J</p>
                            <p class="text-secondary small">rosej&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-9" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-9"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-7.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Kanishq</p>
                            <p class="text-secondary small">kanisq&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-10" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-10"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-2.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Jimmy S</p>
                            <p class="text-secondary small">jimmy&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-11" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-11"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-1-kid.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">John Doe</p>
                            <p class="text-secondary small">johndoe&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-12" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-12"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Mandeep</p>
                            <p class="text-secondary small">mandeep&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-13" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-13"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-1.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Selena</p>
                            <p class="text-secondary small">selena&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-14" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-14"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user5-kid.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Manoj</p>
                            <p class="text-secondary small">manoj&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-15" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-15"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-6.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Monalisa</p>
                            <p class="text-secondary small">monalisa&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-16" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-16"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Mike</p>
                            <p class="text-secondary small">mike&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-17" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-17"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-7-kid.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">ruksaan</p>
                            <p class="text-secondary small">ruksaan&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-18" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-18"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-7.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Rosan</p>
                            <p class="text-secondary small">rosan&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-19" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-19"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="row gx-3 gx-lg-4 align-items-center">
                        <div class="col-auto">
                            <figure class="avatar avatar-40 rounded coverimg align-middle">
                                <img src="assets/img/modern-ai-image/user-2.jpg" alt="" />
                            </figure>
                        </div>
                        <div class="col">
                            <p class="mb-0 fw-medium">Jemila</p>
                            <p class="text-secondary small">jemila&#64;gmailtest.com</p>
                        </div>
                        <div class="col-auto">
                            <input type="checkbox" class="btn-check" id="contact-20" />
                            <label class="btn btn-square btn-link rounded-circle" for="contact-20"><i class="bi bi-check-lg"></i></label>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    `,
})
export class ContactsComponent {}
