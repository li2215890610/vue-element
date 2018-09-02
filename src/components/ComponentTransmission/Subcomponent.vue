<template>
  <div>

      我是子组件,这是父组件的值   {{inputs}}
  </div>
</template>
<script>
export default {
  props:["inputs"],
  data() {
    return {
      ruleForm2: {
        pass: "",
      }
    };
  },
  mounted:function(){
  },
  methods: {}
}
</script>

<style scoped>

</style>
