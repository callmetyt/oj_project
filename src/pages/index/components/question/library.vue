<template>
  <div id="library">
    <el-table
      :data="questionData"
      style="width: 100%"
      :default-sort="{prop:'id',order:'ascending'}"
    >
      <el-table-column prop="id" label="题目ID" sortable></el-table-column>
      <el-table-column prop="name" label="题目名"></el-table-column>
      <el-table-column prop="difficult" label="难度"></el-table-column>
      <el-table-column label="标签">
        <template v-slot="scope">
          <div class="warp" v-for="tab in scope.row.tabs" :key="tab">
            <el-tag disable-transitions @click="add" :class="tagColor(tab)">{{tab}}</el-tag>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Bus from "../bus";

export default {
  name: "library",
  components: {},
  data() {
    return {
      questionData: [
        {
          id: 1,
          name: "test",
          tabs: ["测试", "排序", "数组"],
          difficult: "简单",
          clear: false,
        },
        {
          id: 2,
          name: "sdfsdfd",
          tabs: ["测试", "哈哈"],
          difficult: "简单",
          clear: false,
        },
        {
          id: 3,
          name: "t12est",
          tabs: ["测试"],
          difficult: "困难",
          clear: false,
        },
        {
          id: 4,
          name: "tes3233t",
          tabs: ["测试"],
          difficult: "中等",
          clear: false,
        },
        {
          id: 5,
          name: "sdxcfre",
          tabs: ["数组", "哈哈"],
          difficult: "中等",
          clear: false,
        },
      ],
      filteredData: [],
      //标签颜色对象
      tagColorArray: {
        测试: "blue",
        数组: "red",
        哈哈: "green",
        排序: "yellow",
      },
    };
  },
  methods: {
    add(e) {
      //添加过滤标签
      Bus.$emit("add", e.target.innerHTML);
    },
    tagFilter(words) {
      let count = 0;
      //统计待删除的元素个数
      this.questionData.forEach((value, index) => {
        let hasWord = words.every((keyWord) => {
          if (value.tabs.includes(keyWord)) {
            return true;
          } else {
            return false;
          }
        });
        if (!hasWord) {
          this.filteredData.push(value);
          //储存待删除元素
          value.clear = true;
          //标记待删除元素
          count++;
        }
      });
      for (let i = 0; i < count; i++) {
        this.questionData.some((val, index) => {
          if (val.clear) {
            this.questionData.splice(index, 1);
            //删除元素
            return true;
          } else {
            return false;
          }
        });
      }
    },
    tagColor(test) {
      //标签颜色更改
      return this.tagColorArray[test];
    },
  },
  mounted() {
    //接受过滤标签数组并开始过滤
    Bus.$on("startTagFilter", (words) => {
      this.tagFilter(words);
    });
    //重新请求数据
    Bus.$on("getData", () => {
      console.log("reget");
    });
  },
};
</script>

<style lang="scss" scoped>
#library {
  .warp {
    display: inline-block;
    .el-tag {
      cursor: pointer;
      border-right-color: transparent;
      height: 28px;
      line-height: 26px;
      margin: 5px 5px;
      border-radius: 15px;
      color: white;
    }
    .blue {
      background-color: rgb(96, 68, 218);
    }
    .red {
      background-color: rgb(196, 50, 40);
    }
    .green {
      background-color: rgb(54, 228, 141);
    }
    .yellow {
      background-color: rgb(221, 255, 71);
    }
  }
}
</style>
