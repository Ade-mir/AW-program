var { testCase, assert, assertEquals } = require("../lib/test-runner");

/**
 * DESCRIPTION:
 * Replace all occurrences of "REPLACE_ME" in the unit tests below to make them
 * all pass (they should be green). Sometimes you will need to fill in missing
 * code/statements to make the assertions pass
 */
var REPLACE_ME = "...";

testCase("Declaration and Assignment", {
  "Solve the task": function() {
    // Fill in necessary statement(s) to pass the assertions below
    var a = 54;
    assertEquals(a, 54);
  },

  "Solve that task as well": function() {
    var a = 54;

    assert(a === 54);
  },

  "Declare a variable": function() {
    // Fill in necessary statement(s) here
    var a;

    assertEquals(a, undefined);
    assert(!window.a, "Should not be global");
  },

  "Declare a variable (integer)": function() {
    // Fill in necessary statement(s) here
    var a = 23;
    assertEquals(a, 23);
    assert(!window.a, "Should not be global");
  },

  "Declare a variable (float)": function() {
    // Fill in necessary statement(s) here
    var b = 123.456;

    assertEquals(b, 123.456);
    assert(!window.b, "Should not be global");
  },

  "Declare a variable (truthy boolean)": function() {
    // Fill in necessary statement(s) here
    var c = true;

    assertEquals(c, true);
    assert(!window.c, "Should not be global");
  },

  "Declare a variable (falsy boolean)": function() {
    // Fill in necessary statement(s) here
    var d = false;

    assertEquals(d, false);
    assert(!window.d, "Should not be global");
  },

  "Declare a variable (string)": function() {
    // Fill in necessary statement(s) here
    var e = "Wubbalubbadubdub!";

    assertEquals(e, "Wubbalubbadubdub!");
    assert(!window.e, "Should not be global");
  }
});

testCase("Re-assignment", {
  "Re-assign the variables (1)": function() {
    var a = 100;
    var b = 333;

    assertEquals(a, 100);
    assertEquals(b, 333);

    // Fill in necessary statement(s) here
    a = 201;
    b = 445;

    assertEquals(a, 201);
    assertEquals(b, 445);
  },

  "Re-assign the variables (2)": function() {
    var a = "100";
    var b = true;

    assertEquals(a, "100");
    assertEquals(b, true);

    // Fill in necessary statement(s) here
    a = "portal gun";
    b = false;

    assertEquals(a, "portal gun");
    assertEquals(b, false);
  },

  "Switch-a-roo (1)": function() {
    var a = "100";
    var b = true;

    a = b;
    b = a;

    assert(a === true);
    assert(b === true);
  },

  "Switch-a-roo (2)": function() {
    var a = "100";
    var b = true;

    b = a;
    a = b;

    assert(a === "100");
    assert(b === "100");
  },

  "Switch-a-roo (3)": function() {
    var a = "100";
    var b = true;

    var temp = a;
    a = b;
    b = temp;

    assert(a === true);
    assert(b === "100");
  },

  "Switch-a-roo (4)": function() {
    var a = "100";
    var b = true;
    var c = 1234;

    a = c;
    b = a;
    c = b;

    assert(a === 1234);
    assert(b === 1234);
    assert(c === 1234);
  },

  "Switch-a-roo (5)": function() {
    var a = "100";
    var b = true;
    var c = 1234;

    var tempA = a;
    var tempB = b;
    a = c;
    b = tempA;
    c = tempB;

    assert(a === 1234);
    assert(b === "100");
    assert(c === true);
  }
});

testCase("Evaluation", {
  "What does it evaluate to (1)": function() {
    var a = "hello" + "world";

    assert(a === "helloworld");
  },

  "What does it evaluate to (2)": function() {
    var a = 5 + 10;

    assert(a === 15);
  },

  "What does it evaluate to (3)": function() {
    var a = 5 + 10 + 3;

    assert(a === 18);
  },

  "What does it evaluate to (4)": function() {
    var a = 1 + 4 + (5 - 4);

    assert(a === 6);
  },

  "What does it evaluate to (5)": function() {
    var a = 10;
    var b = 20;
    var c = 30;
    var d = 40;
    var e = 50;

    var result = a + b - c + d - e - 3;

    assert(result === -13);
  },

  "What does it evaluate to (6)": function() {
    var a = 10;
    var b = 20;
    var c = 30;
    var d = 40;

    var result = (c, a, b, d);

    assert(result === 40);
  },

  "What does it evaluate to (7)": function() {
    var a = 10;
    var b = 20;
    var c = 30;

    var result = (a + b, c + 5);

    assert(result === 35);
  },

  "What does it evaluate to (8)": function() {
    var a = 10;
    var b = (a = 20);

    assert(a === 20);
    assert(b === 20);
  },

  "What does it evaluate to (9)": function() {
    var a = 20;
    var b = (a = 10);
    var c = (b = 40);

    assert(a === 10);
    assert(b === 40);
    assert(c === 40);
  }
});

