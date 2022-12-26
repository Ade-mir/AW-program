// print all numbers from 0 to 20, skip odd numbers.

let i = 0;

while (i <= 20) {
  if (i % 2 === 0) console.log(i);
  i++;
}

for (i = 0; i < 20; i++) {
  if (i % 2 === 0) console.log(i);
}
