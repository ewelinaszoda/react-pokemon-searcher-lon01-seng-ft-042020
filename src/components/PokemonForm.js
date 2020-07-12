import React from 'react'
import { Form } from 'semantic-ui-react'


class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: 0,
    front: "",
    back: "",
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = (e) => {
    e.target.reset()
    e.preventDefault()


    const { name, hp, front, back } = this.state

    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back,
      }
    }

    fetch(`http://localhost:3000/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(newPokemon)
    })
      .then(resp => resp.json())
      .then(pokemon => { this.props.addPokemon(pokemon) })
      .catch(error => error.message)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input
              fluid label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={(e) => this.handleInputChange(e)}
            />
            <Form.Input
              fluid label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
              onChange={(e) => this.handleInputChange(e)}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="front"
              value={this.state.front}
              onChange={(e) => this.handleInputChange(e)}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="back"
              value={this.state.back}
              onChange={(e) => this.handleInputChange(e)}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