testCase("Primitive Types", {
  Integers: function() {
    var a = 10;
    var b = 20;
    var result = a + b;

    assert(result === 30);
  },

  "Floats (1)": function() {
    var a = 10.1;
    var b = 20.233;
    var result = a + b;

    assert(result === 30.333);
  },

  "Floats (2)": function() {
    var a = 10.1;
    var b = 20.234;
    var result = a + b;

    assert(result === 30.334000000000003);
  },

  "Choosing precision (1)": function() {
    var b = 20.233;
    var result = b.toFixed(1);

    assert(result === "20.2");
  },

  "Choosing precision (2)": function() {
    var b = 20.233;
    var result = b.toFixed(2);

    assert(result === "20.23");
  },

  "Choosing precision (3)": function() {
    var b = 20.233;
    var result = b.toFixed(5);

    assert(result === "20.23300");
  },

  "String characters": function() {
    var a = "sleepy gary";
    var result = a.charAt(4);

    assert(result === "p");
  },

  Uppercasing: function() {
    var a = "sleepy gary";
    var result = a.toUpperCase();

    assert(result === "SLEEPY GARY");
  },

  "Substring (1)": function() {
    var a = "sleepy gary";
    var result = a.slice(0, 5);

    assert(result === "sleep");
  },

  "Substring (2)": function() {
    var a = "sleepy gary";
    var result = a.slice(7);

    assert(result === "gary");
  },

  "Joining (1)": function() {
    var a = ["have", "a", "merry", "xmas"];
    var result = a.join("");

    assert(result === "haveamerryxmas");
  },

  "Joining (2)": function() {
    var a = ["have", "a", "merry", "xmas"];
    var result = a.join(" ");

    assert(result === "have a merry xmas");
  },

  "Joining (3)": function() {
    var a = ["have", "a", "merry", "xmas"];
    var result = a.join("-<*>-");

    assert(result === "have-<*>-a-<*>-merry-<*>-xmas");
  }
});

testCase("Operators", {
  Addition: function() {
    var a = 24 + 6;

    assert(a === 30);
  },

  Subtraction: function() {
    var a = 24 - 6;

    assert(a === 18);
  },

  Multiplication: function() {
    var a = 24 * 6;

    assert(a === 144);
  },

  Division: function() {
    var a = 24 / 6;

    assert(a === 4);
  },

  "Remainder (1)": function() {
    var a = 0 % 3;

    assert(a === 0);
  },

  "Remainder (2)": function() {
    var a = 1 % 3;

    assert(a === 1);
  },

  "Remainder (3)": function() {
    var a = 2 % 3;

    assert(a === 2);
  },

  "Remainder (4)": function() {
    var a = 3 % 3;

    assert(a === 0);
  },

  "Remainder (5)": function() {
    var a = 4 % 3;

    assert(a === 1);
  },

  "Precedence (1)": function() {
    var a = 5 * 10 - 4 / 3 - 5;

    assert(a === 43.666666666666664);
  },

  "Precedence (2)": function() {
    var a = 5 * 10 - 4 / (3 - 5);

    assert(a === 52);
  },

  "Precedence (3)": function() {
    var a = (5 * (10 - 4)) / (3 - 5);

    assert(a === -15);
  },

  "Increment (1)": function() {
    var a = 1;
    a = a + 1;

    assert(a === 2);
  },

  "Increment (2)": function() {
    var a = 1;
    a++;

    assert(a === 2);
  },

  "Increment (3)": function() {
    var a = 1;
    ++a;

    assert(a === 2);
  },

  "Increment (4)": function() {
    var a = 1;
    a++;
    ++a;

    assert(a === 3);
  },

  "Increment (5)": function() {
    var a = 1;
    a += 2;

    assert(a === 3);
  },

  "Increment (6)": function() {
    var a = 1;
    a += 3;
    a += 1;

    assert(a === 5);
  },

  "Decrement (1)": function() {
    var a = 1;
    a = a - 1;

    assert(a === 0);
  },

  "Decrement (2)": function() {
    var a = 1;
    a--;

    assert(a === 0);
  },

  "Decrement (3)": function() {
    var a = 1;
    --a;

    assert(a === 0);
  },

  "Decrement (4)": function() {
    var a = 1;
    a--;
    --a;

    assert(a === -1);
  },

  "Decrement (5)": function() {
    var a = 1;
    a -= 2;

    assert(a === -1);
  },

  "Decrement (6)": function() {
    var a = 1;
    a -= 3;
    a += 1;

    assert(a === -1);
  },

  "Comparative (1)": function() {
    var a = 7;
    var result = a < 10;

    assert(result === true);
  },

  "Comparative (2)": function() {
    var a = 10;
    var result = a < 10;

    assert(result === false);
  },

  "Comparative (3)": function() {
    var a = 10;
    var result = a <= 10;

    assert(result === true);
  },

  "Comparative (4)": function() {
    var a = 15;
    var result = a > 10;

    assert(result === true);
  },

  "Comparative (5)": function() {
    var a = 10;
    var result = a > 10;

    assert(result === false);
  },

  "Comparative (6)": function() {
    var a = 10;
    var result = a >= 10;

    assert(result === true);
  },

  "Comparative (7)": function() {
    var a = 9;
    var result = a == 10;

    assert(result === false);
  },

  "Comparative (8)": function() {
    var a = 9;
    var result = a == 9;

    assert(result === true);
  },

  "Logical (1)": function() {
    var a = true;
    var b = false;
    var result = a && b;

    assert(result === false);
  },

  "Logical (2)": function() {
    var a = true;
    var b = true;
    var result = a && b;

    assert(result === true);
  },

  "Logical (3)": function() {
    var a = false;
    var b = false;
    var result = a && b;

    assert(result === false);
  },

  "Logical (4)": function() {
    var a = false;
    var b = false;
    var result = a || b;

    assert(result === false);
  },

  "Logical (5)": function() {
    var a = false;
    var b = true;
    var result = a || b;

    assert(result === true);
  },

  "Logical (6)": function() {
    var a = true;
    var b = false;
    var result = a || b;

    assert(result === true);
  },

  "Logical (7)": function() {
    var a = true;
    var b = true;
    var result = a || b;

    assert(result === true);
  }
});

