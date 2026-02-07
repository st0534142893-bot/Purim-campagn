/**
 * =============================================================================
 * סקריפט להדבקה ב-Google Apps Script
 * =============================================================================
 * 
 * הוראות:
 * 1. פתח את הגליון האלקטרוני שלך ב-Google Sheets
 * 2. הרחבות (Extensions) → Apps Script
 * 3. מחק את כל הקוד הקיים בקבצי .gs (או צור פרויקט חדש)
 * 4. צור קובץ אחד חדש בשם Code.gs (או השאר את הקובץ הקיים)
 * 5. העתק והדבק את **כל** התוכן של הקובץ הזה (מהשורה הראשונה עד האחרונה) לתוך הקובץ
 * 6. שנה את SPREADSHEET_ID למזהה של הגליון שלך (מופיע ב-URL של הגליון)
 * 7. הגדר סודות נדרים פלוס ב-Script Properties (הרחבות → Apps Script → הגדרות → Script properties):
 *    NEDARIM_MOSAD_ID, NEDARIM_API_PASSWORD, NEDARIM_MATCHING_ID (אופציונלי)
 * 8. שמור (Ctrl+S / Cmd+S)
 * 9. פריסה (Deploy) → נהל פריסות (Manage deployments) → עריכה (עיפרון)
 *    → גרסה (Version): גרסה חדשה (New version) → פרוס (Deploy)
 * 10. העתק את ה-URL של האפליקציה והדבק במערכת (בשדה כתובת Google Sheets)
 * 
 * =============================================================================
 */

// ⚠️ שנה למזהה הגליון שלך (מ-URL: docs.google.com/spreadsheets/d/XXXXX/edit)
const SPREADSHEET_ID = '1YI6XQZObSP1vfhIVh9wXYtIufM20PFjIGGM9rB-_rc8';

// סודות נדרים פלוס מ-Script Properties בלבד (לא להזין כאן!)
var NEDARIM_URLS = {
  API_URL: 'https://matara.pro/nedarimplus/Reports/Manage3.aspx',
  ONLINE_API_URL: 'https://www.matara.pro/nedarimplus/online/Files/Manage.aspx',
  MATCH_PLUS_API_URL: 'https://www.matara.pro/nedarimplus/V6/MatchPlus.aspx'
};
function getNedarimConfig() {
  var p = PropertiesService.getScriptProperties();
  var mosadId = (p.getProperty('NEDARIM_MOSAD_ID') || '').trim();
  var matchingId = (p.getProperty('NEDARIM_MATCHING_ID') || '').trim();
  var apiPassword = (p.getProperty('NEDARIM_API_PASSWORD') || '').trim();
  return {
    MOSAD_ID: mosadId || '1000642',
    MATCHING_ID: matchingId || '715',
    API_PASSWORD: apiPassword || 'ep348',
    API_URL: NEDARIM_URLS.API_URL,
    ONLINE_API_URL: NEDARIM_URLS.ONLINE_API_URL,
    MATCH_PLUS_API_URL: NEDARIM_URLS.MATCH_PLUS_API_URL
  };
}

const SHEET_NAMES = {
  DONORS: 'מתרימים',
  GROUPS: 'קבוצות',
  SETTINGS: 'הגדרות'
};

const DONOR_COLUMNS = [
  'id', 'name', 'displayName', 'groupId', 'groupName', 'amount', 'personalGoal',
  'source', 'nedarimMatrimId', 'createdAt', 'updatedAt'
];

const GROUP_COLUMNS = [
  'id', 'name', 'goal', 'orderNumber', 'showInLiveView', 'createdAt', 'updatedAt'
];

// ========== doGet / doPost ==========

