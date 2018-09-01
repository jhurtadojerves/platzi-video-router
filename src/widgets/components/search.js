/**Dependencies */
import React from 'react'
import { Prompt } from 'react-router'

/**Assets */
import './search.css';

/**Other components */

const Search = (props) => (
  <form
    className="Search"
    onSubmit={ props.handleSubmit }
  >
    <Prompt
      when={ props.prompt }
      message="¿Estás seguro de querer dejar la página?"
    />
    <input
      ref={ props.setRef }
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={ props.handleChange }
      value={ props.value }
    />
  </form>
)

export default Search
