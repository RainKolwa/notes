---
title: 值
---

## 字符串反转

一个简单的办法是将字符串先转化成数组，reverse之后再将数组转化成字符串：

```js
let a = 'foo';
let b = a.split('').reverse().join('');
b // "oof"
```

但是如果是含有Unicode的字符串，上面的方法就不适用了，我们来看看[esrever](https://github.com/mathiasbynens/esrever/blob/master/src/esrever.js#L18-L43)是怎么解决这个问题的：

```js
var regexSymbolWithCombiningMarks =
  /(<%= allExceptCombiningMarks %>)(<%= combiningMarks %>+)/g;
var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

var reverse = function (string) {
  // Step 1: deal with combining marks and astral symbols (surrogate pairs)
  string = string
    // Swap symbols with their combining marks so the combining marks go first
    .replace(regexSymbolWithCombiningMarks, function ($0, $1, $2) {
      // Reverse the combining marks so they will end up in the same order
      // later on (after another round of reversing)
      return reverse($2) + $1;
    })
    // Swap high and low surrogates so the low surrogates go first
    .replace(regexSurrogatePair, '$2$1');
  // Step 2: reverse the code units in the string
  var result = [];
  var index = string.length;
  while (index--) {
    result.push(string.charAt(index));
  }
  return result.join('');
};
```

## 精度问题

Javascript遵循的IEEE 754规范导致它与身俱来二进制浮点数的精度问题：

```js
0.1 + 0.2 === 0.3; // false
```

因为上面的0.1和0.2并不十分精确，它们相加的结果其实是一个比较接近0.3的数字：0.30000000000000004。那怎样来判断出它们是相等的呢？
最常见的办法是设置一个误差范围，这个值通常是*2^-52*。在ES6中，这个值定义在`Number.EPSILON`中：

```js
// polyfill
if(!Number.EPSILON) {l
  Number.EPSILON = Math.pow(2, -52);
}
function closeEnoughToEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
closeEnoughToEqual(0.3, 0.1 + 0.2); // true
```
