/**
 * Import test framework
 */
var {
  testCase,
  assert,
  assertEquals
} = require('../lib/test-runner');

/**
 * Import sorting helper
 */
var sortBy = require('sort-by');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 *
 * HINT:
 * If you get stuck, you can replace assert(a == b) with assertEquals(b, a).
 * That way the error message in the browser will be more specific. However,
 * give it a try before you do this, as in most cases this will give you the
 * answer flat out.
 */
var REPLACE_ME = '...';

testCase('People', {
  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  'Using .forEach': function () {
    /**
     * Use forEach to fill the squared numbers array
     */
    var numbers = [1, 2, 3, 4];

    var squared = [];

    REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(numbers.length == 4);
    assert(numbers.join(', ') == [1, 2, 3, 4].join(', '));
    assert(squared.length == 4);
    assert(squared.join(', ') == [1, 4, 9, 16].join(', '));
  },

  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   */
  'Using .map': function () {
    /**
     * Use map to perform the same task as above
     */
    var numbers = [1, 2, 3, 4];

    var squared = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(numbers.length == 4);
    assert(numbers.join(', ') == [1, 2, 3, 4].join(', '));
    assert(squared.length == 4);
    assert(squared.join(', ') == [1, 4, 9, 16].join(', '));
  },

  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   */
  'Reverse each of the words in the array': function () {
    var words = ['hello', 'goodbye', 'world'];

    /**
     * HINT: Look up .map, .split, .join and .reverse
     */
    var reversed = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(words.length == 3);
    assert(words.join(', ') == ['hello', 'goodbye', 'world'].join(', '));
    assert(reversed.length == 3);
    assert(reversed.join(', ') == ['olleh', 'eybdoog', 'dlrow'].join(', '));
  },

  'Pick just the names': function () {
    var people = [{
      name: 'Frank',
      age: 45
    }, {
      name: 'Hank',
      age: 40
    }, {
      name: 'Anna',
      age: 30
    }];

    var names = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(names.length == 3);
    assert(names.join(', ') == ['Frank', 'Hank', 'Anna'].join(', '));
  },

  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   */
  'Filter and keep those younger than 35': function () {
    var people = [{
      name: 'Frank',
      age: 45
    }, {
      name: 'Anna',
      age: 30
    }, {
      name: 'Hank',
      age: 40
    }, {
      name: 'Bella',
      age: 25
    }];

    var youngerThan35 = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(youngerThan35.length == 2);
    assert(youngerThan35.map(function(a) { return a.age }).join(', ') == [30, 25].join(', '));
    assert(youngerThan35.map(function(a) { return a.name }).join(', ') == ['Anna', 'Bella'].join(', '));
  },

  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   */
  'Filter the list and keep those older than 35 and pick just their names': function () {
    var people = [{
      name: 'Frank',
      age: 45
    }, {
      name: 'Anna',
      age: 30
    }, {
      name: 'Hank',
      age: 40
    }, {
      name: 'Bella',
      age: 25
    }];

    var namesOfThoseOlderThan35 = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(namesOfThoseOlderThan35.length == 2);
    assert(namesOfThoseOlderThan35.join(', ') == ['Frank', 'Hank'].join(', '));
  }
});






/**
 * Data to use in the exercises below
 */
var flights = [
  { destination: 'San Francisco', price: 6000 },
  { destination: 'New York', price: 4000 },
  { destination: 'San Diego', price: 5500 },
  { destination: 'Los Angeles', price: 5100 },
];

testCase('Flights', {
  'Map into destinations': function () {
    /**
     * Exercise 1:
     *
     * Map the flights into just an array of destinations
     * that looks like: ['San Francisco', 'New York', 'San Diego', 'Los Angeles']
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var destinations = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(destinations.join(', ') == 'San Francisco, New York, San Diego, Los Angeles');
  },

  'Filter out (remove) those that cost less than 5k': function () {
    /**
     * Exercise 2:
     *
     * Filter the flights and keep only
     * the flights that cost more than 5000
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var costMoreThan5k = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(costMoreThan5k.length == 3);
    assert(costMoreThan5k.every(function(flight) { return flight.price > 5000 }));
  },

  'Sort flights by destination': function () {
    /**
     * Exercise 3:
     *
     * Sort the flights ascending by destination
     * using the npm package `sortBy` (see slides for url)
     * NOTE: It is already installed and available as `sortBy`
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var flightsSortedByDestination = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(flightsSortedByDestination.length == 4);
    assert(flightsSortedByDestination[0].destination == "Los Angeles");
    assert(flightsSortedByDestination[1].destination == "New York");
    assert(flightsSortedByDestination[2].destination == "San Diego");
    assert(flightsSortedByDestination[3].destination == "San Francisco");
  },
});




/**
 * Data to use in the exercises below
 */
var todos = [
  { id: 'a', content: 'Do dishes', completed: true },
  { id: 'b', content: 'Buy the new Macbook', completed: true },
  { id: 'c', content: 'Learn functional programming', completed: false },
  { id: 'd', content: 'Find inner peace', completed: false },
  { id: 'e', content: 'Read that article about framework X that will save the world..', completed: false }
];

testCase('Todos', {
  'Find the content of the completed tasks': function () {
    /**
     * Exercise 4:
     *
     * Produce an array that contains
     * the content of the completed
     * tasks
     *
     * Hint: use .filter and .map
     *
     * result should be = ['Do dishes', 'Buy the new Macbook']
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var completedContent = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(completedContent.length == 2);
    assert(completedContent.join(', ') == 'Do dishes, Buy the new Macbook');
  },

  'Sum of incomplete todos': function () {
    /**
     * Exercise 5:
     *
     * Find the sum of incompleted todos
     * using filter
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var sumIncompleteTodos = REPLACE_ME;

    /**
     * Assertions (no need to touch these)
     */
    assert(sumIncompleteTodos == 3);
  },
});