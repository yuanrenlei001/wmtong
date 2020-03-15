<template>
  <div class="bottom">
    <div class="bottomMain">
      <div class="bottomSort">
        <div class="bottomAbout" v-for="(item,index) in topList">
          <div>{{item.title}}</div>
          <p v-for="items in item.text">{{items}}</p>
        </div>
      </div>
      <div class="code">
        <img src="@/assets/img/code.png" alt="">
        <p>微信公众号</p>
      </div>
      <div class="information">
        <p>浙公网安备 123456789012345号   浙ICP备1234567890号</p>
        <p>Copyright © 2020 万美通管业（杭州）股份有限公司 All rights reserved.</p>
      </div>
      <div class="call">
        <div class="callRight">
          <div class="callRightPhone">
            <p>联系电话</p>
            <p>0571-89309883</p>
          </div>
          <div class="callRightPhone">
            <p>电子邮箱</p>
            <p>wmtpipe@163.com</p>
          </div>
        </div>
        <div class="callRightAddress">地址：浙江杭州市余杭区东湖北路171号经纬大厦二楼</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Tabbarbottom',
  props: {
    selected: String,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message:this.selected,
      addClass:'',
      topList:[
        {title:'关于我们',text:['公司介绍','企业文化','荣誉证书'],path:'about'},
        {title:'产品中心',text:['产品优势','电力管道','通信管道','产品配件'],path:'project'},
        {title:'应用领域',text:['电力行业','给排水行业','通信行业','油气运输行业'],path:'project'},
        {title:'技术服务',text:['服务项目','应用指南','下载中心'],path:'project'},
        {title:'新闻资讯',text:['企业资讯','行业动态','国家新闻'],path:'project'},
        {title:'人力资源',text:[],path:'project'},
        {title:'联系我们',text:['联系方式','在线留言'],path:'project'},
        ]
    }
  },
  methods: {
    goUrl(url,index) {
      this.$router.push(url)
      console.log(index)
      this.addClass = index
    }
  },
}
</script>

<style scoped>
  .bottom {width:100%;height:355px;background:#323232;padding-top: 100px;padding-bottom: 45px;}
  .bottomMain {width:1180px;position: relative;margin: auto;height:100%;}
  .bottomAbout {float:left;margin-right: 60px;}
  .bottomAbout div {font-size: 16px;color: #fff;margin-bottom: 24px;cursor: pointer;}
  .bottomAbout p {font-size: 14px;color: #bbb;line-height: 32px;cursor: pointer;}
  .information {position: absolute;left:0;bottom:0;color: #bbb;font-size: 12px;}
  .code {position: absolute;top:0;right:0;text-align: center;color: #fff;font-size: 14px;}
  .code p {margin-top: 20px;}
  .call {position: absolute;bottom:0;right:0;}
  .callRight {width:100%;height:60px;border-bottom: 1px solid #525252;}
  .callRightPhone {float:left;height:100%;width:50%;}
  .callRightPhone p:first-child {font-size: 14px;color: #bbb;}
  .callRightPhone p:last-child {font-size: 20px;color: #fff;}
  .callRightAddress {font-size: 14px;color: #fff;margin-top: 10px;}
</style>
