import { Component, AfterViewInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { DatePickerInlineComponent } from "../../../components/date-picker/date-picker-inline.component";

@Component({
    selector: "app-add-invoice",
    standalone: true,
    imports: [RouterLink, DatePickerInlineComponent],
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
                                <a routerLink="/app/billing">Billings</a>
                            </li>
                            <li class="breadcrumb-item active bi" aria-current="page">Add Invoice</li>
                        </ol>
                    </nav>
                    <h5>Add Invoice</h5>
                </div>
                <div class="col-auto py-1"></div>
            </div>
        </div>

        <!-- content -->
        <div class="container mt-4" id="main-content">
            <!-- add appointment fields -->

            <div class="row ">
                <div class="col-12 col-md-12 col-lg-12 col-xl-8 col-xxl-9">
                    <div class="row ">
                        <div class="col-12 col-xl-6">
                            <!-- provider -->
                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-header">
                                    <h6>Provider Details</h6>
                                </div>
                                <div class="card-body ">
                                    <div class="input-group search-wrap rounded w-100 mb-3">
                                        <span class="input-group-text bg-none "><i class="bi bi-search"></i></span>
                                        <input type="text" class="form-control" id="searchdoctorname" placeholder="Search provider" value="John" />
                                    </div>

                                    <!-- search result -->
                                    <div class="row gx-3 gx-lg-4" id="resultdoctor">
                                        <div class="col-12">
                                            <div class="card adminuiux-card border">
                                                <div class="card-body py-2">
                                                    <div class="row gx-3 gx-lg-4 justify-content-center align-items-center">
                                                        <div class="col-auto py-2">
                                                            <div class="avatar avatar-40 rounded-circle coverimg">
                                                                <img src="assets/img/modern-ai-image/user-8.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="col py-2">
                                                            <p class="h6 mb-1 ">
                                                                <span class="position-relative"
                                                                    >John Williams
                                                                    <span class="position-absolute top-50 start-100 translate-middle p-1 bg-success rounded-circle mx-2">
                                                                        <span class="visually-hidden">online</span>
                                                                    </span>
                                                                </span>
                                                            </p>
                                                            <p class="opacity-75 small mb-1">
                                                                General Expert
                                                                <span class="badge badge-sm badge-light rounded-pill text-bg-warning"> 5 <i class="bi bi-star-fill"></i> </span>
                                                            </p>
                                                        </div>

                                                        <div class="col-auto text-end py-2">
                                                            <button class="btn btn-square btn-outline-danger">
                                                                <i class="bi bi-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-xl-6">
                            <!-- customer details -->
                            <div class="card adminuiux-card mb-3 mb-lg-4">
                                <div class="card-header">
                                    <h6>Customer Details</h6>
                                </div>
                                <div class="card-body ">
                                    <div class="input-group search-wrap rounded w-100 mb-3">
                                        <span class="input-group-text bg-none "><i class="bi bi-search"></i></span>
                                        <input type="text" class="form-control" id="searchpatientname" placeholder="Search Patient" value="Alex" />
                                        <a class="btn btn-theme collapsed" data-bs-toggle="collapse" data-bs-target=".patinetcollapse" role="button" aria-expanded="false" aria-controls="addnewpatient">
                                            <span class="collapse patinetcollapse show">New</span>
                                            <span class="collapse patinetcollapse">Existing</span>
                                        </a>
                                    </div>

                                    <!-- search result -->
                                    <div class="row gx-3 gx-lg-4 patinetcollapse collapse show " id="resultpatient">
                                        <div class="col-12">
                                            <div class="card adminuiux-card border">
                                                <div class="card-body py-2">
                                                    <div class="row gx-3 gx-lg-4 justify-content-center align-items-center">
                                                        <div class="col-auto py-2">
                                                            <div class="avatar avatar-40 rounded-circle coverimg">
                                                                <img src="assets/img/modern-ai-image/user-5.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div class="col py-2">
                                                            <p class="h6 mb-1 ">
                                                                <span class="position-relative">
                                                                    Alexa John
                                                                    <span class="position-absolute top-50 start-100 translate-middle p-1 bg-success rounded-circle mx-2">
                                                                        <span class="visually-hidden">online</span>
                                                                    </span>
                                                                </span>
                                                            </p>
                                                            <p class="opacity-75 small mb-1">United States</p>
                                                            <p class="opacity-75 small mb-0">Last Visit: 26 July 2024</p>
                                                        </div>
                                                        <div class="col-auto text-end py-2">
                                                            <button class="btn btn-square btn-outline-danger">
                                                                <i class="bi bi-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- new collapse-->
                    <div class="collapse patinetcollapse" id="addnewpatient">
                        <div class="card adminuiux-card mb-3 mb-lg-4">
                            <div class="card-body">
                                <!-- Details -->
                                <p class="h6 mb-3">New Details</p>
                                <div class="row mb-1">
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="patientname" placeholder="Enter First Name" value="Alex" />
                                            <label for="patientname">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="patientlname" placeholder="Enter Middle Name" />
                                            <label for="patientlname">Middle Name (Optional)</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="patientlname2" placeholder="Enter Last Name" value="Smith" />
                                            <label for="patientlname2">Last Name</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="dobdate" placeholder="Select Birthday" />
                                            <label for="dobdate">Select Birthday</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="phoneon" placeholder="Enter phone" value="+91 4152 21A45488004" />
                                            <label for="phoneon">Enter Phone</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="email" class="form-control" id="emailaddresson" placeholder="Enter Email Address" value="alex.smith@tgmail.com" />
                                            <label for="emailaddresson">Email Address</label>
                                        </div>
                                    </div>
                                </div>
                                <!-- Address -->
                                <p class="h6 mb-3">New Address</p>
                                <div class="row mb-1">
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="house" placeholder="Enter house number" value="12" />
                                            <label for="house">House Number</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="street" placeholder="Enter Street" value="Featherstone Street" />
                                            <label for="street">Street</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="locality" placeholder="Enter locality" value="Ward" />
                                            <label for="locality">Locality</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="town" placeholder="Enter Town" value="London" />
                                            <label for="town">Town</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="city" placeholder="Enter City" value="London" />
                                            <label for="city">City</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="postcode" placeholder="Enter Postcode" value="NG25 5AY" />
                                            <label for="postcode">Postcode</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6 col-xl-4">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="country" placeholder="Enter Country" value="United Kingdom" />
                                            <label for="country">Country</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- product -->
                    <div class="card adminuiux-card mb-3 mb-lg-4">
                        <div class="card-header">
                            <h6>Product Details</h6>
                        </div>
                        <div class="card-body pb-0">
                            <!-- -->
                            <div class="row gx-3 gx-lg-4 align-items-center mb-3">
                                <div class="col">
                                    <div class="input-group input-group-md search-wrap rounded w-100">
                                        <span class="input-group-text bg-none "><i class="bi bi-search"></i></span>
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="searchservicename" placeholder="Search Product" value="Service 2" />
                                            <label for="searchservicename">Search Product</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- selected services -->
                            <div class="card adminuiux-card border mb-3">
                                <div class="card-body py-2">
                                    <div class="row gx-3 gx-lg-4 justify-content-center align-items-center">
                                        <div class="col py-2">
                                            <p class="h6 mb-1 ">
                                                <span class="position-relative">Consultation </span>
                                            </p>
                                            <p class="opacity-75 small">30min</p>
                                        </div>
                                        <div class="col-auto text-end py-2">
                                            <p class="h6 mb-0">$ 30.00</p>
                                            <p class="opacity-75 small">$ 2.00 Tax</p>
                                        </div>
                                        <div class="col-auto text-end py-2">
                                            <button class="btn btn-square btn-outline-danger">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card adminuiux-card border mb-3">
                                <div class="card-body py-2">
                                    <div class="row gx-3 gx-lg-4 justify-content-center align-items-center">
                                        <div class="col py-2">
                                            <p class="h6 mb-1 ">
                                                <span class="position-relative">Tea</span>
                                            </p>
                                            <p class="opacity-75 small">15min</p>
                                        </div>
                                        <div class="col-auto text-end py-2">
                                            <p class="h6 mb-0">$ 50.00</p>
                                            <p class="opacity-75 small">$ 4.00 Tax</p>
                                        </div>
                                        <div class="col-auto text-end py-2">
                                            <button class="btn btn-square btn-outline-danger">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-lg-12 col-xl-4 col-xxl-3">
                    <div class="row gx-3 gx-lg-4 mb-4">
                        <!-- inline calendar -->
                        <div class="col-12 col-sm-6 col-xl-12 mb-4">
                            <h6 class="mb-3">Select Date</h6>
                            <div class="text-center">
                                <app-date-picker-inline class="d-block mx-auto"></app-date-picker-inline>
                            </div>
                        </div>
                        <!-- appointment timings -->
                        <div class="col-12 col-sm-6 col-xl-12 mb-4">
                            <h6 class="mb-3">Select Time</h6>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1 active">
                                <span>11:00 AM</span>
                            </button>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1"><span>11:30 AM</span></button>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1"><span>12:00 PM</span></button>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1"><span>12:30 PM</span></button>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1"><span>1:00 PM</span></button>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1"><span>1:30 PM</span></button>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1"><span>2:00 PM</span></button>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1"><span>2:30 PM</span></button>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1"><span>3:00 PM</span></button>
                            <button class="btn btn-sm btn-outline-theme mb-2 me-1"><span>3:30 PM</span></button>
                        </div>
                        <div class="col-12">
                            <h6 class="mb-3">Payment Details</h6>
                        </div>
                        <div class="col-auto">
                            <h5 class="mb-1">$ 80.00</h5>
                            <p class="text-secondary small mb-0">Sub Total</p>
                        </div>
                        <div class="col-auto">
                            <h5 class="mb-1">$ 6.00</h5>
                            <p class="text-secondary small mb-0">Total Tax</p>
                        </div>
                        <div class="col text-end ms-auto">
                            <h5 class="mb-1 text-success">$ 86.00</h5>
                            <p class="text-secondary small mb-0">Total Payable</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- save and cancel buttons -->
            <div class="mb-3">
                <div class="row gx-3 gx-lg-4">
                    <div class="col">
                        <a routerLink="/app/billing" class="btn btn-theme my-2"><i class="bi bi-floppy me-2"></i>Create</a>
                        <button class="btn btn-outline-theme my-2 mx-2">Save as draft</button>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-link my-2">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    `,
})
export class AddInvoiceComponent {
    ngAfterViewInit() {}
}
