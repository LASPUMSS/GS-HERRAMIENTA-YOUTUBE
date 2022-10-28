var ss = SpreadsheetApp.getActiveSpreadsheet();

function myReport(id_channel) {
  var sheet = sheetReport();
  sheet.activate();
  titulos();

  var chanel = YouTube.Channels.list('contentDetails,statistics',{id: id_channel});
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

      var videosInf = YouTube.Videos.list('statistics',{id: videoId}).items[0];
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