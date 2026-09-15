import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const app = document.querySelector<HTMLDivElement>("#app")!;

function login() {
  app.innerHTML = `
    <div class="app-shell">
      <div class="login-card">
        <h1>LOGE IT</h1>
        <p>Management System</p>
        <h2>Welcome back</h2>
        <form id="login">
          <input id="email" type="email" placeholder="Email" required>
          <input id="password" type="password" placeholder="Password" required>
          <button>Sign in</button>
          <p id="msg"></p>
        </form>
      </div>
    </div>
  `;

  document.querySelector("#login")!.addEventListener("submit", async e => {
    e.preventDefault();

    const email = (document.querySelector("#email") as HTMLInputElement).value;
    const password = (document.querySelector("#password") as HTMLInputElement).value;
    const msg = document.querySelector("#msg")!;

    msg.textContent = "Signing in...";

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) msg.textContent = error.message;
  });
}

async function dashboard() {
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    login();
    return;
  }

  const { data: member } = await supabase
    .from("memberships")
    .select("company_id, role")
    .eq("user_id", user.id)
    .eq("active", true)
    .maybeSingle();

  if (!member) {
    app.innerHTML = `
      <div class="app-shell">
        <div class="login-card">
          <h1>LOGE IT</h1>
          <h2>No company assigned</h2>
          <p>Your account has no active company membership.</p>
        </div>
      </div>
    `;
    return;
  }

  const { data: company } = await supabase
    .from("companies")
    .select("name")
    .eq("id", member.company_id)
    .single();

  app.innerHTML = `
    <div class="dashboard">
      <header>
        <h1>LOGE IT</h1>
        <p>${company?.name || "Company"}</p>
        <strong>${member.role}</strong>
      </header>

      <main>
        <h2>Welcome to LOGE IT</h2>
        <p>Management System</p>

        <div class="module-grid">
          <button>Employees</button>
          <button>Attendance & Leave</button>
          <button>Payroll</button>
          <button>Performance & Training</button>
          <button>Fuel & Accounts</button>
          <button>Documents</button>
          <button>Tasks</button>
          <button>Audit Logs</button>
        </div>
      </main>
    </div>
  `;
}

supabase.auth.onAuthStateChange(() => dashboard());

dashboard();
 
