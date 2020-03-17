<template>
  <div>
    <div class="banner" :style="{backgroundImage:`url(${img})`}"></div>
    <div class="aboutUs">
      <div class="aboutMain">
        <div class="aboutTop"><img src="@/assets/img/index/aboutus.png" alt=""></div>
        <div class="aboutBody">
          <div class="aboutLeft"><img src="@/assets/img/index/aboutLeft.png" alt=""></div>
          <div class="aboutRight">
            <div class="aboutRightTitle">万美通管业（杭州）股份有限公司</div>
            <div class="aboutRightText">
              <p> 万美通管业（杭州）股份有限公司（以下简称“万美通管业”）是一家从事高强度玻璃纤维复合材料编绕拉挤（BWFRP）系列管道生产、机械制造装备及输配电复合材料配件自主生产和销售的科技新型集团企业，总部位于国家级经济开发区杭州市余杭区国家技术经济开发区，注册资本1000万元，公司现有员工106人。</p>
              <p>公司致力于为全国建设项目提供技术领先、品质卓越的高端复合材料编绕拉挤（BWFRP）系列管道产品和智能制造机械装备产品。公司主要生产高强度玻璃纤维复合材料编绕拉挤（BWFRP）系列电缆保护套管，产品在产品的原料选购、生产运输等环节，公司严格加强把控，严格按照国家行业标准生产，质量过硬，产品具有壁厚均匀、强度高、耐腐蚀耐热、绝缘、使用寿命长、内外表光滑等特征。公司智能制造的玻璃纤维复合材料编绕拉挤（BWFRP）成套设备，年产量可达500台套，PVC-O管设备生产能力达1000台套。</p>
            </div>
            <div class="aboutRightBottom">
              <div><p>2019</p><p>成立于2019年</p></div>
              <div><p>1000</p><p>注册资本1000万</p></div>
              <div><p>106</p><p>公司员工106人</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="productMain">
        <div class="productTitle"><img src="@/assets/img/index/product.png" alt=""></div>
        <div class="productSort">
          <ul>
            <li v-for="(item,index) in list" :key="index"
              @mouseover="selectStyle (item)"
                @mouseout="outStyle(item)"
                :class="{'active':item.active}"
            >
              <div><img :src=item.img alt=""></div>
              <div class="productText">
                <p>{{item.title}}</p>
                <p>{{item.text}}</p>
              </div>
              <div class="showFiex" v-show="item.active" @click="goNews()">
                <p>这是标题</p>
                <p style="width:80%;position: relative;margin:40px auto 0;">按照相关管道安装配置，每根管道6米长，接头处必须配置一个直通按照相关按照相关管道安装配置，每根管道6米长，接头处必须配置一个直通按照相关按照相关管道安装配置，每根管道6米长，接头处必须配置一个直通按照相关</p>
                <div class="more"><img src="@/assets/img/index/more.png" alt=""></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="productMore"><div class="btn">READ MORE</div></div>
      </div>
    </div>
    <div class="application">
      <div class="applicationGg" :style="{backgroundImage:`url(${application})`}"></div>
      <div class="applicationMain">
        <div class="applicationTop"><img src="@/assets/img/index/application.png" alt=""></div>
        <div class="applicationSort">
          <ul>
            <li><div><img src="@/assets/img/index/applicationTop.jpg" alt=""><p>电力行业</p></div></li>
            <li><div><img src="@/assets/img/index/applicationTop.jpg" alt=""><p>油气输送行业</p></div></li>
            <li><div><img src="@/assets/img/index/applicationTop.jpg" alt=""><p>给排水行业</p></div></li>
            <li><div><img src="@/assets/img/index/applicationTop.jpg" alt=""><p>通信行业</p></div></li>
          </ul>
        </div>
        <div class="applicationIcon07"><img src="@/assets/img/index/icon07.png" alt=""></div>
        <div class="applicationDetail">
          <ul>
            <li v-for="item in applicationList" @click="goNews()"><img :src="item.img" alt=""><div><span>{{item.name}}</span><span>{{item.company}}</span></div></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contactMain">
        <div class="applicationTop"><img src="@/assets/img/index/contact.png" alt=""></div>
        <div class="contactAjax">
          <div class="contactAjaxTop">
            <input type="text" placeholder="您的姓名">
            <input type="text" placeholder="公司名称">
            <input type="text" placeholder="手机号码">
            <input type="text" placeholder="邮箱地址">
          </div>
          <textarea placeholder="请详细描述您所需要咨询的问题，我们将及时与你联系" class="textarea"></textarea>
          <div class="contactBottom">
            <input type="text" placeholder="填写验证码" class="code">
            <div class="codeNum">1234</div>
            <div class="btns">提交</div>
          </div>
        </div>
      </div>
    </div>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
  import Tabbar from '@/components/tabbar'
