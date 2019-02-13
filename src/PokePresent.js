import React, {Component} from "react"

class PokePresent extends Component{
    render() {
        const pokeBall = this.props.pokemon
            return(
                <li>
                    {pokeBall.name} 
                </li>
        ); 
    }
}


export default PokePresent;