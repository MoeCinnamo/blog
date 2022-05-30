<template>
  <div class="about">
    <ul class="aboutNav">
      <li
        v-for="item in nav"
        @click="showNav(item.code)"
        :style="cur === item.code ? 'background:#18BF87;color:#232521;' : ''"
        class="aboutNavItem">
        {{item.title}}
      </li>
    </ul>
    <div class="aboutContent">
        
      <div v-show="cur === 'blog'">
            <br>
            <font size="5">初衷</font><br>
            <p>我相信很多人搭建博客都会有一些初衷，或许是玩玩而已，或许是想要赚钱，采集文章取得百度等搜索引擎大量的收录来赚取广告费，但是，似乎都忘记了博客真正的意义，你们看到的都是博客的附加成分，有高有低，但是博客真正的初衷，就是<code>记录</code>！</p>
            <font size="5">当下</font><br>
            <p>我第一次搭建博客的时间，我已经忘记了。但是在那时候，我根本不明白什么是博客，博客是记录的地方，是让访客阅读的地方，但那时候我一直钟情于typecho的模版美化工作，并没有任何实质性写了什么文章，导致整个页面花花绿绿，真正能阅读的地方是寥寥无几。<br>
              当时，我使用的是.moe后缀的垃圾域名，用的是三丰云搭的博客，由于免费机子因为需要分享、时间短等原因，我放弃了。<br>
              现在，我使用的github pages搭建的博客，感觉应该不会有什么问题，我的博客里多数时原创文章，纯手打，若为转载的文章，我也有备注说明，有些是为了留给自己看的，提醒自己部分内容应该注意一下，方便阅读。<br>
              我的设想是搭建一个真正进行记录、能和广大网友分享经历的博客，而不是采集文章泛滥，广告纵横的博客，希望大家能和我<code>共同监督，共同进步</code>！</p>
            <font size="5">提醒</font><br><br>
            我提醒大家以下几点内容，希望大家都能注意到：<br>
            <li>搭建博客所需要的服务器不需要太好，适合站点访问量即可，或许你也可以使用github pages来搭建博客，避免资金、资源的浪费。</li>
            <li>博客应保持稳定，不应该在突然之间消失。我的域名也随时会续费，真正的稳定下来，才是真正的博客，不然到以后只是一堆备份的库罢了！</li>
            <li>博客应该是真正用来记录的，而不是资本的、虚假的、敷衍的、应付的，应该让访客看到你的用心，博客的真实，让他们感觉到愉快。</li><br>
            <font size="5">后言</font><br><br>
            我希望大家都可以坚持自己的建站初衷，对于我们每个博客站长来讲，时间都是一个重要的考验！<br>
            让大家都可以认识我，我是<code>玉桂家园</code>的站长，同时也是<code>天堂里の猫</code>的站长<br>
            我们可以进行友链交换，各位站长都可以添加本站的友链，符合要求的站点我们都会添加到站点和我们将要制作的搜索引擎中。<br>
            友链申请地址：<a href="/links.html" target="_blank">传送门</a><br>
            谨拜！
      </div>
      
      <div v-show="cur === 'me'">
        <font size="5">关于我</font><br><br>
        <li>我是玉桂喵千寻，坐落于遥远的萌国。</li><br>
        <li>一个正在上高一的扶她。</li><br>
        <font size="5">属性</font><br><br>
        <li>友善，对朋友、陌生人都会保持一颗友善的心，总会做到“先天下之忧而忧，后天下之乐而乐”😂因此导致了很多时候都会浪费很多的时间在别人身上</li><br>
        <li>我也确实很可爱，头条里人人都夸赞我"可爱爆了"。</li><br>
        <li>当然，我的脾气也很好，单纯可爱的我一般不会愤怒；即使愤怒，一般也不会一被激发就释放出来。但是如果你一直在激怒我的话，当我生气的时候，你可能就会感到自卑，总会觉得"早知道就不惹我了"，也会对你的人情世故产生一些影响。</li><br>
        <font size="5">兴趣爱好</font><br><br>
        <li>吃喝睡玩聊（不是）</li><br>
        <li><strong>打乒乓球</strong>，打得并不是特别好</li><br>
        <li><strong>学习</strong>，除了数学都还行</li><br>
        <li><strong>计算机</strong>，这对我来说呢，确实是个兴趣爱好。我在初中就开始了解，到现在也差不多好几年哩，走一步算一步吧</li><br>
        <font size="5">联系方式</font><br><br>
        <li>联系邮箱：abcd2890000456@126.com,abcd2890000456@gmail.com</li><br>
        <li>QQ：597624858</li><br>
        <font size="5">手中设备列表</font><br><br>
        <li>Windows 11系统的一台一体机电脑</li><br>
        <li>iPad Pro 11inch 99新</li><br>
        <li>iPhone 12 蓝色 99新</li><br>
      </div>
      
      <div v-show="cur === 'chengguo'">
        <font color="red">“<br>已经是所有会的技能了<br>”</font>
        <code>?</code>了解，<code>~</code>熟悉，<code>+</code>掌握，<code>+++</code>熟练，<code>*</code>精通 <del>代表已遗忘</del><br>
        <strong>学校学的</strong><br><br>
        <li>visual foxpro</li><br>
        <li>python</li><br>
        <strong>瞎搞会的</strong><br><br>
        <li>PhotoShop ?</li><br>
        <strong>没认真学</strong><br><br>
        <li>PHP ?</li><br>
        <li>JavaScript ?</li><br>
        <li>CSS ?</li><br>
        <li>HTML ?</li><br>
        <strong>认真学的</strong><br><br>
        <li>Markdown *</li><br>
      </div>
      
      <div v-show="cur === 'thanks'">
        <strong>赞助名单～</strong><br><br>
        <strong>帮助名单～</strong><br><br>
        感谢你们🙏！
        <strong>赞助博主</strong><br><br>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav: [
          { title: '关于博客', code: 'blog' },
          { title: '关于我', code: 'me' },
          { title: '学习成果', code: 'chengguo' },
          { title: '感谢信', code: 'thanks' }
        ],
        cur: 'blog'
      }
    },
    methods: {
      showNav(code) {
        this.cur = code
      } 
    }
  }
</script>