function doGet(e) {
  var output;
  try {
    var action = (e && e.parameter) ? (e.parameter.action || e.parameter.Action || '') : '';
    switch (action) {
      case 'ping':
        output = { success: true, message: 'החיבור תקין', timestamp: new Date().toISOString() };
        break;
      case 'getNedarimTotal':
        output = getNedarimTotalDonations();
        break;
      case 'searchNedarimRecruiters':
        var searchTerm = e && e.parameter ? e.parameter.search : '';
        output = searchNedarimRecruiters(searchTerm);
        break;
      case 'getAllNedarimRecruiters':
        output = getAllNedarimRecruiters();
        break;
      case 'getPublicConfig': {
        var c = getNedarimConfig();
        output = { success: true, mosadId: c.MOSAD_ID, matchingId: c.MATCHING_ID };
        break;
      }
      case 'getDonors':
        output = getAllDonors();
        break;
      case 'getGroups':
        output = getAllGroups();
        break;
      case 'getSettings':
        output = getAllSettings();
        break;
      case 'getAll':
        output = getAllData();
        break;
      case 'syncNedarimFromSheet':
        output = syncNedarimFromSheet();
        break;
      default:
        output = { success: false, error: 'פעולה לא מוכרת: ' + action };
    }
  } catch (error) {
    Logger.log('שגיאה ב-doGet: ' + error.toString());
    output = { success: false, error: error.toString() };
  }
  return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var output;
  try {
    var requestData = {};
    if (e && e.postData && e.postData.contents) {
      try {
        requestData = JSON.parse(e.postData.contents);
      } catch (parseError) {
        return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'שגיאה בפרסור JSON' })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    var action = requestData.action || '';
    switch (action) {
      case 'saveDonors':
        output = saveDonors(requestData.donors, requestData.groups);
        break;
      case 'saveGroups':
        output = saveGroups(requestData.groups);
        break;
      case 'saveSettings':
        output = saveSettings(requestData.settings);
        break;
      case 'saveAll':
        output = saveAllData(requestData);
        break;
      case 'updateNedarimAmount':
        output = updateNedarimAmount(requestData);
        break;
      case 'syncNedarimFromSheet':
        output = syncNedarimFromSheet();
        break;
      case 'storageSetItem':
        output = storageSetItemHandler(requestData.key, requestData.value);
        break;
      case 'storageGetItem':
        output = storageGetItemHandler(requestData.key);
        break;
      default:
        output = { success: false, error: 'פעולה לא מוכרת: ' + action };
    }
  } catch (error) {
    Logger.log('שגיאה ב-doPost: ' + error.toString());
    output = { success: false, error: error.toString() };
  }
  return ContentService.createTextOutput(JSON.stringify(output)).setMimeType(ContentService.MimeType.JSON);
}

// ========== נדרים פלוס ==========

