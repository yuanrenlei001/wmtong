<template>
  <!--  <minShopBar v-if="showMinShopTab" />-->
  <div>
    <div class="banner" :style="{backgroundImage:`url(${img})`}"></div>
    <div class="menu">
      <div class="menuMain">
        <div class="menuLeft">当前位置：{{title}}</div>
      </div>
    </div>
      <div class="recuit">
          <div class="contact">
              <div class="contactLeft">
                  <div class="contactLeftTitle">万美通管业（杭州）股份有限公司</div>
                  <div class="hr"></div>
                  <div class="contactLeft01 show01">
                      <p>公司地址</p>
                      <p>杭州市余杭区东湖北路171号经纬大厦二楼  </p>
                  </div>
                  <div class="contactLeft01 show02">
                      <p>联系电话</p>
                      <p>0571-89309883</p>
                  </div>
                  <div class="contactLeft01 show03">
                      <p>电子邮箱</p>
                      <p>wmtpipe@163.com</p>
                  </div>
              </div>
              <div class="contactRight"><img src="@/assets/img/contact/map.png" alt=""></div>
          </div>
          <div style="margin: 80px 0 40px 0;text-align: center;font-size: 20px;color: #333;">如果有什么问题与建议，请认真填写以下信息，我们将及时与你联系</div>
          <div class="contactAjax">
              <div class="contactAjaxTop">
                  <input type="text" placeholder="您的姓名">
                  <input type="text" placeholder="公司名称">
                  <input type="text" placeholder="手机号码">
                  <input type="text" placeholder="邮箱地址">
              </div>
              <textarea placeholder="请详细描述您所需要咨询的问题，我们将及时与你联系" class="textarea"></textarea>
              <div class="contactBottom">
                  <input type="text" placeholder="填写验证码" class="code">
                  <div class="codeNum">1234</div>
                  <div class="btns">提交</div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import Tabbar from '@/components/tabbar'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Swiper from "swiper";
    import 'swiper/css/swiper.min.css';
    export default {
        name: 'index',
        props: {
            selected: String,
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                showMinShopTab: true,
                addClass:'',
                img:require("@/assets/img/recuit.jpg"),
                topList:[
                    {title:'产品优势'},
                    {title:'电力管道'},
                    {title:'通信管道'},
                    {title:'产品佩剑'},
                ],
                active:0,
                title:'',
                dialog_visible: false,
                activeName: '1',
                show:'0'
            }
        },
        components: {
            Tabbar,
        },
        computed: {
        },
        methods: {
            show(index) {
                this.addClass = index;
                console.log(index)
            },
            collapse(index){
                this.show=index
            }
        },
        mounted(){
            this.title = this.$route.meta.title
        },
        destroy() {
        },

    }
</script>
<style scoped>
    .recuit {width:1180px;position: relative;margin: 60px auto;height:auto;}
  .contain {
    height: 300px;
    width: 400px;
    text-align: center;
    padding: 20px;
    background-color: #9dd3fa;
  }
  .banner {
    width:100%;
    height:400px;
    background-position: center top;
    background-repeat: no-repeat;
  }
  .menu {width:100%;height:80px;line-height: 80px;border-bottom: 1px solid #f2f4f5;}
  .menuMain {width:1180px;position: relative;margin: auto;}
  .menuLeft {float:left;font-size: 14px;color: #333;position: relative;padding-left: 35px;}
  .hide {display: block;}
  .show {display: none;}
  .menuLeft:before {
    content: '';
    width:20px;
    height:23px;
    background: url("../../assets/img/about01.png") no-repeat top center;
    background-size: 20px 23px;
    position: absolute;
    top:50%;
    margin-top: -10px;
    left:0;
  }
    .contactAjax {width:1180px;position: relative;overflow: hidden;}
    .contactAjaxTop {width:110%;position: relative;overflow: hidden;}
    .contactAjaxTop input {width:238px;height:48px;border: 1px solid #ddd;padding: 0 20px;line-height: 48px;float:left;outline: none;margin-right: 20px;}
    .textarea {width:1138px;height:178px;border: 1px solid #ddd;padding: 10px 20px;margin-top: 10px;outline: none;resize: none;}
    .contactBottom {width:100%;margin-top: 20px;position: relative;}
    .code {width:128px;height:48px;line-height: 48px;text-align: center;border: 1px solid #ddd;float:left;}
    .codeNum {width:128px;height:48px;border: 1px solid #ddd;line-height: 48px; float:left; margin-left: 20px;text-align:center;}
    .btns {width:200px;height:50px;text-align: center;line-height: 50px;position: absolute;right:0;background: #b71b30;color: #fff;font-size: 16px;}
    .contact {width:1180px;height:440px;}
    .contactLeft {width:460px;float:left;}
    .contactRight {width:720px;margin-left: 460px;}
    .contactRight img {width:720px;height:440px;}
    .contactLeftTitle {font-size: 24px;color: #b71b30;font-weight: 900;}
    .hr {width:200px;height:1px;background: #333;margin: 52px 0 46px 0;}
    .contactLeft01 {position: relative;padding-left: 40px;margin-bottom: 40px;}
    .contactLeft01:before {
        content: '';
        width:24px;
        height:24px;
        position: absolute;
        top:2px;
        left:0;
        background-size: 24px 24px;
        background-repeat: no-repeat;
    }
    .show01:before {background-image: url("../../assets/img/contact/contactIcon01.png");}
    .show02:before {background-image: url("../../assets/img/contact/contactIcon02.png");}
    .show03:before {background-image: url("../../assets/img/contact/contactIcon03.png");}
    .contactLeft01 p:first-child {font-size: 14px;}
    .contactLeft01 p:last-child {font-size: 18px;margin-top: 12px;}
</style>
