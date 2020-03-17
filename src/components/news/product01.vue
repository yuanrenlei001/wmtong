<template>
  <div class="content">
    <div class="list" >
      <div  class="news"
            v-for="(item,index) in list"
            :key="index"
            @mouseover="selectStyle (item)"
            @mouseout="outStyle(item)"
            :class="{'active':item.active}"
            @click="goDetail()"
      >
        <div class="newsLeft"><img src="@/assets/img/index/banner.jpg" alt=""></div>
        <div class="newsText">
          <p>你所不知道的BWFRP管道 性能优异到你想象不到</p>
          <p>依托国家经济大环境利好，建筑行业细分领域——管道行业得到迅猛发展，企业数量众多，产品类型丰富。近年来，一款名叫BWFRP管道表现尤为抢眼，成为打破传统管道产品应用市场的黑马。</p>
        </div>
        <div class="newsRight">
          <p>16</p>
          <p>2015-06</p>
        </div>
        <div class="newsBtn">READ MORE</div>
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
    import Swiper from "swiper";
    import 'swiper/css/swiper.min.css';
    export default {
        name: 'index',
        data () {
            return {
                active: false,
                addClass:'',
                list:[
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司',time01:'16',time02:'2015-06'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司',time01:'16',time02:'2015-06'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司',time01:'16',time02:'2015-06'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司',time01:'16',time02:'2015-06'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司',time01:'16',time02:'2015-06'},
                    {img:require('@/assets/img/index/banner.jpg'),title:'油气输送行业',text:'内蒙古神州硅业有限公司',time01:'16',time02:'2015-06'},
                ]
            }
        },
        components: {
            Swiper,

        },
        computed: {
        },
        methods: {
            selectStyle (item) {
                const _this=this;
                this.$nextTick(function () {
                    this.$set(item,'active',true)
                });
            },
            outStyle (item) {
                this.$set(item,'active',false);
            },
            goDetail(){
                this.$router.push("/details")
            }
        },
        mounted(){
        },
        destroy() {
        },

    }
</script>
<style scoped>
  .content {width:100%;position: relative;padding-top: 60px;}
  .list {width:1180px;position: relative;margin: auto;height:100%;}
  .news {height:180px;position: relative;width:1180px;display: block;margin-bottom: 60px;cursor: pointer;}
  .news.active .newsText p:first-child{color: #b71b30;}
  .news.active .newsText p:last-child{color: #333;}
  .newsLeft {float:left;width:280px;height:180px;}
  .newsLeft img {width:280px;height:180px;}
  .newsText {margin-left: 340px;height:180px;width:580px;}
  .newsRight {position: absolute;top:0;right:0;height:180px;text-align: center;color: #333;}
  .newsText p:first-child {font-size: 20px;color: #333;padding-top: 18px;
    white-space:nowrap;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    overflow: hidden;
  }
  .newsText p:last-child {font-size: 14px;color: #888;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-break: break-all;
    margin-top: 18px;
    line-height: 28px;
  }
  .newsRight p:first-child {font-size: 68px;margin-top: 10px;}
  .newsRight p:last-child {font-size: 20px;}
  .newsBtn {width:200px;height:50px;text-align: center;line-height: 50px;color: #fff;font-size: 20px;position: absolute;
    top:50%;margin-top: -25px;right:0;background: #b71b30;
    display: none;
  }
  .news.active .newsBtn {display: block;}
  .news.active .newsRight {display: none;}
</style>