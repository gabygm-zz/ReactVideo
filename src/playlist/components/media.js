import React, {Component} from 'react';
//React.Component
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
	//constructor(props){
	//	super(props)
	//	this.state = {
	//		author: props.author
	//	}
	//	//for each event is not convenient
		//this.handleClick = this.handleClick.bind(this)

	//}
	state = {
		author: 'dsdsd'
	}
	//arrow funtion => inherit contest his father is very important to optimeze code
	handleClick = (event) => {
		this.setState({
			author: 'Gaby'
		})

	}
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
			<div className="Media" onClick={this.handleClick}>
			  <img className ="Media-imagen center" 
			      src={this.props.image}
                  alt=""
                  width={200}
                  height={140}
			  />
			  <h3 className="Media-title">{this.props.title}</h3>
			  <hr/>
			  <p className="Media-author" >{this.state.author}
			  </p>
			 
			</div>
			)
	}

}
Media.propTypes = {
     image: PropTypes.string.isRequired,
  	 title: PropTypes.string,
  	 author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio']),

	//number, object, func, array, bool
};
export default Media;