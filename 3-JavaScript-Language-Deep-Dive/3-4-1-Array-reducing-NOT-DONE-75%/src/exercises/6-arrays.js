/**
 * Import test framework
 */
var { testCase, assert, assertEquals } = require('../lib/test-runner');

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

testCase('Reducing', {
  /**
   * Hint: Use a combination of all above (filter, map, reduce)
   */
  'Find the sum of the peoples ages for those younger than 35': function () {
    var people = [
      {
        name: 'Frank',
        age: 45,
      },
      {
        name: 'Anna',
        age: 30,
      },
      {
        name: 'Hank',
        age: 40,
      },
      {
        name: 'Bella',
        age: 25,
      },
    ];

    var ageSumOfyoungerThan35 = people.reduce(function (accu, current) {
      if (current.age < 35) {
        accu += current.age;
      }
      return accu;
    }, 0);

    /**
     * Assertions (no need to touch these)
     */
    assert(ageSumOfyoungerThan35 == 55);
  },
  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   */
  'Find the sum of the array using .reduce': function () {
    var numbers = [1, 2, 3, 4, 5];

    var sum = numbers.reduce(function (accu, current) {
      return (accu += current);
    }, 0);

    // people.reduce(function (accu, current) {
    //   if (current.age < 35) {
    //     accu += current.age;
    //   }
    //   return accu;
    // }, 0);

    /**
     * Assertions (no need to touch these)
     */
    assert(sum == 15);
  },

  'Reduce todos array in to object with properties': function () {
    var todos = [
      { id: 'a', content: 'Do dishes', completed: true },

      { id: 'b', content: 'Buy the new Macbook', completed: true },

      { id: 'c', content: 'Learn functional programming', completed: false },

      { id: 'd', content: 'Find inner peace', completed: false },

      {
        id: 'e',
        content:
          'Read that article about framework X that will save the world..',
        completed: false,
      },
    ];
    /**
     * Produce an object mapping
     * of the todos where the `id`
     * is used as the property name
     *
     * EXPECTED RESULT:
     *
     * var todosByKey = {
     *   a: { id: 'a', content: 'Do dishes', completed: true },
     *   b: { id: 'b', content: 'Buy the new Macbook', completed: true },
     *   c: { id: 'c', content: 'Learn functional programming', completed: false },
     *   d: { id: 'd', content: 'Find inner peace', completed: false }
     *   e: { id: 'e', content: 'Read that article about framework X that will save the world..', completed: false }
     * };
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var todosByKey = todos.reduce(function (accu, current) {
      return {
        ...accu,
        [current.id]: current,
      };
    }, {});

    /**
     * Assertions (no need to touch these)
     */
    assert(!Array.isArray(todosByKey));
    assert(todosByKey['a'].content == 'Do dishes');
    assert(todosByKey['b'].content == 'Buy the new Macbook');
    assert(todosByKey['c'].content == 'Learn functional programming');
    assert(todosByKey['d'].content == 'Find inner peace');
    assert(
      todosByKey['e'].content ==
        'Read that article about framework X that will save the world..'
    );
  },
});

/**
 * Data to use in the exercises below
 */
var votes = [
  { id: 1, party: 'Piratpartiet' },
  { id: 2, party: 'AP' },
  { id: 3, party: 'Piratpartiet' },
  { id: 4, party: 'SV' },
  { id: 5, party: 'Piratpartiet' },
  { id: 6, party: 'MDG' },
  { id: 7, party: 'Høyre' },
  { id: 8, party: 'Frp' },
  { id: 9, party: 'MDG' },
  { id: 10, party: 'Høyre' },
];

testCase('Election (bonus)', {
  'Group votes by party': function () {
    /**
     * Exercise 7:
     *
     * Group the votes by `party`
     * and represent the votes
     * for each party as an array
     * of vote `id`s
     * by using reduce
     *
     * // REDUCE WITH IF STATEMENT TO COMBINE PARTY VOTES:
     * {
     *
     * }
     *
     * var votesByParty = {
     *   'Piratpartiet': [1, 3, 5],
     *   'AP': [2],
     *   'SV': [4],
     *   'Frp': [8]
     *   'MDG': [6, 9],
     *   'Høyre': [7, 10]
     * }
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */

    var votes = [
      { id: 1, party: 'Piratpartiet' },
      { id: 2, party: 'AP' },
      { id: 3, party: 'Piratpartiet' },
      { id: 4, party: 'SV' },
      { id: 5, party: 'Piratpartiet' },
      { id: 6, party: 'MDG' },
      { id: 7, party: 'Høyre' },
      { id: 8, party: 'Frp' },
      { id: 9, party: 'MDG' },
      { id: 10, party: 'Høyre' },
    ];
    let allVotesCombined = votes.reduce(function (accu, current) {
      return {
        ...accu,
        [current.id]: [current.party],
      };
    }, {});

    function Yeehaw() {
      if (allVotesCombined.Piratpartiet) console.log(allVotesCombined.id);
    }
    Yeehaw();
    // EXPECTED RESULT:
    //  SAMME SOM SISTE OPPGAVE
    //  {
    //  [id: 1, party: 'Piratpartiet'],
    //  [id: 3, party: 'Piratpartiet'],
    //  [id: 5, party: 'Piratpartiet'],
    //  }
    console.log(allVotesCombined);

    /**
     * Assertions (no need to touch these)
     */
    assert(votesByParty['Piratpartiet'].length == 3);
    assert(votesByParty['AP'].length == 1);
    assert(votesByParty['SV'].length == 1);
    assert(votesByParty['Frp'].length == 1);
    assert(votesByParty['MDG'].length == 2);
    assert(votesByParty['Høyre'].length == 2);
  },
});
