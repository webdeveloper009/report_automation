// Add Custom Item In Menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Automation')
    .addItem('Daily Report', 'dailyReport')
    .addItem('Monthly Report', 'monthlyReport')
    .addToUi();
}
// Project Detail Tracking Sheet URL
var mainUrl = '1Msj3CmSd7BI9vxdqQ44vgKIBzdN7sBGa5CZfmtKkWpA';

// Get Current Month
var month = Utilities.formatDate(new Date(), 'PST', 'MMMM');

function dailyReport() {
  
}