import React, { Component } from 'react';
import './App.css';
// import './components/bid';
import Ask from './components/ask';
import Bid from './components/bid';
// var sock = new WebSocket("ws://localhost:7979");

class App extends Component {
  constructor(props){
    super(props);
        
       
        // sock.onmessage = function(event){
        //     console.log("event.data");
        //     console.log(event.data);
        //     data1 = event.data;
        //     console.log("data1--------------------.............");
        //     console.log(data1);

        // }
    this.state={
      // days:0,
      // hours:0,
      // minutes:0,
      // seconds:0,
      data: [
   {
      "type":"bid",
      "total":9996000,
      "price":7178.5
   },
   {
      "type":"bid",
      "total":901208,
      "price":7166
   },
   {
      "type":"bid",
      "total":7235,
      "price":7163.5
   },
   {
      "type":"bid",
      "total":2440,
      "price":7162
   },
   {
      "type":"bid",
      "total":2600,
      "price":7160
   },
   {
      "type":"bid",
      "total":253916,
      "price":7155
   },
   {
      "type":"bid",
      "total":420,
      "price":7154
   },
   {
      "type":"bid",
      "total":374500,
      "price":7151
   },
   {
      "type":"bid",
      "total":290120,
      "price":7150
   },
   {
      "type":"bid",
      "total":4380,
      "price":7135
   },
   {
      "type":"bid",
      "total":750,
      "price":7130
   },
   {
      "type":"bid",
      "total":50680,
      "price":7120
   },
   {
      "type":"bid",
      "total":10000,
      "price":7119
   },
   {
      "type":"bid",
      "total":30000,
      "price":7117
   },
   {
      "type":"bid",
      "total":10500,
      "price":7110
   },
   {
      "type":"bid",
      "total":6500,
      "price":7107.5
   },
   {
      "type":"bid",
      "total":10000,
      "price":7105.5
   },
   {
      "type":"bid",
      "total":1000,
      "price":7105
   },
   {
      "type":"bid",
      "total":126345,
      "price":7100.5
   },
   {
      "type":"bid",
      "total":197322,
      "price":7100
   },
   {
      "type":"bid",
      "total":30000,
      "price":7099.5
   },
   {
      "type":"bid",
      "total":13500,
      "price":7090
   },
   {
      "type":"bid",
      "total":42099,
      "price":7080
   },
   {
      "type":"bid",
      "total":158000,
      "price":7076
   },
   {
      "type":"bid",
      "total":10000,
      "price":7072
   },
   {
      "type":"ask",
      "total":657325,
      "price":7400
   },
   {
      "type":"ask",
      "total":4000,
      "price":7400.5
   },
   {
      "type":"ask",
      "total":100,
      "price":7401
   },
   {
      "type":"ask",
      "total":10000,
      "price":7401.5
   },
   {
      "type":"ask",
      "total":5050,
      "price":7402
   },
   {
      "type":"ask",
      "total":500,
      "price":7402.5
   },
   {
      "type":"ask",
      "total":26,
      "price":7404
   },
   {
      "type":"ask",
      "total":28000,
      "price":7405
   },
   {
      "type":"ask",
      "total":693,
      "price":7407
   },
   {
      "type":"ask",
      "total":50,
      "price":7408
   },
   {
      "type":"ask",
      "total":50,
      "price":7408.5
   },
   {
      "type":"ask",
      "total":50050,
      "price":7409
   },
   {
      "type":"ask",
      "total":1250,
      "price":7409.5
   },
   {
      "type":"ask",
      "total":1100,
      "price":7410
   },
   {
      "type":"ask",
      "total":131488,
      "price":7411
   },
   {
      "type":"ask",
      "total":300,
      "price":7413
   },
   {
      "type":"ask",
      "total":1200,
      "price":7413.5
   },
   {
      "type":"ask",
      "total":1000,
      "price":7414
   },
   {
      "type":"ask",
      "total":70000,
      "price":7414.5
   },
   {
      "type":"ask",
      "total":100,
      "price":7416
   },
   {
      "type":"ask",
      "total":100,
      "price":7416.5
   },
   {
      "type":"ask",
      "total":100,
      "price":7417
   },
   {
      "type":"ask",
      "total":100,
      "price":7417.5
   },
   {
      "type":"ask",
      "total":100,
      "price":7418
   },
   {
      "type":"ask",
      "total":6000,
      "price":7419
   }
]
    }
  }

  //   componentDidMount() {
  //           sock.onmessage = (event)=>{
  //           // console.log("event.data");
  //           // console.log(event.data);
  //           // data1 = event.data;
  //           this.setState({data:event.data});
  //           console.log("this.state.data from componentDidMount--------------------.............");
  //           console.log(this.state.data);
  //           // return data1;

   
  // }
  //   }
  

  render() {
    console.log("state inside app.js main container", this.state);
    return (
      <div className="App container">
        <div className="orderBookHeading">OrderBook</div>
        <Ask data={this.state.data.filter(
          function(buyorsell) {
          return buyorsell.type == 'ask';
          })}
        />
        <Bid data={this.state.data.filter(
          function(buyorsell) {
          return buyorsell.type == 'bid';
          })}
        />
      </div>
    );
  // console.log("this.state.data from render: ");
  // console.log(this.state.data);
  }
}


export default App;
