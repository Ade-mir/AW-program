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

/**
 * 1. (See slides for description)
 */
function makeCounter1(initial) {
  function makeCounter() {
    let count = initial;

    return {
      getValue: function () {
        return count;
      },
      increment: function () {
        count++;
      },
      decrement: function () {
        count--;
      },
      reset: function () {
        count = initial;
      },
    };
  }
  return makeCounter();
}
testCase('makeCounter1', {
  'Works as expected': function () {
    var myFirstCounter = makeCounter1(10);
    assertEquals(myFirstCounter.getValue(), 10);
    myFirstCounter.increment();
    assertEquals(myFirstCounter.getValue(), 11);
    myFirstCounter.decrement();
    myFirstCounter.decrement();
    assertEquals(myFirstCounter.getValue(), 9);
    myFirstCounter.reset();
    assertEquals(myFirstCounter.getValue(), 10);

    var mySecondCounter = makeCounter1(100);
    assertEquals(mySecondCounter.getValue(), 100);
    mySecondCounter.increment();
    assertEquals(mySecondCounter.getValue(), 101);
    mySecondCounter.decrement();
    mySecondCounter.decrement();
    mySecondCounter.decrement();
    assertEquals(mySecondCounter.getValue(), 98);
    mySecondCounter.reset();
    assertEquals(mySecondCounter.getValue(), 100);
  },
});

/**
 * 2. (See slides for description)
 */
function makeCounter2(initial) {
  function makeCounter() {
    let count = initial;

    return {
      getValue: function () {
        return count;
      },
      increment: function () {
        count++;
      },
      decrement: function () {
        count--;
      },
      reset: function (value) {
        count = value;
      },
    };
  }
  return makeCounter();
}

testCase('makeCounter2', {
  'Works as expected': function () {
    var myFirstCounter = makeCounter2(10);
    assertEquals(myFirstCounter.getValue(), 10);
    myFirstCounter.increment();
    assertEquals(myFirstCounter.getValue(), 11);
    myFirstCounter.decrement();
    myFirstCounter.decrement();
    assertEquals(myFirstCounter.getValue(), 9);
    myFirstCounter.reset(20);
    assertEquals(myFirstCounter.getValue(), 20);

    var mySecondCounter = makeCounter2(200);
    assertEquals(mySecondCounter.getValue(), 200);
    mySecondCounter.increment();
    assertEquals(mySecondCounter.getValue(), 201);
    mySecondCounter.decrement();
    mySecondCounter.decrement();
    mySecondCounter.decrement();
    assertEquals(mySecondCounter.getValue(), 198);
    mySecondCounter.reset(50);
    assertEquals(mySecondCounter.getValue(), 50);
  },
});

/**
 * 3. (See slides for description)
 */
function makeCounter3(initial, step) {
  function makeCounter() {
    let count = initial;

    return {
      getValue: function () {
        return count;
      },
      increment: function () {
        count += step;
      },
      decrement: function () {
        count -= step;
      },
      reset: function (value) {
        count = value;
      },
    };
  }
  return makeCounter();
}

testCase('makeCounter3', {
  'Works as expected': function () {
    var myFirstCounter = makeCounter3(0, 5);
    assertEquals(myFirstCounter.getValue(), 0);
    myFirstCounter.increment();
    assertEquals(myFirstCounter.getValue(), 5);
    myFirstCounter.decrement();
    myFirstCounter.decrement();
    assertEquals(myFirstCounter.getValue(), -5);
    myFirstCounter.reset(20);
    assertEquals(myFirstCounter.getValue(), 20);

    var mySecondCounter = makeCounter3(10, 3);
    assertEquals(mySecondCounter.getValue(), 10);
    mySecondCounter.increment();
    assertEquals(mySecondCounter.getValue(), 13);
    mySecondCounter.decrement();
    mySecondCounter.decrement();
    assertEquals(mySecondCounter.getValue(), 7);
    mySecondCounter.reset(100);
    assertEquals(mySecondCounter.getValue(), 100);
  },
});

/**
 * 4. (See slides for description)
 */
function createAccount1() {
  function createAccount() {
    let balance = 0;

    return {
      getBalance: function () {
        return balance;
      },
      deposit: function (funds) {
        balance += funds;
      },
      withdraw: function (funds) {
        if (balance >= funds) {
          balance -= funds;
        }
      },
    };
  }
  return createAccount();
}

