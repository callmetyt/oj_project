<template>
  <div class="notice">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>公告版</span>
      </div>
      <div>
        公告
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "notice",
};
</script>

<style lang="scss" scoped>
.notice {
  width: 40%;
  height: 175px;
  .el-card {
    height: inherit;
  }
}
</style>
