import { Injectable, inject } from "@angular/core";
import {
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    updatePassword,
    User,
    UserCredential,
    AuthError,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private router = inject(Router);
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

    constructor() {
        // Listen to auth state changes
        onAuthStateChanged(auth, (user) => {
            this.currentUserSubject.next(user);
        });
    }

    /**
     * Get the current user
     */
    get currentUser(): User | null {
        return this.currentUserSubject.value;
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated(): boolean {
        return this.currentUser !== null;
    }

    /**
     * Sign up a new user with email and password
     */
    async signup(email: string, password: string): Promise<UserCredential> {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential;
        } catch (error) {
            throw this.handleAuthError(error as AuthError);
        }
    }

    /**
     * Sign in an existing user with email and password
     */
    async signin(email: string, password: string): Promise<UserCredential> {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential;
        } catch (error) {
            throw this.handleAuthError(error as AuthError);
        }
    }

    /**
     * Sign out the current user
     */
    async logout(): Promise<void> {
        try {
            await signOut(auth);
            this.router.navigate(["/auth/signin"]);
        } catch (error) {
            throw this.handleAuthError(error as AuthError);
        }
    }

    /**
     * Send password reset email
     */
    async resetPassword(email: string): Promise<void> {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            throw this.handleAuthError(error as AuthError);
        }
    }

    /**
     * Update user password
     */
    async changePassword(newPassword: string): Promise<void> {
        try {
            const user = auth.currentUser;
            if (!user) {
                throw new Error("No user is currently signed in");
            }
            await updatePassword(user, newPassword);
        } catch (error) {
            throw this.handleAuthError(error as AuthError);
        }
    }

    /**
     * Handle Firebase authentication errors
     */
    private handleAuthError(error: AuthError): Error {
        let message = "An error occurred during authentication";

        switch (error.code) {
            case "auth/email-already-in-use":
                message = "This email is already registered. Please sign in instead.";
                break;
            case "auth/invalid-email":
                message = "Invalid email address format.";
                break;
            case "auth/operation-not-allowed":
                message = "Email/password authentication is not enabled.";
                break;
            case "auth/weak-password":
                message = "Password is too weak. Please use at least 6 characters.";
                break;
            case "auth/user-disabled":
                message = "This account has been disabled.";
                break;
            case "auth/user-not-found":
                message = "No account found with this email address.";
                break;
            case "auth/wrong-password":
                message = "Incorrect password. Please try again.";
                break;
            case "auth/invalid-credential":
                message = "Invalid email or password. Please check your credentials.";
                break;
            case "auth/too-many-requests":
                message = "Too many failed attempts. Please try again later.";
                break;
            case "auth/network-request-failed":
                message = "Network error. Please check your internet connection.";
                break;
            default:
                message = error.message || "An unexpected error occurred.";
        }

        return new Error(message);
    }
}
