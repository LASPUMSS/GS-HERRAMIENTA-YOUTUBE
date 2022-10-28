// Devuelve una hoja en blanco para genera un reporte
function sheetReport(){
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var newSheet = activeSpreadsheet.insertSheet();
    
    return newSheet;
 
}
// Titulos para la funcion de myReport
function titulos(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  //TITULOS
  sheet.getRange(1,1).setValue("VIDEO ID");
  sheet.getRange(1,2).setValue("TITULO");
  sheet.getRange(1,3).setValue("FECHA");
  sheet.getRange(1,4).setValue("VISTAS");
  sheet.getRange(1,5).setValue("LIKES");
  sheet.getRange(1,6).setValue("N° COMENTARIOS");
  sheet.getRange(1,7).setValue("LINK DEL VIDEO");
  sheet.getRange(1,8).setValue("CANAL");
  sheet.getRange(1,9).setValue("CANAL ID");
  sheet.getRange(1,10).setValue("DESCRIPCION");
  sheet.getRange(1,11).setValue("DURACION");
  sheet.getRange(1,12).setValue("SUBTITULOS");
  
  sheet.getRange(1,1,1,12)
      .setBackground('#6fa8dc')
      .setFontColor('#ffffff')
      .setFontWeight('bold')
      .setHorizontalAlignment('center')
      .setBorder(true, true, true, true, null, null, '#000000', SpreadsheetApp.BorderStyle.SOLID_THICK);
}