function getNedarimTotalDonations() {
  try {
    var cfg = getNedarimConfig();
    var totalFromRecruiters = 0;
    var goalFromAPI = 0;
    try {
      var url1 = cfg.MATCH_PLUS_API_URL + '?Action=ShowGoal&MosadId=' + cfg.MOSAD_ID + '&GoalId=' + cfg.MATCHING_ID;
      var response1 = UrlFetchApp.fetch(url1, { method: 'GET', muteHttpExceptions: true });
      if (response1.getResponseCode() === 200) {
        var data = JSON.parse(response1.getContentText());
        goalFromAPI = parseFloat(data.Goal) || parseFloat(data.TargetSum) || parseFloat(data.GoalAmount) || 0;
        var donatedFromAPI = parseFloat(data.Donated) || parseFloat(data.DSum) || parseFloat(data.TotalDonated) || parseFloat(data.DonatedAmount) || 0;
        if (donatedFromAPI >= 0 && goalFromAPI > 0) {
          return { success: true, totalDonated: donatedFromAPI, goal: goalFromAPI, source: 'ShowGoal' };
        }
      }
      var url2 = cfg.MATCH_PLUS_API_URL + '?Action=ShowGoal&MosadId=' + cfg.MOSAD_ID + '&MatchingId=' + cfg.MATCHING_ID;
      var response2 = UrlFetchApp.fetch(url2, { method: 'GET', muteHttpExceptions: true });
      if (response2.getResponseCode() === 200) {
        var data2 = JSON.parse(response2.getContentText());
        var goal2 = parseFloat(data2.Goal) || parseFloat(data2.TargetSum) || parseFloat(data2.GoalAmount) || 0;
        var donated2 = parseFloat(data2.Donated) || parseFloat(data2.DSum) || parseFloat(data2.TotalDonated) || parseFloat(data2.DonatedAmount) || 0;
        if (goal2 > 0) goalFromAPI = goal2;
        if (donated2 >= 0 && goalFromAPI > 0) {
          return { success: true, totalDonated: donated2, goal: goalFromAPI, source: 'ShowGoal-MatchingId' };
        }
      }
    } catch (e) {
      Logger.log('שגיאה ב-ShowGoal: ' + e.message);
    }
    var hebrewLetters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
    var allRecruiters = {};
    try {
      var emptyResult = searchNedarimRecruiters('');
      if (emptyResult && emptyResult.success && emptyResult.recruiters) {
        emptyResult.recruiters.forEach(function (r) {
          var id = r.Id || r.MatrimId || r.Name;
          if (id) allRecruiters[id] = r;
        });
      }
    } catch (e) {}
    for (var i = 0; i < hebrewLetters.length; i++) {
      try {
        var result = searchNedarimRecruiters(hebrewLetters[i]);
        if (result && result.success && result.recruiters) {
          result.recruiters.forEach(function (r) {
            var id = r.Id || r.MatrimId || r.Name;
            if (id) allRecruiters[id] = r;
          });
        }
      } catch (e) {}
    }
    var recruitersArray = [];
    for (var key in allRecruiters) {
      if (allRecruiters.hasOwnProperty(key)) recruitersArray.push(allRecruiters[key]);
    }
    for (var j = 0; j < recruitersArray.length; j++) {
      var r = recruitersArray[j];
      totalFromRecruiters += parseFloat(r.Cumule) || parseFloat(r.Amount) || parseFloat(r.Collected) || 0;
    }
    if (totalFromRecruiters > 0) {
      return { success: true, totalDonated: totalFromRecruiters, goal: goalFromAPI, source: 'Calculated-FromAllRecruiters', recruitersCount: recruitersArray.length };
    }
    return { success: false, error: 'לא הצלחתי לקבל נתונים', totalDonated: 0, goal: goalFromAPI };
  } catch (e) {
    return { success: false, error: e.message, totalDonated: 0, goal: 0 };
  }
}

function updateNedarimAmount(params) {
  try {
    var cfg = getNedarimConfig();
    if (!params.matrimId) return { success: false, error: 'חסר מספר מתרים (matrimId)' };
    var validAmount = Math.round(parseFloat(params.amount) || 0);
    if (validAmount === 0) return { success: false, error: 'סכום חייב להיות שונה מ-0' };
    var formData = {
      'Action': 'MatchingOffLine',
      'MosadNumber': cfg.MOSAD_ID,
      'ApiPassword': cfg.API_PASSWORD,
      'MatrimId': String(params.matrimId),
      'ClientName': (params.clientName || 'תורם אנונימי').trim(),
      'Amount': String(validAmount),
      'Comments': (params.comments || '').trim(),
      'AjaxId': Date.now().toString()
    };
    var response = UrlFetchApp.fetch(cfg.API_URL, { method: 'POST', payload: formData, muteHttpExceptions: true });
    var responseCode = response.getResponseCode();
    var responseText = response.getContentText();
    if (responseCode === 200) {
      try {
        var data = JSON.parse(responseText);
        if (data.Status === 'OK' || data.success === true) return { success: true, message: data.Message || 'הסכום עודכן בהצלחה' };
        if (data.Status && data.Status !== 'OK') return { success: false, error: data.Message || data.error || 'שגיאה לא ידועה' };
        return { success: true, message: 'הסכום עודכן בהצלחה' };
      } catch (parseError) {
        if (responseText.trim() === '' || responseText.trim().length < 100) return { success: true, message: 'הסכום עודכן בהצלחה' };
        return { success: false, error: 'תגובה לא צפויה מהשרת: ' + responseText.substring(0, 150) };
      }
    }
    return { success: false, error: 'שגיאת שרת: ' + responseCode + ' - ' + responseText.substring(0, 150) };
  } catch (err) {
    return { success: false, error: err.message || 'שגיאה לא ידועה' };
  }
}

