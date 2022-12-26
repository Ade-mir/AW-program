var { testCase, assert, assertEquals } = require('../lib/test-runner');
var REPLACE_ME = '...';

/**
 * DESCRIPTION:
 * Replace all occurrences of "REPLACE_ME" in the unit tests below to make them
 * all pass (they should be green).
 * HINT
 * If you get stuck, you can replace assert(a == b) with assertEquals(b, a).
 * That way the error message in the browser will be more specific. However,
 * give it a try before you do this, as in most cases this will give you the
 * answer flat out.
 */
testCase('Variables', {
  'Solve the task': function () {
    // Fill in necessary statement(s) to pass the assertions below
    let a = 23;
    assertEquals(a, 23);
  },

  'Solve that task as well': function () {
    var a = 23;

    assert(a === 23);
  },

  'Declare a local variable': function () {
    // Fill in necessary statement(s) to pass the assertions below

    let a = 'My first variable';
    assertEquals(a, 'My first variable');
    assert(!window.a, 'Should not be global');
  },

  'Variables in blocks': function () {
    var language = 'JavaScript';

    if (true) {
      var language = 'C++';

      // If you're stuck and need more helpful error messages, try:
      // assertEquals(language, REPLACE_ME);
      assert(language == REPLACE_ME, 'Inside the if');
    }

    assert(language == REPLACE_ME, 'Outside the if');
  },

  'Variables in functions (1)': function () {
    var language = 'JavaScript';

    function whatLanguage() {
      var language = 'C++';

      assert(language == REPLACE_ME, 'In nested function');
    }

    whatLanguage();

    assert(language == REPLACE_ME, 'In outer function');
  },

  'Variables in functions (2)': function () {
    var language = 'JavaScript';

    function whatLanguage() {
      language = 'C++';

      assert(language == REPLACE_ME, 'In nested function');
    }

    whatLanguage();

    assert(language == REPLACE_ME, 'In outer function');
  },

  'Variables in functions (3)': function () {
    var language = 'JavaScript';

    function whatLanguage() {
      language = 'C++';

      assert(language == REPLACE_ME, 'In nested function');
    }

    language = 'TypeScript';
    whatLanguage();

    assert(language == REPLACE_ME, 'In outer function');
  },
});

