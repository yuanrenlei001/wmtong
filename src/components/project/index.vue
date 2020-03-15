<template>
<!--  <minShopBar v-if="showMinShopTab" />-->
  <div>产品中心</div>
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
      msg: 'Welcome to Your Vue.js App',
      showMinShopTab: true,
    }
  },
  components: {
    Tabbar
  },
  methods: {
  },
}
</script>

