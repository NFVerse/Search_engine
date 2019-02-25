import Home from "./Home"
import Search from "./Search"
import { BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom"
import React from "react"
import PokeGrab from "./PokeGrab"
import IndividualPokemonPresenter from "./IndividualPokemonPresenter";
import PokeCreation from "./PokeCreation"

class NavBar extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <h1>Possibly Perposterous Pokemon</h1>
                    <ul className = "Nav">
                        <li><NavLink exact to ="/">Home</NavLink></li>
                        <li><NavLink to ="/Search">Search</NavLink></li>
                        <li><NavLink to ="/PokeGrab">Type's and Weakness</NavLink></li>
                        <li><NavLink to ="/PokeCreation">Create Your Pokemon</NavLink></li>
                    </ul>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Search" component={Search}/>
                    <Route path="/PokeGrab" component={PokeGrab}/>
                    <Route path="/PokeCreation" component={PokeCreation}/>
                    <Route path="/PokeFiller/:id" component={IndividualPokemonPresenter}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default NavBar;