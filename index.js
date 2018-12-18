import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import Media from './src/playlist/components/media'
//ReactDOM.render("que voy ha renderizar", donde lo hare)
const app = document.getElementById('app')
const helloMundo = <h1>Hola mundo Gaby</h1>;
render(<Media />, app);


//console.log('Hola mundo');