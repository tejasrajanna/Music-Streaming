import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Songitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
    };
  };

  /*linkStyle = () => {
      return {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
};*/

  componentDidMount = (props) => {
    console.log(this.props.song);
  };

  render() {
    const { name,artist,_id } = this.props.song;
    return (
      <div style={this.getStyle()}>
        <Link to= {'/dashboard/lib/'+_id}>
          {name}
        </Link>
        <p>{"    "} {artist} </p>
      </div>
    );
  }
}