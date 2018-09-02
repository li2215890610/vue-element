<template>
    <div class="table">
        <!-- 头部 功能检索 -->
        <div class="handle-box">
            <el-button type="success" @click="addDataBOOL = true"><i class="el-icon-plus el-icon--left"></i>新增</el-button>
            <el-button type="info" @click="getEditData()"> <i class="el-icon-edit el-icon--left"></i> 编辑</el-button>
            <el-button  icon="delete" type="primary"  @click="removeData()">删除</el-button>
            <input type="text" v-model="select_word" placeholder="请输入关键词" class="el-input__inner mr10 handle-input" @keyup.13="search">
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        
        <div class="tableWidth99">
          <!-- table 表格 -->
          <el-table ref="multipleTable"  :data="listData.list" tooltip-effect="dark"   @selection-change="handleSelectionChange" >
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column  label="名字"  > 
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column  label="手机号" >
              <template slot-scope="scope">{{ scope.row.phone }}</template>
            </el-table-column>
            <el-table-column label="地址" >
              <template slot-scope="scope">{{ scope.row.address }}</template>
            </el-table-column>
            <el-table-column  label="描述" >
              <template slot-scope="scope">{{ scope.row.desc }}</template>
            </el-table-column>
            <el-table-column   label="地址">
              <template slot-scope="scope">{{ scope.row.address }}</template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 分页 -->
        <el-row :gutter="20" class="marginTop15" style="margin-right: 0;">
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
     
        <el-dialog title="新增信息"  :visible.sync="addDataBOOL" width="80%" >
          <el-form :model="addForm"  >

            <el-form-item label="项目名称:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="addForm.entryName" placeholder="请输入工作时间" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="工作类型:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="addForm.workType" placeholder="请输入工作时间" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="工作时间:" label-width="250px">
              <el-col :span="11">
                  <el-input v-model.number="addForm.workingHours" placeholder="请输入工作时间" auto-complete="off"></el-input>
                </el-col>
            </el-form-item>   

            <el-form-item label="选择时间:" label-width="250px">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="请选择日期"  value-format="yyyy-MM-dd" v-model="addForm.date1"  @change="getTimes" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>   

            <el-form-item label="工作内容:" label-width="250px">
              <el-col :span="11">
                <el-input type="textarea" v-model="addForm.JobDescription" placeholder="请输入内容"></el-input>
              </el-col>
            </el-form-item>
          </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitAddForm()" :loading="submitAddFormButton">提交</el-button>
            <el-button @click="addDataBOOL = false">取消</el-button>
          </span>
        </el-dialog>

        <el-dialog title="修改信息"  :visible.sync="editDataBOOL" width="80%" >
          <el-form :model="editData"  >

            <el-form-item label="项目名称:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.entryName" placeholder="请输入工作时间" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="工作类型:" label-width="250px">
              <el-col :span="11">
                <el-input v-model.number="editData.workType" placeholder="请输入工作时间" auto-complete="off"></el-input>
              </el-col>
            </el-form-item>

            <el-form-item label="工作时间:" label-width="250px">
              <el-col :span="11">
                  <el-input v-model.number="editData.workingHours" placeholder="请输入工作时间" auto-complete="off"></el-input>
                </el-col>
            </el-form-item>   

            <el-form-item label="选择时间:" label-width="250px">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="请选择日期" v-model="editData.dates" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>   

            <el-form-item label="工作内容:" label-width="250px">
              <el-col :span="11">
                <el-input type="textarea" v-model="editData.JobDescription" placeholder="请输入内容"></el-input>
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
import tableData from "../../static/vuetable.json";

