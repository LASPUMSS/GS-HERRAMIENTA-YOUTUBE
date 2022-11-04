// Reporte de los videos de un canal publico de YT 
function myReportChannel(id_channel){
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

    var playList = YouTube.PlaylistItems.list('snippet, contentDetails', 
                                              {playlistId: playListId, 
                                              pageToken: nextPageToken});

    playList.items.forEach(item => {

      // INFO DEL VIEO
      var videoId = item.contentDetails.videoId;
      var title = item.snippet.title;
      var publishedDate = new Date(item.contentDetails.videoPublishedAt);
      var desc = item.snippet.description.replace(/(\r\n|\n|\r)/gm, "");

      var videosInf = YouTube.Videos.list('snippet, statistics, contentDetails',{id: videoId}).items[0];
      var videoviews = videosInf.statistics.viewCount;
      var videolikes = videosInf.statistics.likeCount;
      var videoComents = videosInf.statistics.commentCount;
      var videolink = "https://www.youtube.com/watch?v=" + videoId; 
      var duration =  getMiuntesOfStrig(videosInf.contentDetails.duration);

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

};

// Reporte de los videos de una lista publica de YT
function myReportListVdo(id_ListVdo){

  var sheet = sheetReport();
  sheet.activate();
  titulos();

  var nextPageToken = '';
  var videosData=[];

  do{
    var listVdo = YouTube.PlaylistItems.list('snippet, contentDetails', 
                                                {playlistId: id_ListVdo, 
                                                pageToken: nextPageToken});
    
    listVdo.items.forEach(item => {

      // INFO DEL VIEO
      var videoId = item.contentDetails.videoId;
      var title = item.snippet.title;
      var publishedDate = new Date(item.contentDetails.videoPublishedAt);
      var desc = item.snippet.description.replace(/(\r\n|\n|\r)/gm, "");

      var videosInf = YouTube.Videos.list('snippet, statistics, contentDetails',{id: videoId}).items[0];
      var videoviews = videosInf.statistics.viewCount;
      var videolikes = videosInf.statistics.likeCount;
      var videoComents = videosInf.statistics.commentCount;
      var videolink = "https://www.youtube.com/watch?v=" + videoId; 
      var duration =  videosInf.contentDetails.duration;

      // INFO DEL CANAL
      var chanTitle = item.snippet.channelTitle;
      var chanId = item.snippet.channelId;

      //INFO LISTA

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

    var nextPageToken = listVdo.nextPageToken;

  }while(nextPageToken != null)

  //Logger.log(videosData)
  sheet.getRange(2, 1, videosData.length, videosData[0].length).setValues(videosData);

};

// Devuelve el id de un canal de YT desde el id de un video
function obtenerIdChannel(videoId){

  var videoInf = YouTube.Videos.list('snippet, contentDetails',{id: videoId});
  
  //SpreadsheetApp.getUi().alert('El id de canal del video selecionado es: ' + videoInf.items[0].snippet.channelId);
  SpreadsheetApp.getUi().alert('El nombre de canal del video selecionado es: ' + 
                                videoInf.items[0].snippet.channelTitle + '. \r\n' +
                                'El id de canal del video selecionado es: ' + 
                                videoInf.items[0].snippet.channelId
                                )


};

