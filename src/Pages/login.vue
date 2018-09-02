<template>
    <div class="login-wrap">
        <div class="ms-title">北京XXXX科技有限公司</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="请输入用户名" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
                <div class='desc'>
                  账号：admin 密码：123456
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import { localStorageSetItem } from "../utils/index.js";
export default {
  data: function() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      if (
        this.ruleForm.username === "admin" &&
        this.ruleForm.password === "123456"
      ) {

        localStorageSetItem("a", 2);

        this.$router.push({
          path: "/home"
        });
        this.$store.dispatch("updateCurUserId", "22222");
        console.log(this.$store.state.curUserId);
      }else{

      }
      // self
      //   .$HTTPPost("/duser/login", {
      //     loginName: self.ruleForm.username,
      //     password: self.ruleForm.password
      //   })
      //   .then(data => {
      //     localStorageSetItem("a", 2);

      //     this.$router.push({
      //       path: "/home"
      //     });

      //     self.$store.dispatch("updateCurUserId", "22222");
      //     console.log(self.$store.state.curUserId);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style scoped>
.login-wrap {
  width: 100%;
  height: calc(100vh);
  background: rgb(50, 65, 87);
  display: flex;
  flex-direction: column;
}
.ms-title {
  margin-top: calc(20vh);
  text-align: center;
  font-size: 30px;
  color: #fff;
}
.ms-login {
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 240px;
  padding: 40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
}
.desc{margin: 50px auto;}
</style>