<template>
    <div class="header">
      <div class="logo">北京XXXX科技有限公司</div>
      <div class="user-info">
        <el-dropdown trigger="click" @command="loginOut">
            <div class="el-dropdown-link el_dropdown_link">
                <img class="user-logo" src="../../../static/img/buttonBg.png">
                <span>{{username}}</span>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/login" >退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
  </div>
</template>

<script>
import { localStorageRemoveItemAll } from "../../utils/index.js";

export default {
  data() {
    return {
      name: "sss",
      username: "你好"
    };
  },
  mounted: function() {
    this.getInitData();
  },
  methods: {
    getInitData() {},
    loginOut(command) {
      this.$router.push({ path: command });
      localStorageRemoveItemAll();
    }
  },
  components: {}
};
</script>

<style scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 22px;
  line-height: 60px;
  padding: 0 20px;
  color: #fff;
  background-color: #242f42;
  display: flex;
  align-items: center;
}
.logo {
  width: 250px;
  text-align: center;
  justify-content: flex-start;
  flex: 1;
  text-align: left;
}
.user-info {
  font-size: 16px;
  color: #fff;
  justify-content: flex-end;
  flex: 1;
  display: flex;
}
.el_dropdown_link {
  justify-content: flex-end;
}
.user-info .el-dropdown-link {
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el_dropdown_link > span {
  padding-left: 20px;
}
.user-info .user-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
