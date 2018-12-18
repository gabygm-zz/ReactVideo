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
			  <img className ="Media-imagen" src="./images/covers/cover.jpg"
                  alt=""
                  width={230}
                  height={160}
			  />
			  <h3 className="Media-title">¿First Media?</h3>
			  <p className="Media-author" >Gaby G.</p>
			</div>
			)
	}

}
export default Media;