testCase('Conditional statements', {
  'If (1)': function () {
    var changeLanguage = false;

    if (changeLanguage) {
      var language = 'JavaScript';
    }

    assert(language == REPLACE_ME);
  },

  'If (2)': function () {
    var changeLanguage = true;

    if (changeLanguage) {
      var language = 'JavaScript';
    }

    assert(language == REPLACE_ME);
  },

  'If (3)': function () {
    var changeLanguage = false;
    var language = '';

    if (changeLanguage) {
      language = 'JavaScript';
      language = 'TypeScript';
    }

    assert(language == REPLACE_ME);
  },

  'If (4)': function () {
    var changeLanguage = true;
    var language = '';

    if (changeLanguage) {
      language = 'JavaScript';
      language = 'TypeScript';
    }

    assert(language == REPLACE_ME);
  },

  'If (5)': function () {
    var changeLanguage = false;
    var language = '';

    if (changeLanguage) language = 'JavaScript';
    language = 'TypeScript';

    assert(language == REPLACE_ME);
  },

  'If (6)': function () {
    var changeLanguage = true;
    var language = '';

    if (changeLanguage) language = 'JavaScript';
    language = 'TypeScript';

    assert(language == REPLACE_ME);
  },

  'Switch / case (1)': function () {
    var language = 'JavaScript';
    var result;

    switch (language) {
      case 'TypeScript':
        result = 100;
        break;
      case 'JavaScript':
        result = 200;
        break;
      case 'Python':
        result = 300;
        break;
      default:
        result = 1;
    }

    assert(result == REPLACE_ME);
  },

  'Switch / case (2)': function () {
    var language = 'JavaScript';
    var result;

    switch (language) {
      case 'TypeScript':
        result = 100;
      case 'JavaScript':
        result = 200;
      case 'Python':
        result = 300;
      default:
        result = 1;
    }

    assert(result == REPLACE_ME);
  },

  'Switch / case (3)': function () {
    var language = 'JavaScript';
    var result;

    switch (language) {
      case 'TypeScript':
        result = 100;
      case 'JavaScript':
        result = 200;
      case 'Python':
        result = 300;
      case 'JavaScript':
        result = 900;
    }

    assert(result == REPLACE_ME);
  },

  'Switch / case (4)': function () {
    var language = 'JavaScript';
    var result;

    switch (language) {
      case 'TypeScript':
        result = 100;
      case 'JavaScript':
        result = 200;
      case 'Python':
        result = 300;
      case 'JavaScript':
        result = 900;
      default:
        result = 1;
    }

    assert(result == REPLACE_ME);
  },

  'Switch / case (5)': function () {
    var language = 'JavaScript';
    var result;

    switch (language) {
      case 'Type' + 'Script':
        result = 100;
        break;
      case 'Java' + 'Script':
        result = 200;
        break;
      case 'Py' + 'thon':
        result = 300;
        break;
      default:
        result = 1;
    }

    assert(result == REPLACE_ME);
  },

  'Switch / case (6)': function () {
    var input = 10 + 30;
    var result;

    switch (input) {
      case 20 + 20:
        result = 100;
        break;
      case 14:
        result = 200;
        break;
      case 30 + 10:
        result = 300;
        break;
      default:
        result = 1;
    }

    assert(result == REPLACE_ME);
  },

  'Switch / case (7)': function () {
    var input = 10 + 30;
    var result;

    switch (input) {
      case 20 + 20:
        result = 100;
      case 14:
        result = 200;
      case 30 + 10:
        result = 300;
        break;
      default:
        result = 1;
    }

    assert(result == REPLACE_ME);
  },
});

testCase('while loops', {
  'Should set n = 10 using a loop': function () {
    /* // Complete the set of statements to pass the assertion
    var n;

    while (??) {
      ??
    }
    */

    assertEquals(n, 10);
  },

  'Rewrite to use while loop': function () {
    // Rewrite the following statements to a while loop
    var n = 0;

    n++;
    n++;
    n++;
    n++;
    n++;

    assertEquals(n, 5);
  },
});

testCase('for loops', {
  'Should set n = 10 using a loop': function () {
    var n = 0;

    /* // Complete the loop to pass the assertion
    for (??) {
      ??
    }
    */

    assertEquals(n, 10);
  },

  'Rewrite to use for loop': function () {
    var n = 1;
    var result = 1;

    // Rewrite the following statements to a for loop
    result = result * n;
    n++;
    result = result * n;
    n++;
    result = result * n;
    n++;
    result = result * n;
    n++;
    result = result * n;
    n++;

    assertEquals(result, 120);
    assertEquals(n, 6);
  },
});

testCase('Exceptions', {
  'Make this test pass (catch the error!)': function () {
    throw new Error('Oops!');
  },

  'Exception message': function () {
    try {
      throw new Error('Oops!');
    } catch (e) {
      assertEquals(REPLACE_ME, 'Oops!');
      assertEquals(e.name, REPLACE_ME);
    }
  },

  'Exceptions and scope': function () {
    var e = 42;

    try {
      throw 'Oops';
    } catch (e) {
      assert(e == REPLACE_ME, 'In catch');
    }

    assert(e == REPLACE_ME, 'Outside catch');
  },

  'Nested catching': function () {
    var e = 42;
    var lastError = undefined;

    try {
      throw new Error('Oops!');
    } catch (e) {
      try {
        lastError = e;
        throw new Error('Yikes!');
      } catch (e) {
        lastError = e;
      }
    }

    assert(lastError.message == REPLACE_ME);
  },
});
