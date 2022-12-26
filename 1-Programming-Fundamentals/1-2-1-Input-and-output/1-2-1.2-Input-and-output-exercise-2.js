// Convert Fahrenheit to Celsius and vice versa.

function conversion() {
  let input = '';
  while (input == '') {
    input = prompt('Please convert your Celcius to Fahrenheit, or vice versa');
  }
  if (input.includes('C'))
    alert(
      input + ' is equal to ' + ((input.replace(/\D/g, '') * 9) / 5 + 32 + 'F')
    );
  else if (input.includes('F'))
    alert(
      input +
        ' is equal to ' +
        ((input.replace(/\D/g, '') - 32) * (5 / 9) + 'C')
    );
}

conversion();
