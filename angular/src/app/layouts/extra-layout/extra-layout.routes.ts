import { Routes } from "@angular/router";
import { ExtraLayoutComponent } from "./extra-layout.component";

export const EXTRA_ROUTES: Routes = [
    {
        path: "",
        component: ExtraLayoutComponent,
        children: [
            {
                path: "not-found",
                loadComponent: () => import("../../pages/extra/page-not-found/page-not-found.component").then((m) => m.PageNotFoundComponent),
            },
            {
                path: "not-found-2",
                loadComponent: () => import("../../pages/extra/page-not-found/page-not-found-2.component").then((m) => m.PageNotFound2Component),
            },
            {
                path: "not-found-3",
                loadComponent: () => import("../../pages/extra/page-not-found/page-not-found-3.component").then((m) => m.PageNotFound3Component),
            },
            {
                path: "under-construction",
                loadComponent: () => import("../../pages/extra/under-construction/under-construction.component").then((m) => m.UnderConstructionComponent),
            },
            {
                path: "coming-soon",
                loadComponent: () => import("../../pages/extra/coming-soon/coming-soon.component").then((m) => m.ComingSoonComponent),
            },
            {
                path: "**",
                loadComponent: () => import("../../pages/extra/page-not-found/page-not-found.component").then((m) => m.PageNotFoundComponent),
            },
        ],
    },
];
