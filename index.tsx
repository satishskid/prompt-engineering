
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      afterSignOutUrl="/"
      appearance={{
        elements: {
          // Hide phone number related elements
          formFieldInput__phoneNumber: "display: none !important",
          formFieldLabel__phoneNumber: "display: none !important",
          formFieldAction__phoneNumber: "display: none !important",
          // Style Google button prominently
          socialButtonsBlockButton: "width: 100%; margin-bottom: 1rem; border: 2px solid #4285f4; background-color: #fff; color: #333;",
          socialButtonsBlockButtonText: "font-semibold",
          // Hide phone-based authentication tabs
          headerSubtitle: "display: none",
          identityPreviewText: "font-medium text-slate-600",
          // Style the form
          formButtonPrimary: "bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded-md transition-colors",
          card: "shadow-lg border-0 rounded-lg",
          headerTitle: "text-2xl font-bold text-slate-800 mb-2",
        },
        layout: {
          socialButtonsPlacement: "top",
          showOptionalFields: false
        },
        variables: {
          colorPrimary: "#0ea5e9",
          colorTextOnPrimaryBackground: "#ffffff"
        }
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
