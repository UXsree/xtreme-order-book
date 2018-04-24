import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import NumberList from './numberlist';



class Bid extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    console.log("props from ask or sell: ");
  console.log(this.props.data);
  }
  render(){
    return(
      <div className="">
        
<Table striped bordered condensed hover className="orderBook">
  <thead>
    <tr>
      <th>Price</th>
      <th>Size</th>
      <th>Total</th>
    </tr>
  </thead>
  <NumberList numbers={this.props.data}/>
</Table>
      </div>
    )
  }
}

export default Bid;
