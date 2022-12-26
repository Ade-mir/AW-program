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
class Counter1 {
  constructor(counter) {
    this.counterInitial = counter;
    this.counter = counter;
  }
  reset() {
    this.counter = this.counterInitial;
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  getValue() {
    return this.counter;
  }
}

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
class Counter2 {
  constructor(counter) {
    this.counterInitial = 20;
    this.counter = counter;
  }
  reset() {
    this.counter = this.counterInitial;
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
  getValue() {
    return this.counter;
  }
}

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
class Counter3 {
  constructor(counter, step) {
    this.counterInitial = 20;
    this.counter = counter;
    this.step = step;
  }
  reset() {
    this.counter = this.counterInitial;
  }
  increment() {
    this.counter = +this.step;
  }
  decrement() {
    this.counter = -this.step;
  }
  getValue() {
    return this.counter;
  }
}

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
class Account1 {
  constructor() {
    this.balance = 0;
  }
  deposit(increase) {
    this.balance += increase;
  }
  withdraw(decrease) {
    if (this.balance >= decrease) {
      this.balance -= decrease;
    }
  }
  getBalance() {
    return this.balance;
  }
}

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
class Account2 {
  constructor(pin) {
    this.pin = pin;
    this.balance = 0;
  }
  deposit(increase, pinInput) {
    if (pinInput === this.pin) this.balance += increase;
  }
  withdraw(decrease, pinInput) {
    if (pinInput === this.pin) {
      if (this.balance >= decrease) {
        this.balance -= decrease;
      }
    }
  }
  getBalance(pinInput) {
    if (pinInput === this.pin) return this.balance;
  }
}

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
class Accounts {
  constructor(pin) {
    this.pin = pin;
    this.accounts = {
      // savings: {
      //   balance: 0,
      // },
    };
  }
  addAccount(name, pin) {
    if (this.pin === pin) {
      this.accounts[name] = { balance: 0 };
    }
  }
  getAccounts(pin) {
    // OR USE: if (this.pin !== pin) {
    // return; } KEEPING THE CHECKING FUNCTION SEPERATE FROM THE FUNCTION.
    if (this.pin === pin) {
      return Object.keys(this.accounts);
    }
  }
  getBalances(pin) {
    if (this.pin === pin) {
      return Object.keys(this.accounts);
    }
  }
  getBalance(account, pin) {
    if (this.pin === pin && account in this.accounts) {
      return this.accounts[account].balance;
    }
  }
  deposit(account, funds, pin) {
    if (this.pin === pin && account in this.accounts) {
      this.accounts[account].balance += funds;
    }
  }
  withdraw(account, funds, pin) {
    if (
      this.pin === pin &&
      account in this.accounts &&
      this.accounts[account].balance >= funds
    ) {
      this.accounts[account].balance -= funds;
    }
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
