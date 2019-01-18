import React, {Component} from 'react';
import Search from '../components/search'

class SearchContainer extends Component{

	state = {
		valueSearch: 'Gabrila G.'
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.search.value, 'submit');
	}

	handleInputChange = event => {
		this.setState({
			valueSearch: event.target.value.replace(' ', '?')

		})
	}

	setInputRef = element =>{
		this.search = element;
	}

	render(){
		return(
			<Search 
			setRef = {this.setInputRef}
			handleSubmit={this.handleSubmit}
 			handleChange={this.handleInputChange}
 			value={this.state.valueSearch}
			/>
		)
	}
}

export default SearchContainer;