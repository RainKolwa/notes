---
title: 课程导读
---

## Composition API vs Options API

从可维护性角度来讲，Composition API更便于维护，在开发的过程中避免了在同一个组件代码中"反复横跳"。

## 响应式系统

Vue2的响应式机制是基于`Object.defineProperty()`这个API实现的。这个API的使用方法如下：

```js
Object.defineProperty(user, 'name', {
 get() {},
 set() {},
})
```

当项目中使用`user.name`的时候会被拦截，但这个API对不存在的属性无法拦截，这就是为什么Vue2中所有数据必须要在data中先声明。

让我们再来看看Vue3中的实现，Proxy，真正意义上的代理：

```js
new Proxy(user, {
 get() {},
 set() {},
})
```

Proxy的方式就没有上面的问题，它拦截的是`user`本身，而不是某个属性。Proxy代理数组也不会存在问题，甚至可以代理Set、Map这些新的格式的数据。
当然，老规矩，新的东西会有些兼容性问题，这也是为什么Vue3不兼容IE11以下的浏览器。

## 新的组件 Teleport

Teleport这个组件可以让你将组件的DOM布置到body下，例如实现弹窗的时候会有这样的需求。用法如下：

```vue
<button @click="open = true">Open Modal</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
```

详细的说明可以参见[Vue官方文档](https://vuejs.org/guide/built-ins/teleport.html)。
