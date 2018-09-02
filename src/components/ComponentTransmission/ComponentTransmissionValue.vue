<template>
  <div>
      <br>
      <br>
    //父组件向子组件传值 Subcomponent.vue
     <br>
     <br>
    <el-input v-model="ComponentTransmissionValue.input" placeholder="请输入内容"></el-input>
    <br>
    <Subcomponent :inputs="ComponentTransmissionValue.input"></Subcomponent>
    <br>
    <br>
    <br>
    <br>

    //我是子组件向父组件的传值
    {{ComponentTransmissionValue.ParentComponentValue}}
    <br>
    <br>
    <br>
    <ParentComponent @transferValue="ParentComponentValues"></ParentComponent>
  </div>
</template>
<script>
//父组件向子组件传值
import Subcomponent  from "./Subcomponent.vue";
//子组件向父组件传值
import ParentComponent from "./ParentComponent.vue";
export default {
   components: {
    Subcomponent,
    ParentComponent
  },
  data() {
    return {
      ComponentTransmissionValue: {
        input: "",
        ParentComponentValue:""
      },
    };
  },
  methods: {
    ParentComponentValues(value){
        this.ComponentTransmissionValue.ParentComponentValue = value;
    }
  }
}
</script>

<style scoped>

</style>
