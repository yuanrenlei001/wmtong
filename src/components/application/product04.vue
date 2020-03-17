<template>
  <div class="content">
    <div class="title">油气运输行业</div>
    <div class="text">油气管道运输业作为联结油气资源与市场的桥梁和纽带，以其高效率、低成本和安全可靠的优势越来越显示出旺盛的生命力。</div>
    <div class="applicationDetail">
      <ul>
        <li v-for="item in list"><img :src="item.img" alt=""><div><span>{{item.title}}</span><span>{{item.text}}</span></div></li>
      </ul>
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
    import Swiper from "swiper";
    import 'swiper/css/swiper.min.css';
    export default {
        name: 'index',
        data () {
            return {
                list:[
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司'},
                ]
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
        },
        destroy() {
        },

    }
</script>
<style scoped>
  .content {width:100%;position: relative;padding-top: 60px;}
  .title {text-align: center;font-size: 32px;color: #333;}
  .text {text-align: center;font-size: 14px;color: #888;margin-bottom: 40px;}
  .applicationDetail {width:1180px;position: relative;overflow: hidden;margin: auto;}
  .applicationDetail ul {width:105%;position: relative;overflow: hidden;}
  .applicationDetail li {width:380px;height:380px;float:left;margin-right: 20px;margin-bottom: 20px;}
  .applicationDetail img {width:380px;height:280px;margin-bottom: -4px;}
  .applicationDetail div {width:100%;height:100px;background: #fff;}
  .applicationDetail div span {display: block;text-align: center;}
  .applicationDetail div span:first-child {font-size: 14px;color: #6c6d6d;line-height: 48px;}
  .applicationDetail div span:last-child {font-size: 20px;color: #333;line-height: 38px;}
</style>