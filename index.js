import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import data from './src/playlist/api.json';
import Playlist from './src/playlist/components/playlist';
//ReactDOM.render("que voy ha renderizar", donde lo hare)
const app = document.getElementById('app')
//render(<Media type="video" title='Porque aprender React' author="Gabriela Guaman" image="./images/covers/cover.jpg" />, app);
render(<Playlist  data={data}/>, app)
