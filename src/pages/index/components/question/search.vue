<template>
  <div id="search">
    <input v-model="input" placeholder="请输入内容" />
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style lang="scss" scoped>
#search {
  margin: 30px auto 0 auto;
  width: 50%;
  display: flex;
  button {
    border-radius: 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  input {
    border: 1px solid rgb(221, 223, 231);
    width: 100%;
    border-radius: 20px;
  }
  input::placeholder {
    color: rgb(197, 199, 204);
    padding: 10px;
  }
  input:focus {
    border: rgb(64, 158, 255) 1px solid;
    outline: 0;
  }
}
</style>