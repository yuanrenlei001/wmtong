<template>
  <div class="content">
    <div class="productImg"><img src="@/assets/img/product/detail.png" alt=""></div>
    <div class="swiper-father">
      <div class="banner1 swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="@/assets/img/product/icon01.png" alt></div>
          <div class="swiper-slide"><img src="@/assets/img/product/icon01.png" alt></div>
          <div class="swiper-slide"><img src="@/assets/img/product/icon01.png" alt></div>
          <div class="swiper-slide"><img src="@/assets/img/product/icon01.png" alt></div>
        </div>
      </div>
    </div>
    <div class="detail">
      <p>同类产品性能参数对比</p>
      <img src="@/assets/img/product/icon02.png" alt="">
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
            this.swiper1 = new Swiper(".banner1", {
                autoplay: false,
                grabCursor: true,
                slidesPerView: 4,
                spaceBetween: 20,
                slideShadows : true,
                loop: false,
            });
        },
        destroy() {
        },

    }
</script>
<style scoped>
  .content {width:100%;position: relative;}
  .productImg {width:1180px;position: relative;margin: 80px auto;}
  .swiper-container {
    width: 1180px;
    height: 400px;
    position: relative;
    margin: auto;
  }
  .banner1 img {width:280px;height:400px;}
  .swiper-father {width:100%;height:460px;background: #f2f4f5;padding-top: 60px;}
  .detail {width:1180px;;position: relative;margin: auto;}
  .detail>p {text-align: center;font-size: 30px;color: #333;padding-top: 60px;margin-bottom: 30px;}
</style>