---
title: 类型
---



## 内置类型null

Javascript有7种内置类型，null、undefined、boolean、string、number、object、symbol。可以通过typeof运算符来区分值的类型。

null类型是个特例，其实是个bug，不过大概率不会被修复了。

```js
typeof null === 'object' // true
```

可以通过这种方式来检测null的类型，

```js
let a = null;
(!a && typeof a === 'object') // true
```

## undeclared

`undeclared`和`undefined`其实是两个东西，前者表示变量未声明，后者表示已声明但还没有赋值的变量。
