# React Basics

## Creating a Component Class

- Extend your component class with `React.Component` and attach the properties that are applicable
- The only required property/method is `render`, which has to return a description of the output of the component
- Render a component tree using `ReactDOM.render`

```js
class FlightInfo extends React.Component {
  render() {
    return (
      <div>
        <div>Summary</div>
        <div>Details</div>
      </div>
    );
  }
}

ReactDOM.render(<FlightInfo />, document.getElementById("app"));
```

[**Exercises**]

- Complete exercise 1 in the `/exercises` folder