function syncNedarimFromSheet() {
  try {
    var donorsResult = getAllDonors();
    if (!donorsResult.success || !donorsResult.donors || donorsResult.donors.length === 0) {
      return { success: false, error: 'אין מתרימים בגליון' };
    }
    var donors = donorsResult.donors;
    var matrimList = [];
    try {
      var searchResult = searchNedarimRecruiters('');
      if (searchResult && searchResult.success && searchResult.recruiters) matrimList = searchResult.recruiters;
    } catch (error) {}
    var nedarimAmountsByNameMap = {};
    var nedarimMatrimIdsByNameMap = {};
    matrimList.forEach(function (matrim) {
      var matrimName = (matrim.Name || matrim.name || '').trim();
      if (matrimName) {
        nedarimAmountsByNameMap[matrimName] = parseInt(matrim.Cumule) || parseInt(matrim.Amount) || 0;
        var matrimId = matrim.Id || matrim.MatrimId || matrim.id;
        if (matrimId != null) nedarimMatrimIdsByNameMap[matrimName] = String(matrimId).trim();
      }
    });
    var donorsToUpdate = [];
    var updatedCount = 0, skippedCount = 0, failedCount = 0, invalidMatrimIdCount = 0;
    for (var i = 0; i < donors.length; i++) {
      var donor = donors[i];
      if (!donor.name) { skippedCount++; continue; }
      var donorName = donor.name.trim();
      var localAmount = donor.amount || 0;
      var nedarimAmount = nedarimAmountsByNameMap[donorName] || 0;
      var delta = localAmount - nedarimAmount;
      var matrimIdStr = nedarimMatrimIdsByNameMap[donorName] || null;
      if (!matrimIdStr || !/^\d+$/.test(matrimIdStr)) {
        invalidMatrimIdCount++;
        skippedCount++;
        continue;
      }
      if (Math.abs(delta) > 0) donorsToUpdate.push({ donor: donor, delta: delta, matrimId: matrimIdStr });
      else skippedCount++;
    }
    var groupsResult = getAllGroups();
    var groups = groupsResult.groups || [];
    for (var j = 0; j < donorsToUpdate.length; j++) {
      var item = donorsToUpdate[j];
      var donor = item.donor;
      var delta = item.delta;
      var matrimId = item.matrimId;
      var donorName = donor.name || donor.displayName || 'תורם אנונימי';
      var group = groups.find(function (g) { return g.id === donor.groupId; });
      var groupName = group ? group.name : '';
      var clientName = groupName ? donorName + ' - ' + groupName : donorName;
      try {
        var updateResult = updateNedarimAmount({ matrimId: matrimId, amount: delta, clientName: clientName, comments: 'עדכון מהגליון - סנכרון אוטומטי' });
        if (updateResult && updateResult.success) updatedCount++; else failedCount++;
        Utilities.sleep(500);
      } catch (error) { failedCount++; }
    }
    var message = 'סנכרון הושלם: ' + updatedCount + ' עודכנו';
    if (failedCount > 0) message += ', ' + failedCount + ' נכשלו';
    if (invalidMatrimIdCount > 0) message += ', ' + invalidMatrimIdCount + ' ללא מספר מתרים תקין';
    return { success: true, message: message, updated: updatedCount, skipped: skippedCount, failed: failedCount, invalidMatrimId: invalidMatrimIdCount, total: donorsToUpdate.length };
  } catch (error) {
    return { success: false, error: error.message || 'שגיאה לא ידועה' };
  }
}

function searchNedarimRecruiters(searchTerm) {
  try {
    var cfg = getNedarimConfig();
    var url = cfg.MATCH_PLUS_API_URL + '?Action=SearchMatrim&Name=' + encodeURIComponent(searchTerm || '') + '&MosadId=' + cfg.MOSAD_ID;
    var response = UrlFetchApp.fetch(url, { method: 'GET', muteHttpExceptions: true });
    if (response.getResponseCode() === 200) {
      var data = JSON.parse(response.getContentText());
      if (Array.isArray(data)) return { success: true, recruiters: data };
      if (data && data.Matrim) return { success: true, recruiters: data.Matrim };
      if (data && data.recruiters) return { success: true, recruiters: data.recruiters };
      return { success: true, recruiters: [] };
    }
    return { success: false, error: 'שגיאת שרת', recruiters: [] };
  } catch (e) {
    return { success: false, error: e.message, recruiters: [] };
  }
}

