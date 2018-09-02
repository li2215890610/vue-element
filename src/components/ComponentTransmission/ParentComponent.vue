<template>
  <div>
    <el-input placeholder="请输入内容" @change="ParentComponentValueChange"  prefix-icon="el-icon-search" v-model="ParentComponentValue"></el-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ParentComponentValue:""
    }
  },
  methods: {
    ParentComponentValueChange(){
        //声明一个方法 在父组件中调用
        this.$emit('transferValue',this.ParentComponentValue)
    }
  }
}
</script>

<style scoped>

</style>
