var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheetByName('Mi Reporte');

function myReport() {

  var chanel = YouTube.Channels.list('contentDetails,statistics',{id: 'UC1_JGQOwIsTqgj6JQmxN_Tw'});
  //Logger.log(chanel);

  var item = chanel.items[0];
  //Logger.log(item);
  
  var playListId = item.contentDetails.relatedPlaylists.uploads;

  var nextPageToken = '';
  var videosData=[];

  do{

    var playList = YouTube.PlaylistItems.list('snippet, contentDetails', {playlistId: playListId, pageToken: nextPageToken});

    playList.items.forEach(item => {

      var videoId = item.contentDetails.videoId;
      var title = item.snippet.title;
      var publishedDate = new Date(item.contentDetails.videoPublishedAt);

      
      var videostatics = YouTube.Videos.list('statistics',{id: videoId}).items[0].statistics;
      var videoviews = videostatics.viewCount;
      var videolikes = videostatics.likeCount;
      var videoComents = videostatics.commentCount;
      var videolink = "https://www.youtube.com/watch?v=" + videoId; 

      
      videosData.push( [videoId, title, publishedDate, videoviews, videolikes, videoComents, videolink]);

    });


    var nextPageToken = playList.nextPageToken;


  }while(nextPageToken != null)


  sheet.getRange(2, 1, videosData.length, videosData[0].length).setValues(videosData);


}
