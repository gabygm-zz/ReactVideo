import React from 'react';
import logo from '../../../images/covers/logo.png';
import './related.css'
function Related(props){
 	return(
    	<div className="Related">
    		<img  className="center" src={logo} width={180} height={160}/>
    	</div>
 		)
 }
 export default Related;