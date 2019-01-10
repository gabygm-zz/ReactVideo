import React, {Component} from 'react';
import HomeLayout from '../components/homeLayout';
import Categories from '../../playlist/categories/components/categories';
import Related from '../components/related';
import ModalContainer from "../../widgets/containers/modal";
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handleError'

class Home extends Component {
	state = {
		modalVisible: false
	}

	handleOpenModal = (event)=> {
		this.setState({
			modalVisible: true
		})
	}

	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		})
	}
	render(){
	    return(
	    	<HandleError>
			   <HomeLayout>
			     <Related/>
				  <Categories categories={this.props.data.categories}
				  		handleOpenModal = {this.handleOpenModal}
				  />
                  {
                  	this.state.modalVisible && 
				  	<ModalContainer >
					  	<Modal handleClick={this.handleCloseModal} >
					  	</Modal>
					</ModalContainer>
                  }
				</HomeLayout>
			</HandleError>
			)
		}
}

export default Home