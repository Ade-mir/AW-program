const React = require('react');
const PropTypes = require('prop-types');

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
 * 10.1 Exercise description:
 *
 * Create a controlled form
 * that validates an input field with
 * the following rules:
 *
 * - It cannot contain '@'
 * - It must contain more than 10 characters
 *
 * For an invalid input it should
 * produce the following HTML:
 *
 * <div> // Inline styles: background-color: red
 *   <input type="text">
 * </div>
 *
 * For a valid input it should
 * produce the following HTML:
 *
 * <div> // Inline styles: background-color: green
 *   <input type="text"></input>
 * </div>
 *
 * HINT: the <input> element should have the following props/attributes:
 * - onChange,
 * - value,
 * - type
 */

const ValidatedField = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: false,
      currentValue: '',
    };
  }

  handleChange(event) {
    const updatedValue = event.target.value;

    const isValid = !~updatedValue.indexOf('@') && updatedValue.length > 10;
    // The "~" symbol is the bitwise NOT operator in JavaScript and many other programming languages.

    // It performs a bitwise operation on a single operand, which is to invert all of the bits. When used as a unary operator before a number, it returns the corresponding value with all of its bits inverted, effectively flipping all 0 bits to 1 and all 1 bits to 0.

    // However, in this case, it is being used in a bit of a tricky way. The "~" operator is being used to get the index of the "@" character in the "updatedValue" string. If the "@" character is present in the string, the index of its first occurrence will be returned. If it is not present, -1 will be returned.

    // So, in this case, ~ returns the index of the character "@" and !~ negates that index and returns true if the character "@" is not found and false if it is found.

    this.setState({
      currentValue: updatedValue,
      isValid,
    });
  }

  render() {
    const validationStyles = {
      backgroundColor: this.state.isValid ? 'green' : 'red',
    };

    return (
      <div style={validationStyles}>
        <input
          type='text'
          value={this.state.currentValue}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
};

/**
 * Exports
 */
module.exports = {
  ValidatedField,
};
