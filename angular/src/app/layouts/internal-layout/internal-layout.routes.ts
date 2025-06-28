import { Routes } from "@angular/router";
import { InternalLayoutComponent } from "./internal-layout.component";

export const INTERNAL_ROUTES: Routes = [
    {
        path: "",
        component: InternalLayoutComponent,
        children: [
            {
                path: "dashboard",
                loadComponent: () => import("../../pages/app/dashboard/dashboard.component").then((m) => m.DashboardComponent),
            },
            {
                path: "onboarding",
                loadComponent: () => import("../../pages/app/onboarding/onboarding.component").then((m) => m.OnboardingComponent),
            },
            {
                path: "onboarding2",
                loadComponent: () => import("../../pages/app/onboarding/onboarding2.component").then((m) => m.Onboarding2Component),
            },
            {
                path: "onboarding3",
                loadComponent: () => import("../../pages/app/onboarding/onboarding3.component").then((m) => m.Onboarding3Component),
            },
            {
                path: "investment-plans",
                loadComponent: () => import("../../pages/app/investment-funds/investment-plans.component").then((m) => m.InvestmentPlansComponent),
            },
            {
                path: "mutual-funds",
                loadComponent: () => import("../../pages/app/investment-funds/mutual-funds.component").then((m) => m.MutualFundsComponent),
            },
            {
                path: "mutual-fund-details",
                loadComponent: () => import("../../pages/app/investment-funds/mutual-fund-details.component").then((m) => m.MutualFundDetailsComponent),
            },
            {
                path: "explore",
                loadComponent: () => import("../../pages/app/investment-funds/explore.component").then((m) => m.ExploreComponent),
            },
            {
                path: "calculator",
                loadComponent: () => import("../../pages/app/calculators/calculator.component").then((m) => m.CalculatorComponent),
            },
            {
                path: "transaction",
                loadComponent: () => import("../../pages/app/investment-funds/transaction.component").then((m) => m.TransactionComponent),
            },
            {
                path: "add-invoice",
                loadComponent: () => import("../../pages/app/investment-funds/add-invoice.component").then((m) => m.AddInvoiceComponent),
            },
            {
                path: "portfolio",
                loadComponent: () => import("../../pages/app/investment-funds/myportfolio.component").then((m) => m.MyportfolioComponent),
            },
            {
                path: "search-mutual-funds",
                loadComponent: () => import("../../pages/app/investment-funds/search-mutual-funds.component").then((m) => m.SearchMutualFundsComponent),
            },
            {
                path: "search-result",
                loadComponent: () => import("../../pages/app/investment-funds/search-result.component").then((m) => m.SearchResultComponent),
            },
            {
                path: "statistics",
                loadComponent: () => import("../../pages/app/dashboard/statistics.component").then((m) => m.StatisticsComponent),
            },
            {
                path: "company-shares",
                loadComponent: () => import("../../pages/app/investment-funds/company-shares.component").then((m) => m.CompanySharesComponent),
            },
            {
                path: "company-share-details",
                loadComponent: () => import("../../pages/app/investment-funds/company-share-details.component").then((m) => m.CompanyShareDetailsComponent),
            },
            {
                path: "loan-list",
                loadComponent: () => import("../../pages/app/loans/myloan.component").then((m) => m.MyloanComponent),
            },
            {
                path: "loan-details",
                loadComponent: () => import("../../pages/app/loans/loan-details.component").then((m) => m.LoanDetailsComponent),
            },
            {
                path: "loan-request-1",
                loadComponent: () => import("../../pages/app/loans/loan-request-1.component").then((m) => m.LoanRequest1Component),
            },
            {
                path: "loan-request-2",
                loadComponent: () => import("../../pages/app/loans/loan-request-2.component").then((m) => m.LoanRequest2Component),
            },
            {
                path: "loan-request-3",
                loadComponent: () => import("../../pages/app/loans/loan-request-3.component").then((m) => m.LoanRequest3Component),
            },
            {
                path: "loan-request-success",
                loadComponent: () => import("../../pages/app/loans/loan-request-success.component").then((m) => m.LoanRequestSuccessComponent),
            },
            {
                path: "loan-under-process-details",
                loadComponent: () => import("../../pages/app/loans/loan-under-process.component").then((m) => m.LoanUnderProgressComponent),
            },
            {
                path: "deposit",
                loadComponent: () => import("../../pages/app/investment-funds/deposit.component").then((m) => m.DepositComponent),
            },
            {
                path: "contacts",
                loadComponent: () => import("../../pages/app/contacts/contacts.component").then((m) => m.ContactsComponent),
            },
            {
                path: "wallet",
                loadComponent: () => import("../../pages/app/wallet/wallet-summary.component").then((m) => m.WalletSummaryComponent),
            },
            {
                path: "goals",
                loadComponent: () => import("../../pages/app/goals/goals.component").then((m) => m.GoalsComponent),
            },
            {
                path: "create-goal",
                loadComponent: () => import("../../pages/app/goals/create-goal1.component").then((m) => m.CreateGoal1Component),
            },
            {
                path: "create-goal2",
                loadComponent: () => import("../../pages/app/goals/create-goal2.component").then((m) => m.CreateGoal2Component),
            },
            {
                path: "create-goal3",
                loadComponent: () => import("../../pages/app/goals/create-goal3.component").then((m) => m.CreateGoal3Component),
            },
            {
                path: "wallet-addmoney",
                loadComponent: () => import("../../pages/app/wallet/wallet-addmoney.component").then((m) => m.WalletAddmoneyComponent),
            },
            {
                path: "wallet-sendmoney",
                loadComponent: () => import("../../pages/app/wallet/wallet-sendmoney.component").then((m) => m.WalletSendmoneyComponent),
            },
            {
                path: "wallet-receivemoney",
                loadComponent: () => import("../../pages/app/wallet/wallet-receivemoney.component").then((m) => m.WalletReceivemoneyComponent),
            },
            {
                path: "wallet-receivemoney-raised",
                loadComponent: () => import("../../pages/app/wallet/wallet-receivemoney-raised.component").then((m) => m.WalletReceivemoneyRaisedComponent),
            },
            {
                path: "wallet-qrcode",
                loadComponent: () => import("../../pages/app/wallet/wallet-qrcode.component").then((m) => m.WalletQrcodeComponent),
            },
            {
                path: "wallet-myqrcode",
                loadComponent: () => import("../../pages/app/wallet/wallet-myqrcode.component").then((m) => m.WalletMyqrcodeComponent),
            },
            {
                path: "wallet-currencyexchange",
                loadComponent: () => import("../../pages/app/wallet/wallet-currencyexchange.component").then((m) => m.WalletCurrencyexchangeComponent),
            },
            {
                path: "wallet-transactions",
                loadComponent: () => import("../../pages/app/wallet/wallet-transactions.component").then((m) => m.WalletTransactionsComponent),
            },
            {
                path: "wallet-payment-success",
                loadComponent: () => import("../../pages/app/wallet/wallet-payment-success.component").then((m) => m.WalletPaymentSuccessComponent),
            },
            {
                path: "profile",
                loadComponent: () => import("../../pages/app/profile/profile.component").then((m) => m.ProfileComponent),
            },
            {
                path: "profile-settings",
                loadComponent: () => import("../../pages/app/profile/profile-settings.component").then((m) => m.ProfileSettingsComponent),
            },
            {
                path: "profile-settings-users",
                loadComponent: () => import("../../pages/app/profile/profile-settings-users.component").then((m) => m.ProfileSettingsUsersComponent),
            },
            {
                path: "profile-settings-timing",
                loadComponent: () => import("../../pages/app/profile/profile-settings-timing.component").then((m) => m.ProfileSettingsTimingComponent),
            },
            {
                path: "profile-settings-payment",
                loadComponent: () => import("../../pages/app/profile/profile-settings-payment.component").then((m) => m.ProfileSettingsPaymentComponent),
            },
            {
                path: "profile-settings-contact",
                loadComponent: () => import("../../pages/app/profile/profile-settings-contact.component").then((m) => m.ProfileSettingsContactComponent),
            },
            {
                path: "profile-subscription",
                loadComponent: () => import("../../pages/app/profile/profile-subscription.component").then((m) => m.ProfileSubscriptionComponent),
            },
            {
                path: "profile-subscription-plans",
                loadComponent: () => import("../../pages/app/profile/profile-subscription-plans.component").then((m) => m.ProfileSubscriptionPlansComponent),
            },
            {
                path: "referral",
                loadComponent: () => import("../../pages/app/profile/referral.component").then((m) => m.ReferralComponent),
            },
            {
                path: "kyc-1",
                loadComponent: () => import("../../pages/app/kyc/kyc-1.component").then((m) => m.Kyc1Component),
            },
            {
                path: "kyc-2",
                loadComponent: () => import("../../pages/app/kyc/kyc-2.component").then((m) => m.Kyc2Component),
            },
            {
                path: "kyc-3",
                loadComponent: () => import("../../pages/app/kyc/kyc-3.component").then((m) => m.Kyc3Component),
            },
            {
                path: "inbox",
                loadComponent: () => import("../../pages/app/chat-inbox/inbox.component").then((m) => m.InboxComponent),
            },
            {
                path: "compose-mail",
                loadComponent: () => import("../../pages/app/chat-inbox/compose-mail.component").then((m) => m.ComposeMailComponent),
            },
            {
                path: "chat",
                loadComponent: () => import("../../pages/app/chat-inbox/chat.component").then((m) => m.ChatComponent),
            },
            {
                path: "aboutus",
                loadComponent: () => import("../../pages/app/company/aboutus.component").then((m) => m.AboutUsComponent),
            },
            {
                path: "contactus",
                loadComponent: () => import("../../pages/app/company/contactus.component").then((m) => m.ContactUsComponent),
            },
            {
                path: "help-center",
                loadComponent: () => import("../../pages/app/company/help-center.component").then((m) => m.HelpCenterComponent),
            },
            {
                path: "privacy-policy",
                loadComponent: () => import("../../pages/app/company/privacy-policy.component").then((m) => m.PrivacyPolicyComponent),
            },
            {
                path: "terms-of-use",
                loadComponent: () => import("../../pages/app/company/terms-of-use.component").then((m) => m.TermsOfUseComponent),
            },
            {
                path: "blogs",
                loadComponent: () => import("../../pages/app/blogs/blogs.component").then((m) => m.BlogsComponent),
            },
            {
                path: "add-blog",
                loadComponent: () => import("../../pages/app/blogs/add-blog.component").then((m) => m.AddBlogComponent),
            },
            {
                path: "blog-details",
                loadComponent: () => import("../../pages/app/blogs/blog-details.component").then((m) => m.BlogDetailsComponent),
            },
            {
                path: "add-ticket",
                loadComponent: () => import("../../pages/app/support/add-ticket.component").then((m) => m.AddTicketComponent),
            },
            {
                path: "ticket-list",
                loadComponent: () => import("../../pages/app/support/ticket-list.component").then((m) => m.TicketListComponent),
            },
            {
                path: "billing",
                loadComponent: () => import("../../pages/app/investment-funds/billing.component").then((m) => m.BillingComponent),
            },
            {
                path: "earning",
                loadComponent: () => import("../../pages/app/investment-funds/earning.component").then((m) => m.EarningComponent),
            },
            {
                path: "users",
                loadComponent: () => import("../../pages/app/profile/users.component").then((m) => m.UsersComponent),
            },
            {
                path: "pages",
                loadComponent: () => import("../../pages/app/pages.component").then((m) => m.PagesComponent),
            },
            {
                path: "personalization",
                loadComponent: () => import("../../pages/app/personalization/personalization.component").then((m) => m.PersonalizationComponent),
            },
        ],
    },
];