function getAllNedarimRecruiters() {
  try {
    var allRecruitersMap = {};
    var hebrewLetters = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
    for (var i = 0; i < hebrewLetters.length; i++) {
      try {
        var result = searchNedarimRecruiters(hebrewLetters[i]);
        if (result && result.success && result.recruiters) {
          result.recruiters.forEach(function (r) {
            var id = r.Id || r.MatrimId || r.id;
            if (id != null) allRecruitersMap[String(id)] = r;
          });
        }
      } catch (e) {}
    }
    var recruitersArray = [];
    for (var key in allRecruitersMap) {
      if (allRecruitersMap.hasOwnProperty(key)) recruitersArray.push(allRecruitersMap[key]);
    }
    Logger.log('getAllNedarimRecruiters: סה"כ ' + recruitersArray.length + ' מתרימים');
    return { success: true, recruiters: recruitersArray };
  } catch (e) {
    return { success: false, error: e.message, recruiters: [] };
  }
}

// ========== גיליונות ==========

function ensureSheetsExist() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var donorsSheet = ss.getSheetByName(SHEET_NAMES.DONORS);
  if (!donorsSheet) {
    donorsSheet = ss.insertSheet(SHEET_NAMES.DONORS);
    donorsSheet.getRange(1, 1, 1, DONOR_COLUMNS.length).setValues([DONOR_COLUMNS]);
    formatHeader(donorsSheet);
  } else {
    var headers = donorsSheet.getRange(1, 1, 1, donorsSheet.getLastColumn()).getValues()[0];
    if (headers.length !== DONOR_COLUMNS.length || headers[0] !== DONOR_COLUMNS[0]) {
      donorsSheet.getRange(1, 1, 1, DONOR_COLUMNS.length).setValues([DONOR_COLUMNS]);
      formatHeader(donorsSheet);
    }
  }
  var groupsSheet = ss.getSheetByName(SHEET_NAMES.GROUPS);
  if (!groupsSheet) {
    groupsSheet = ss.insertSheet(SHEET_NAMES.GROUPS);
    groupsSheet.getRange(1, 1, 1, GROUP_COLUMNS.length).setValues([GROUP_COLUMNS]);
    formatHeader(groupsSheet);
  }
  var settingsSheet = ss.getSheetByName(SHEET_NAMES.SETTINGS);
  if (!settingsSheet) {
    settingsSheet = ss.insertSheet(SHEET_NAMES.SETTINGS);
    settingsSheet.getRange(1, 1, 1, 2).setValues([['key', 'value']]);
    formatHeader(settingsSheet);
  }
  return { donors: donorsSheet, groups: groupsSheet, settings: settingsSheet };
}

function formatHeader(sheet) {
  sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold').setBackground('#D4AF37').setFontColor('#FFFFFF');
  sheet.setFrozenRows(1);
}

// ========== קריאה ==========

function getAllDonors() {
  try {
    ensureSheetsExist();
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAMES.DONORS);
    if (!sheet || sheet.getLastRow() <= 1) return { success: true, donors: [], donorsWithValidMatrimId: 0 };
    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var hasNedarimMatrimIdColumn = headers.indexOf('nedarimMatrimId') >= 0;
    if (!hasNedarimMatrimIdColumn) {
      sheet.getRange(1, sheet.getLastColumn() + 1).setValue('nedarimMatrimId');
      formatHeader(sheet);
      data = sheet.getDataRange().getValues();
      headers = data[0];
    }
    var donors = [];
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var donor = {};
      for (var j = 0; j < headers.length; j++) {
        var key = headers[j];
        var value = row[j];
        if (!key) continue;
        if (key === 'amount' || key === 'personalGoal') donor[key] = value ? Number(value) : 0;
        else if (key === 'groupId') donor[key] = value !== '' && value !== null ? value : '';
        else if (key === 'nedarimMatrimId') donor[key] = value !== undefined && value !== null && value !== '' ? String(value).trim() : null;
        else donor[key] = value !== undefined && value !== null ? value : '';
      }
      if (donor.id) donors.push(donor);
    }
    var donorsWithValidMatrimId = 0;
    for (var k = 0; k < donors.length; k++) {
      if (donors[k].nedarimMatrimId && /^\d+$/.test(String(donors[k].nedarimMatrimId).trim())) donorsWithValidMatrimId++;
    }
    return { success: true, donors: donors, donorsWithValidMatrimId: donorsWithValidMatrimId };
  } catch (error) {
    return { success: false, error: error.toString(), donors: [], donorsWithValidMatrimId: 0 };
  }
}

