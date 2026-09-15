# LOGE IT — Real App Starter

This is the first real, backend-connected LOGE IT application build. It uses Supabase Auth + Postgres and company-scoped Row Level Security.

## Run locally
1. Install Node.js 20+.
2. `npm install`
3. Copy `.env.example` to `.env` and enter your Supabase project URL + anon key.
4. In Supabase SQL Editor, run `supabase/schema.sql`.
5. Create a manager user in Supabase Authentication.
6. Insert a matching `profiles` row and a `memberships` row for a company using that user's UUID.
7. `npm run dev`

Never put the Supabase service-role key in the frontend.

## What is real in this build
- Email/password authentication through Supabase Auth.
- Company selection and membership checks.
- Company-scoped employees, tasks and attendance reads/writes.
- Row Level Security for manager data access.
- Responsive LOGE IT UI.

## Next production modules
Employee self-service authentication, secure document storage, full leave approval, payroll calculation/locking, fuel reconciliation, notifications, OCR, MFA, audit triggers, backups, monitoring and deployment.
