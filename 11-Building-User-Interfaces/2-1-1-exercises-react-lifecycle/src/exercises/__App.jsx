require('../styles/app.css');

const React = require('react');

const {
  MyFirstComponentUsingLifecycleMethods
} = require('./Exercise-8.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="chapter-2-8">
          <div className="chapter-2-8-1">
            <h3>Exercise 8-1: My first component using lifecycle methods</h3>

            <MyFirstComponentUsingLifecycleMethods />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