function getAllGroups() {
  try {
    ensureSheetsExist();
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAMES.GROUPS);
    if (!sheet || sheet.getLastRow() <= 1) return { success: true, groups: [] };
    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var groups = [];
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var group = {};
      for (var j = 0; j < headers.length; j++) {
        var key = headers[j];
        var value = row[j];
        if (!key) continue;
        if (key === 'goal' || key === 'orderNumber') group[key] = value ? Number(value) : 0;
        else if (key === 'showInLiveView') group[key] = value !== false && value !== 'false';
        else group[key] = value !== undefined && value !== null ? value : '';
      }
      if (group.id) groups.push(group);
    }
    return { success: true, groups: groups };
  } catch (error) {
    return { success: false, error: error.toString(), groups: [] };
  }
}

function getAllSettings() {
  try {
    ensureSheetsExist();
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAMES.SETTINGS);
    if (!sheet || sheet.getLastRow() <= 1) return { success: true, settings: {} };
    var data = sheet.getDataRange().getValues();
    var settings = {};
    for (var i = 1; i < data.length; i++) {
      var key = data[i][0];
      var value = data[i][1];
      if (key) {
        try { settings[key] = JSON.parse(value); } catch (e) { settings[key] = value; }
      }
    }
    return { success: true, settings: settings };
  } catch (error) {
    return { success: false, error: error.toString(), settings: {} };
  }
}

