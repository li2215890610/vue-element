<template>
  <div>
    <section class="marginHeight"></section>
    <el-row :gutter="20">
        <el-col :span="12" :offset="6">
            <el-form :model="ruleForm2"  :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <!-- <el-form :model="ruleForm2" status-icon  ref="ruleForm2" label-width="100px" class="demo-ruleForm"> -->
            <el-form-item label="密码" prop="pass">
                <!-- <el-form-item label="密码" > -->
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <!-- <el-form-item label="确认密码" > -->
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="ages">
            <!-- <el-form-item label="年龄"  > -->
                <el-input v-model.number="ruleForm2.ages"></el-input>
            </el-form-item>
            //以上是自定义表单验证
            <br>
            <br>
            <br>
            <el-form-item label="测试" prop="productName">
            <!-- <el-form-item label="年龄"  > -->
                <el-input auto-complete="off"  v-model="ruleForm2.productName" ></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
                <el-select v-model="ruleForm2.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input type="age" v-model.number="ruleForm2.age" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm2.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm2.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>  
            <el-form-item prop="email" label="邮箱" >
                <el-input v-model="ruleForm2.email"></el-input>
            </el-form-item>    
            <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm2.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
            </el-form>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: "",
        productName: "",
        ages: "",
        type: [],
        resource: "",
        email: "",
        desc:"",
        region:""
      },
      rules2: {
        productName: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        //自定义验证
        ages: [{ validator: checkAge, trigger: "blur" }],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        age: [
          { required: true, message: "年龄不能为空" },
          { type: "number", message: "年龄必须为数字值" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ],
         desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm2.passa);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>