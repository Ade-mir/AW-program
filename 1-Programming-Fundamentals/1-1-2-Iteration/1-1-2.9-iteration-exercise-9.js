// Print pattern 2

let star = '*';

for (i = 0; i < 3; ++i) {
  console.log(star);
  star += '*';
}

for (j = 0; j < 4; j++) {
  console.log(star);
  star = star.slice(0, -1);
}
