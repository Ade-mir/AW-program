# Component Lifecycle

Lifecycle methods are Reacts way of
letting you hook onto the different
stages of the component lifecycle.

This is handy for things like:

- Initialization
- Controlling component behavior
- Teardown and cleanup

## Example - setInterval

```js
class TickTock extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ seconds: this.state.seconds + 1 });
  }

  render() {
    return <p>React has been running for {this.state.seconds} seconds.</p>;
  }
}

ReactDOM.render(<TickTock />, document.getElementById("example"));
```

## Example - Window size

_(show the application)_

```js
class Box extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };

    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div>
        <p>Window width: {this.state.windowWidth}</p>
        <p>Window height: {this.state.windowHeight}</p>
      </div>
    );
  }
}

React.render(<Box />, document.getElementById("example"));
```

[**Exercises**]

- Complete exercise 8 in the `/exercises` folder