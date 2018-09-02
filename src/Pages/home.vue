<template>
  <el-container>
    <leftComponents></leftComponents>
    <el-container>
      <el-header>
        <headerComponents></headerComponents>
      </el-header>
      <el-main class="main_scroll">
          <transition name="move" mode="out-in">
              <router-view ></router-view>
          </transition>     
      </el-main>
      <el-footer class="footer">
        Vue+element-ui ©2018 UED 视觉交互 版权所有 归属 <a class="link_color" href='https://github.com/li2215890610/antd-React' target="_blank">杨大侠</a>
      </el-footer>
    </el-container>
  </el-container>
</template>
<script>
import headerComponents from "../components/LayoutComponent/headerComponents";
import leftComponents from "../components/LayoutComponent/Sidebar";
export default {
  name: "Home",
  components: {
    headerComponents,
    leftComponents
  },
  mounted: function() {
    this.getData();
  },
  data() {
    return {};
  },
  methods: {
    getData() {
      console.log(this.$route.meta.keepAliv);
      // this.$store.dispatch("updateCurUserId", "22222222222");

      // this.$HTTPPost('ycarousel/getCarouselList',{carouselPage:"03"})
      // .then(response=>{
      //        console.log(response)
      //     }).catch(err=>{
      //         console.log(err);
      // })
      // console.log(this.$store.state);
      // this.$HTTPGet("/httpsjsonp/pc", {
      //   callback: "imageCheckHttps",
      //   _: "1517811368081"
      // })
      //   .then(function(params) {
      //     console.log(params);
      //   })
      //   .catch(function(params) {
      //     console.log(params);
      //   });
    }
  }
};
</script>
<style scoped>
.el-header {
  padding: 0;
}
.main_scroll{
  height: calc(100vh - 64px);
}
.link_color{
    color: rgb(50, 65, 87);
}
.footer{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
