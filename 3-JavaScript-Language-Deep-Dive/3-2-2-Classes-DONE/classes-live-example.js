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
 * 1.
 */
class Counter1 {}

testCase('Counter1', {
  'Works as expected': function () {
    var counter = new Counter1(10);
    assertEquals(counter.getValue(), 10);
    counter.increment();
    assertEquals(counter.getValue(), 11);
    counter.decrement();
    counter.decrement();
    assertEquals(counter.getValue(), 9);
    counter.reset();
    assertEquals(counter.getValue(), 10);
  },
});

/**
 * 2.
 */
class Counter2 {}

testCase('Counter2', {
  'Works as expected': function () {
    var counter = new Counter2(10);
    assertEquals(counter.getValue(), 10);
    counter.increment();
    assertEquals(counter.getValue(), 11);
    counter.decrement();
    counter.decrement();
    assertEquals(counter.getValue(), 9);
    counter.reset(20);
    assertEquals(counter.getValue(), 20);
  },
});

/**
 * 3.
 */
class Counter3 {}

testCase('Counter3', {
  'Works as expected': function () {
    var counter = new Counter3(0, 5);
    assertEquals(counter.getValue(), 0);
    counter.increment();
    assertEquals(counter.getValue(), 5);
    counter.decrement();
    counter.decrement();
    assertEquals(counter.getValue(), -5);
    counter.reset(20);
    assertEquals(counter.getValue(), 20);
  },
});

/**
 * 4.
 */
class Account1 {}

testCase('Account1', {
  'Works as expected': function () {
    var account = new Account1();
    assertEquals(account.getBalance(), 0);
    account.deposit(100);
    assertEquals(account.getBalance(), 100);
    account.withdraw(50);
    assertEquals(account.getBalance(), 50);
    account.withdraw(100);
    assertEquals(account.getBalance(), 50);
  },
});

/**
 * 5
 */
class Account2 {}

testCase('Account2', {
  'Works as expected': function () {
    var account = new Account2('1234');
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
 * 6
 */
// class Accounts {
//   constructor(pin) {
//     this.storedPin = pin;
//     // this.accounts = [
//     //   ['savings', 100],
//     //   ['checkings', 200]
//     // ];
//     this.accounts = [
//       { name: 'savings', balance: 100 },
//       { name: 'checkings', balance: 0 },
//     ];
//     // this.accounts = {
//     //   savings: 100,
//     //   checkings: 0
//     // };
//   }

//   addAccount(accountName, pin) {
//     if (pin !== this.storedPin) {
//       return;
//     }

//     this.accounts.push({
//       name: accountName,
//       balance: 0,
//     });
//   }

//   getBalance(accountName, pin) {
//     // Check pin
//     if (pin !== this.storedPin) {
//       return;
//     }

//     // Find account index
//     let accountIndex = -1;

//     for (let i = 0; i < this.accounts.length; i++) {
//       if (this.accounts[i].name === accountName) {
//         accountIndex = i;
//         break;
//       }
//     }

//     // Find and return balance of account
//     return this.accounts[accountIndex].balance;
//   }

//   deposit(accountName, funds, pin) {
//     // Check pin
//     if (pin !== this.storedPin) {
//       return;
//     }

//     // Find account index
//     let accountIndex = -1;

//     for (let i = 0; i < this.accounts.length; i++) {
//       if (this.accounts[i].name === accountName) {
//         accountIndex = i;
//         break;
//       }
//     }

//     // Add funds to account
//     this.accounts[accountIndex].balance += funds;
//   }

//   withdraw(accountName, funds, pin) {
//     // Check pin
//     if (pin !== this.storedPin) {
//       return;
//     }

//     // Find account index
//     let accountIndex = -1;

//     for (let i = 0; i < this.accounts.length; i++) {
//       if (this.accounts[i].name === accountName) {
//         accountIndex = i;
//         break;
//       }
//     }

//     // Check if enough balance
//     if (this.accounts[accountIndex].balance < funds) {
//       return;
//     }

//     // Remove funds from account
//     this.accounts[accountIndex].balance -= funds;

//     // Return funds withdrawn
//     return funds;
//   }
// }

class Accounts {
  constructor(pin) {
    this.storedPin = pin;
    // this.accounts = [
    //   ['savings', 100],
    //   ['checkings', 200]
    // ];
    // this.accounts = [
    //   { name: 'savings', balance: 100 },
    //   { name: 'checkings', balance: 0 },
    // ];
    this.accounts = {
      savings: 100,
      checkings: 0,
    };
  }

  addAccount(accountName, pin) {
    if (pin !== this.storedPin) {
      return;
    }

    this.accounts[accountName] = 0;
  }

  getBalance(accountName, pin) {
    // Check pin
    if (pin !== this.storedPin) {
      return;
    }

    // Find and return balance of account
    return this.accounts[accountName];
  }

  deposit(accountName, funds, pin) {
    // Check pin
    if (pin !== this.storedPin) {
      return;
    }

    // Add funds to account
    this.accounts[accountName] += funds;
  }

  withdraw(accountName, funds, pin) {
    // Check pin
    if (pin !== this.storedPin) {
      return;
    }

    // Check if enough balance
    if (this.accounts[accountName] < funds) {
      return;
    }

    // Remove funds from account
    this.accounts[accountName] -= funds;

    // Return funds withdrawn
    return funds;
  }

  getBalances(pin) {
    // Check pin
    if (pin !== this.storedPin) {
      return;
    }

    return this.accounts;
  }

  getAccounts(pin) {
    // Check pin
    if (pin !== this.storedPin) {
      return;
    }

    return Object.keys(this.accounts);
  }
}

testCase('Accounts', {
  'Works as expected': function () {
    var accounts = new Accounts('1234');
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
