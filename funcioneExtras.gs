function obtenerIdChannel(videoId) {

  var videoInf = YouTube.Videos.list('snippet, contentDetails',{id: videoId});
  
  //SpreadsheetApp.getUi().alert('El id de canal del video selecionado es: ' + videoInf.items[0].snippet.channelId);
  
  Logger.log(videoInf.items[0].contentDetails.duration);

}

function prurba(){

  obtenerIdChannel('ihVVoKk3ugU');
 
}