testCase('createAccount1', {
  'Works as expected': function () {
    var myFirstAccount = createAccount1();
    assertEquals(myFirstAccount.getBalance(), 0);
    myFirstAccount.deposit(100);
    assertEquals(myFirstAccount.getBalance(), 100);
    myFirstAccount.withdraw(50);
    assertEquals(myFirstAccount.getBalance(), 50);
    myFirstAccount.withdraw(100);
    assertEquals(myFirstAccount.getBalance(), 50);

    var mySecondAccount = createAccount1();
    assertEquals(mySecondAccount.getBalance(), 0);
    mySecondAccount.deposit(1000);
    assertEquals(mySecondAccount.getBalance(), 1000);
    mySecondAccount.withdraw(50);
    assertEquals(mySecondAccount.getBalance(), 950);
    mySecondAccount.withdraw(1000);
    assertEquals(mySecondAccount.getBalance(), 950);
  },
});

/**
 * 5. (See slides for description)
 */
function createAccount2(pin) {
  function createAccount() {
    let balance = 0;
    let savedPin = pin;

    return {
      getBalance: function (pin) {
        if (pin === savedPin) {
          return balance;
        }
      },
      deposit: function (funds, pin) {
        if (pin === savedPin) {
          balance += funds;
        }
      },
      withdraw: function (funds, pin) {
        if (pin === savedPin) {
          if (balance >= funds) {
            balance -= funds;
          }
        }
      },
    };
  }
  return createAccount();
}

testCase('createAccount2', {
  'Works as expected': function () {
    var account = createAccount2('1234');
    assertEquals(account.getBalance('0000'), undefined);
    assertEquals(account.getBalance('1234'), 0);
    account.deposit(100, '0000');
    assertEquals(account.getBalance('1234'), 0);
    account.deposit(100, '1234');
    assertEquals(account.getBalance('1234'), 100);
    account.withdraw(60, '0000');
    assertEquals(account.getBalance('1234'), 100);
    account.withdraw(60, '1234');
    assertEquals(account.getBalance('1234'), 40);
  },
});

/**
 * 6. (See slides for description)
 */
function createAccounts(pin) {
  function createAccount() {
    let savedPin = pin;
    let existingAccounts = {
      // savings: 0,
    };

    return {
      addAccount: function (name, pin) {
        if (pin === savedPin) {
          existingAccounts[name] = 0;
        }
      },
      getAccounts: function (pin) {
        if (pin === savedPin) {
          return Object.keys(existingAccounts);
        }
      },
      getBalances: function (pin) {
        if (pin === savedPin) {
          return Object.values(existingAccounts);
        }
      },
      getBalance: function (account, pin) {
        if (pin === savedPin) {
          return existingAccounts[account];
        }
      },
      deposit: function (account, funds, pin) {
        if (pin === savedPin) {
          existingAccounts[account] += funds;
        }
      },
      withdraw: function (account, funds, pin) {
        if (pin === savedPin && existingAccounts[account] >= funds) {
          existingAccounts[account] -= funds;
        }
      },
    };
  }
  return createAccount();
}

testCase('createAccounts', {
  'Works as expected': function () {
    var accounts = createAccounts('1234');
    accounts.addAccount('savings', '1234');
    assertEquals(accounts.getBalance('savings', '1234'), 0);
    assertEquals(accounts.getBalance('savings', '1234'), 0);
    accounts.deposit('savings', 100, '0000');
    assertEquals(accounts.getBalance('savings', '1234'), 0);
    accounts.deposit('savings', 100, '1234');
    assertEquals(accounts.getBalance('savings', '1234'), 100);
    accounts.withdraw('savings', 60, '0000');
    assertEquals(accounts.getBalance('savings', '1234'), 100);
    accounts.withdraw('savings', 60, '1234');
    assertEquals(accounts.getBalance('savings', '1234'), 40);

    accounts.addAccount('checkings', '1234');
    assertEquals(accounts.getBalance('checkings', '1234'), 0);
    assertEquals(accounts.getBalance('checkings', '1234'), 0);
    accounts.deposit('checkings', 100, '0000');
    assertEquals(accounts.getBalance('checkings', '1234'), 0);
    accounts.deposit('checkings', 100, '1234');
    assertEquals(accounts.getBalance('checkings', '1234'), 100);
    accounts.withdraw('checkings', 60, '0000');
    assertEquals(accounts.getBalance('checkings', '1234'), 100);
    accounts.withdraw('checkings', 60, '1234');
    assertEquals(accounts.getBalance('checkings', '1234'), 40);
  },
});
