# LOGE IT — Production Handoff

## Product identity
- Product: LOGE IT
- Tagline: Management System
- Company/site data is tenant data inside LOGE IT, not part of the product brand.

## Before launch
1. Create the production database project.
2. Apply `supabase/schema.sql` using the database migration workflow.
3. Configure authentication with email/password or an approved identity provider.
4. Configure storage buckets for employee and company documents with private access.
5. Add server-side authorization checks for every write and sensitive read.
6. Add audit logging for permissions, payroll, attendance corrections, document access, fuel-price changes and reconciliation decisions.
7. Configure notification providers only through server-side secrets.
8. Add OCR processing as a server-side job with manager review before committing extracted data.
9. Run backup/restore, tenant-isolation and permission tests.
10. Deploy frontend and backend separately with HTTPS enforced.

## Security rules
- Never place passwords, service-role keys, API tokens or webhook secrets in frontend code.
- Never trust a company_id supplied by a browser; derive tenant membership from the authenticated session.
- Payroll, credentials, disciplinary records and sensitive documents require least-privilege access.
- Keep immutable audit records for consequential manager actions.
- Employee accounts can read only their own employee-facing data.

## Demo vs production
The included frontend remains a prototype/demo UI. Buttons that show success messages are placeholders until wired to authenticated backend APIs. Do not use the demo UI as a production payroll or HR system until the backend controls above are implemented and tested.
