let i = 0;
let star = '*';
let j = 4;

while (i < 4) {
  console.log(star);
  star += '*';
  i++;
}

console.log(i);
while (j > 4) {
  star = j * '*';
  console.log(star);
  j--;
} // MAYBE .POP
