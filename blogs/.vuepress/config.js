module.exports = {
  base: '/',
  theme: 'reco',
  title: '天堂里の猫',
  description: '住在天空快活的猫咪',
  head: [
    ['link', { rel: 'icon', href: 'https://gravatar.loli.net/avatar/ae4dd9f92845152e9ae8b67a4ec8e53e;s=64' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: '天堂里の猫,天堂里的猫,猫咪,快乐,萌系,玉桂喵,blog' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://gravatar.loli.net/avatar/ae4dd9f92845152e9ae8b67a4ec8e53e;s=640' }],
    ['link', { rel: 'mask-icon', href: 'https://gravatar.loli.net/avatar/ae4dd9f92845152e9ae8b67a4ec8e53e;s=640', color: '#35FFC3' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://gravatar.loli.net/avatar/ae4dd9f92845152e9ae8b67a4ec8e53e;s=640' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }],
    ['script', {}, `LA.init({id: "JfZeeuAAChksNoMw",ck: "JfZeeuAAChksNoMw",autoTrack:true,hashMode:true})</script>`],
    ['script', { src: 'https://sdk.51.la/perf/js-sdk-perf.min.js', crossorigin: 'anonymous' }],
    ['script', {}, `new LingQue.Monitor().init({id:"JfhNfbpRLLs6ArJD",sendSuspicious:true,sendSpaPv:true});</script>`]
  ],
  themeConfig: {
    type: 'blog',
    noFoundPageByTencent: false,
    repo: 'MoeCinnamo/blog',
    docsBranch: 'master',
    docsDir: 'blogs',
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
      { text: '关于', link: '/about.md', icon: 'reco-faq' },
      { text: '友链', link: '/links.md', icon: 'reco-blog' },
      { text: 'RSS订阅', link: '/rss.xml', icon: 'reco-bokeyuan' },
      {
        text: '联系我',
        ariaLabel: 'contact',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ],
        icon: 'reco-menu'
      }
    ],
    //friendLink: [
    //  {
    //    title: '*',
    //    desc: '*',
    //    logo: '*',
    //    link: '*'
    //  },
    //  {
    //    title: '下一个就是你啦~',
    //    desc: '*',
    //    logo: '*',
    //    link: '*'
    //  }
    //],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    logo: 'https://gravatar.loli.net/avatar/ae4dd9f92845152e9ae8b67a4ec8e53e;s=640',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    sidebarDepth: 1,
    displayAllHeaders: false,
    // 最后更新时间
    lastUpdated: '最后更新: ',
    // 作者
    author: 'MoeCinnamo',
    authorAvatar: 'https://gravatar.loli.net/avatar/ae4dd9f92845152e9ae8b67a4ec8e53e;s=640',
    // 备案号
    record: '',
    recordLink: '',
    cyberSecurityRecord: '',
    cyberSecurityLink: '',
    // 项目开始时间
    startYear: '2020',
    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: '514CxHf6tf8VB7b9e1azmUu8-MdYXbMMI', // your appId
      appKey: 'W0K26NS50iK3hk7GTm4rnLjN', // your appKey
      placeholder: '嘿^_^, 留个评论好不好嘛~',
      serverUrl: 'https://514cxhf6.api.lncldglobal.com'
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          {
            name: '*',
            artist: '*',
            url: '*',
            cover: '*'
          },
          {
            name: '*',
            artist: '*',
            url: '*',
            cover: '*'
          }
        ]
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-rss",
      {
        site_url: 'https://blog.mojy.xyz',
        count: 50
      }
    ],
    [
      "@vuepress-reco/vuepress-plugin-back-to-top",
      {
        icon: 'reco-up',
        visibilityHeight: 400,
        customStyle: {
            right:'1rem',
            bottom: '6rem',
            width: '2.5rem',
            height: '2.5rem',
            'border-radius': '.25rem',
            'line-height': '2.5rem',
            backgroundColor: 'rgba(231, 234, 241,.5)'
        }
      }
    ],
    [
      "vuepress-plugin-sitemap",
      {
      hostname: 'https://blog.mojy.xyz'
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ]
  ]
}
