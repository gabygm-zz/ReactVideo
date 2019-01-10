import React from 'react';
import './modal.css';

function Modal(props){
	return(
       <div className="Modal">
        
       
		  <div className="Modal-content">
		    
		    <div className="Modal-body">
		      <p>Some text in the Modal Body</p>
		      <p>Some other text...</p>
		      <button onClick={props.handleClick}>Cerrar</button>
		    </div>
		  
		  </div>
		  	{props.childen}
       </div>
		)
}

export default Modal