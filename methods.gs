var ss = SpreadsheetApp.getActiveSpreadsheet();

function myReport() {
  var sheet = sheetReport();
  sheet.activate();
  titulos();

  var chanel = YouTube.Channels.list('contentDetails,statistics',{id: "UCDdjmBGoXMSSDodGzp0bSwA"});
  //Logger.log(chanel);

  var item = chanel.items[0];
  //Logger.log(item);
  
  var playListId = item.contentDetails.relatedPlaylists.uploads;

  var nextPageToken = '';
  var videosData=[];

  do{

    var playList = YouTube.PlaylistItems.list('snippet, contentDetails', {playlistId: playListId, pageToken: nextPageToken});

    playList.items.forEach(item => {

      // INFO DEL VIEO
      var videoId = item.contentDetails.videoId;
      var title = item.snippet.title;
      var publishedDate = new Date(item.contentDetails.videoPublishedAt);
      var desc = item.snippet.description.replace(/(\r\n|\n|\r)/gm, "");

      var videosInf = YouTube.Videos.list('statistics, contentDetails',{id: videoId}).items[0];
      var videoviews = videosInf.statistics.viewCount;
      var videolikes = videosInf.statistics.likeCount;
      var videoComents = videosInf.statistics.commentCount;
      var videolink = "https://www.youtube.com/watch?v=" + videoId; 
      var duration =  videosInf.contentDetails.duration;

      // INFO DEL CANAL
      var chanTitle = item.snippet.channelTitle;
      var chanId = item.snippet.channelId;
      

      videosData.push( [videoId, 
                        title, 
                        publishedDate, 
                        videoviews, 
                        videolikes, 
                        videoComents, 
                        videolink, 
                        chanTitle, 
                        chanId, 
                        desc,
                        duration]);

    });


    var nextPageToken = playList.nextPageToken;


  }while(nextPageToken != null)

  sheet.getRange(2, 1, videosData.length, videosData[0].length).setValues(videosData);

}

function titulos(){
  
  //TITULOS
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,1).setValue("VIDEO ID");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,2).setValue("TITULO");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,3).setValue("FECHA");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,4).setValue("VISTAS");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,5).setValue("LIKES");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,6).setValue("N° COMENTARIOS");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,7).setValue("LINK DEL VIDEO");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,8).setValue("CANAL");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,9).setValue("CANAL ID");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,10).setValue("DESCRIPCION");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,11).setValue("DURACION");
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(1,12).setValue("SUBTITULOS");
  
  SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
      .getRange(1,1,1,12)
      .setBackground('#6fa8dc')
      .setFontColor('#ffffff')
      .setFontWeight('bold')
      .setHorizontalAlignment('center')
      .setBorder(true, true, true, true, null, null, '#000000', SpreadsheetApp.BorderStyle.SOLID_THICK);
}
