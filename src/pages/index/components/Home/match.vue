<template>
  <div id="match">
    <div class="running">正在进行的比赛</div>
    <div class="future">即将举行</div>
    <div class="pass">已经结束</div>
  </div>
</template>

<script>
export default {
  name: "match",
};
</script>

<style lang="scss" scoped>
#match {
  width: 55%;
  display: flex;
  div {
    text-align: center;
  }
  :nth-child(1) {
    background-color: rgba(20, 207, 20, 0.5);
    width: 40%;
  }
  :nth-child(2) {
    background-color: rgba(33, 75, 190, 0.57);
    width: 30%;
  }
  :nth-child(3) {
    background-color: rgba(221, 88, 26, 0.5);
    width: 30%;
  }
}
</style>
