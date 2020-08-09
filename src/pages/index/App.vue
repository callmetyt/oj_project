<template>
  <div id="app">
    <linkList />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import linkList from "@/pages/index/components/Home/linklist.vue";

export default {
  name: "App",
  components: {
    linkList,
  },
  mounted() {
    // this.$router.push({ name: "Home" });
  },
};
</script>

<style lang="scss">
#app {
  width: 40em;
  margin: 0 auto;
  outline: 1px solid black;
}
</style>