testCase("Conditionals", {
  "If (1)": function() {
    var result = "hello";

    if (true) {
      result = "goodbye";
    }

    assert(result === "goodbye");
  },

  "If (2)": function() {
    var result = "hello";

    if (false) {
      result = "goodbye";
    }

    assert(result === "hello");
  },

  "If (3)": function() {
    var a = 10;
    var result = "hello";

    if (a < 10) {
      result = "goodbye";
    }

    assert(result === "hello");
  },

  "If (4)": function() {
    var a = 10;
    var result = "hello";

    if (a == 10) {
      result = "goodbye";
    }

    assert(result === "goodbye");
  },

  "If (5)": function() {
    var a = 10;
    var result = "hello";

    if (a == 10) {
      result = "goodbye";
    }

    if (true) {
      result = "show me what you got";
    }

    assert(result === "show me what you got");
  },

  "If / else (1)": function() {
    var result;

    if (true) {
      result = "rick";
    } else {
      result = "morty";
    }

    assert(result === "rick");
  },

  "If / else (2)": function() {
    var result;

    if (false) {
      result = "rick";
    } else {
      result = "morty";
    }

    assert(result === "morty");
  },

  "If / Else (3)": function() {
    var a = 100;
    var result;

    if (a / 20 > 5) {
      result = "rick";
    } else {
      result = "morty";
    }

    assert(result === "morty");
  },

  "If / Else If (1)": function() {
    var result;

    if (true) {
      result = "rick";
    } else if (false) {
      result = "morty";
    } else {
      result = "pencilvester";
    }

    assert(result === "rick");
  },

  "If / Else If (2)": function() {
    var result;

    if (false) {
      result = "rick";
    } else if (true) {
      result = "morty";
    } else {
      result = "pencilvester";
    }

    assert(result === "morty");
  },

  "If / Else If (3)": function() {
    var result;

    if (true) {
      result = "rick";
    } else if (true) {
      result = "morty";
    } else {
      result = "pencilvester";
    }

    assert(result === "rick");
  },

  "If / Else If (4)": function() {
    var result;

    if (false) {
      result = "rick";
    } else if (false) {
      result = "morty";
    } else {
      result = "pencilvester";
    }

    assert(result === "pencilvester");
  },

  "If / Else If (5)": function() {
    var result;

    if (false) {
      result = "rick";
    } else if (false) {
      result = "morty";
    } else if (true) {
      result = "sleepy gary";
    } else {
      result = "pencilvester";
    }

    assert(result === "sleepy gary");
  }
});
