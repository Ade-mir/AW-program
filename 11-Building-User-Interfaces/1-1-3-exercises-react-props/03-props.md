# React Props

## Using Props

- `this.props`
- Props are passed to components just like HTML attributes

```js
// Using class syntax
class FlightInfo extends React.Component {
  render() {
    return (
      <div className='flight-info'>
        <div className='flight-info-summary'>{this.props.summary}</div>
        <div className='flight-info-details'>{this.props.details}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <FlightInfo
    summary='Los Angeles'
    details='Welcome to the city of opportunity and misery...'
  />,
  document.getElementById('app')
);
```

- We can also pass any valid JavaScript expression as a prop
- Expression need to be wrapped in curly braces

```js
const getSummary = function () {
  return 'Welcome to the city of opportunity and misery...';
};

class FlightInfo extends React.Component {
  render() {
    return (
      <div className='flight-info'>
        <div className='flight-info-summary'>{this.props.summary}</div>
        <div className='flight-info-details'>{this.props.details}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <FlightInfo
    summary={getSummary()}
    details={'Welcome' + ' ' + 'to the city'}
  />,
  document.getElementById('app')
);
```

- When we pass children to React components, they are also just a prop (array)

```js
class FlightInfo extends React.Component {
  render() {
    return (
      <div className='flight-info'>
        <div className='flight-info-summary'>{this.props.summary}</div>
        <div className='flight-info-details'>
          {/* children are just a prop! */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <FlightInfo summary='Los Angeles'>
    <div>Welcome to the city of opportunity and misery.</div>
    <div>This is the home of the movie stars and performers.</div>
  </FlightInfo>,
  document.getElementById('app')
);
```

**Special cases:**

- `children`
- `className`
- `key`

## Rendering lists

- Favor a functional approach with `map`, `filter` etc. instead of `for` and `while`

```js
const flights = [
  {
    destination: 'San Francisco',
    image: './img/san-francisco.jpg',
    price: 5000,
  },
  {
    destination: 'Los Angeles',
    image: './img/los-angeles.jpg',
    price: 4000,
  },
  {
    destination: 'San Diego',
    image: './img/san-diego.jpg',
    price: 6000,
  },
  {
    destination: 'New York',
    image: './img/new-york.jpg',
    price: 3000,
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Available Flights!</h1>
        <div>
          {flights.map((flight) => (
            <FlightInfo summary={flight.destination}>
              <p>Price: {flight.price}</p>
              <img src={flight.image} />
            </FlightInfo>
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

- For better readability you can also separate those parts out

```js
const flights = [
  {
    destination: 'San Francisco',
    image: './img/san-francisco.jpg',
    price: 5000,
  },
  {
    destination: 'Los Angeles',
    image: './img/los-angeles.jpg',
    price: 4000,
  },
  {
    destination: 'San Diego',
    image: './img/san-diego.jpg',
    price: 6000,
  },
  {
    destination: 'New York',
    image: './img/new-york.jpg',
    price: 3000,
  },
];

class App extends React.Component {
  render() {
    const flights = this.state.flights.map((flight) => {
      return (
        <FlightInfo summary={flight.destination}>
          <p>Price: {flight.price}</p>
          <img src={flight.image} />
        </FlightInfo>
      );
    });

    return (
      <div>
        <h1>Available Flights!</h1>
        <div>{flights}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
```

[**Exercises**]

- Complete exercise 3 in the `/exercises` folder
