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
                :class="{'active':addClass==index}" @click="show(index)">{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>
        <child0  v-if="addClass == 0"></child0>
        <child1  v-if="addClass == 1"></child1>
        <child2  v-if="addClass == 2"></child2>
        <child3  v-if="addClass == 3"></child3>
  </div>
</template>

<script>
    import Tabbar from '@/components/tabbar'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import child0 from '@/components/application/product01.vue'
    import child1 from '@/components/application/product02.vue'
    import child2 from '@/components/application/product03.vue'
    import child3 from '@/components/application/product04.vue'

    import Swiper from "swiper";//引入swiper
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
                img:require('@/assets/img/news.jpg'),
                topList:[
                    {title:'企业资讯'},
                    {title:'行业动态'},
                    {title:'国家新闻'},
                ],
                active:0,
                title:'',
                dialog_visible: false
            }
        },
        components: {
            Tabbar,
            child0,
            child1,
            child2,
            child3,
        },
        computed: {
        },
        methods: {
            show(index) {
                this.addClass = index;
                console.log(index)
            },
        },
        mounted(){
            this.title = this.$route.meta.title
        },
        destroy() {
        },

    }
</script>
<style scoped>
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
</style>
