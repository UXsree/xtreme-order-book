import React from 'react';

function NumberList(props) {
    console.log("data inside numberlist.js : ", props.num);
  const listItems = props.num.map((number,index) =>
  <tr key={index}>
    <td>{number.type}</td>
    <td>{number.total}</td>
    <td>{number.price}</td>
  </tr>
  );
//   console.log("props from inside NumberList: ", props.numbers.data);
  return (
    <tbody>{listItems}</tbody>
  );
}

export default NumberList;