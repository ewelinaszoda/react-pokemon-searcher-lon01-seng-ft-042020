import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isClicked: true,
  }

  isClicked = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={() => this.isClicked()}>
            { this.state.isClicked
              ?  <img alt="pokemon" src={this.props.pokemon.sprites.front} />
              : <img alt="pokemon" src={this.props.pokemon.sprites.back} />
            }
            {/* <img alt="pokemon" src={this.state.isClicked
              ? this.props.pokemon.sprites.front
              : this.props.pokemon.sprites.back}
            /> */}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}


export default PokemonCard
