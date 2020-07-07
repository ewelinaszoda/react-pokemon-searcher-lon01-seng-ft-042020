import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    userSearch: "",
  }

addPokemon = (pokemon) => {
  this.setState({ pokemons: [...this.state.pokemons, pokemon] })
}
  

  updateUserSearch = (e) => {
    this.setState({ userSearch: e.target.value })
  }


  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then(resp => resp.json())
      .then(data => this.setState({ pokemons: data }))
      .catch(error => console.log(error.message))
  }

  filterPokemons = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.userSearch))
  }

  render() {

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
         addPokemon={this.addPokemon}
        />
        <br />
        <Search
          updateUserSearch={this.updateUserSearch}
          userSearch={this.state.userSearch}
        />
        <br />
        <PokemonCollection
          pokemons={this.filterPokemons()}
        />
      </Container>
    )
  }
}

export default PokemonPage
