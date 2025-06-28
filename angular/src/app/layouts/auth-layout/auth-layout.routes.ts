import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "./auth-layout.component";

export const AUTH_ROUTES: Routes = [
    {
        path: "",
        component: AuthLayoutComponent,
        children: [
            {
                path: "signin",
                loadComponent: () => import("../../pages/auth/signin/signin.component").then((m) => m.SigninComponent),
            },
            {
                path: "signup",
                loadComponent: () => import("../../pages/auth/signup/signup.component").then((m) => m.SignupComponent),
            },
            {
                path: "forgot-password",
                loadComponent: () => import("../../pages/auth/forgot-password/forgot-password.component").then((m) => m.ForgotPasswordComponent),
            },
            {
                path: "change-password",
                loadComponent: () => import("../../pages/auth/change-password/change-password.component").then((m) => m.ChangePasswordComponent),
            },
            {
                path: "signup-success",
                loadComponent: () => import("../../pages/auth/signup-success/signup-success.component").then((m) => m.SignupSuccessComponent),
            },
        ],
    },
];
