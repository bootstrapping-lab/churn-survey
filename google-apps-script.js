// ============================================================
// Google Apps Script Backend for Churn Survey
// ============================================================
// 1. Open your Google Sheet
// 2. Go to Extensions → Apps Script
// 3. Paste this code, Save, Deploy → Web app (Anyone)
// 4. Copy the Web App URL into index.html & es/index.html
// ============================================================

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    ensureHeaders(sheet);
    var row = [
      new Date(), safe(data.role), safe(data.customers), safe(data.data_history),
      safe(data.churn_frequency), safe(data.churn_rate), safeArr(data.blockers),
      safe(data.current_approach), safeArr(data.tools_stack), safe(data.dream_outcome), safe(data.interest),
      safe(data.objection), safeNum(data.price_too_cheap), safeNum(data.price_good_value),
      safeNum(data.price_expensive), safeNum(data.price_too_expensive),
      safe(data.sean_ellis), safe(data.alternative), safe(data.team_size),
      safe(data.arr), safe(data.other_feedback), safe(data.email), safe(data.lang || 'en')
    ];
    sheet.appendRow(row);
    lock.releaseLock();
    return ok({ result: 'success' });
  } catch (err) {
    lock.releaseLock();
    return ok({ result: 'error', message: String(err) });
  }
}
function doOptions(e) { return ok({}); }
function ok(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}
function ensureHeaders(s) {
  var h = ['Timestamp','Role','Customers','DataHistory','ChurnFrequency','ChurnRate',
    'Blockers','CurrentApproach','ToolsStack','DreamOutcome','Interest','Objection',
    'PriceTooCheap','PriceGoodValue','PriceExpensive','PriceTooExpensive',
    'SeanEllis','Alternative','TeamSize','ARR','OtherFeedback','Email','Lang'];
  if (s.getRange(1,1,1,1).getValue() === '') {
    s.getRange(1,1,1,h.length).setValues([h]).setFontWeight('bold');
  }
}
function safe(v) { return v != null ? String(v) : ''; }
function safeArr(v) { return Array.isArray(v) ? v.join(', ') : safe(v); }
function safeNum(v) { var n = Number(v); return isNaN(n) ? '' : n; }
