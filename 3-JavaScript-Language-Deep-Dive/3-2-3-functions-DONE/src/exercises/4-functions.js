var REPLACE_ME = '...';

var { testCase, assert, assertEquals } = require('../lib/test-runner');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 * HINT
 * If you get stuck, you can replace assert(a == b) with assertEquals(b, a).
 * That way the error message in the browser will be more specific. However,
 * give it a try before you do this, as in most cases this will give you the
 * answer flat out.
 */

testCase('Functions', {
  /**
   * 1.
   */
  'Declare a function that takes no parameters': function myFunc() {
    // Fill in necessary statement(s) to pass the assertions below

    assert(typeof myFunc == 'function', '1');
    assert(myFunc.length == 0, '2');
    assert(myFunc.name == 'myFunc', '3');
  },

  /**
   * 2.
   */
  'Create a named function expression that takes 3 parameters': function () {
    // Fill in necessary statement(s) to pass the assertions below

    let myFunc = function myAwesomeFunction(en, to, tre) {};

    assert(typeof myFunc == 'function', '1');
    assert(myFunc.length == 3, '2');
    assert(myFunc.name == 'myAwesomeFunction', '3');
  },

  /**
   * 3.
   */
  'Return values (1)': function () {
    function addNumbers(a, b) {
      return a + b;
    }

    assert(addNumbers(1, 2) == 3, '1');
    assert(addNumbers(5, 5) == 10, '2');
  },

  /**
   * 4.
   */
  'Return values (2)': function () {
    function addNumbersBroken(a, b) {
      return a + b;
    }

    assert(addNumbersBroken(1, 2) == 3, '1');
    assert(addNumbersBroken(5, 5) == 10, '2');
  },

  /**
   * 5.
   */
  'Return values (3)': function () {
    function addNumbersBroken(a, b) {
      return a + b;
    }

    assert(addNumbersBroken(1, 2) == 3, '1');
    assert(addNumbersBroken(5, 5) == 10, '2');
  },

  /**
   * 6.
   */
  'Return values (4)': function () {
    function addNumbersBroken(a, b) {
      return a + b;
    }

    assert(addNumbersBroken(1, 2) == 3, '1');
    assert(addNumbersBroken(5, 5) == 10, '2');
  },

  /**
   * 7.
   */
  'Parameters (1)': function () {
    function updateString(str) {
      str = 'something new';
      return str;
    }

    var myString = 'hello';

    assert(updateString(myString) == 'something new', '1');
    assert(myString == 'hello', '2');
  },

  /**
   * 8.
   */
  'Parameters (2)': function () {
    function updateString(obj) {
      obj.str = 'something new';
      return obj.str;
    }

    var obj = {
      str: 'hello',
    };

    assert(updateString(obj) == 'something new', '1');
    assert(obj.str == 'something new', '2');
  },

  /**
   * 9.
   */
  Hoisting: function () {
    var firstResult;
    var secondResult;

    if (typeof firstGetSquare === 'function') {
      firstResult = firstGetSquare(3);
    }

    if (typeof secondGetSquare === 'function') {
      secondResult = secondGetSquare(3);
    }

    function firstGetSquare(num) {
      return num * num;
    }

    var secondGetSquare = function (num) {
      return num * num;
    };

    assert(firstResult == firstGetSquare(3), '1');
    assert(secondResult == undefined, '2');
  },

  /**
   * 10.
   */
  'Variadic function (1)': function () {
    /**
     * Create a function that can join
     * together an arbitraty amount of
     * strings passed as arguments (see assertions for what is expected)
     */
    function combine(...parts) {
      let result = '';
      for (let i = 0; i < parts.length; i++) {
        result += parts[i];
      }
      return result;
    }

    assert(combine('This', 'is', 'awesome') == 'Thisisawesome', '1');
    assert(combine('This', 'is', 'even', 'better') == 'Thisisevenbetter', '2');
  },

  /**
   * 11.
   */
  'Variadic function (2) (bonus)': function () {
    /**
     * Create a function that can join
     * together an arbitraty amount of
     * strings passed as arguments,
     * where the first arguments is used
     * between each of the following parts (see assertions for what is expected)
     */
    function combine(seperator, ...parts) {
      let result = parts[0];

      for (let i = 1; i < parts.length; i++) {
        result += seperator + parts[i];
      }
      return result;
    }

    assert(combine(' ', 'This', 'is', 'awesome') == 'This is awesome', '1');
    assert(combine('-', 'This', 'is', 'awesome') == 'This-is-awesome', '2');
    assert(
      combine('**', 'This', 'is', 'even', 'better') == 'This**is**even**better',
      '3'
    );
  },
});
