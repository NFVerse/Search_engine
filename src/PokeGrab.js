import React, { Component } from "react"
import Pokedex from "./Pokedex.json";
import PokePresent from "./PokePresent.js"

// to implement:  Poison, Ground, Flying, Bug, Ghost, Dragon
class PokeGrab extends Component {
    theArray = pokeData => {
        return pokeData.map(poke => <PokePresent pokemon={poke} />)
    }

    filterByType = type => {
        return Pokedex.pokemon.filter(poke => poke.type.includes(type))
    }

    filterByWeakness = weakness => {
        return Pokedex.pokemon.filter(poke => poke.weaknesses.includes(weakness))

    }

    render() {
        const grass = this.filterByType('Grass')
        const fire = this.filterByType('Fire')
        const water = this.filterByType('Water')
        const rock = this.filterByType('Rock')
        const normal = this.filterByType('Normal')
        const electric = this.filterByType('Electric')
        const ice = this.filterByType('Ice')
        const flying = this.filterByType('Flying')
     
        const wGrass = this.filterByWeakness('Grass')
        const wFire = this.filterByWeakness('Fire')
        const wWater = this.filterByWeakness('Water')
        const wRock = this.filterByWeakness('Rock')

        return (
            <React.Fragment>
                <ul>
                <h2>Grass Types</h2>
                    {this.theArray(grass)}
                </ul>
                <ul>
                <h2>Fire Types</h2>
                    {this.theArray(fire)}
                </ul>
                <ul>
                    <h2>Water Types</h2>
                    {this.theArray(water)}
                </ul>
                <ul>
                    <h2>Normal Types</h2>
                    {this.theArray(normal)}
                </ul>
                <ul>
                    <h2>Electric Types</h2>
                    {this.theArray(electric)}
                </ul>
                <ul>
                    <h2>Ice Types</h2>
                    {this.theArray(ice)}
                </ul>
                <ul>
                    <h2>Rock Types</h2>
                    {this.theArray(rock)}
                </ul>
                <ul>
                    <h2>Flying Types</h2>
                    {this.theArray(flying)}
                </ul>
                <ul>
                    <h2>Weak against Grass Types</h2>
                    {this.theArray(wGrass)}
                </ul>
                <ul>
                    <h2>Weak against Water Types</h2>
                    {this.theArray(wWater)}
                </ul>
                <ul>
                    <h2>Weak against Fire Types</h2>
                    {this.theArray(wFire)}
                </ul>
                <ul>
                    <h2>Weak against Rock Types</h2>
                    {this.theArray(wRock)}
                </ul>
            </React.Fragment>
        );
    }
}

export default PokeGrab;