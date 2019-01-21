import React from 'react';
import './timer.css';

function leftPad(number) {
  const pad = '00';
  return pad.substring(0, pad.length - number.length) + number;
}

function formatTimeHourMinute(secs){
	const minutes = parseInt(secs / 60);
	const seconds = parseInt(secs % 60, 10);
	return `${minutes} : ${leftPad(seconds.toString())}`;
}

export default function Timer(props) {
	return(
		<div className="Timer">
			<p>
				<span>{formatTimeHourMinute(props.timeOn)} / {formatTimeHourMinute(props.duration)}</span>

			</p>
		</div>
	)
}