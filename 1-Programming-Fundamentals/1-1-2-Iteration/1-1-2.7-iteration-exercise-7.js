// Print all numbers from 0 to 20, skip even numbers.

let i = -20;

while (i <= 20) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

for (i = -20; i < 20; i++) {
  if (i % 2 !== 0) console.log(i);
}