export default {
  name: 'index',
  props: {
    selected: String,
  },
  data () {
    return {
      active: false,
      msg: 'Welcome to Your Vue.js App',
      showMinShopTab: true,
      img:require('@/assets/img/index/banner.jpg'),
      application:require('@/assets/img/index/applicationTop.jpg'),
      list:[
        {img:require('@/assets/img/index/banner.jpg'),title:'BMP管道',text:'按照相关管道安装配置，每根管道6米长，接头处必须配置一个直通按照相关'},
        {img:require('@/assets/img/index/banner.jpg'),title:'BMP管道',text:'按照相关管道安装配置，每根管道6米长，接头处必须配置一个直通按照相关'},
        {img:require('@/assets/img/index/banner.jpg'),title:'BMP管道',text:'按照相关管道安装配置，每根管道6米长，接头处必须配置一个直通按照相关'},
        {img:require('@/assets/img/index/banner.jpg'),title:'BMP管道',text:'按照相关管道安装配置，每根管道6米长，接头处必须配置一个直通按照相关'}
      ],
        applicationList:[
            {name:'油气输送行业',company:'内蒙古神州硅业有限公司',img:require('@/assets/img/index/applicationTop.jpg')},
            {name:'油气输送行业',company:'内蒙古神州硅业有限公司',img:require('@/assets/img/index/applicationTop.jpg')},
            {name:'油气输送行业',company:'内蒙古神州硅业有限公司',img:require('@/assets/img/index/applicationTop.jpg')},
            {name:'油气输送行业',company:'内蒙古神州硅业有限公司',img:require('@/assets/img/index/applicationTop.jpg')},
            {name:'油气输送行业',company:'内蒙古神州硅业有限公司',img:require('@/assets/img/index/applicationTop.jpg')},
            {name:'油气输送行业',company:'内蒙古神州硅业有限公司',img:require('@/assets/img/index/applicationTop.jpg')},
        ]
    }
  },
  components: {
    Tabbar
  },
  methods: {
    selectStyle (item) {
      var _this=this;
      this.$nextTick(function () {
        this.$set(item,'active',true)
      });
    },
    outStyle (item) {
      this.$set(item,'active',false);
    },
      goNews(){
          this.$router.push("/details")
      }
  },
}
</script>
<style scoped>
  .banner {
    width:100%;
    height:720px;
    background-position: center top;
    background-repeat: no-repeat;
  }
  .aboutUs {width:100%;height:820px;background: #fff;overflow: hidden;}
  .aboutMain {width:1180px;position: relative;margin:auto;height:100%;padding-top: 80px;}
  .aboutTop {width:100%;text-align: center;margin-bottom: 60px;}
  .aboutLeft {float:left;}
  .aboutLeft img {width:480px;height:500px;}
  .aboutRight {width:640px;margin-left:540px;position: relative;height:500px;}
  .aboutRightTitle {font-size: 30px;color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:100%;
  }
  .aboutRightBottom {position: absolute;bottom:0;width:100%;}
  .aboutRightText {font-size: 14px;line-height: 28px;color: #333;}
  .aboutRightText p {text-indent: 2em;margin-top: 24px;text-align: justify;}
  .aboutRightBottom div {width:33%;float:left;text-align: center;}
  .aboutRightBottom div p:first-child {font-size: 60px;color: #b71b30;}
  .aboutRightBottom div p:last-child {font-size: 14px;color: #333;}
  .product {background: #f2f4f5;}
  .productMain {width:1180px;position: relative;margin: auto;}
  .productTitle {width:100%;height:210px;line-height: 210px;text-align: center}
  .productTitle img {vertical-align: middle;}
  .productSort {width:1180px;position: relative;overflow: hidden;}
  .productSort ul {width:105%;position: relative;overflow: hidden;}
  .productSort li {float:left;margin-right: 20px;width:580px;height:520px;margin-bottom: 20px;background: #fff;position: relative;}
  .productSort img {width:580px;height:400px;}
  .productText {height:120px;}
  .productText p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width:100%;
    text-align: center;
  }
  .productText p:first-child {font-size: 20px;padding-top: 30px;}
  .productText p:last-child {font-size: 14px;margin-top: 12px;}
  .productMore {width:100%;height:230px;position: relative;}
  .productMore .btn {width:200px;height:50px;text-align: center;line-height: 50px;font-size: 20px;color: #b71b30;margin:-25px auto 0;position: relative;top:50%;background: #fff;cursor: pointer;}
  .showFiex {position: absolute;z-index: 99;background: #b71b30;top:0;left:0;width:100%;height:100%;color: #fff;cursor: pointer;}
  .showFiex p:first-child {text-align: center;padding-top: 135px;font-size: 20px;}
  .showFiex p:last-child {width:80%;position: relative;margin:40px auto 0;font-size: 14px;line-height: 24px;text-align: justify;}
  .more {text-align: center;}
  .more img {width:40px;height:40px;position: absolute;bottom:90px;left:50%;margin-left: -20px;}
  .application{width:100%;position: relative;background: #f2f4f5;}
  .applicationMain {width:1180px;height:100%;position: relative;margin: auto;}
  .applicationTop {width:100%;text-align: center;height:210px;line-height: 210px;}
  .applicationTop img {vertical-align: middle;}
  .applicationGg {width:100%;height:680px;background-position: center top;
    background-repeat: no-repeat;position: absolute;top:0;z-index: 0;}
  .applicationSort {width:1180px;position: relative;overflow: hidden;}
  .applicationSort ul {width:105%;position: relative;overflow: hidden;}
  .applicationSort li {width:280px;height:300px;float:left;margin-right: 20px;}
  .applicationSort img {width:280px;height:240px;}
  .applicationSort p {width:100%;line-height: 60px;background: #fff; white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;margin-top: -4px;}
  .applicationIcon07 {margin-top: 20px;width:100%;height:280px;}
  .applicationIcon07 img {width:100%;height: 100%;}
  .applicationDetail {width:1180px;position: relative;overflow: hidden;margin-top: 30px;}
  .applicationDetail ul {width:105%;position: relative;overflow: hidden;}
  .applicationDetail li {width:380px;height:380px;float:left;margin-right: 20px;margin-bottom: 20px;cursor: pointer;}
  .applicationDetail img {width:380px;height:280px;margin-bottom: -4px;}
  .applicationDetail div {width:100%;height:100px;background: #fff;}
  .applicationDetail div span {display: block;text-align: center;}
  .applicationDetail div span:first-child {font-size: 14px;color: #6c6d6d;line-height: 48px;}
  .applicationDetail div span:last-child {font-size: 20px;color: #333;line-height: 38px;}
  .contact{width:100%;position: relative;}
  .contactMain {width:1180px;height:680px;position: relative;margin: auto;}
  .contactAjax {width:1180px;position: relative;overflow: hidden;}
  .contactAjaxTop {width:110%;position: relative;overflow: hidden;}
  .contactAjaxTop input {width:238px;height:48px;border: 1px solid #ddd;padding: 0 20px;line-height: 48px;float:left;outline: none;margin-right: 20px;}
  .textarea {width:1138px;height:178px;border: 1px solid #ddd;padding: 10px 20px;margin-top: 10px;outline: none;resize: none;}
  .contactBottom {width:100%;margin-top: 20px;position: relative;}
  .code {width:128px;height:48px;line-height: 48px;text-align: center;border: 1px solid #ddd;float:left;}
  .codeNum {width:128px;height:48px;border: 1px solid #ddd;line-height: 48px; float:left; margin-left: 20px;text-align:center;}
  .btns {width:200px;height:50px;text-align: center;line-height: 50px;position: absolute;right:0;background: #b71b30;color: #fff;font-size: 16px;cursor: pointer;}
</style>
