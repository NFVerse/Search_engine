import Pokedex from "./Pokedex.json";
import React from "react"; 

/**
 * TODO: Name, id, img, types, height, wieght, weaknesses, next evolutions
 */
class IndividualPokemonPresenter extends React.Component {
  render() {
    console.log("props", this.props);
    const pokemon = Pokedex.pokemon.find(pokemon => {
      return pokemon.id === parseInt(this.props.match.params.id);
    });

    const nextEvo = () => {
      if (pokemon.hasOwnProperty("next_evolution")) {
        return pokemon.next_evolution.map(evolution => (
          <li>{evolution.name}</li>
        ));
      }
    };
    console.log(nextEvo);
    return (
      <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.img} alt="Pokemon"></img>
        <li>Id Number: {pokemon.id}</li>
        <li>Type: {pokemon.type}</li>
        <li>Height: {pokemon.height}</li>
        <li>Weight: {pokemon.weight}</li>
        <li>Weaknesses: {pokemon.weaknesses}</li>
        <li> Next Evolutions: {nextEvo()}</li>
      </div>
    );
  }
}

export default IndividualPokemonPresenter;
