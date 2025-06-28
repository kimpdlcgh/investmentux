import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { appConfig } from "./app/app.config";
import { routes } from "./app/app.routes";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
    providers: appConfig.providers, // Use the providers from appConfig
}).catch((err) => console.error(err));
