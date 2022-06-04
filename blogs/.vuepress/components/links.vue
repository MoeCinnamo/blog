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
        
      <div v-show="cur === 'start'">
            <blockquote>
                网站名称：天堂里の猫<br>
                网站地址：https://blog.mojy.xyz <br>
                网站说明：天堂里健康快乐的小猫咪 <br>
                网站图标：https://gravatar.loli.net/avatar/ae4dd9f92845152e9ae8b67a4ec8e53e;s=640 <br>
                友链地址：https://blog.mojy.xyz/links.html <br>
            </blockquote>
            友链申请格式：<br>
            博客名称;博客地址;博客头像;博客说明<br><br>
            
            注意：图片为webp、ico格式的图片链接或Cravatar(包含Q头和Gravatar)会更容易审核成功哦！<br><br>
            
            本站友链库：<br>
            位于“友情链接”中，优质的站点会放在推荐链接中，友情链接不分排序，大家都可以在里面看到你的站点。<br><br>
            
            <strong>申请要求：</strong><br>
            &nbsp;&nbsp;&nbsp;&nbsp;1.请合理运营网站，禁止黄、赌、毒、擦边球等一切违法、违规行为。一经发现后立即删除友情链接并加入黑名单。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;2.网站运行异常请及时联系站长说明原因，超14天异常视为死站，本站有权将友情链接删除。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;3.不接受三分钟热度而建站的博主申请友情链接，请确保网站拥有5篇及以上原创文章并能稳定运行一个月后申请。<br>
            &nbsp;&nbsp;&nbsp;&nbsp;4.此页面为申请友链专用页面，请勿回复无关和违规内容，违禁词一经发现，立即拉黑举报处理。<br><br>
      </div>
      
      <div v-show="cur === 'sites'">
          
          <!--
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="链接地址" target="_blank">
              <img src="图片地址" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="链接地址" target="_blank">
              <strong>标题</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>简介</small>
          </div>
          -->
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://tpsc.mojy.xyz" target="_blank">
              <img src="https://s1.ax1x.com/2022/04/24/L4K7O1.jpg" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://tpsc.mojy.xyz" target="_blank">
              <strong>玉桂随机图片API</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>各种图片随机生成</small>
          </div>
          
          <br><br><br><br><br><br>
      </div>
      
      <div v-show="cur === 'up-links'">
          
          <!--
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="链接地址" target="_blank">
              <img src="图片地址" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="链接地址" target="_blank">
              <strong>标题</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>简介</small>
          </div>
          -->
          
          NO DATA
          
      </div>
      
      <div v-show="cur === 'links'">
          
          <!--
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="链接地址" target="_blank">
              <img src="图片地址" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="链接地址" target="_blank">
              <strong>标题</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>简介</small>
          </div>
          -->
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://lanpingblog.top" target="_blank">
              <img src="https://lanpingblog.top/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://lanpingblog.top" target="_blank">
              <strong>蓝屏钙，好喝的钙的博客</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>有钱终成眷属，没钱亲眼目睹</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://www.wenytao.com" target="_blank">
              <img src="https://www.wenytao.com/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.wenytao.com" target="_blank">
              <strong>IT屋博客</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>IT屋博客，是一个分享新鲜科技和IT技术的个人原创独立博客（WenYtao.Com）</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://web.xpblog.cn" target="_blank">
              <img src="https://web.xpblog.cn/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://web.xpblog.cn" target="_blank">
              <strong>小屁の博客</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>记录美好生活点滴</small>
          </div>
        
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://blog.iucky.cn" target="_blank">
              <img src="https://cdn.my-api.cn/user/w/asset-pic-gitee/20220312201745.png" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://blog.iucky.cn" target="_blank">
              <strong>秉松博客</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>有秉性且正直的松</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://www.zmki.cn" target="_blank">
              <img src="https://www.zmki.cn/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.zmki.cn" target="_blank">
              <strong>钻芒博客</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>崇尚技术，乐享极致！</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://www.maowuo.cn" target="_blank">
              <img src="https://www.maowuo.cn/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.maowuo.cn" target="_blank">
              <strong>猫屋博客</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>关注互联网和搜索引擎网站SEO优化技术</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://www.timochan.cn" target="_blank">
              <img src="https://cdn.timochan.cn/img/avatarcache/avatar.png" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.timochan.cn" target="_blank">
              <strong>TimochanのBlog</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>Let's start learning !</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://www.lemonx.cn" target="_blank">
              <img src="https://s1.ax1x.com/2020/11/01/Bdjvt0.gif" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.lemonx.cn" target="_blank">
              <strong>沐瑾年</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>一个铁憨憨的blog</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://vircloud.net" target="_blank">
              <img src="https://vircloud.net/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://vircloud.net" target="_blank">
              <strong>VirCloud's Blog</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>Learning & Sharing</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://mr158.cn" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/13295350?v=4" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://mr158.cn" target="_blank">
              <strong>MR158</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>走り続けるなら</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://blog.jamsg.cn" target="_blank">
              <img src="http://q1.qlogo.cn/g?b=qq&nk=1253496010@qq.com&s=640" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://blog.jamsg.cn" target="_blank">
              <strong>NEKO#ΦωΦ</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>聞こえるはずの声</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="http://www.lianjie99.cn/" target="_blank">
              <img src="http://www.lianjie99.cn/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.lianjie99.cn/" target="_blank">
              <strong>链接99自动秒收录</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>链接99自动秒收录</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://www.n520.net/" target="_blank">
              <img src="https://www.n520.net/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.n520.net/" target="_blank">
              <strong>吾爱收录网</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>吾爱收录网</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="https://www.mffac.com/" target="_blank">
              <img src="https://www.mffac.com/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.mffac.com/" target="_blank">
              <strong>免费自动秒收录（mffac.com）-极速收录网</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>免费自动秒收录（mffac.com）-极速收录网</small>
          </div>
          
          <div style="border: 2px solid #d0d0d0;border-radius: 15px;width: 50%;height: 100px;position: relative;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;border: 1px solid #ccc;float: left;box-sizing: border-box;">
            <a href="http://www.0558.la" target="_blank">
              <img src="http://www.0558.la/favicon.ico" style="width: 64px;height: 64px;position: absolute;left: 5px;top: 15px;border-radius: 100px">
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.0558.la" target="_blank">
              <strong>0558自动秒收录</strong>
            </a>
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <small>0558自动秒收录网</small>
          </div>
          
          <br>
          <br><br><br><br><br>
          <br><br><br><br><br>
          <br><br><br><br><br>
          <br><br><br><br><br>
          <br><br><br><br><br>
          <br><br><br><br><br>
          <br><br><br><br><br>
          <br><br><br><br><br>
          <br>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav: [
          { title: '申请友链', code: 'start' },
          { title: '旗下网站', code: 'sites' },
          { title: '推荐链接', code: 'up-links' },
          { title: '友情链接', code: 'links' }
        ],
        cur: 'start'
      }
    },
    methods: {
      showNav(code) {
        this.cur = code
      } 
    }
  }
</script>
