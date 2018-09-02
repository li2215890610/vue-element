<template>
 <div id="box">
     <div class="welcomePageBox">
        <br>
        <br>
        <br>
        <br>
        <br>
        <h1>    欢迎使用本产品  ！！！</h1>
        <br>
        <h1>北京XXXX科技有限公司 服务版</h1>
     </div>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: function() {
    this.getInitData();
  },
  methods: {
    getInitData() {}
  },
  components: {}
};
</script>

<style scoped>
.welcomePageBox {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  text-align: center;
}
</style>
