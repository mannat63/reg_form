# Connecting the registration form to Google Sheets (Apps Script)

The form POSTs each registration to a Google Apps Script Web App, which
appends a row to a Google Sheet. No separate backend server is required.

## 1. Create the Sheet

1. Create a new Google Sheet (this will hold the registrations).
2. You can leave it empty — the script writes the header row automatically
   on the first submission.

## 2. Add the script

1. In the Sheet: **Extensions → Apps Script**.
2. Delete the placeholder `myFunction` code.
3. Paste the contents of [`Code.gs`](./Code.gs).
4. (Optional but recommended) Set a value for `SHARED_TOKEN` at the top of
   the script, e.g. `var SHARED_TOKEN = "optimus-2026-abc123";`
5. **Save** (disk icon).

## 3. Deploy as a Web App

1. **Deploy → New deployment**.
2. Click the gear ⚙ next to "Select type" → **Web app**.
3. Configure:
   - **Description:** Optimus ERP intake
   - **Execute as:** **Me**
   - **Who has access:** **Anyone**
4. **Deploy**. Approve the Google permission prompt (choose your account →
   Advanced → "Go to … (unsafe)" → Allow — this is normal for your own script).
5. Copy the **Web app URL** (ends in `/exec`).

> Test it: open the `/exec` URL in a browser. You should see
> `{"status":"ok", ...}`.

## 4. Point the frontend at it

1. In the project root, copy `.env.example` to `.env`.
2. Set the values:
   ```
   VITE_SHEETS_URL=https://script.google.com/macros/s/XXXXX/exec
   VITE_SHEETS_TOKEN=optimus-2026-abc123   # only if you set SHARED_TOKEN
   ```
3. Restart the dev server (`npm run dev`) so Vite picks up the env vars.
4. Submit a test registration — a new row should appear in the Sheet.

## Columns written

| Timestamp | Full Name | Roll Number | Email | Phone | Major | Minor | ERP Domain | Consent |
|-----------|-----------|-------------|-------|-------|-------|-------|------------|---------|

## Updating the script later

If you change `Code.gs`, you must re-deploy: **Deploy → Manage deployments →
edit (pencil) → Version: New version → Deploy**. The `/exec` URL stays the
same.

## Notes & limitations

- Env vars prefixed `VITE_` are embedded in the built JS and are **publicly
  visible**. The token is only light protection against random bots, not a
  real secret. For stronger protection use a real backend (Sheets API +
  service account).
- The form sends the request as `text/plain` on purpose: it avoids a CORS
  preflight that Apps Script web apps don't answer.
