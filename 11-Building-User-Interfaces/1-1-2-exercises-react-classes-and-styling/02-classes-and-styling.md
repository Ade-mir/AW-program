# React Basics

## CSS Classes

- Just like in HTML, except `class` is a reserved keyword in JavaScript
- Instead we use `className`, which is the JavaScript equivalent (DOM API)

```js
class FlightInfo extends React.Component {
  render() {
    return (
      <div className='flight-info'>
        <div className='flight-info-summary'>Summary</div>
        <div className='flight-info-details'>Details</div>
      </div>
    );
  }
}

ReactDOM.render(<FlightInfo />, document.getElementById('app'));
```

## Inline Styles

- We can also apply inline styles in React
- Inline styles are just plain JavaScript objects with properties
- Style properties follow the JavaScript DOM API naming
- That means `backgroundColor` vs. `background-color` in CSS

```js
class FlightInfo extends React.Component {
  render() {
    const myStyles = {
      backgroundColor: 'red',
      margin: '50px',
    };

    return (
      <div style={myStyles} className='flight-info'>
        <div className='flight-info-summary'>Summary</div>
        <div className='flight-info-details'>Details</div>
      </div>
    );
  }
}

ReactDOM.render(<FlightInfo />, document.getElementById('app'));
```

[**Exercises**]

- Complete exercise 2 in the `/exercises` folder
