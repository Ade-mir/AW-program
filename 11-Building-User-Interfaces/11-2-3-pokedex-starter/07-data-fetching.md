# Data fetching

To connect data to our React application we can leverage the ability to hook on to the different parts of the lifecycle of a component. Usually this would mean waiting for the component to mount initially, before we fetch some data that we place in the component state.

## Starting point

```js
class PokemonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  render() {
    const { pokemons } = this.state;

    const pokemonElements = pokemons.map(pokemon) => {
      return (
        <li key={pokemon.name}>
          {pokemon.name}
        </li>
      );
    });

    return <ul>{pokemonElements}</ul>;
  }
}
```

So now we have to:

1. Add a method for fetching the data and store it in state (`handlePopulatePokemons`)
2. Trigger this method when the component mounts (`componentDidMount`)

## Example with data

```js
import getPokemons from "./services/get-pokemons";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    this.handlePopulatePokemons();
  }

  async handlePopulatePokemons() {
    const pokemons = await getPokemons();
    this.setState({ pokemons });
  }

  render() {
    const { pokemons } = this.state;

    const pokemonElements = pokemons.map((pokemon) => {
      return (
        <li key={pokemon.name}>
          {pokemon.name}
        </li>
      );
    });

    return <ul>{pokemonElements}</ul>;
  }
}
```

There's still a few things missing here though:

1. We have no error handling - we need to be able to reflect this to the user
2. We have no way of knowing if the pokemons are being fetched or not - they will just suddenly pop up

We'll solve this by using a common convention

## Example with error and loading handling

```js
import getPokemons from "./services/get-messages";

class PokemonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoading: false,
      pokemons: [],
    };
  }

  componentDidMount() {
    this.handlePopulatePokemons();
  }

  handlePopulatePokemons() {
    this.setState({
      isLoading: true,
      error: null,
    });

    getPokemons()
      .then((pokemons) => {
        this.setState({
          pokemons,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { pokemons, isLoading, error } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (isLoading) {
      return <div>Loading pokemons...</div>;
    }

    const pokemonElements = pokemons.map((pokemon) => {
      return (
        <li key={pokemon.name}>
          {pokemon.name}
        </li>
      );
    });

    return <ul>{pokemonElements}</ul>;
  }
}
```

[**Exercise**]

- solve "React Chat Exercise"
- follow the instructions in `readme.md`
