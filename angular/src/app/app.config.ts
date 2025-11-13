import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { withRouterConfig, RouterConfigOptions, provideRouter } from "@angular/router";
import { provideDaterangepickerLocale } from "ngx-daterangepicker-bootstrap";
import { provideHttpClient } from "@angular/common/http";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withRouterConfig({ scrollPositionRestoration: "enabled", onSameUrlNavigation: "reload" } as RouterConfigOptions)),
        provideHttpClient(),
        provideDaterangepickerLocale({
            separator: " - ",
            applyLabel: "Okay",
        }),
    ],
};
