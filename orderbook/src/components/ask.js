import React, { Component } from 'react';
// import './App.css';
import { Form, FormControl, Button, Table } from 'react-bootstrap';

function NumberList(props) {
  const numbers = props;
  const listItems = props.numbers.data.map((number) =>
  <tr key={number.toString()}>
    <td>{number.type}</td>
    <td>{number.total}</td>
    <td>{number.price}</td>
  </tr>
  );
  console.log("props from inside NumberList: ", props.numbers.data);
  return (
    <tbody>{listItems}</tbody>
  );
}

class Ask extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    console.log("props from ask or sell: ");
  console.log(this.props.data);
  }
  render(){
    return(
      <div className="container">
        
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

export default Ask;
