require('../styles/app.css');

const React = require('react');

const {
  MyFirstComponentWithClasses,
  MySecondComponentWithClasses,
  MyFirstComponentWithInlineStyles,
  MySecondComponentWithInlineStyles,
  MyFirstComponentWithInlineStylesAndClasses
} = require('./Exercise-2.jsx');

const App = React.createClass({
  render() {
    return (
      <div>
        <div className="chapter-1-2">
          <div className="chapter-1-2-1">
            <h3>Solution 2-1: My first component with CSS classes</h3>

            <MyFirstComponentWithClasses />
          </div>

          <div className="chapter-1-2-2">
            <h3>Solution 2-2: My second component with CSS classes</h3>

            <MySecondComponentWithClasses />
          </div>

          <div className="chapter-1-2-3">
            <h3>Solution 2-3: My first component with inline styles</h3>

            <MyFirstComponentWithInlineStyles />
          </div>

          <div className="chapter-1-2-4">
            <h3>Solution 2-4: My second component with inline styles</h3>

            <MySecondComponentWithInlineStyles />
          </div>

          <div className="chapter-1-2-5">
            <h3>Solution 2-5: My first component with inline styles and classes</h3>

            <MyFirstComponentWithInlineStylesAndClasses />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
