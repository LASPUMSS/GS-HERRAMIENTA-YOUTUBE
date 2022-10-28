function obtenerIdChannel(videoId) {

  var videoInf = YouTube.Videos.list('snippet, contentDetails',{id: videoId});
  
  //SpreadsheetApp.getUi().alert('El id de canal del video selecionado es: ' + videoInf.items[0].snippet.channelId);
  SpreadsheetApp.getUi().alert('El nombre de canal del video selecionado es: ' + 
                                videoInf.items[0].snippet.channelTitle + '. \r\n' +
                                'El id de canal del video selecionado es: ' + 
                                videoInf.items[0].snippet.channelId
                                )


}

function sheetReport(){
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var newSheet = activeSpreadsheet.insertSheet();
    
    return newSheet;
 
}
