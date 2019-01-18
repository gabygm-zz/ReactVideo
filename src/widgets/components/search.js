import React from 'react';
import './search.css'

const Search = (props) => (
	<form onSubmit={props.handleSubmit}>
		<input className="Search-input" 
			type="text"
			ref={props.setRef}
			onChange ={props.handleChange}
			value={props.value}
			placeholder="Busca tu video favorito" />
	</form>
	)
export default Search;
