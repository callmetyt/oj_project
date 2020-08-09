<template>
  <div id="qfilter">
    <el-tag v-for="tag in words" :key="tag">{{tag}}</el-tag>
    <el-button @click="cleanAll">Reset</el-button>
  </div>
</template>

<script>
import Bus from "../bus";

export default {
  name: "qfilter",
  data() {
    return {
      words: [],
    };
  },
  methods: {
    cleanAll() {
      this.words = [];
      Bus.$emit("getData");
    },
  },
  mounted() {
    //监听添加标签事件
    Bus.$on("add", (keyWord) => {
      //接受标签名并且添加
      if (this.words.indexOf(keyWord) === -1) {
        this.words.push(keyWord);
      }
      //传出过滤标签并开始过滤
      Bus.$emit("startTagFilter", this.words);
    });
  },
};
</script>

<style lang="scss" scoped>
#qfilter {
  outline: 1px solid rgb(230, 230, 230);
  width: 80%;
  margin: 0 auto;
  height: 3rem;
  line-height: 3rem;
  .el-tag {
    margin: 0 5px 0 5px;
  }
  .el-button {
    margin-left: 5px;
  }
}
</style>