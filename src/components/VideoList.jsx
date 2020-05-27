// import VideoListEntry from './VideoListEntry.js';
// import exampleVideoData from '../data/exampleVideoData.js';
// var videos = [];

// for (var i = 0; i < exampleVideoData.length; i++){
//   var videoObj = {};

//   videoObj.title = exampleVideoData[i].snippet.title;
//   videoObj.description = exampleVideoData[i].snippet.description;

//   videos.push(videoObj);
// }


// make videos array of objects
  // contains exampleVideoData[i].snippet.title and exampleVideoData[i].snippet.description


var VideoList = (props) => {

  // console.log(props.videos);
  // console.log(Array.isArray(props.videos));

  // create array to store title and description

  // for (var i = 0; i < props.length; i++){
  //   var videoObj = {};

  //   videoObj.title = props[i].snippet.title;
  //   videoObj.description = props[i].snippet.description;

  //   videos.push(videoObj);
  // }



  return (
  <div className="video-list">
    {/* <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
      {props.videos.map(singleEntry =>
      <VideoListEntry singleEntry = {singleEntry}/>
      )}
  </div>
  );
};
{/* <div><h5><em>{props.snippet.title.map(title => <VideoListEntry)}</em></h5></div> */}

//


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
