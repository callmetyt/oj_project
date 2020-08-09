<template>
  <div class="linklist">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="Home">首页</el-menu-item>
      <el-menu-item index="Question">题库</el-menu-item>
      <el-menu-item index="3">在线测试</el-menu-item>
      <el-menu-item index="4">竞赛</el-menu-item>
      <el-menu-item index="5">实时评测队列</el-menu-item>
      <el-menu-item index="6">排行榜</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "linkLise",
  data() {
    return {
      activeIndex: "Home",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push({ name: key });
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
