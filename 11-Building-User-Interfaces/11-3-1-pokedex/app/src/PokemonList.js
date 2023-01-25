import React from 'react';
import getPokemons from './get-pokemons';

export default class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      previousPage: null,
      nextPage: null,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.handlePopulatePokemons(this.state.currentPage);
  }

  async handlePopulatePokemons(page) {
    const pokemons = await getPokemons(page);
    this.setState({
      pokemons: pokemons.results,
      previousPage: pokemons.previous,
      nextPage: pokemons.next,
      currentPage: page,
    });
  }

  handleNextPage = async () => {
    const { nextPage } = this.state;
    if (nextPage) {
      const lastSlashIndex = nextPage.lastIndexOf('/');
      const nextPageNumber = parseInt(nextPage.slice(lastSlashIndex + 1));
      await this.handlePopulatePokemons(nextPageNumber);
    }
  };

  handlePreviousPage = async () => {
    const { previousPage } = this.state;
    if (previousPage) {
      const lastSlashIndex = previousPage.lastIndexOf('/');
      const previousPageNumber = parseInt(
        previousPage.slice(lastSlashIndex + 1)
      );
      await this.handlePopulatePokemons(previousPageNumber);
    }
  };

  render() {
    const { pokemons } = this.state;

    const pokemonElements = pokemons.map((pokemon) => {
      return <li key={pokemon.name}>{pokemon.name}</li>;
    });
    return (
      <>
        <ul>{pokemonElements}</ul>
        <button onClick={this.handlePreviousPage}>Previous</button>
        <button onClick={this.handleNextPage}>Next</button>
      </>
    );
  }
}
