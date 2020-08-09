<template>
  <div id="carousel">
    <el-carousel height="225px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
};
</script>

<style lang="scss" scoped>
#carousel {
  width: 35%;
  height: 225px;
  text-align: center;
  h3 {
    line-height: 175px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>
