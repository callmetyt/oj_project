<template>
  <div class="home">
    <div class="level1">
      <carousel />
      <match />
    </div>
    <div class="level2">
      <notice />
      <rank />
      <some />
    </div>
    <div class="action">
      <el-button type="primary" round @click="changetmp">登录</el-button>
      <el-button type="primary" round>注册</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import notice from "@/pages/index/components/Home/notice.vue";
import carousel from "@/pages/index/components/Home/carousel.vue";
import match from "@/pages/index/components/Home/match.vue";
import rank from "@/pages/index/components/Home/rank.vue";
import some from "@/pages/index/components/Home/some.vue";

export default {
  name: "Home",
  components: {
    notice,
    carousel,
    match,
    rank,
    some,
  },
  methods: {
    changetmp() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.action {
  margin: 0 auto;
  width: max-content;
}
.level1 {
  display: flex;
  justify-content: space-between;
  height: 225px;
  margin: 30px 0 30px 0;
}
.level2 {
  display: flex;
  justify-content: space-between;
  height: 175px;
  margin-bottom: 30px;
}
</style>