function getAllData() {
  try {
    var donors = getAllDonors();
    var groups = getAllGroups();
    var settings = getAllSettings();
    return { success: true, donors: donors.donors || [], groups: groups.groups || [], settings: settings.settings || {}, timestamp: new Date().toISOString() };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

// ========== שמירה ==========

function saveDonors(donors, groups) {
  try {
    ensureSheetsExist();
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAMES.DONORS);
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      var lastCol = sheet.getLastColumn() || DONOR_COLUMNS.length;
      sheet.getRange(2, 1, lastRow, lastCol).clearContent();
    }
    if (!donors || donors.length === 0) return { success: true, message: 'אין מתרימים לשמירה', count: 0 };
    var groupsMap = {};
    if (groups && groups.length > 0) {
      for (var g = 0; g < groups.length; g++) groupsMap[groups[g].id] = groups[g].name || '';
    } else {
      var groupsResult = getAllGroups();
      if (groupsResult.groups) for (var g = 0; g < groupsResult.groups.length; g++) groupsMap[groupsResult.groups[g].id] = groupsResult.groups[g].name || '';
    }
    var rows = [];
    var now = new Date().toISOString();
    for (var i = 0; i < donors.length; i++) {
      var donor = donors[i];
      var row = [];
      for (var j = 0; j < DONOR_COLUMNS.length; j++) {
        var col = DONOR_COLUMNS[j];
        if (col === 'groupName') row.push(groupsMap[donor.groupId] || '');
        else if (col === 'updatedAt') row.push(now);
        else if (col === 'createdAt') row.push(donor.createdAt || now);
        else if (col === 'source') row.push(donor.source || donor.fromNedarimPlus ? 'nedarim_plus' : 'manual');
        else if (col === 'nedarimMatrimId') {
          var matrimId = donor.nedarimMatrimId;
          var matrimIdStr = matrimId !== undefined && matrimId !== null && matrimId !== '' ? String(matrimId).trim() : '';
          if (matrimIdStr && /^\d+$/.test(matrimIdStr) && !/^\d{4}-\d{2}-\d{2}T/.test(matrimIdStr)) row.push(matrimIdStr);
          else row.push('');
        } else row.push(donor[col] !== undefined && donor[col] !== null ? donor[col] : '');
      }
      rows.push(row);
    }
    if (rows.length > 0) sheet.getRange(2, 1, 1 + rows.length, DONOR_COLUMNS.length).setValues(rows);
    var donorsWithMatrimId = 0;
    for (var k = 0; k < donors.length; k++) {
      if (donors[k].nedarimMatrimId && /^\d+$/.test(String(donors[k].nedarimMatrimId).trim())) donorsWithMatrimId++;
    }
    return { success: true, message: 'נשמרו ' + donors.length + ' מתרימים', count: donors.length, donorsWithMatrimId: donorsWithMatrimId };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function saveGroups(groups) {
  try {
    ensureSheetsExist();
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAMES.GROUPS);
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      var lastCol = sheet.getLastColumn() || GROUP_COLUMNS.length;
      sheet.getRange(2, 1, lastRow, lastCol).clearContent();
    }
    if (!groups || groups.length === 0) return { success: true, message: 'אין קבוצות לשמירה', count: 0 };
    var rows = [];
    var now = new Date().toISOString();
    for (var i = 0; i < groups.length; i++) {
      var group = groups[i];
      var row = [];
      for (var j = 0; j < GROUP_COLUMNS.length; j++) {
        var col = GROUP_COLUMNS[j];
        if (col === 'updatedAt') row.push(now);
        else if (col === 'createdAt') row.push(group.createdAt || now);
        else if (col === 'showInLiveView') row.push(group.showInLiveView !== false);
        else row.push(group[col] !== undefined && group[col] !== null ? group[col] : '');
      }
      rows.push(row);
    }
    if (rows.length > 0) sheet.getRange(2, 1, 1 + rows.length, GROUP_COLUMNS.length).setValues(rows);
    return { success: true, message: 'נשמרו ' + groups.length + ' קבוצות', count: groups.length };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function saveSettings(settings) {
  try {
    ensureSheetsExist();
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAMES.SETTINGS);
    var lastRow = sheet.getLastRow();
    if (lastRow > 1) sheet.getRange(2, 1, lastRow, 2).clearContent();
    if (!settings || Object.keys(settings).length === 0) return { success: true, message: 'אין הגדרות לשמירה', count: 0 };
    var rows = [];
    for (var key in settings) {
      if (settings.hasOwnProperty(key)) {
        var value = settings[key];
        rows.push([key, typeof value === 'object' ? JSON.stringify(value) : value]);
      }
    }
    if (rows.length > 0) sheet.getRange(2, 1, 1 + rows.length, 2).setValues(rows);
    return { success: true, message: 'נשמרו ' + rows.length + ' הגדרות', count: rows.length };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function saveAllData(data) {
  try {
    var results = {};
    if (data.groups) results.groups = saveGroups(data.groups);
    if (data.donors) results.donors = saveDonors(data.donors, data.groups);
    if (data.settings) results.settings = saveSettings(data.settings);
    return { success: true, results: results, timestamp: new Date().toISOString() };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

// ========== PropertiesService ==========

function storageSetItemHandler(key, value) {
  try {
    if (!key) return { success: false, error: 'Missing key parameter' };
    PropertiesService.getScriptProperties().setProperty(key, value);
    return { success: true, message: 'נשמר בהצלחה' };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function storageGetItemHandler(key) {
  try {
    if (!key) return { success: false, error: 'Missing key parameter', value: null };
    var value = PropertiesService.getScriptProperties().getProperty(key);
    return { success: true, value: value, message: value == null ? 'לא נמצא ערך' : '' };
  } catch (error) {
    return { success: false, error: error.toString(), value: null };
  }
}

// ========== בדיקה ==========

function testConnection() {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var nedarimResult = getNedarimTotalDonations();
    var data = getAllData();
    return { success: true, spreadsheet: ss.getName(), nedarimPlus: nedarimResult, donorsCount: (data.donors || []).length, groupsCount: (data.groups || []).length };
  } catch (e) {
    return { success: false, error: e.message };
  }
}
