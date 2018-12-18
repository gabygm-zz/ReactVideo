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
			  <img src="./images/covers/cover.jpg"
                  alt=""
                  width={230}
                  height={160}
			  />
			  <h3>¿First Media?</h3>
			  <p>Gaby G.</p>
			</div>
			)
	}

}
export default Media;