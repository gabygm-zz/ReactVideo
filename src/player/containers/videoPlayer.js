import React, {Component} from 'react';
import VideoPlayerLayout from '../components/Player';
import Video from '../components/video';
import Title from '../components/title'
import PlayPause from  '../components/PlayPause'

class VideoPlayer extends Component {
  state = {
    pause: true,
  }

  togglePlay = (event) => {
    this.setState({
      pause:!this.state.pause

    })
  }

  componentDidMount(){
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

	render(){
		return(
           <VideoPlayerLayout>
             <Title title="Hola GAby"/>
             <PlayPause pause={this.state.pause} handleClick={this.togglePlay}/>
             <Video
                autoplay={this.props.autoplay}
                pause={this.state.pause}
                src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"

             />
           </VideoPlayerLayout>
		)
	}

}

export default VideoPlayer
