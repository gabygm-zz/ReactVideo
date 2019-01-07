import React, {Component} from 'react';
//React.Component
import './playlist.css';
import PropTypes from 'prop-types';
import Media from './media.js';
import Play  from '../../icons/components/play'
import Pause  from '../../icons/components/pause'
import Screem  from '../../icons/components/screem'
import Volume  from '../../icons/components/volume'

function Playlist(props) {      
    //const playlist = this.props.data.categories[0].playlist
    const play = props.data
    return(
          <div>
            {
              play.categories.map((playlist)=>{
                return(
                      <div className="Playlist" >
                        <Play 
                        size={28}
                        color="#64dd17" />

                        <Pause
                        size={28}
                        color="#e91e63" />

                         <Volume
                        size={28}
                        color="#2196f3" />

                        <Screem
                        size={30}
                        color="#ef6c00" />

                        {
                          playlist.playlist.map((item)=>{
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



/*class Playlist extends Component {
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
}*/


export default Playlist;