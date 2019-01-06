import React, {Component} from 'react';
//React.Component
import './playlist.css';
import PropTypes from 'prop-types';
import Media from './media.js';

class Playlist extends Component {
	render(){
        
		//const playlist = this.props.data.categories[0].playlist
    const play = this.props.data
    return(
          <div>
            {
              play.categories.map((playlist)=>{
                return(
                      <div className="Playlist" >
                        {
                          playlist.playlist.map((item)=>{
                           //return <Media title = {item.title} key={item.id}/>
                           return <Media {...item} key={item.id} />
                          })
                        }
                    
                      </div>
                )
              })
            }
            </div>
    )

	}
}

export default Playlist;