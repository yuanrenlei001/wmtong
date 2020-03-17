<template>
  <!--  <minShopBar v-if="showMinShopTab" />-->
  <div>
    <div class="menu">
      <div class="menuMain">
        <div class="menuLeft">当前位置：{{text==''?'关键词搜索':text}}</div>
      </div>
    </div>
      <div class="recuit">
          <div class="search"><img src="@/assets/img/searchs.png" alt=""><input type="text" placeholder="关键词搜索" v-model="text"><div>搜索</div></div>
      </div>
    <div class="list">
      <div v-for="item in list">
        <p>{{item.text}}</p>
        <p>{{item.time}}</p>
      </div>
    </div>
    <div style="background: #f2f4f5;padding-top: 50px;height:170px;">
      <el-pagination style="text-align: center;margin: 30px 0;"
                     background
                     layout="prev, pager, next"
                     :total="100">
      </el-pagination>
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
                img:require('@/assets/img/recuit.jpg'),
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
                text:'',
                list:[
                    {text:'你所不知道的BWFRP管道 性能优异到你想象不到',time:'2020-02'},
                    {text:'你所不知道的BWFRP管道 性能优异到你想象不到',time:'2020-02'},
                    {text:'你所不知道的BWFRP管道 性能优异到你想象不到',time:'2020-02'},
                    {text:'你所不知道的BWFRP管道 性能优异到你想象不到',time:'2020-02'},
                    {text:'你所不知道的BWFRP管道 性能优异到你想象不到',time:'2020-02'},
                    {text:'你所不知道的BWFRP管道 性能优异到你想象不到',time:'2020-02'},
                    {text:'你所不知道的BWFRP管道 性能优异到你想象不到',time:'2020-02'},
                    {text:'你所不知道的BWFRP管道 性能优异到你想象不到',time:'2020-02'},
                ]
            }
        },
        components: {
            Tabbar,
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
    .recuit {width:1180px;position: relative;margin:  auto;height:auto;}
  .menu {width:100%;height:80px;line-height: 80px;border-bottom: 1px solid #f2f4f5;}
  .menuMain {width:1180px;position: relative;margin: auto;}
  .menuLeft {float:left;font-size: 14px;color: #333;position: relative;padding-left: 35px;}
  .search {position: relative;margin: 48px 0;height:50px;}
  .search input {width:215px;height:50px;position: relative;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
    background: #f2f4f5;
    outline: none;
    border: none;
    padding-left: 75px;
    font-size: 14px;
    color: #333;
    padding-right: 10px;
  }
  .search img {position: absolute;top:50%;left:45px;margin-top: -9px;width:18px;height:18px;z-index: 1;}
  .search div {position: absolute;top:0;left:300px;width:100px;height:50px;background: #b71b30;font-size: 16px;color: #fff;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .list {width:1180px;position: relative;margin: auto;}
  .list div {width:1180px;border-bottom: 1px solid #ddd;margin-bottom: 40px;padding-bottom: 25px;color: #333;cursor: pointer;}
    .list div p:first-child {
      white-space:nowrap;
      text-overflow:ellipsis;
      -o-text-overflow:ellipsis;
      overflow: hidden;
      font-size: 20px;
    }
    .list div p:last-child {font-size: 20px;margin-top: 14px;}
</style>
