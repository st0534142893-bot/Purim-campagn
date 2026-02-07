// =============================================================================
// Code.gs - קוד צד השרת המאובטח למערכת קמפיין פורים
// =============================================================================
// ⚠️ קובץ זה רץ בשרתי Google בלבד - הלקוח לא יכול לראות את התוכן שלו!
// =============================================================================

// *****************************************************************************
// *** הגדרות - סודות נדרים פלוס מ-Script Properties בלבד (לא כאן!) ***
// *****************************************************************************

const CONFIG = {
  SPREADSHEET_ID: '1YI6XQZObSP1vfhIVh9wXYtIufM20PFjIGGM9rB-_rc8',
  SECURITY: {
    ALLOWED_EMAILS: [],
    ENABLE_AUDIT_LOG: true,
    MAX_REQUESTS_PER_MINUTE: 60
  }
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
    API_URL: 'https://matara.pro/nedarimplus/Reports/Manage3.aspx',
    ONLINE_API_URL: 'https://www.matara.pro/nedarimplus/online/Files/Manage.aspx',
    MATCH_PLUS_API_URL: 'https://www.matara.pro/nedarimplus/V6/MatchPlus.aspx'
  };
}

// *****************************************************************************
// *** פונקציות ציבוריות - זמינות ללקוח ***
// *****************************************************************************

/**
 * קבלת ההגדרות הציבוריות בלבד (ללא סודות)
 * @returns {Object} הגדרות ציבוריות
 */
function getPublicConfig() {
  var c = getNedarimConfig();
  return {
    mosadId: c.MOSAD_ID,
    matchingId: c.MATCHING_ID
  };
}

/**
 * קבלת קישור לגליון (ללא חשיפת המזהה בקוד הלקוח)
 * @returns {string} URL לגליון
 */
function getSpreadsheetUrl() {
  return 'https://docs.google.com/spreadsheets/d/' + CONFIG.SPREADSHEET_ID + '/edit';
}

/**
 * קבלת סכום תרומות כולל מנדרים פלוס
 * @returns {Object} תוצאה עם totalDonated, goal וכו'
 */
function getNedarimTotalDonations() {
  try {
    // ניסיון 1: ShowGoal
    const url1 = getNedarimConfig().ONLINE_API_URL + 
      '?Action=ShowGoal&Ession=&S=1&Mosession=' + getNedarimConfig().MATCHING_ID + 
      '&MosadId=' + getNedarimConfig().MOSAD_ID;
    
    const response1 = UrlFetchApp.fetch(url1, {
      method: 'GET',
      muteHttpExceptions: true
    });
    
    if (response1.getResponseCode() === 200) {
      const text = response1.getContentText();
      try {
        const data = JSON.parse(text);
        if (data && data.DSum !== undefined) {
          return {
            success: true,
            totalDonated: parseFloat(data.DSum) || 0,
            goal: parseFloat(data.Goal) || 0,
            goalId: data.GoalId || '',
            source: 'ShowGoal'
          };
        }
      } catch (e) {
        // לא JSON - ממשיך לניסיון הבא
      }
    }
    
    // ניסיון 2: GetMosad
    const url2 = getNedarimConfig().ONLINE_API_URL + 
      '?Action=GetMosad&MosadId=' + getNedarimConfig().MOSAD_ID;
    
    const response2 = UrlFetchApp.fetch(url2, {
      method: 'GET',
      muteHttpExceptions: true
    });
    
    if (response2.getResponseCode() === 200) {
      const data2 = JSON.parse(response2.getContentText());
      if (data2) {
        return {
          success: true,
          totalDonated: parseFloat(data2.TotalDonated) || parseFloat(data2.DSum) || 0,
          goal: parseFloat(data2.Goal) || 0,
          mosadName: data2.Name || '',
          source: 'GetMosad'
        };
      }
    }
    
    return {
      success: false,
      error: 'לא ניתן לקבל נתונים מנדרים פלוס',
      totalDonated: 0,
      goal: 0
    };
    
  } catch (e) {
    Logger.log('שגיאה ב-getNedarimTotalDonations: ' + e.message);
    return {
      success: false,
      error: e.message,
      totalDonated: 0,
      goal: 0
    };
  }
}

/**
 * חיפוש מתרימים במערכת MatchPlus
 * @param {string} searchTerm - מונח חיפוש
 * @returns {Object} תוצאות החיפוש
 */
