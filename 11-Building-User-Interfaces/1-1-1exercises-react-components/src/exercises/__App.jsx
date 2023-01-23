require('../styles/app.css');

const React = require('react');

const {
  MyFirstComponent,
  MySecondComponent,
  MyThirdComponent,
} = require('./Exercise-1.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="chapter-1-1">
          <div className="chapter-1-1-1">
            <h3>Exercise 1-1: My first component</h3>

            <MyFirstComponent />
          </div>

          <div className="chapter-1-1-1">
            <h3>Exercise 1-2: My second component</h3>

            <MySecondComponent />
          </div>

          <div className="chapter-1-1-1">
            <h3>Exercise 1-3: My third component</h3>

            <MyThirdComponent />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
