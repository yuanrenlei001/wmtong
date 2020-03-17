<template>
  <div class="top">
    <div class="logo"><img src="@/assets/img/logo.png" alt=""></div>
    <div class="search" @click="goSearch()"><img src="@/assets/img/search.png" alt=""></div>
    <div class="OAbtn">企业OA</div>
    <div class="sort">
      <ul>
        <li v-for="(item,index) in topList"
            :key="index"
            :class="{'active':addClass==index}"
            @click="goUrl(item.path,index)">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    selected: String,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message:this.selected,
      addClass:'',
      topList:[
        {title:'首页',path:'/'},
        {title:'关于我们',path:'about'},
        {title:'产品中心',path:'project'},
        {title:'应用领域',path:'application'},
        {title:'技术服务',path:'service'},
        {title:'新闻资讯',path:'news'},
        {title:'人力资源',path:'recuit'},
        {title:'联系我们',path:'contact'}
      ]
    }
  },
  methods: {
    goUrl(url,index) {
      this.$router.push(url)
      console.log(index)
      this.addClass = index
    },
      goSearch(){
          this.$router.push("/search")
          this.addClass = '10'
      }
  },
}
</script>

<style scoped>
  .top {width:100%;height:100px;line-height: 100px;}
  .logo {float:left;margin-left: 80px;height:100%;}
  .logo img {width:280px;height:50px;vertical-align: middle;}
  .sort {float:right;}
  .sort ul li  {height:100%;line-height: 100px;float:left;text-align: center;position: relative;cursor: pointer;padding: 0 30px;}
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

  .OAbtn {
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: #b71b30;
    color: #fff;
    font-size: 14px;
    border-radius: 20px;
    float: right;
    position: relative;
    top: 50%;
    margin: -15px 60px 0 60px;
  }
  .search {float:right;margin-right: 80px;cursor: pointer;}
  .search img {width:20px;height:20px;}
</style>
