import { createClient } from "@supabase/supabase-js";
import "./style.css";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App container not found");
}

function renderLogin() {
  app.innerHTML = `
    <div class="app-shell">
      <div class="login-card">
        <div class="brand">
          <div class="brand-logo">L</div>
          <div>
            <h1>LOGE IT</h1>
            <p>Management System</p>
          </div>
        </div>

        <h2>Welcome back</h2>
        <p class="muted">Sign in to your management system.</p>

        <form id="login-form">
          <label>Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Sign in</button>

          <p id="login-message" class
