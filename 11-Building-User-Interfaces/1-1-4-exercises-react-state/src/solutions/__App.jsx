require('../styles/app.css');

const React = require('react');

const {
  CheckboxWithLabel,
  ClickCounter,
  ClickCounterWithInitialValue,
  IncrementDecrement,
  IncrementDecrementStep
} = require('./Exercise-4.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="chapter-1-4">
          <div className="chapter-1-4-1">
            <h3>Solution 4-1: Checkbox with label (state and events)</h3>

            <CheckboxWithLabel
              labelOn='On'
              labelOff='Off'
            />
          </div>

          <div className="chapter1-4-1">
            <h3>Solution 4-2: Click counter (state and events)</h3>

            <ClickCounter />
          </div>

          <div className="chapter1-4-3">
            <h3>Solution 4-3: Click counter with initial value (state and events)</h3>

            <ClickCounterWithInitialValue initialValue={10} />
          </div>

          <div className="chapter1-4-4">
            <h3>Solution 4-4: Incrementer / Decrementer (state and events)</h3>

            <IncrementDecrement />
          </div>

          <div className="chapter1-4-5">
            <h3>Solution 4-5: Incrementer / Decrementer with custom step interval (state and events)</h3>

            <IncrementDecrementStep stepInterval={5} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
