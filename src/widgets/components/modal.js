import React from 'react';
import './modal.css';

export default function Modal(props){
	return(
       <div className="Modal">
		  <div className="Modal-content">
		    <div className="Modal-body">
		      <button onClick={props.handleClick}>Cerrar</button>
		    </div>
		  
		  </div>
		  	{props.childen}
       </div>
		)
}

