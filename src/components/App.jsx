import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      VideoPlayer: exampleVideoData[0],
      // needs to be dynamic
      // function that will connect to the on click event in videolistentry somehow?
      VideoList: exampleVideoData
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.VideoPlayer}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.VideoList}/>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
