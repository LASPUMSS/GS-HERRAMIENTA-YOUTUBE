// Devuelve una hoja en blanco para genera un reporte
function sheetReport(){
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var newSheet = activeSpreadsheet.insertSheet();
    
    return newSheet;
 
}
// Titulos para la un reporte de videos
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
  
  sheet.getRange('K:K').setNumberFormat('#,##0.00');
}

// Calcular el tiempo en minutos 
function getMiuntesOfStrig(horaStr){
  horaStr = horaStr.replace('PT','');
  var horas=0, minutos=0, segundos=0;

  if(horaStr.includes('H')){
    horas = parseInt(horaStr.substring(0,horaStr.indexOf('H')))*60
    horaStr = horaStr.substring(horaStr.indexOf('H')+1, horaStr.length)
  };

  if(horaStr.includes('M')){
    minutos = parseInt(horaStr.substring(0,horaStr.indexOf('M')))
    horaStr = horaStr.substring(horaStr.indexOf('M')+1, horaStr.length)
  };

  if(horaStr.includes('S')){
    segundos = parseInt(horaStr.substring(0,horaStr.indexOf('S')))/60
  };

  return(horas+minutos+segundos)

}