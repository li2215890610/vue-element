<template>
 <div class="box" >
   <el-row>
    <el-col :span="24" class="marginTop15">
       <el-button type="primary" @click="returnHomePage()">返回主页</el-button>
       <el-button type="info" @click="returnUpperPage()">返回上页</el-button>
    </el-col>
  </el-row>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: function() {},
  methods: {
    returnHomePage() {
      this.$router.push({
        path: "/home"
      });
    },
    returnUpperPage() {
      this.$router.go(-1);
    }
  },
  components: {}
};
</script>

<style scoped>
.box {
  height: calc(100vh);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../../../static/img/404.jpg");
}
</style>
