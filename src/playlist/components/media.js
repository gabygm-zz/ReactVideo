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
		author: 'Gabriela Guaman'
	}
	//arrow funtion => inherit contest his father is very important to optimeze code
	handleClick = (event) => {
		this.setState({
			author: 'Gaby'
		})

	}
	render(){
		return(
			<div className="Media" onClick={this.handleClick}>
			  <img className ="Media-imagen center" 
			      src={this.props.cover}
                  alt=""
                  width={200}
                  height={140}
			  />
			  <div className="Media-title"> {this.props.title}</div>
			  <hr/>
			  <p className="Media-author" >{this.props.author}
			  </p>
			 
			</div>
			)
	}

}
Media.propTypes = {
     cover: PropTypes.string,
  	 title: PropTypes.string,
  	 author: PropTypes.string,
	 type: PropTypes.oneOf(['video', 'audio']),

	//number, object, func, array, bool
};
export default Media;