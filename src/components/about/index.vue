<template>
<!--  <minShopBar v-if="showMinShopTab" />-->
  <div>
    <div class="banner" :style="{backgroundImage:`url(${img})`}"></div>
    <div class="menu">
      <div class="menuMain">
        <div class="menuLeft">当前位置：{{title}}</div>
        <div class="sort">
          <ul>
            <li v-for="(item,index) in topList"
                :key="index"
                :class="{'active':addClass==index}" @click="scrollTo(index)">{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="menuSort main">
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
      <div class="swiper-father" style="margin-bottom: 60px;">
        <div class="banner1 swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt></div>
            <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt></div>
            <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt></div>
            <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt></div>
            <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt></div>
          </div>
          <!-- 如果需要导航按钮 -->

        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>

    </div>
    <div class="menuSort company">
    <div class="compantMain">
      <div class="companyTitle">企业文化</div>
      <div class="companyText">企业文化是企业的灵魂，是推动企业发展的不竭动力</div>
      <div class="companySort">
        <ul>
          <li><img src="@/assets/img/about/aboutbg.jpg" alt=""><div><p>经营理念</p><p>诚信    务实    品德    匠心</p></div></li>
          <li><img src="@/assets/img/about/aboutbg.jpg" alt=""><div><p>经营理念</p><p>诚信    务实    品德    匠心</p></div></li>
          <li><img src="@/assets/img/about/aboutbg.jpg" alt=""><div><p>经营理念</p><p>诚信    务实    品德    匠心</p></div></li>
        </ul>
      </div>
    </div>
  </div>
    <div class="menuSort certificates" >
      <div class="certificateMain">
        <div class="companyTitle">荣誉证书</div>
        <div class="companyText">提升企业形象，展现公司实力</div>
        <div class="swiper-father">
          <div class="banner2 swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt><div class="certificate">发明专利证书</div></div>
              <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt><div class="certificate">发明专利证书</div></div>
              <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt><div class="certificate">发明专利证书</div></div>
              <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt><div class="certificate">发明专利证书</div></div>
              <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt><div class="certificate">发明专利证书</div></div>
              <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt><div class="certificate">发明专利证书</div></div>
              <div class="swiper-slide"><img src="@/assets/img/about/aboutbg.jpg" alt><div class="certificate">发明专利证书</div></div>
            </div>
          </div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
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
      img:require("@/assets/img/about/aboutbg.jpg"),
      topList:[
        {title:'公司介绍',path:'/'},
        {title:'企业文化',path:'about'},
        {title:'荣誉证书',path:'project'},
      ],
        active:0,
        title:''
    }
  },
  components: {
    Tabbar,
    swiper,
    swiperSlide,
      Swiper

  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
      onScroll() {
          const navContents = document.querySelectorAll('.menuSort')
          const offsetTopArr = []
          navContents.forEach(item => {
              offsetTopArr.push(item.offsetTop)
          })
          const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          let navIndex = 0
          for (let n = 0; n < offsetTopArr.length; n++) {
              if (scrollTop >= offsetTopArr[n]) {
                  navIndex = n
              }
          }
          this.active = navIndex;
          console.log(this.active)
      },
      scrollTo(index) {
          this.addClass = index
          const targetOffsetTop = document.querySelector(`.menuSort:nth-child(${index + 3})`).offsetTop
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          const STEP = 50

              smoothDown()
          function smoothDown() {
              if (scrollTop < targetOffsetTop) {
                  if (targetOffsetTop - scrollTop >= STEP) {
                      scrollTop += STEP
                  } else {
                      scrollTop = targetOffsetTop
                  }
                  document.body.scrollTop = scrollTop
                  document.documentElement.scrollTop = scrollTop
                  requestAnimationFrame(smoothDown)
              }
          }
      },
      goUrl(url,index) {
          this.addClass = index
      }
  },
  mounted(){
      this.swiper1 = new Swiper(".banner1", {
          autoplay: false,
          pagination: {
              el: ".swiper-pagination",
              clickable :true
          },
          grabCursor: true,
          slidesPerView: 3,
              spaceBetween: 30,
            slideShadows : true,
          loop: true,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          }
      });
      this.swiper2 = new Swiper(".banner2", {
          autoplay: false,
          pagination: {
              el: ".swiper-pagination2",
              clickable :true
          },
          grabCursor: true,
          slidesPerView: 3,
          spaceBetween: 30,
          slideShadows : true,
          loop: true,
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          }
      });
      window.addEventListener('scroll', this.onScroll)
      this.title = this.$route.meta.title
  },
    destroy() {
        window.removeEventListener('scroll', this.onScroll)
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
    width: 1180px;
    height: 240px;
    position: relative;
    margin: auto;
  }
  .banner1 img {width:380px;height:240px;}
  .swiper-father {position: relative;}
  .swipers {width:1180px;height:240px;position: relative;margin-bottom: 60px;}
  .swipers img {width:380px;height:240px;}
  .swiper-button-next, .swiper-button-prev {width:40px;height:40px;color: #fff;background: #b71b30;font-size: 12px;}
  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {font-size: 14px;}
  .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {font-size: 14px;}
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {left:-60px;}
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {right:-60px;}
  .swiper-slide {width:380px;}
  .company {width:100%;height:590px;background: #f2f4f5;}
  .compantMain {width:1180px;height:530px;position: relative;margin: auto;padding-top: 60px;}
  .companyTitle {font-size:30px;color: #333;text-align: center;}
  .companyText {font-size: 14px;color: #888;text-align: center;margin-top: 10px;margin-bottom: 40px;}
  .companySort {width:1180px;position: relative;overflow: hidden;}
  .companySort ul {width:110%;position: relative;overflow: hidden;}
  .companySort li {width:380px;float:left;margin-right: 20px;height:370px;}
  .companySort img {width:380px;height:280px;}
  .companySort div {height:90px;background: #fff;margin-top: -4px;padding: 0 30px;}
  .companySort div p:first-child {font-size: 16px;color: #888;padding-top: 15px;}
  .companySort div p:last-child {font-size: 20px;color: #333;margin-top: 10px;}
  .banner2 img {width:380px;height:540px;}
  .certificates {width:100%;height:870px;background: #fff;}
  .certificateMain {width:1180px;position: relative;margin: auto;padding-top: 60px;}
  .banner2.swiper-container {
    width: 1180px;
    height:600px;
    position: relative;
    margin: 0 auto 120px;
  }
  .certificate {width:380px;height:50px;text-align: center;line-height: 50px;color: #fff;background: #b71b30;font-size: 18px;}
</style>
