<template>
  <div class='sidebar left_container'>
    <div class="is_collapse">
      <i class="el-icon-sort" @click="handleClickMenuShow"></i>
    </div>
    <el-menu  class="el-menu-vertical-demo" 
      :collapse="isCollapse" 
      :default-active="onRoutes"  
      theme='dark' 
      unique-opened 
      router  
      background-color='#324157'
      text-color='#bfcbd9'
      active-text-color='#20a0ff'>
          <template v-for="item in items">
              <template v-if="item.subs">
                  <el-submenu :index="item.index">
                      <template slot='title'>
                        <i :class="item.icon"></i>
                        <span  v-if="isCollapse === false">{{ item.title }}</span>
                      </template>
                      <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                      </el-menu-item>
                  </el-submenu>
              </template>
              <template v-else>
                  <el-menu-item :index="item.index">
                      <i :class="item.icon"></i>
                      <span  v-if="isCollapse === false">{{ item.title }}</span>
                  </el-menu-item>
              </template>
          </template>
      </el-menu>


  
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      items: [
        {
          icon: "el-icon-setting",
          index: "home",
          title: "首页"
        },
        {
          icon: "el-icon-menu",
          index: "404",
          title: "404页面"
        },
        {
          icon: "el-icon-date",
          index: "3",
          title: "table正式模板",
          subs: [
            {
              index: "completeTemplate",
              title: "Table正式环境模板"
            }
          ]
        },
        {
          icon: "el-icon-star-on",
          index: "RichTextEditings",
          title: "富文本编辑"
        },
        {
          icon: "el-icon-upload2",
          index: "drag",
          title: "维护人员页面",
          subs: [
            {
              index: "ExperimentDemoDaseTable",
              title: "实验Demo基础表格"
            },
            {
              index: "FormalEnvironmentTable",
              title: "正式环境表格"
            },
            {
              index: "FormValidation",
              title: "表单验证+自定义"
            },
            {
              index: "ComponentTransmissionValue",
              title: "组件传值"
            },
            {
              index: "upload",
              title: "文件上传/图片"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    handleClickMenuShow() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>

<style scoped>
.el-icon-sort {
  font-size: 25px;
  color: bisque;
  transform: rotate(-90deg);
  text-align: center;
}
.is_collapse {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.sidebar {
  display: block;
  min-height: 660px;
  max-height: calc(100vh);
  text-align: left;
  background: rgb(50, 65, 87);
}
.sidebar > ul {
  border-right: none;
  height: calc(100vh);
  background: rgb(50, 65, 87);
  padding-bottom: 0px;
}

</style>
