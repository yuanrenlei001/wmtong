<template>
  <div class="content">
    <div class="contentTop">
      <div class="contentTopLeft"><img src="@/assets/img/product/product.jpg" alt=""></div>
      <div class="contentTopRight">
        <div class="contentTopRight01">BWFRP电力管道</div>
        <span></span>
        <div>
          <div class="contentTopRight02">BWFRP电力、通信管道采用高性能纤维复合材料和环氧树脂为原材料，由编织层、中间层、外表层构成，通过高性能纤维纵向和横向相互交错编织拉挤成型。具有“环刚度高、拉伸度强、内壁光滑、导热性优、耐高低温、电绝缘高、阻燃性强、耐腐防水、易运易装、安全环保”等十大特性。</div>
          <div class="contentTopRight03">
            <ul>
              <li><img src="@/assets/img/product/product.jpg" alt=""></li>
              <li><img src="@/assets/img/product/product.jpg" alt=""></li>
              <li><img src="@/assets/img/product/product.jpg" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="contentDetail">
      <div class="contentDetailTop">
        <div :class="{'active':addClass==1}" @click="click(1)">产品型号</div>
        <div :class="{'active':addClass==2}" @click="click(2)">执行标准及规格参数</div>
      </div>
      <div class="tables">
        <el-table :data="tableData"  border>
          <el-table-column v-for="(item,key) in tableTitle" :key="key" :prop="item.value"
                           :label="item.name"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
    import Swiper from "swiper";//引入swiper
    import 'swiper/css/swiper.min.css';
    import 'element-ui/lib/theme-chalk/index.css';
    export default {
        name: 'index',
        data () {
            return {
                tableTitle: [
                    {name:'规格型号（mm）', value:'date'},
                    {name:'尺寸（mm）/d', value:'date'},
                    {name:'尺寸（mm）/t', value:'date'},
                    {name:'重量（kg/m）', value:'date'},
                    {name:'行业标准环刚度要求（kpa）', value:'date'},
                    {name:'实测结果（kpa）', value:'date'},
                ],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                addClass:1
            }
        },
        components: {
            Swiper

        },
        computed: {
        },
        methods: {
            click(index){
                this.addClass = index
            }
        },
        mounted(){
        },
        destroy() {
        },

    }
</script>
<style scoped>
  .content {width:1180px;position: relative;margin:70px auto 0;}
  .contentTop {width:100%;height:330px;position: relative;}
  .contentTopLeft {float:left;width:480px;height:330px;}
  .contentTopLeft img {width:480px;height:330px;}
  .contentTopRight {margin-left: 520px;position: relative;height:330px;}
  .contentTopRight01 {font-size: 32px;color: #333;position: absolute;top:-4px;left:0;}
  .contentTopRight span {display: block;width:100%;height:1px;padding-top: 55px;border-bottom: 1px solid #ddd;}
  .contentTopRight02 {font-size: 14px;color: #333;line-height: 28px;margin-top: 23px;text-align: justify;}
  .contentTopRight03 {width:100%;position: absolute;overflow: hidden;left:0;bottom: -4px;}
  .contentTopRight03 ul {width:110%;position: relative;overflow: hidden;}
  .contentTopRight03 li {float:left;margin-right: 10px;}
  .contentTopRight03 img {width:210px;height:145px;}
  .contentDetail {margin-top: 60px;}
  .contentDetailTop {height:50px;width:100%;border-bottom: 1px solid #ddd;line-height: 50px;}

  .contentDetailTop div {
    float: left;
    background: #ddd;
    color: #333;
    font-size: 18px;
    margin-right: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    min-width: 110px;
    padding:0 35px;
    text-align: center;
    cursor: pointer;
  }
  .contentDetailTop div.active {color: #fff;background: #b71b30;}
  .tables {width:1130px;position: relative;margin:50px auto;}
</style>