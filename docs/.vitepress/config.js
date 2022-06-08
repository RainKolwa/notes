module.exports = {
  title: '我的读书笔记',
  description: 'vue, react, js, node, 投资理财, and so on',
  themeConfig: {
    nav: [
      {
        text: 'YouDontKnowJS',
        link: '/you-dont-know-js/index',
        activeMatch: '/you-dont-know-js/',
      },
      {
        text: 'Vue3全家桶',
        link: '/vue3-package/index',
        activeMatch: '/vue3-package/',
      },
      {
        text: '投资理财',
        link: '/invest/lilu/value-investment',
        activeMatch: '/invest/',
      },
    ],
    sidebar: {
      '/you-dont-know-js/': getMenu(),
      '/vue3-package': getMenu('vue3-package'),
      '/invest': getMenu('invest'),
    },
    socialLinks: [{ icon: 'twitter', link: 'https://twitter.com/Rainkolwa' }],
  },
};

function getMenu(cat) {
  switch (cat) {
    case 'invest':
      return [
        {
          text: '文明、现代化、价值投资与中国',
          items: [
            { text: '价值投资', link: '/invest/lilu/value-investment' },
            {
              text: '有意思的概念',
              link: '/invest/lilu/concepts',
            },
          ],
        },
        {
          text: '大空头',
          items: [{ text: '观后感', link: '/invest/big-short/film-review' }],
        },
      ];
    case 'vue3-package':
      return [
        {
          text: '课程导读',
          items: [],
        },
      ];
    default:
      return [
        {
          text: '类型与语法',
          link: '/you-dont-know-js/types/',
          collapsible: true,
          items: [
            {
              text: '类型',
              link: '/you-dont-know-js/types/types',
            },
            {
              text: '值',
              link: '/you-dont-know-js/types/values',
            },
            {
              text: '原生函数',
              link: '/you-dont-know-js/types/natives',
            },
            {
              text: '强制类型转化',
              link: '/you-dont-know-js/types/coercion',
            },
            {
              text: '语法',
              link: '/you-dont-know-js/types/grammer',
            },
          ],
        },
        {
          text: '作用域和闭包',
          collapsible: true,
          items: [
            { text: 'hah', link: '/you-dont-know-js/scope-and-closures/index' },
          ],
        },
        {
          text: '性能',
          collapsible: true,
          items: [
            { text: 'hah', link: '/you-dont-know-js/middle/performance' },
          ],
        },
      ];
  }
}
