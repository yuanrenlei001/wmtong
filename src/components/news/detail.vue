<template>
  <div class="content">
    <div class="banner" :style="{backgroundImage:`url(${img})`}"></div>
    <div class="menu">
      <div class="menuMain">
        <div class="menuLeft">当前位置：{{title}}</div>
        <div class="sort">
          <ul>
            <li>12312</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="Top">
      <div class="title">“老司机”带你见识一种环保无污染的新型BWFRP管道</div>
      <div class="text">发布时间：2020-02-16</div>
    </div>
    <div class="htmlText">
      <p>最近几年，“环保”成为人们热议的话题。随着雾霾等影响民生的环保问题日益突出，国家环保部门终于在2017年掀起了史无前例的环保督察风暴，并且出台了一系列环保法律法规，严厉打击环保超标行为。</p>
      <p>最近几年，“环保”成为人们热议的话题。随着雾霾等影响民生的环保问题日益突出，国家环保部门终于在2017年掀起了史无前例的环保督察风暴，并且出台了一系列环保法律法规，严厉打击环保超标行为。</p>
      <p>最近几年，“环保”成为人们热议的话题。随着雾霾等影响民生的环保问题日益突出，国家环保部门终于在2017年掀起了史无前例的环保督察风暴，并且出台了一系列环保法律法规，严厉打击环保超标行为。</p>
      <p>最近几年，“环保”成为人们热议的话题。随着雾霾等影响民生的环保问题日益突出，国家环保部门终于在2017年掀起了史无前例的环保督察风暴，并且出台了一系列环保法律法规，严厉打击环保超标行为。</p>
      <p>最近几年，“环保”成为人们热议的话题。随着雾霾等影响民生的环保问题日益突出，国家环保部门终于在2017年掀起了史无前例的环保督察风暴，并且出台了一系列环保法律法规，严厉打击环保超标行为。</p>
    </div>
    <div class="bottom">
      <div>
        <p>上一篇：你所不知道的BWFRP管道 性能优异到你想象不到</p>
        <p>下一篇：你所不知道的BWFRP管道 性能优异到你想象不到</p>
      </div>
      <div class="btns">返回</div>
    </div>
  </div>
</template>
<script>
    import Swiper from "swiper";
    import 'swiper/css/swiper.min.css';
    export default {
        name: 'index',
        data () {
            return {
                img:require('@/assets/img/news.jpg'),
                title:''
            }
        },
        components: {
            Swiper

        },
        computed: {
        },
        methods: {
        },
        mounted(){
            this.title = this.$route.meta.title
        },
        destroy() {
        },

    }
</script>
<style scoped>
  .banner {
    width:100%;
    height:400px;
    background-position: center top;
    background-repeat: no-repeat;
  }
  .menu {width:100%;height:80px;line-height: 80px;border-bottom: 1px solid #f2f4f5;}
  .sort {float:right;}
  .sort ul li  {height:100%;line-height: 80px;float:left;width:124px;text-align: center;position: relative;cursor: pointer;}
  .sort ul li.active {color: #b71b30;}
  .sort ul li:before {
    content:'';
    width:1px;
    height:10px;
    background: #ddd;
    position: absolute;
    top:50%;
    margin-top: -5px;
    right:0;
  }
  .sort ul li:last-child:before {display: none;}
  .menuMain {width:1180px;position: relative;margin: auto;}
  .menuLeft {float:left;font-size: 14px;color: #333;position: relative;padding-left: 35px;}
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
  .content {width:100%;position: relative;}
  .title {text-align: center;font-size: 32px;color: #333;padding-top: 60px;}
  .text {text-align: center;font-size: 14px;color: #888;margin-bottom: 40px;}
  .applicationDetail {width:1180px;position: relative;overflow: hidden;margin: auto;}
  .applicationDetail ul {width:105%;position: relative;overflow: hidden;}
  .applicationDetail li {width:380px;height:380px;float:left;margin-right: 20px;margin-bottom: 20px;}
  .applicationDetail img {width:380px;height:280px;margin-bottom: -4px;}
  .applicationDetail div {width:100%;height:100px;background: #fff;}
  .applicationDetail div span {display: block;text-align: center;}
  .applicationDetail div span:first-child {font-size: 14px;color: #6c6d6d;line-height: 48px;}
  .applicationDetail div span:last-child {font-size: 20px;color: #333;line-height: 38px;}
  .Top {width:1180px;position: relative;margin: auto;height:156px;border-bottom: 1px solid #ddd;}
  .title {font-size: 20px;color: #333;padding-top: 60px;}
  .text {font-size: 14px;color: #333;margin-top: 15px;}
  .htmlText {width:1060px;padding: 40px 60px;border-bottom: 1px solid #ddd;font-size: 14px;color: #333;margin: auto;}
  .htmlText p {line-height: 32px;}
  .bottom {margin: 40px auto;width:1180px;position: relative;}
  .bottom p {font-size: 14px;color: #333;line-height: 38px;}
  .btns {position: absolute;top:50%;margin-top: -25px;right:0;width:200px;height:50px;background: #b71b30;color: #fff;font-size: 16px;text-align: center;line-height: 50px;cursor: pointer;}
</style>