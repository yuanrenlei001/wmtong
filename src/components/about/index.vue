<template>
<!--  <minShopBar v-if="showMinShopTab" />-->
  <div>
    <div class="banner" :style="{backgroundImage:`url(${img})`}"></div>
    <div class="menu">
      <div class="menuMain">
        <div class="menuLeft">当前位置：关于我们</div>
        <div class="sort">
          <ul>
            <li v-for="(item,index) in topList"
                :key="index"
                :class="{'active':addClass==index}">{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="aboutUs">
        <div class="top">万美通管业（杭州）股份有限公司</div>
        <div class="content">
          <p>万美通管业（杭州）股份有限公司（以下简称“万美通管业”）是一家从事高强度玻璃纤维复合材料编绕拉挤（BWFRP）系列管道生产、机械制造装备及输配电复合材料配件自主生产和销售的科技新型集团企业，总部位于国家级经济开发区杭州市余杭区国家技术经济开发区，注册资本1000万元，公司现有员工106人。</p>
          <p>公司致力于为全国建设项目提供技术领先、品质卓越的高端复合材料编绕拉挤（BWFRP）系列管道产品和智能制造机械装备产品。公司主要生产高强度玻璃纤维复合材料编绕拉挤（BWFRP）系列电缆保护套管，产品在产品的原料选购、生产运输等环节，公司严格加强把控，严格按照国家行业标准生产，质量过硬，产品具有壁厚均匀、强度高、耐腐蚀耐热、绝缘、使用寿命长、内外表光滑等特征。公司智能制造的玻璃纤维复合材料编绕拉挤（BWFRP）成套设备，年产量可达500台套，PVC-O管设备生产能力达1000台套。</p>
        </div>
        <div class="aboutRightBottom">
          <div><p>2019</p><p>成立于2019年</p></div>
          <div><p>1000</p><p>注册资本1000万</p></div>
          <div><p>106</p><p>公司员工106人</p></div>
        </div>
      </div>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <swiper-slide>I'm Slide 5</swiper-slide>
      <swiper-slide>I'm Slide 6</swiper-slide>
      <swiper-slide>I'm Slide 7</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

  </div>
</template>

<script>
  import Tabbar from '@/components/tabbar'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
      img:require('@/assets/img/about/aboutbg.jpg'),
      topList:[
        {title:'公司介绍',path:'/'},
        {title:'企业文化',path:'about'},
        {title:'荣誉证书',path:'project'},
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
        coverflow:'',
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows : true,
        isSign:false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      }
    }
  },
  components: {
    Tabbar,
    swiper,
    swiperSlide

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
  },
  mounted(){
  }
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
  .main {width:1180px;position: relative;margin: auto;}
  .aboutUs {width:100%;position: relative;padding-top: 80px;}
  .top {width:100%;text-align: center;font-size: 30px;color: #333;}
  .content {width:80%;position: relative;margin: auto;text-align: justify;font-size: 14px;color: #333;line-height: 28px;padding-top: 38px;}
  .content p {text-indent: 2em;margin-bottom: 14px;}
  .aboutRightBottom {position: relative;width:60%;margin:80px auto;height:100px;}
  .aboutRightText {font-size: 14px;line-height: 28px;color: #333;}
  .aboutRightText p {text-indent: 2em;margin-top: 24px;text-align: justify;}
  .aboutRightBottom div {width:33%;float:left;text-align: center;}
  .aboutRightBottom div p:first-child {font-size: 60px;color: #b71b30;}
  .aboutRightBottom div p:last-child {font-size: 14px;color: #333;}
  .swiper-container {
    width: 500px;
    height: 300px;
    margin: 20px auto;
  }
</style>
