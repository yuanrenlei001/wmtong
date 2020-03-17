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
          <div class="sort" v-for="(item,index) in list" @click="collapse(index)" :class="{'active':show==index}">
              <div class="sortTop">
                  <div class="sortTopLeft">{{item.job}}</div>
                  <div class="sortTopTime">发布时间:{{item.time}}</div>
                  <div class="sortTopRight show">-</div>
                  <div class="sortTopRight hide">+</div>
              </div>
              <div class="sortMain">
                  <div class="sortMain01">
                      <div>岗位职责</div>
                      <p v-for="trust in item.trust">{{trust}}</p>
                  </div>
                  <div class="sortMain01">
                      <div>任职要求</div>
                      <p v-for="claim in item.claim">{{claim}}</p>
                  </div>
                  <div class="sortMain02">
                      <div class="phone">
                          <span>联系电话</span>
                          <span>{{item.phone}}</span>
                      </div>
                      <div class="email">
                          <span>电子邮箱</span>
                          <span>{{item.email}}</span>
                      </div>
                  </div>
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
                list:[
                    {job:'采购工程师',time:'2020/20/20',trust:[
                        '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        ], claim:[
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        ], phone:'0571-898989',email:'XXX@163.com'},
                    {job:'采购工程师',time:'2020/20/20',trust:[
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        ], claim:[
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        ], phone:'0571-898989',email:'XXX@163.com'},
                    {job:'采购工程师',time:'2020/20/20',trust:[
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        ], claim:[
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        ], phone:'0571-898989',email:'XXX@163.com'},
                    {job:'采购工程师',time:'2020/20/20',trust:[
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        ], claim:[
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                            '1、熟悉采购流程、擅长供应商开发、价格及谈判、供应商管理。',
                        ], phone:'0571-898989',email:'XXX@163.com'},
                ],
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
    .sort {width:1180px;height:100%;margin-bottom: 1px;cursor: pointer;position: relative;}
    .sort.active .sortTop {background: #b71b30;color: #fff;}
    .sort.active .sortMain {display: block;}
    .sort.active .show {display: block;}
    .sort.active .hide {display: none;}
    .sortTop {width:100%;height:60px;color: #333;font-size: 16px;background: #ddd;font-weight: 900;}
    .sortTopLeft {float:left;margin-left: 28px;height:60px;line-height: 60px;}
    .sortTopRight {position: absolute;right:28px;top:0;font-size: 40px;height:60px;line-height: 60px;}
    .sortTopTime {position: relative;margin: auto;height:60px;line-height: 60px;text-align: center;width:80%;}
    .sortMain {border: 1px solid #b71b30;padding: 0 48px;color: #333;display: none;}
    .sortMain01 {border-bottom: 1px solid #ddd;padding-bottom: 40px;}
    .sortMain01 div {height:70px;line-height: 70px;font-size: 20px;}
    .sortMain01 p {font-size: 14px;line-height: 28px;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
    }
    .sortMain02 {margin-top: 30px;height:80px;}
    .sortMain02 div {
        float:left;
        margin-right: 90px;
    }
    .sortMain02 span {display: block;}
    .sortMain02 span:first-child {font-size: 14px;}
    .sortMain02 span:last-child {font-size: 20px;font-weight: 900;margin-top: 8px;}
</style>
