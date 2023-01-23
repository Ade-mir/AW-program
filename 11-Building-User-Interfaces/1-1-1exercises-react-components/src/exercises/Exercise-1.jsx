const React = require('react');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 */

let REPLACE_ME = () => <div />;

/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 1.1 Exercise description:
 *
 * Write a React component that outputs
 * the following HTML:
 *
 * <div>Hello World!</div>
 *
 */

const MyFirstComponent = class MyFirstComponent extends React.Component {
  render() {
    return <div>Hello World!</div>;
  }
};

/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 1.2 Exercise description:
 *
 * Write a React component that outputs
 * the following HTML:
 *
 * <div>
 *   <h1>Amazing stuff</h1>
 *   <p>Is about to happen..</p>
 * </div>
 *
 */

const MySecondComponent = class MySecondComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Amazing stuff</h1>
        <p>Is about to happen..</p>
      </div>
    );
  }
};

/**
 * ------------------------
 * Your implementation here
 * ------------------------
 *
 * 1.3 Exercise description:
 *
 * Write a React component that outputs
 * the following HTML:
 *
 * <div>
 *   <h1>Electric cars</h1>
 *   <ul>
 *     <li>Tesla Model 3</li>
 *     <li>Nissan Leaf</li>
 *   </ul>
 * </div>
 *
 */

const MyThirdComponent = class MyThirdComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Electric cars</h1>
        <ul>
          <li>Tesla Model 3</li>
          <li>Nissan Leaf</li>
        </ul>
      </div>
    );
  }
};

/**
 * Exports
 */
module.exports = {
  MyFirstComponent,
  MySecondComponent,
  MyThirdComponent,
};