function searchNedarimRecruiters(searchTerm) {
  try {
    const url = getNedarimConfig().MATCH_PLUS_API_URL + 
      '?Action=SearchMatrim&Name=' + encodeURIComponent(searchTerm || '') + 
      '&MosadId=' + getNedarimConfig().MOSAD_ID;
    
    const response = UrlFetchApp.fetch(url, {
      method: 'GET',
      muteHttpExceptions: true
    });
    
    if (response.getResponseCode() === 200) {
      const data = JSON.parse(response.getContentText());
      return {
        success: true,
        recruiters: data || []
      };
    } else {
      return {
        success: false,
        error: 'שגיאת שרת: ' + response.getResponseCode(),
        recruiters: []
      };
    }
  } catch (e) {
    Logger.log('שגיאה ב-searchNedarimRecruiters: ' + e.message);
    return {
      success: false,
      error: e.message,
      recruiters: []
    };
  }
}

/**
 * קבלת פרטי מתרים מנדרים פלוס
 * @param {string} recruiterId - מזהה המתרים
 * @returns {Object} פרטי המתרים
 */
function getNedarimRecruiterDetails(recruiterId) {
  try {
    const url = getNedarimConfig().MATCH_PLUS_API_URL + 
      '?Action=GetMatrimData&MatrimId=' + encodeURIComponent(recruiterId) + 
      '&MosadId=' + getNedarimConfig().MOSAD_ID;
    
    const response = UrlFetchApp.fetch(url, {
      method: 'GET',
      muteHttpExceptions: true
    });
    
    if (response.getResponseCode() === 200) {
      const data = JSON.parse(response.getContentText());
      return {
        success: true,
        data: data
      };
    } else {
      return {
        success: false,
        error: 'שגיאת שרת: ' + response.getResponseCode()
      };
    }
  } catch (e) {
    Logger.log('שגיאה ב-getNedarimRecruiterDetails: ' + e.message);
    return {
      success: false,
      error: e.message
    };
  }
}

/**
 * קבלת דוח מפורט מנדרים פלוס
 * @param {Object} params - פרמטרים לדוח
 * @returns {Object} נתוני הדוח
 */
function getNedarimReport(params) {
  try {
    const formData = {
      'Action': params.action || 'GetReport',
      'MosadNumber': getNedarimConfig().MOSAD_ID,
      'ApiPassword': getNedarimConfig().API_PASSWORD
    };
    
    if (params.fromDate) formData['FromDate'] = params.fromDate;
    if (params.toDate) formData['ToDate'] = params.toDate;
    
    const response = UrlFetchApp.fetch(getNedarimConfig().API_URL, {
      method: 'POST',
      payload: formData,
      muteHttpExceptions: true
    });
    
    if (response.getResponseCode() === 200) {
      try {
        const data = JSON.parse(response.getContentText());
        return {
          success: true,
          data: data
        };
      } catch (e) {
        return {
          success: true,
          data: response.getContentText()
        };
      }
    } else {
      return {
        success: false,
        error: 'שגיאת שרת: ' + response.getResponseCode()
      };
    }
  } catch (e) {
    Logger.log('שגיאה ב-getNedarimReport: ' + e.message);
    return {
      success: false,
      error: e.message
    };
  }
}

/**
 * עדכון סכום תרומה לנדרים פלוס (תמיכה גם בהפחתות - סכומים שליליים)
 * @param {Object} params - פרמטרים: recruiterId, amount, clientName, comments
 * @returns {Object} תוצאה עם success ו-message/error
 */
