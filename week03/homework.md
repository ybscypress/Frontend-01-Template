# NumberToString
```
function convertNumberToString(number, x = 10) {
  let integer = Math.floor(number);
  let fraction = null;
  if (x === 10) fraction = ('' + number).match(/\.\d*/)[0];
  let string = ''
  while(integer > 0) {
    string = integer % x + string;
    integer = Math.floor(integer / x);
  }
  return fraction ? string + fraction : string;
}
```

# StringToNumber
```
function convertStringToNumber(string, x) {
  if (arguments.length < 2) x = 10;
  let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  let chars = string.toLowerCase().split('');
  let flag = chars.includes('-');
  let number = 0;
  let i = 0;

  while (
    i < chars.length &&
    chars[i] !== '.' &&
    !letters.includes(chars[i])
  ) {
    number *= x;
    number += chars[i].codePointAt() - '0'.codePointAt();
    i++;
  }

  // 小数
  if (chars[i] === '.') i++;
  let fraction = 1;
  while (
    x === 10 &&
    i < chars.length &&
    chars[i] !== 'e' &&
    chars[i] !== '+' &&
    chars[i] !== '-'
  ) {
    fraction /= x;
    number += (chars[i].codePointAt() - '0'.codePointAt()) * fraction;
    i++;
  }

  // 指数
  if (x === 10 &&
    chars[i] === '-' ||
    chars[i] === '+' ||
    chars[i] === 'e'
  ) i++;
  let index = 0;
  while (x === 10 && i < chars.length) {
    index *= x;
    index += convertStringToNumber(chars[i]);
    if (flag) number /= x ** index
    else number *= x ** index
    i++;
  }

  // 十六进制
  while (x === 16 && letters.includes(chars[i])) {
    number *= x;
    number += chars[i].codePointAt() - 87; // a 97
    i++;
  }

  return number;
}
```

