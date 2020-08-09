<template>
  <div id="warp">
    <!-- 顶部指示栏 -->
    <nav>
      <el-row ref="steps">
        <el-col :span="6" :class="classObject[0]">
          <div class="text">1</div>
          <div class="fillIn"></div>
        </el-col>
        <el-col :span="6" :class="classObject[1]">
          <div class="text">2</div>
          <div class="fillIn"></div>
        </el-col>
        <el-col :span="6" :class="classObject[2]">
          <div class="text">3</div>
          <div class="fillIn"></div>
        </el-col>
        <el-col :span="6" :class="classObject[3]">
          <div class="text">4</div>
          <div class="fillIn"></div>
        </el-col>
      </el-row>
    </nav>
    <!-- 表单栏 -->
    <form action="#" method="post">
      <h3>必要信息(essential infomation)</h3>
      <el-row>
        <el-col :span="12">Redis服务IP(redis service IP):</el-col>
        <el-col :span="12">
          <el-input placeholder="请输入..."></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">Mysql服务IP(mysql service IP):</el-col>
        <el-col :span="12">
          <el-input placeholder="请输入..."></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">Mysql 用户名(mysql username):</el-col>
        <el-col :span="12">
          <el-input placeholder="请输入..."></el-input>
        </el-col>
      </el-row>
    </form>
    <!-- 步骤按钮 -->
    <div class="action">
      <el-button type="danger" @click="backStep">上一步(Prev)</el-button>
      <el-button type="success" @click="nextStep">下一步(Next)</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      classObject: [
        { active: true, over: false },
        { active: false, over: false },
        { active: false, over: false },
        { active: false, over: false }
      ],
      // class属性控制
      stepCount: 0
      // 步骤计数
    };
  },
  methods: {
    nextStep() {
      if (this.stepCount < 3) {
        this.classObject[this.stepCount].active = false;
        this.classObject[this.stepCount].over = true;
        this.classObject[++this.stepCount].active = true;
      }
    },
    // 点击下一步的DOM操作
    backStep() {
      if (this.stepCount > 0) {
        this.classObject[this.stepCount].active = false;
        this.classObject[--this.stepCount].over = false;
        this.classObject[this.stepCount].active = true;
      }
    }
    // 点击上一步的DOM操作
  }
};
</script>

<style lang="scss" scoped>
#warp {
  width: 380px;
  margin: 2.5rem auto;
  nav {
    height: 6.5rem;
    .text {
      text-align: center;
      margin: 0 auto;
      height: 6rem;
      font-size: 5.75rem;
      opacity: 0;
    }
    .fillIn {
      border-radius: 0.5rem;
      height: 0.5rem;
      background-color: darkgrey;
      width: 100%;
      margin: 0 auto;
    }
    // 激活的css样式
    .active {
      .fillIn {
        transition: all 1s;
        background-color: rgb(14, 193, 231);
      }
      .text {
        transition: all 1s;
        opacity: 1;
      }
    }
    // 已完成的css样式
    .over {
      .fillIn {
        transition: all 1.5s;
        background-color: rgb(14, 229, 141);
      }
    }
  }
  form {
    margin: 1rem 0 0 0;
    .el-row {
      margin: 10px 0 0 0;
    }
  }
  .action {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 0 0;
  }
}
</style>