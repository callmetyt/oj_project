<template>
  <div id="question">
    <Search />
    <QFilter />
    <Library />
  </div>
</template>

<script>
import Search from "@/pages/index/components/question/search.vue";
import QFilter from "@/pages/index/components/question/qfilter.vue";
import Library from "@/pages/index/components/question/library.vue";

export default {
  name: "question",
  components: {
    Search,
    QFilter,
    Library,
  },
};
</script>

<style lang="scss" scoped>
#question {
  div {
    margin-bottom: 30px;
  }
}
</style>
