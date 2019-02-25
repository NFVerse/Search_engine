import React, { Component } from "react"

class PokeCreation extends Component {
    state = {
        newPoke : ""
    }
    pokePost = posting => {
        console.log(posting)
    }


    render(){
        return(
            <form onSubmit= {this.pokePost}>
                <input type= 'text' onChange={ event => this.setState({ name : this.state.newPoke }) } placeholder = 'Name of Pokemon'></input>
            </form>
        )
    }
}

export default PokeCreation