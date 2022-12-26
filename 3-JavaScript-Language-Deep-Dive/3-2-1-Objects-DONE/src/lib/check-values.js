const { assert } = require('./test-runner');

module.exports = function checkValues(hero) {
  assert(hero.name == "Hank", "hero.name is wrong");
  assert(hero.items[0].type == "weapon", "first item type");
  assert(hero.items[0].name == "Sword of fury", "first item name");
  assert(hero.items[0].color == "red", "first item color");
  assert(hero.items[1].type == "food", "second item type");
  assert(hero.items[1].name == "Wild apple", "second item name");
  assert(hero.items[1].color == "green", "second item color");
  assert(hero.attacks[0].name == "Slash", "first attack name");
  assert(hero.attacks[0].damage[0] == 50, "first attack first damage");
  assert(hero.attacks[0].damage[1] == 40, "first attack second damage");
  assert(hero.attacks[0].damage[2] == 30, "first attack third damage");
  assert(hero.attacks[1].name == "Hack", "second attack name");
  assert(hero.attacks[1].damage[0] == 75, "second attack first damage");
  assert(Object.keys(hero).every((key) => ['name', 'items', 'attacks'].includes(key)), 'has extra properties');
  assert(hero.items.length == 2, 'has too many items');
  assert(hero.attacks.length == 2, 'has too many attacks');
  assert(hero.attacks[0].damage.length == 3, 'has too many damage elements for first attack');
  assert(hero.attacks[1].damage.length == 1, 'has too many damage elements for second attack');
}