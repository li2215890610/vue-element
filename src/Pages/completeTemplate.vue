<template>
    <div class="table">
        <section class="marginHeight"></section>
        <!-- 头部 功能检索 -->
        <div class="handle-box">
            <el-button type="success" @click="addDataBOOL = true"><i class="el-icon-plus el-icon--left"></i>新增</el-button>
            <el-button type="info" @click="getEditData()"> <i class="el-icon-edit el-icon--left"></i> 编辑</el-button>
            <el-button  icon="delete" type="primary"  @click="removeData()">删除</el-button>
            <input type="text" v-model="keyWord" placeholder="请输入关键词" class="el-input__inner mr10 handle-input" @keyup.13="search">
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <div class="tableWidth99">
                  <!-- table 表格 -->
          <el-table ref="multipleTable" :data="listData"  tooltip-effect="dark"  style="width: 100%"  max-height="630" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column  label="id"   > 
              <template slot-scope="scope">{{ scope.row.id }}</template>
            </el-table-column>
            <el-table-column  label="name"   > 
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column  label="regular"   > 
              <template slot-scope="scope">{{ scope.row.regular }}</template>
            </el-table-column>
            <el-table-column  label="ownedBusiness"   > 
              <template slot-scope="scope">{{ scope.row.ownedBusiness }}</template>
            </el-table-column>
            <el-table-column  label="remarks"   > 
              <template slot-scope="scope">{{ scope.row.remarks }}</template>
            </el-table-column>
            <el-table-column  label="delFlg"   > 
              <template slot-scope="scope">{{ scope.row.delFlg }}</template>
            </el-table-column>
            <el-table-column  label="insUser"   > 
              <template slot-scope="scope">{{ scope.row.insUser }}</template>
            </el-table-column>
            <el-table-column  label="insTime"   > 
              <template slot-scope="scope">{{ scope.row.insTime }}</template>
            </el-table-column>
            <el-table-column  label="updUser"   > 
              <template slot-scope="scope">{{ scope.row.updUser }}</template>
            </el-table-column>
            <el-table-column  label="updTime"   > 
              <template slot-scope="scope">{{ scope.row.updTime }}</template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <el-row :gutter="19" class="marginTop15 " style="margin-right: 0;">
          <el-col :span="12" :offset="6">
            <div class="grid-content bg-purple">
              <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[5, 10, 15]"
                  :page-size="pagesize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
     
        <el-dialog title="新增信息"  :visible.sync="addDataBOOL" width="10%" >
          <el-form :model="addForm" :rules="addFormVerification" ref="addForm" class="demo-ruleForm">
            <el-form-item label="name:" label-width="250px" prop="name">
              <el-col :span="11">
                <el-input  v-model="addForm.name" placeholder="请输入name" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="regular:" label-width="250px" prop="regular">
              <el-col :span="11">
                <el-input v-model="addForm.regular" placeholder="请输入regular" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="ownedBusiness:" label-width="250px" prop="ownedBusiness">
              <el-col :span="11">
                <el-input v-model="addForm.ownedBusiness" placeholder="请输入ownedBusiness" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="remarks:" label-width="250px">
              <el-col :span="11">
                <el-input v-model="addForm.remarks"  placeholder="请输入remarks" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="delFlg:" label-width="250px">
              <el-col :span="11">
                <el-input v-model="addForm.delFlg" placeholder="请输入delFlg" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="insUser:" label-width="250px">
              <el-col :span="11">
                <el-input v-model="addForm.insUser" placeholder="请输入insUser" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="insTime:" label-width="250px">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="请选择日期" value-format="yyyy-MM-dd"  v-model="addForm.insTime"  @change="getAddTimes"   style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="updUser:" label-width="250px">
              <el-col :span="11">
                <el-input v-model="addForm.updUser" placeholder="请输入updUser" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="updTime:" label-width="250px">
              <el-col :span="11">
                <el-input v-model="addForm.updTime" placeholder="请输入updTime" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitAddForm('addForm')">提交</el-button>
            <el-button @click="closeAddForm('addForm')">取消</el-button>
          </span>
        </el-dialog>

        <el-dialog title="修改信息"  :visible.sync="editDataBOOL" width="10%" >
          <el-form :model="editData"  >
            <el-form-item label="name:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.name" placeholder="请输入name" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="regular:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.regular" placeholder="请输入regular" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="ownedBusiness:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.ownedBusiness" placeholder="请输入ownedBusiness" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="remarks:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.remarks" placeholder="请输入remarks" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="delFlg:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.delFlg" placeholder="请输入delFlg" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="insUser:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.insUser" placeholder="请输入insUser" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="insTime:" label-width="250px">
              <el-col :span="11">
                <el-date-picker  v-model="editData.insTime" type="date" placeholder="请选择日期" value-format="yyyy-MM-dd" @change="getEditTimes"    style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="updUser:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.updUser" placeholder="请输入updUser" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="updTime:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.updTime" placeholder="请输入updTime" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer" v-if="listData != ''">
            <el-button type="primary" @click="submitEditData()">提交</el-button>
            <el-button @click="editDataBOOL = false">取消</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data() {
    //自定义验证规则
    var validateData = (rule, value, callback) => {
      if (value == "" || value == undefined || value == null || value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    return {
      listData: [],
      select_word: "",
      total: 0,
      currentPage: 1,
      pagesize: 5,
      addDataBOOL: false,
      editDataBOOL: false,
      addForm: {},
      addFormVerification: {
        //这是自定义验证
        ownedBusiness: [
          { validator: validateData, trigger: "blur", message: "请输入ownedBusiness" }
        ],
        //这是UI自动验证
        name: [{ required: true, message: "不能为空", trigger: "blur" }],
        regular: [
          { required: true, message: "请输入regular", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
      },
      formLabelWidth: "130px",
      handleSelectionChangeData: [],
      editData: {},
      keyWord: ""
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
    //   element-ui 获取时间插件的时间套路
    getEditTimes(date) {
      let self = this;
      self.editData.insTime = date;
    },
    getAddTimes(date) {
      let self = this;
      self.addForm.insTime = date;
    },
    /**
     * 选择展示数据条数
     */
    handleSizeChange: function(size) {
      this.pagesize = size;
      this.getListData();
    },
    /**
     * 选择跳转页数
     */
    handleCurrentChange: function(currentPages) {
      this.currentPage = currentPages;
      this.getListData();
    },
    //选择表中数据
    handleSelectionChange(val) {
      let self = this;
      self.handleSelectionChangeData = [];
      for (const key in val) {
        if (val.hasOwnProperty(key)) {
          const elements = val[key];
          self.handleSelectionChangeData.push(elements.id);
        }
      }
    },
    search() {
      let self = this;
      self.getListData();
    },
    getListData() {
      let self = this;
      self
        .$HTTPPost("/dfieldCheck/findAllDfieldCheckByPage", {
          currentPage: self.currentPage,
          pageSize: self.pagesize,
          // keyWord: self.keyWord
        })
        .then(data => {
          if (data.code == "2000") {
            self.total = data.count;
            self.listData = data.data.dataList;
          } else {
            self.listData = [];
          }
        })
        .catch(err => {
          console.log(err + "BaseTable.vue /dfieldCheck/findAllDfieldCheckByPage");
          self.$message.error("网络链接中断，请稍后重试！！！");
        });
    },
    //新增单条数据提交
    submitAddForm(addForms) {
      let self = this;
      self.$refs[addForms].validate(valid => {
        if (valid) {
          self
            .$HTTPPost("/dfieldCheck/saveDfieldCheck", self.addForm)
            .then(data => {
              if (data.code == 2000) {
                self.getListData();
                self.addDataBOOL = false;
                self.$message.success("添加成功");
                self.addForm = {};
              } else {
                self.$message.warning("网络错误,请稍后重试！");
              }
            })
            .catch(err => {
              console.log(err + "BaseTable.vue /dfieldCheck/saveDfieldCheck");
              self.$message.error("网络链接中断，请稍后重试！！！");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /**
     * 关闭弹出层清空验证与数据
     */
    closeAddForm(formName) {
      let self = this;
      self.addDataBOOL = false;
      this.$refs[formName].resetFields();
    },
    /**
     * 删除数据
     */
    removeData() {
      let self = this;
      if (
        self.handleSelectionChangeData == "" ||
        self.handleSelectionChangeData == undefined ||
        self.handleSelectionChangeData == null
      ) {
        self.$message.warning("请选择内容");
        return;
      }
      self
        .$HTTPPost("/dfieldCheck/delDfieldCheckByIds", {
          ids: self.handleSelectionChangeData.join(",")
        })
        .then(data => {
          if (data.code == 2000) {
            self.getListData();
            self.$message.success("删除成功");
          } else {
            self.$message.warning("网络错误,请稍后重试！");
          }
        })
        .catch(err => {
          console.log(err + "BaseTable.vue /dfieldCheck/delDfieldCheckByIds");
          self.$message.error("网络链接中断，请稍后重试！！！");
        });
    },
    /**
      获取单条数据信息 
     */
    getEditData() {
      let self = this;
      if (
        self.handleSelectionChangeData.length != 1 ||
        self.handleSelectionChangeData.length == ""
      ) {
        self.$message.warning("请选择一条数据");
        return;
      }
      self.editDataBOOL = true;
      self
        .$HTTPPost("/dfieldCheck/getDfieldCheckById", {
          id: self.handleSelectionChangeData[0]
        })
        .then(data => {
          // console.log(data.data);
          if (data.code == "2000") {
            self.editData = data.data;
          } else {
            self.$message.warning("网络错误,请稍后重试！");
          }
        })
        .catch(err => {
          console.log(err + "BaseTable.vue  /dfieldCheck/getDfieldCheckById");
          self.$message.error("网络链接中断，请稍后重试！！！");
        });
    },
    /**
      更新单条数据提交
     */
    submitEditData() {
      let self = this;
      self
        .$HTTPPost("/dfieldCheck/updDfieldCheck", self.editData)
        .then(data => {
          // console.log(data);
          if (data.code == 2000) {
            self.getListData();
            self.editDataBOOL = false;
            self.$message.success("修改成功");
          } else {
            self.$message.warning("网络错误,请稍后重试！");
          }
        })
        .catch(err => {
          console.log(err + "BaseTable.vue /dfieldCheck/updDfieldCheck");
          self.$message.error("网络链接中断，请稍后重试！！！");
        });
    }
  }
}
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.handle-select {
  width: 120px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
</style>