import React, {Component} from 'react';
import './video.css'

export default class Video extends Component {
	render(){
		return(
           <div className="Videovideo">
	           <video
	  				autoPlay={this.props.autoPlay}
	  				src={this.props.src}
	            />
           </div>
			)
	}
}