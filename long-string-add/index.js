const longStringNumberAdd = (stringA, stringB) => {
  const stringALen = stringA.length;
  const stringBLen = stringB.length;

  const maxLen = stringALen >= stringBLen ? stringALen : stringBLen;

  stringA = `${'0'.repeat(maxLen - stringALen)}${stringA}`;
  stringB = `${'0'.repeat(maxLen - stringBLen)}${stringB}`;

  let sum = '';
  let bigThenTen; // 是否大于10；
  let index = maxLen;

  while (index > 0) {
    const a = stringA.slice(index-1, index);
    const b = stringB.slice(index-1, index);

    let c = +a + +b;
    if (bigThenTen) {
      c = c + 1;
    }

    bigThenTen = false;

    if (c > 10) {
      bigThenTen = true;
      const d = c - 10;
      sum += d;
    } else {
      sum += c;
    }

    index--
  }

  return sum;
};

export default longStringNumberAdd
