import React from 'react';
import Playlist from '../../components/playlist'
import '../../components/playlist.css';

function Category(props) {
	return(
		<div>
		    <h2 className="categoryTitle" >{props.title}</h2>
			<p className="categoryDescription" >{props.description}</p>
		   	<Playlist playlist={props.playlist} />
		</div>
		)
}

export default Category