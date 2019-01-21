import React, {Component} from 'react';
import './video.css';

export default class Video extends Component {
	togglePLay(){
		if(this.props.pause){
			this.video.play()
		}else{
			this.video.pause()
		}
	}

	state = {
		onTime: 0
	}

    setRef = element =>{
    	this.video = element;
    }


	componentWillReceiveProps(nextProps){
		if (nextProps.pause !== this.props.pause){
			this.togglePLay();
		}
	}

	

	render(){
		const {
			handleLoadedMetadata,
			handleTimeUpdate
		} = this.props

		return(
           <div className="">
	           <video className="BoxVideo"
	                ref={this.setRef}
	  				autoPlay={this.props.autoplay}
	  				src={this.props.src}
	  				onLoadedMetadata={handleLoadedMetadata}
	  				onTimeUpdate={handleTimeUpdate}
	            />
           </div>
			)
	}
}