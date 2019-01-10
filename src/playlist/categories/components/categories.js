import React from 'react';
import Category from './category';
import '../../../pages/components/homeLayout.css';

function Categories(props){
	return(
		<div className="categories">
	        { 
	        	props.categories.map((item)=>{
	        		return (
	        			<Category 
	        				key={item.id} 
	        				{...item}
	        				handleOpenModal = {props.handleOpenModal}/>
	        		)

	        	})
	        }
		</div>
		)
}


export default Categories