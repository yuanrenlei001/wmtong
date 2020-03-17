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
      <div class="serviceTop">服务项目</div>
      <div class="serviceText">匠心之魂，源于质量，公司将“匠心质量”和“科技创新”视为企业的核心竞争力</div>
      <div class="serviceList">
        <ul>
          <li v-for="item in serviceList">
            <img :src="item.ImgTop" alt="" class="serviceListBg">
            <div class="serviceListBottom">
              <div class="serviceListIcon"><img :src="item.ImgIcon" alt="" class=""></div>
              <div class="serviceListText">
                <p>{{item.title}}</p>
                <p>{{item.text}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="menuSort company">
    <div class="compantMain">
      <div class="companyTitle">应用指南</div>
      <div class="companyText">规范施工秩序，保障施工安全，杜绝施工问题</div>
      <div class="companySort">
        <ul>
          <li><img src="@/assets/img/service/service05.png" alt=""></li>
          <li><img src="@/assets/img/service/service06.png" alt=""></li>
          <li><img src="@/assets/img/service/service07.png" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
    <div class="menuSort certificates" >
      <div class="certificateMain">
        <div class="companyTitle">下载中心</div>
        <div class="companyText">更多技术服务支持，请下载内容查看</div>
        <div class="file">
          <ul>
            <li v-for="item in file"><a @click="download(item.id,item.path)">{{item.name}}</a></li>
          </ul>
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
      img:require('@/assets/img/service/service.jpg'),
      topList:[
        {title:'服务项目',},
        {title:'应用指南',},
        {title:'下载中心',},
      ],
        file:[
            {id:1,name:'BWFRP管道安装规范技术文档',path:'http://college.zhamengtec.com:8080//uploads/20200313/1584098605886_2020.03.03%20%E4%BA%91%E9%9B%86%E5%85%AC%E5%8F%B8%E4%BB%8B%E7%BB%8D.pdf'},
            {id:1,name:'BWFRP管道安装规范技术文档',path:'http://college.zhamengtec.com:8080//uploads/20200313/1584098605886_2020.03.03%20%E4%BA%91%E9%9B%86%E5%85%AC%E5%8F%B8%E4%BB%8B%E7%BB%8D.pdf'},
            {id:1,name:'BWFRP管道安装规范技术文档',path:'http://college.zhamengtec.com:8080//uploads/20200313/1584098605886_2020.03.03%20%E4%BA%91%E9%9B%86%E5%85%AC%E5%8F%B8%E4%BB%8B%E7%BB%8D.pdf'},
            {id:1,name:'BWFRP管道安装规范技术文档',path:'http://college.zhamengtec.com:8080//uploads/20200313/1584098605886_2020.03.03%20%E4%BA%91%E9%9B%86%E5%85%AC%E5%8F%B8%E4%BB%8B%E7%BB%8D.pdf'},
            {id:1,name:'BWFRP管道安装规范技术文档',path:'http://college.zhamengtec.com:8080//uploads/20200313/1584098605886_2020.03.03%20%E4%BA%91%E9%9B%86%E5%85%AC%E5%8F%B8%E4%BB%8B%E7%BB%8D.pdf'},
            {id:1,name:'BWFRP管道安装规范技术文档',path:'http://college.zhamengtec.com:8080//uploads/20200313/1584098605886_2020.03.03%20%E4%BA%91%E9%9B%86%E5%85%AC%E5%8F%B8%E4%BB%8B%E7%BB%8D.pdf'},
            {id:1,name:'BWFRP管道安装规范技术文档',path:'http://college.zhamengtec.com:8080//uploads/20200313/1584098605886_2020.03.03%20%E4%BA%91%E9%9B%86%E5%85%AC%E5%8F%B8%E4%BB%8B%E7%BB%8D.pdf'},
            {id:1,name:'BWFRP管道安装规范技术文档',path:'http://college.zhamengtec.com:8080//uploads/20200313/1584098605886_2020.03.03%20%E4%BA%91%E9%9B%86%E5%85%AC%E5%8F%B8%E4%BB%8B%E7%BB%8D.pdf'},
        ],
        active:0,
        title:'',
        serviceList:[
            {ImgTop:require('@/assets/img/service/service01.png'),ImgIcon:require('@/assets/img/service/sericon01.png'),title:'技术沟通',text:'详细查看设计图纸，并与设计方沟通，制定合理的施工方案'},
            {ImgTop:require('@/assets/img/service/service02.png'),ImgIcon:require('@/assets/img/service/sericon02.png'),title:'制定施工方案',text:'制定合理的施工方案'},
            {ImgTop:require('@/assets/img/service/service03.png'),ImgIcon:require('@/assets/img/service/sericon03.png'),title:'准备工作',text:'准备正确规格的接头/密封圈及其他相应的配件'},
            {ImgTop:require('@/assets/img/service/service04.png'),ImgIcon:require('@/assets/img/service/sericon04.png'),title:'核对产品',text:'安装前核对产品的合格证、规格型号等'},
        ]
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
      },
      download(id,path){
         window.location.href=path
      }
  },
  mounted(){
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

  .serviceTop {font-size: 32px;color: #333;text-align: center;padding-top: 60px;}
  .serviceText {font-size: 14px;color: #888;text-align: center;margin-bottom: 45px;}
  .serviceList {width:100%;position: relative;overflow: hidden;}
  .serviceList ul {width:110%;position: relative;overflow: hidden;}
  .serviceList li {width:580px;height:350px;float:left;margin-right: 20px;margin-bottom: 30px;}
  .certificate {width:580px;height:50px;text-align: center;line-height: 50px;color: #fff;background: #b71b30;font-size: 18px;}
  .serviceListBg {width:580px;height:240px;}
  .serviceListBottom {width:100%;height:110px;position: relative;}
  .serviceListIcon {width:40px;height:100%;float:left;line-height: 110px;}
  .serviceListIcon img {vertical-align: middle;line-height: 110px;}
  .serviceListText {margin-left: 60px;}
  .serviceListText p:first-child {font-size: 18px;color: #333;padding-top: 28px;}
  .serviceListText p:last-child {font-size: 14px;color: #333;margin-top: 5px;}
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
  .company {width:100%;height:440px;background: #f2f4f5;}
  .compantMain {width:1180px;height:440px;position: relative;margin: auto;padding-top: 60px;}
  .companyTitle {font-size:30px;color: #333;text-align: center;}
  .companyText {font-size: 14px;color: #888;text-align: center;margin-top: 10px;margin-bottom: 40px;}
  .companySort {width:1180px;position: relative;overflow: hidden;}
  .companySort ul {width:110%;position: relative;overflow: hidden;}
  .companySort li {width:380px;float:left;margin-right: 20px;height:370px;}
  .companySort img {width:380px;height:200px;}
  .companySort div {height:90px;background: #fff;margin-top: -4px;padding: 0 30px;}
  .companySort div p:first-child {font-size: 16px;color: #888;padding-top: 15px;}
  .companySort div p:last-child {font-size: 20px;color: #333;margin-top: 10px;}
  .banner2 img {width:380px;height:540px;}
  .certificates {width:100%;background: #fff;margin-bottom: 60px;}
  .certificateMain {width:1180px;position: relative;margin: auto;padding-top: 100px;}
  .banner2.swiper-container {
    width: 1180px;
    height:600px;
    position: relative;
    margin: 0 auto 120px;
  }
  .file {width:100%;position: relative;overflow: hidden;}
  .file ul {width:110%;position: relative;overflow: hidden;}
  .file ul li {float:left;margin-right: 60px;height:60px;width:520px;padding-left:40px;line-height: 60px;font-size: 18px;color: #333;border-bottom: 1px solid #ccc;position: relative;}
  .file ul li:before {
    content: '';
    width:24px;
    height:24px;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url("../../assets/img/service/sericon05.png");
    position: absolute;
    top:50%;
    margin-top: -12px;
    left:0;
  }
</style>
