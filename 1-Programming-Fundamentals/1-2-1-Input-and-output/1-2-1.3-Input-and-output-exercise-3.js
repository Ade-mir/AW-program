// Convert meters(m) to feet(ft) and vice versa.

function conversion() {
  let input = '';
  while (input == '') {
    input = prompt('Please convert your feet(ft) to meters(m), or vice versa');
  }
  if (input.includes('m'))
    alert(
      input +
        ' is equal to ' +
        (Math.floor(input.replace(/\D/g, '') * 3.281) + 'ft')
    );
  else if (input.includes('ft'))
    alert(
      input +
        ' is equal to ' +
        (Math.floor(input.replace(/\D/g, '') / 3.281) + 'm')
    );
}

conversion();
