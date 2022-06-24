const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    const { clean, messages, theme, modelStyle, btnStyle, width, height, messageStyle } = options
    return {
      CLEAN: clean || false,
      THEME: theme || ['shizuku'],
      MESSAGES: messages || {
        welcome: '热烈欢迎！',
        home: '心里的花，我想要带你回家。',
        theme: '想要看看我的其他小伙伴吗？',
        close: '你知道我喜欢吃什么吗？痴痴地望着你。',
        info: '想知道关于我的更多信息吗？'
      },
      MESSAGE_STYLE: messageStyle || {
        right: '68px',
        bottom: '190px'
      },
      MODEL_STYLE: modelStyle || {
        right: '90px',
        bottom: '-20px',
        opacity: '0.9'
      },
      BTN_STYLE: btnStyle || {
        right: '90px',
        bottom: '40px'
      },
      WIDTH: width || 150,
      HEIGHT: height || 220
    }
  },
  name: '@vuepress-reco/vuepress-plugin-kan-ban-niang',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'KanBanNiang'
})
