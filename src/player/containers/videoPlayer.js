import React, {Component} from 'react';
import VideoPlayerLayout from '../components/Player';
import Video from '../components/video';
import Title from '../components/title'
import PlayPause from  '../components/PlayPause'
import Timer from '../components/timer'
import VideoPlayerControls from '../components/videoPlayerControl'
import '../components/title.css'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration:0,
    timer:0
  }

  togglePlay = (event) => {
    this.setState({
      //swich
      pause:!this.state.pause

    })
  }

  handleTimeUpdate = (event) => {
    //console.log(this.video.currentTime)
    this.setState({
      timer: this.video.currentTime
    })
  }

  handleLoadedMetadata= (event) => {
    this.video = event.target;
    this.setState({
      duration:this.video.duration
    })
    
  }

  componentDidMount(){
    this.setState({
      //return tru or false
      pause: (!this.props.autoplay)
    })
  }

	render(){

    

		return(
           <VideoPlayerLayout>
             <Title className="Title" title="GAby"/>
             <VideoPlayerControls>
                 <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
                 <Timer
                    duration={this.state.duration}
                    timeOn = {this.state.timer}

                 />
             </VideoPlayerControls>
            
             <Video
                autoplay={this.props.autoplay}
                pause={this.state.pause}
                handleLoadedMetadata={this.handleLoadedMetadata}
                handleTimeUpdate={this.handleTimeUpdate}
                src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"

             />
           </VideoPlayerLayout>
		)
	}

}

export default VideoPlayer
