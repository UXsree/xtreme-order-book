import React, { Component } from 'react';
import './App.css';
import Ask from './components/ask';
import Bid from './components/bid';
var sock = new WebSocket("ws://localhost:7979");

class App extends Component {
  constructor(){
    super();
        // sock.onmessage = function(event){
        //     console.log("event.data");
        //     console.log(event.data);
        //     data1 = event.data;
        //     console.log("data1--------------------.............");
        //     console.log(data1);

        // }
        this.state={
          data: []
        };
  }

    componentDidMount() {
            sock.onmessage = (event)=>{
            console.log("event.data");
            console.log(JSON.parse(event.data));
            // data1 = event.data;
            this.setState({data:JSON.parse(event.data)});
            console.log("this.state.data from componentDidMount--------------------.............",new Date().toLocaleTimeString());
            console.log(this.state.data);
  }
    }

  render() {
    console.log("state inside app.js main container", this.state.data);
    return (
      <div className="App container">
        <div className="orderBookHeading">OrderBook</div>
        <Ask data={this.state.data}
        />
        
      </div>
    );
  // console.log("this.state.data from render: ");
  // console.log(this.state.data);
  }
}


export default App;
