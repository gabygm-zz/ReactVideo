import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Media from './src/playlist/components/media'
//ReactDOM.render("que voy ha renderizar", donde lo hare)
const app = document.getElementById('app')
render(<Media type="video" title='Porque aprender React' author="Gabriela Guaman" image="./images/covers/cover.jpg" />, app);