export default {
  data() {
    return {
      listData: [],
      select_word: "",
      total: 0,
      currentPage: 1,
      pagesize: 5,
      addDataBOOL: false,
      editDataBOOL: false,
      addForm: {
        entryName: "",
        workType: "",
        workingHours: "",
        date1: "",
        JobDescription: ""
      },
      formLabelWidth: "130px",
      liguangyang: "liguangyang",
      handleSelectionChangeData: [],
      editData: {
        entryName: "",
        workType: "",
        workingHours: "",
        dates: "",
        JobDescription: ""
      },
      submitAddFormButton: false
    };
  },
  mounted() {
    this.getListData();
  },
  methods: {
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
      
      this.handleSelectionChangeData = [];
      for (const key in val) {
        if (val.hasOwnProperty(key)) {
          const elements = val[key];
          this.handleSelectionChangeData.push(elements.workRecordId);
        }
      }
    },
    search() {
      
      this.liguangyang = this.select_word;
      this.getListData();
    },
    getListData() {
      
      this.listData = tableData;
      this.total = tableData.list.length
      // this.$HTTPPost("../../static/vuetable.json", {
      //   name: this.liguangyang,
      //   currentPage: this.currentPage,
      //   pageSize: this.pagesize,
      //   loginName: this.liguangyang
      // })
      //   .then(data => {
      //     console.log(data);
      //     if (data.code == "2000") {
      //       this.total = data.count;
      //       this.listData = data.data.dataList;
      //     } else {
      //       this.listData = [];
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     this.$message.error("网络链接中断，请稍后重试！！！");
      //   });
    },
    //   element-ui 获取时间插件的时间套路
    getTimes(date) {
      
      this.addForm.date1 = date;
    },
    //新增单条数据提交
    submitAddForm() {
      
      this.submitAddFormButton = true;
      this
        .$HTTPPost("/dworkRecord/saveDworkRecord", {
          projectId: "2",
          projectName: this.addForm.entryName,
          workType: this.addForm.workType,
          workType: "2",
          workTypeName: this.addForm.workType,
          workHours: this.addForm.workingHours,
          workDate: this.addForm.date1,
          workContent: this.addForm.JobDescription,
          loginName: this.liguangyang,
          curLoginName: this.liguangyang
        })
        .then(data => {
          if (data.code == 2000) {
            this.getListData();
            this.addDataBOOL = false;
            this.$message.success("添加成功");
            this.addForm = {};
            this.submitAddFormButton = false;
          } else {
            this.$message.warning("网络错误,请稍后重试！");
            this.submitAddFormButton = false;
          }
        })
        .catch(err => {
          console.log(err + "BaseTable.vue 273行");
          this.$message.error("网络链接中断，请稍后重试！！！");
          this.submitAddFormButton = false;
        });
    },
    /**
     * 删除数据
     */
    removeData() {
      
      if (!this.handleSelectionChangeData) {
        this.$message.warning("请选择内容");
        return;
      }
      this
        .$HTTPPost("/dworkRecord/delDworkRecordByIds", {
          ids: this.handleSelectionChangeData.join(",")
        })
        .then(data => {
          if (data.code == 2000) {
            this.getListData();
            this.$message.success("删除成功");
          } else {
            this.$message.warning("网络错误,请稍后重试！");
          }
        })
        .catch(err => {
          this.$message.error("网络链接中断，请稍后重试！！！");
        });
    },
    /**
      获取单条数据信息 
     */
    getEditData() {
      
      if (
        this.handleSelectionChangeData.length != 1 ||
        this.handleSelectionChangeData.length == ""
      ) {
        this.$message.warning("请选择一条数据");
        return;
      }
      this.editDataBOOL = true;
      this
        .$HTTPPost("/dworkRecord/getDworkRecordById", {
          id: this.handleSelectionChangeData[0]
        })
        .then(data => {
          // console.log(data.data);
          if (data.code == "2000") {
            this.editData.entryName = data.data.projectName;
            this.editData.workType = data.data.workTypeName;
            this.editData.workingHours = data.data.workHours;
            this.editData.dates = data.data.workDate;
            this.editData.JobDescription = data.data.workContent;
          } else {
            this.$message.warning("网络错误,请稍后重试！");
          }
        })
        .catch(err => {
          this.$message.error("网络链接中断，请稍后重试！！！");
        });
    },
    /**
      更新单条数据提交
     */
    submitEditData() {
      
      this
        .$HTTPPost("/dworkRecord/updDworkRecord", {
          projectId: "2",
          projectName: this.editData.entryName,
          workType: "2",
          workTypeName: this.editData.workType,
          workHours: this.editData.workingHours,
          workDate: this.editData.dates,
          workContent: this.editData.JobDescription,
          updUser: this.liguangyang,
          loginName: this.liguangyang,
          curLoginName: this.liguangyang,
          workRecordId: this.handleSelectionChangeData[0]
        })
        .then(data => {
          // console.log(data);
          if (data.code == 2000) {
            this.getListData();
            this.editDataBOOL = false;
            this.$message.success("修改成功");
          } else {
            this.$message.warning("网络错误,请稍后重试！");
          }
        })
        .catch(err => {
          console.log(err + "BaseTable.vue 378行");
          this.$message.error("网络链接中断，请稍后重试！！！");
        });
    }
  }
};
</script>

<style scoped>
.handle-box {
  margin: 0 20px 20px 20px;
}
.handle-input {
  width: 300px;
  display: inline-block;
}
</style>