var YouTube = require('youtube-node');

var youTube = new YouTube();
youTube.setKey('API-KEY');

youTube.getChannelById('YOUTUBEID', function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    
    var info = {};
    info.subs = result.items[0].statistics.subscriberCount;
    info.views = result.items[0].statistics.viewCount;
    info.videos = result.items[0].statistics.videoCount;
    info.user = result.items[0].snippet.title
    
    console.log(info.user);
    console.log("Subscribers - " + info.subs);
    console.log("Total Views - " + info.views);
    console.log("Total Videos - " + info.videos);
  }
});
