/**
 * Import test framework
 */
const { testCase, assert, assertEquals } = require('../../lib/test-runner');

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

/**
 * Placeholder
 */
const REPLACE_ME = '...';

/**
 * Functionality provided
 *
 * The assignments themselves
 * are below
 */
const human = {
  speak: function () {
    return this.name + ' says hi!';
  },
  eat: function (food) {
    return food
      ? this.name + ' eats ' + food
      : this.name + " wants to eat but didn't get anything to eat!";
  },
};

const man = {
  haveFun: function () {
    return this.name + ' goes camping with his buddies';
  },
};

const woman = {
  haveFun: function () {
    return this.name + ' goes shopping with her girlfriends';
  },
};

const programmer = {
  work: function () {
    return this.name + ' is programming..';
  },
  takeBreak: function () {
    return this.name + ' reads some hackernews';
  },
};

const lawyer = {
  work: function () {
    return this.name + " says: you've been served!";
  },
  takeBreak: function () {
    return this.name + ' enjoys a cocktail';
  },
};

const athlete = {
  run: function () {
    return this.name + ' runs a marathon';
  },
};

const rockstar = {
  playGuitar: function () {
    return this.name + ' plays a sweet tune! 🎵';
  },
};

/**
 * EXERCISES:
 * (Use object spread operator to compose objects)
 *
 * {
 *   ...a,
 *   ...b,
 *   ...c
 * }
 *
 * DOCS: https://github.com/sebmarkbage/ecmascript-rest-spread
 */
testCase('Sharing behaviour (using ES7 Object Spread)', {
  'Frank - the human man': () => {
    // Fill in necessary statement(s) to pass the assertions below
    const justFrank = {
      name: 'Frank',
    };

    const frank = ;

    assert(frank !== justFrank);
    assert(frank.speak() == 'Frank says hi!');
    assert(frank.eat('a hamburger') == 'Frank eats a hamburger');
    assert(frank.eat() == "Frank wants to eat but didn't get anything to eat!");
    assert(frank.haveFun() == 'Frank goes camping with his buddies');
  },

  'Anna - the human woman': () => {
    // Fill in necessary statement(s) to pass the assertions below
    const justAnna = {
      name: 'Anna',
    };

    const anna = REPLACE_ME;

    assert(anna !== justAnna);
    assert(anna.speak() == 'Anna says hi!');
    assert(anna.eat('a sandwich') == 'Anna eats a sandwich');
    assert(anna.eat() == "Anna wants to eat but didn't get anything to eat!");
    assert(anna.haveFun() == 'Anna goes shopping with her girlfriends');
  },

  'Johnny - the human, man and programmer': () => {
    // Fill in necessary statement(s) to pass the assertions below
    const justJohnny = {
      name: 'Johnny',
    };

    const johnny = REPLACE_ME;

    assert(johnny !== justJohnny);
    assert(johnny.speak() == 'Johnny says hi!');
    assert(johnny.eat('a sandwich') == 'Johnny eats a sandwich');
    assert(
      johnny.eat() == "Johnny wants to eat but didn't get anything to eat!"
    );
    assert(johnny.haveFun() == 'Johnny goes camping with his buddies');
    assert(johnny.work() == 'Johnny is programming..');
    assert(johnny.takeBreak() == 'Johnny reads some hackernews');
  },

  'Alex - the human, man, lawyer and athlete': () => {
    // Fill in necessary statement(s) to pass the assertions below
    const justAlex = {
      name: 'Alex',
    };

    const alex = REPLACE_ME;

    assert(alex !== justAlex);
    assert(alex.speak() == 'Alex says hi!');
    assert(alex.eat('a sandwich') == 'Alex eats a sandwich');
    assert(alex.eat() == "Alex wants to eat but didn't get anything to eat!");
    assert(alex.haveFun() == 'Alex goes camping with his buddies');
    assert(alex.work() == "Alex says: you've been served!");
    assert(alex.takeBreak() == 'Alex enjoys a cocktail');
    assert(alex.run() == 'Alex runs a marathon');
  },

  'Bella - the human, woman, athlete and rockstar': () => {
    // Fill in necessary statement(s) to pass the assertions below
    const justBella = {
      name: 'Bella',
    };

    const bella = REPLACE_ME;

    assert(bella !== justBella);
    assert(bella.speak() == 'Bella says hi!');
    assert(bella.eat('a sandwich') == 'Bella eats a sandwich');
    assert(bella.eat() == "Bella wants to eat but didn't get anything to eat!");
    assert(bella.haveFun() == 'Bella goes shopping with her girlfriends');
    assert(bella.run() == 'Bella runs a marathon');
    assert(bella.playGuitar() == 'Bella plays a sweet tune! 🎵');
  },

  'Bella - the human, woman, lawyer and programmer': () => {
    // Fill in necessary statement(s) to pass the assertions below
    const justBella = {
      name: 'Bella',
    };

    const bella = REPLACE_ME;

    assert(bella !== justBella);
    assert(bella.work() == REPLACE_ME);
    assert(bella.takeBreak() == REPLACE_ME);
  },

  'Bella - the human, woman, programmer and lawyer': () => {
    // Fill in necessary statement(s) to pass the assertions below
    const justBella = {
      name: 'Bella',
    };

    const bella = REPLACE_ME;

    assert(bella !== justBella);
    assert(bella.work() == REPLACE_ME);
    assert(bella.takeBreak() == REPLACE_ME);
  },
});
