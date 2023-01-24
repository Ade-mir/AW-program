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
 * 8.1 Exercise description:
 *
 * Implement the following behavior to the component below:
 * - Listens to the 'scroll' event on mount
 * - Keeps the window scroll position in state (remember initial state)
 * - Removes all listeners when unmounting
 *
 * Should output the following HTML (relative to scroll position):
 *
 * <div>Scroll Position x: 0 y: 512</div>
 *
 * When instantiated with:
 *
 * <MyFirstComponentUsingLifecycleMethods />
 */

const MyFirstComponentUsingLifecycleMethods = class MyFirstComponentUsingLifecycleMethods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({
      scrollX: window.scrollX,
      scrollY: window.scrollY,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        <p>
          Scroll Position x: {this.state.scrollX} y: {this.state.scrollY}
        </p>
      </div>
    );
  }
};

/**
 * Exports
 */
module.exports = {
  MyFirstComponentUsingLifecycleMethods,
};
