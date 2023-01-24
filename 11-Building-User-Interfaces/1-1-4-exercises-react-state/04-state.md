# React State

- `this.state`
- Use the `constructor` to set an initial state of your component
- Remember to call `super(props)` if using the constructor

```js
class FlightInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
    };
  }

  render() {
    let summaryClass = "flight-info-summary";
    summaryClass += this.state.showDetails ? " flight-info-summary-opened" : "";

    return (
      <div className="flight-info">
        <div className={summaryClass}>{this.props.summary}</div>
        <div className="flight-info-details">
          {this.state.showDetails && this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <FlightInfo summary="Los Angeles">
    <div>Welcome to the city of opportunity</div>
  </FlightInfo>,
  document.getElementById("app")
);
```

## Updating State and Acting on Events

- To update the state of your component use the instance method `this.setState`
- Remember to bind any instance method referring to `this` to the instance itself (`this`)
- Calling `this.setState` will trigger a re-render of your component
- **NEVER** mutate `this.state` to signal state change (it will not re-render)
- In general think of `this.props` and `this.state` as read-only

```js
class FlightInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
    };
  }

  handleClick() {
    this.setState({
      showDetails: !this.state.showDetails,
    });
  }

  render() {
    let summaryClass = "flight-info-summary";
    summaryClass += this.state.showDetails ? " flight-info-summary-opened" : "";

    return (
      <div className="flight-info">
        <div onClick={this.handleClick.bind(this)} className={summaryClass}>
          {this.props.summary}
        </div>
        <div className="flight-info-details">
          {this.state.showDetails && this.props.children}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <FlightInfo summary="Los Angeles">
    <div>Welcome to the city of opportunity</div>
  </FlightInfo>,
  document.getElementById("app")
);
```

- You can alternatively pass a function as the first argument to `this.setState` that returns a new state based on the previous one

```js
class FlightInfo extends React.Component {
  constructor(props) {
    //...
  }

  handleClick() {
    this.setState((state) => {
      return {
        showDetails: !state.showDetails,
      };
    });
  }

  render() {
    //...
  }
}
```

[**Exercises**]

- Complete exercise 4 in the `/exercises` folder