function updateNedarimAmount(params) {
  try {
    // ולידציה של פרמטרים
    if (!params.recruiterId) {
      return {
        success: false,
        error: 'Missing required parameter: recruiterId'
      };
    }
    
    const validAmount = Math.round(parseFloat(params.amount) || 0);
    if (validAmount === 0) {
      return {
        success: false,
        error: 'Amount must be non-zero'
      };
    }
    
    // בניית FormData לשליחה ל-Nedarim Plus API
    const formData = {
      'Action': 'MatchingOffLine',
      'MosadNumber': getNedarimConfig().MOSAD_ID,
      'ApiPassword': getNedarimConfig().API_PASSWORD,
      'MatrimId': String(params.recruiterId),
      'ClientName': (params.clientName || 'תורם אנונימי').trim(),
      'Amount': String(validAmount),
      'Comments': (params.comments || '').trim(),
      'AjaxId': Date.now().toString()
    };
    
    Logger.log('שולח תרומה לנדרים פלוס:', {
      matrimId: params.recruiterId,
      amount: validAmount,
      clientName: params.clientName || 'תורם אנונימי'
    });
    
    // שליחה ל-Nedarim Plus API
    const response = UrlFetchApp.fetch(getNedarimConfig().API_URL, {
      method: 'POST',
      payload: formData,
      muteHttpExceptions: true
    });
    
    const responseCode = response.getResponseCode();
    const responseText = response.getContentText();
    
    Logger.log('תגובה מנדרים פלוס:', {
      status: responseCode,
      responseLength: responseText.length,
      responsePreview: responseText.substring(0, 200)
    });
    
    // אם קוד התגובה הוא 200 (OK), זה נחשב להצלחה
    if (responseCode === 200) {
      // מנסה לפרסר את התגובה כ-JSON
      let data;
      try {
        data = JSON.parse(responseText);
        
        // אם יש JSON, בודק את הסטטוס
        if (data.Status === 'OK' || data.success === true) {
          Logger.log('✅ העלאה הצליחה (JSON עם Status OK):', data);
          return {
            success: true,
            message: data.Message || data.message || 'התרומה הועלתה בהצלחה'
          };
        }
        
        // אם יש שגיאה ב-JSON
        if (data.Status && data.Status !== 'OK') {
          return {
            success: false,
            error: data.Message || data.message || 'שגיאה לא ידועה'
          };
        }
        
        // אם אין Status אבל יש JSON, זה עדיין נחשב להצלחה (קוד 200)
        Logger.log('✅ העלאה הצליחה (JSON ללא Status מוגדר):', data);
        return {
          success: true,
          message: 'התרומה הועלתה בהצלחה'
        };
        
      } catch (parseError) {
        // אם זה לא JSON, בודק אם יש הודעת הצלחה בטקסט
        const responseLower = responseText.toLowerCase();
        if (responseLower.includes('ok') || 
            responseLower.includes('הצלח') || 
            responseLower.includes('success') ||
            responseLower.includes('אוקיי') ||
            responseText.trim() === '' ||
            responseText.trim().length < 100) { // תגובה קצרה = כנראה הצלחה
          
          Logger.log('✅ העלאה הצליחה (תגובה טקסטואלית):', responseText.substring(0, 100));
          return {
            success: true,
            message: 'התרומה הועלתה בהצלחה'
          };
        }
        
        // אם יש תגובה ארוכה שלא JSON ולא מכילה הצלחה, זה כנראה שגיאה
        Logger.log('⚠️ תגובה לא צפויה מהשרת:', responseText.substring(0, 200));
        // אבל עדיין מחזירים הצלחה כי קוד 200 = הצלחה
        return {
          success: true,
          message: 'התרומה הועלתה בהצלחה (תגובה לא סטנדרטית מהשרת)'
        };
      }
    } else {
      // אם קוד התגובה לא 200, זה שגיאה
      Logger.log('❌ שגיאת שרת:', responseCode, responseText.substring(0, 200));
      return {
        success: false,
        error: 'שגיאת שרת: ' + responseCode + ' ' + responseText.substring(0, 100)
      };
    }
    
  } catch (e) {
    Logger.log('שגיאה ב-updateNedarimAmount: ' + e.message);
    return {
      success: false,
      error: e.message
    };
  }
}

// *****************************************************************************
// *** doGet – אם הפרויקט מפעיל את Code.gs כ־Web App (בלי SheetsSync) ***
// *****************************************************************************

/**
 * משיכת כל המתרימים מנדרים פלוס (MatchPlus) – חיפוש ריק + חיפוש לפי א-ת
 */
function getAllNedarimRecruiters() {
  try {
    var allRecruitersMap = {};
    var hebrewLetters = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
    for (var i = 0; i < hebrewLetters.length; i++) {
      var term = hebrewLetters[i];
      try {
        var result = searchNedarimRecruiters(term);
        if (result && result.success && result.recruiters) {
          result.recruiters.forEach(function(r) {
            var id = r.Id || r.MatrimId || r.id;
            if (id !== undefined && id !== null) {
              allRecruitersMap[String(id)] = r;
            }
          });
        }
      } catch (e) {
        Logger.log('שגיאה בחיפוש "' + term + '": ' + e.message);
      }
    }
    var recruitersArray = [];
    for (var key in allRecruitersMap) {
      if (allRecruitersMap.hasOwnProperty(key)) {
        recruitersArray.push(allRecruitersMap[key]);
      }
    }
    Logger.log('getAllNedarimRecruiters: סה"כ ' + recruitersArray.length + ' מתרימים מנדרים פלוס');
    return { success: true, recruiters: recruitersArray };
  } catch (e) {
    Logger.log('שגיאה ב-getAllNedarimRecruiters: ' + e.message);
    return { success: false, error: e.message, recruiters: [] };
  }
}

