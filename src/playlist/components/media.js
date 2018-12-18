import React, {Component} from 'react';
//React.Component
import './media.css'
class Media extends Component {
	render(){
		/*const styles = {
			container: {
				color: '#44546b',
				width: '245px',
				cursor:'pointer',
				border:'1px solid red',
				padding:'4px'
			}
		}*/
		return(
			<div className="Media">
			  <img className ="Media-imagen center" src="./images/covers/cover.jpg"
                  alt=""
                  width={200}
                  height={140}
			  />
			  <h3 className="Media-title">Why should you learn React?</h3>
			  <hr/>
			  <p className="Media-author" >React makes it painless to create interactive UIs.
			  </p>
			 
			</div>
			)
	}

}
export default Media;