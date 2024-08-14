import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { ThemeProvider } from "./context/theme-provider";
import AuthProviderWithNavigate from "./features/auth/context/auth-provider-with-navigate";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProviderWithNavigate>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AuthProviderWithNavigate>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
