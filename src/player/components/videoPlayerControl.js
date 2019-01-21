import React from 'react';
import './videoPlayerControl.css'

export default function VideoPlayerControls(props){

	return(
		<div className="VideoPlayerControls">
			{props.children}
		</div>
	)
}