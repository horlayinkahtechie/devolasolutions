// Shared between login/page.jsx (stores it) and login/complete/page.jsx
// (reads it back) to complete Firebase's email-link sign-in without asking
// the visitor to retype their email, when it's the same browser.
export const PENDING_EMAIL_STORAGE_KEY = "edu:pendingSignInEmail";
