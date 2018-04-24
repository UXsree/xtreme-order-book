import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

        // var sock = new WebSocket("ws://localhost:7979");
        // var data = '';
        // sock.onmessage = function(event){
        //     console.log(event.data);
        //     data = event.data;
        // }
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
