import React from "react";
import Pokedex from "./Pokedex.json"
import PokePresent from "./PokePresent"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: "",
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    theArray = pokeData => {
        return pokeData.map(poke => <PokePresent pokemon={poke} /> )
    }

    pokeSearch = searchNames => {
        return Pokedex.pokemon.filter(poke => poke.name.includes(searchNames) || poke.type.includes(searchNames))
    }

    render() {
        return (
            <React.Fragment>
                <p>(Capitlize first letter or it will not work!)</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name="Search" value={this.state.Search} placeholder="Ex. Bulbasaur" onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                        <input type="submit" value="Choose Your Pokemon"></input>
                </form>
                <h3>{this.theArray(this.pokeSearch(this.state.Search))}</h3>
                <br></br>
            </React.Fragment>
        );
    }
}
export default Search;