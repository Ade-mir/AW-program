require('../styles/app.css');

const React = require('react');

const {
  ValidatedField
} = require('./Exercise-10.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="chapter-2-10">
          <div className="chapter-2-10-1">
            <h3>Solution 10-1: My first form component</h3>

            <ValidatedField />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
