import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"
        name="search"
        type="text"
        placeholder="Search pokemon..."
        onChange={(e) => props.updateUserSearch(e)}
        value={props.userSearch}
        />
        <i className="search icon" 
        />
      </div>
    </div>
  )
}

export default Search



