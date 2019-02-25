import React, { Component } from "react";
import { Link } from "react-router-dom";

class PokePresent extends Component {
  render() {
    const pokeBall = this.props.pokemon;
    const URL = `/PokeFiller/${pokeBall.id}`
    // const URL = "/PokeFiller/" + pokeBall.id see above line
    return (
        <ul>
          <Link to={URL}>{pokeBall.id}. {pokeBall.name}</Link>
        </ul>
    );
  }
}

export default PokePresent;
