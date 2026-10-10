/**
 * Optimus ERP — registration intake for Google Sheets.
 *
 * Paste this into the Apps Script editor of the Google Sheet that should
 * collect registrations (Extensions → Apps Script), then deploy it as a
 * Web App (see google-apps-script/README.md).
 *
 * The React form POSTs a JSON string (as text/plain) to the web app URL.
 */

// Must match VITE_SHEETS_TOKEN in the frontend .env. Leave as "" to disable
// the token check (not recommended for a public form).
var SHARED_TOKEN = "";

// Header row written to a new / empty sheet, in this exact order.
var HEADERS = [
  "Timestamp",
  "Full Name",
  "Roll Number",
  "Email",
  "Phone",
  "Major",
  "Minor",
  "ERP Domain",
  "Consent",
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000); // serialize writes so rows never collide

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonOutput({ status: "error", message: "No data received." });
    }

    var data = JSON.parse(e.postData.contents);

    if (SHARED_TOKEN && data.token !== SHARED_TOKEN) {
      return jsonOutput({ status: "error", message: "Unauthorized." });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow([
      new Date(),
      String(data.fullName || ""),
      String(data.rollNumber || ""),
      String(data.email || ""),
      // Leading apostrophe keeps the phone number as text (preserves any
      // leading digits and stops Sheets from reformatting it).
      "'" + String(data.phone || ""),
      String(data.major || ""),
      String(data.minor || ""),
      String(data.domain || ""),
      data.consent ? "Yes" : "No",
    ]);

    return jsonOutput({ status: "success" });
  } catch (err) {
    return jsonOutput({ status: "error", message: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Simple health check so visiting the URL in a browser confirms it is live.
function doGet() {
  return jsonOutput({ status: "ok", message: "Optimus ERP intake is running." });
}

function jsonOutput(obj) {
  return ContentService.createTextOutput(
    JSON.stringify(obj)
  ).setMimeType(ContentService.MimeType.JSON);
}
