// print all numbers from 0 to 20, skip 13, and 17.

let i = 0;

while (i <= 20) {
  if (i !== 13 && i !== 17) console.log(i);
  i++;
}

for (i = 0; i <= 20; i++) {
  if (i === 13 || i === 17) continue;
  else console.log(i);
}
