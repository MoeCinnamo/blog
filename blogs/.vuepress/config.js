module.exports = {
  base: '/',
  lang: 'zh-CN',
  theme: 'reco',
  title: '天堂里の猫',
  description: '住在天空快活的猫咪',
  head: [
    ['meta', { content: 'always', name: 'referrer' }],
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
    ['script', { type: 'text/javascript', src: '//js.users.51.la/21337387.js' }],
    ['script', { charset: 'UTF-8', id: 'LA_COLLECT', src: '//sdk.51.la/js-sdk-pro.min.js' }],
    ['script', {}, `LA.init({id: "JfZeeuAAChksNoMw",ck: "JfZeeuAAChksNoMw",autoTrack:true,hashMode:true})`],
    ['script', { src: 'https://sdk.51.la/perf/js-sdk-perf.min.js', crossorigin: 'anonymous' }],
    ['script', {}, `new LingQue.Monitor().init({id:"JfhNfbpRLLs6ArJD",sendSuspicious:true,sendSpaPv:true});`],
    ['script', {}, `(function(){var el = document.createElement("script");el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?907402e9bb54446deb1ccd1f1d68bcbc3d655f0a3a276076e31534d9a3f1611a3d72cd14f8a76432df3935ab77ec54f830517b3cb210f7fd334f50ccb772134a";el.id = "ttzz";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(el, s);})(window)`],
    ['script', { async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5632902373632503', crossorigin: 'anonymous' }],
    ['script', { async: '', 'custom-element': 'amp-auto-ads', src: 'https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js' }],
    ['div', { id: 'cc-myssl-id', style: 'position: fixed;right: 0;bottom: 0;width: 65px;height: 65px;z-index: 99;' }, `<a href="https://myssl.com/blog.mojy.xyz?from=mysslid" target="_blank"><img src="/myssl/myssl-id.webp" alt="" style="width:100%;height:100%"></a>`]
  ],
  themeConfig: {
    type: 'blog',
    noFoundPageByTencent: false,
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      {
        text: '模块',
        ariaLabel: 'module',
        items: [
          { text: '留言', link: '/message.md', icon: 'reco-message' },
          { text: '一言', link: '/say.md',icon: 'reco-message' },
          { text: '关于', link: '/about.md', icon: 'reco-faq' },
        ],
        icon: 'reco-menu'
      },
      { text: '友链', link: '/links.md',icon: 'reco-blog' },
      { text: 'RSS', link: 'https://blog.mojy.xyz/rss.xml',icon: 'reco-bokeyuan' },
      {
        text: '联系',
        ariaLabel: 'contact',
        items: [
          { text: 'GitHub', link: 'https://github.com/MoeCinnamo', icon: 'reco-github' },
          { text: 'Gitee', link: 'https://gitee.com/MoeCinnamo', icon: 'reco-mayun' },
          { text: 'Email', link: 'mailto:abcd2890000456@126.com',icon: 'reco-message' },
          { text: 'QQ', link: 'http://wpa.qq.com/msgrd?v=3&uin=597624858&site=qq&menu=yes',icon: 'reco-qq' },
          { text: '今日头条', link: 'https://www.toutiao.com/c/user/token/MS4wLjABAAAAiSeSKmi3utivPvvIzLLM_fHiTyY6whoPfTG5ipt1apg',icon: 'reco-toutiao' },
          { text: '抖音', link: 'https://www.douyin.com/user/MS4wLjABAAAAVSsT17E5DRZFg4S_FOuEnOs2dSJsWmSoSOWiakPp0zg', icon: 'reco-douyin' },
          { text: 'BiliBili', link: 'https://space.bilibili.com/2144425903?spm_id_from=333.337.0.0',icon: 'reco-bilibili' }
        ],
        icon: 'reco-menu'
      },
      {
        text: '开往',
        ariaLabel: 'go',
        items: [
          { text: 'Travellings', link: 'https://travellings.link' },
          { text: '虫洞', link: 'https://foreverblog.cn/go.html' }
        ],
        icon: 'reco-menu'
      }
    ],
//    friendLink: [
//      {
//        title: '*',
//        desc: '*',
//        logo: '*',
//        link: '*'
//      },
//      {
//        title: '*',
//        desc: '*',
//        logo: '*',
//        link: '*'
//      }
//    ],
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
    lastUpdated: '最后更新',
    // 作者
    author: '玉桂喵千寻',
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
      serverURLs: 'https://514cxhf6.api.lncldglobal.com',
      visitor: true,
      recordIP: true,
      enableQQ: true
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ["@vuepress-reco/extract-code",true],
    ["vuepress-plugin-code-copy",true],
    ["@vuepress-reco/vuepress-plugin-screenfull",true],
    [
      "vuepress-plugin-copyright",
      {
        authorName: '天堂里の猫', // 复制后将出现著作权信息
        minLength: 60, // 如果长度超过 60 个字符
      }
    ],
    [
      "vuepress-plugin-dynamic-title",
      {
        showIcon: 'https://gravatar.loli.net/avatar/ae4dd9f92845152e9ae8b67a4ec8e53e;s=64',
        showText: '(/≧▽≦/)欢迎欢迎！',
        hideIcon: 'https://gravatar.loli.net/avatar/ae4dd9f92845152e9ae8b67a4ec8e53e;s=64',
        hideText: '〳 ° ▾ ° 〵不要走开哦！还有很多精彩等着你探索啦！',
        recoverTime: 2000,
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
      "vuepress-plugin-cursor-effects",
      {
        size: 3,
        shape: 'star',
        zIndex: 999999999,
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ['shizuku', 'koharu', 'haruto', 'z16', 'whiteCat', 'blackCat', 'wanko', 'haru2', 'haru1'],
        clean: true
      }
    ],
//    [
//      "@vuepress-reco/vuepress-plugin-bgm-player",
//      {
//        audios: [
//          {
//            name: '*', // 歌名
//            artist: '*', // 演唱者
//            url: '*', // 地址
//            cover: '*' // 封面
//          },
//          {
//            name: '*', // 歌名
//            artist: '*', // 演唱者
//            url: '*', // 地址
//            cover: '*' //封面
//          }
//        ],
//        autoShrink: true,
//        shrinkMode: 'mini'
//      }
//    ],
    [
      "vuepress-plugin-meting",
      {
        //metingApi: '', // Meting API
        meting: {
          //server: '', // 音乐平台服务器，可选：["netease" | "tencent" | "kuwo" | "kugou" | "baidu"]
          //type: '', // 资源类型，可选：["song" | "album" | "artist" | "playlist"]
          //mid: '', // 资源ID
          //auto: '' // 填写URL后自动解析资源平台
        },
        aplayer: {
          fixed: true, // 吸底模式
          mini: true, // 迷你模式
          autoplay: true, // 自动播放
          listFolded: true, // 播放列表折叠
          additionalAudios: [
            //{
              //id: 1, // 音频 id
              //name: '', // 音频名称
              //artist: '', // 音频艺术家
              //url: '', // 音频播放地址
              //cover: '', // 音频封面
              //lrc: '', // lrc 歌词
              //theme: '', // 单曲主题色，它将覆盖全局的默认主题色
              //type: '', // 指定音频的类型
              //speed: '' // 单曲播放速度
            //},
            //{
              //id: 2, // 音频 id
              //name: '', // 音频名称
              //artist: '', // 音频艺术家
              //url: '', // 音频播放地址
              //cover: '', // 音频封面
              //lrc: '', // lrc 歌词
              //theme: '', // 单曲主题色，它将覆盖全局的默认主题色
              //type: '', // 指定音频的类型
              //speed: '' // 单曲播放速度
            //}
          ],
          lrcType: 3 // lrc歌词解析模式
        }
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
      "@vuepress-reco/vuepress-plugin-pagation",
      {
        total: 20,
        perPage: 20
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
