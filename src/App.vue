<template>
  <div>
    <div class="menuhide" v-show="menuValue">
      <el-tooltip
        class="item"
        effect="dark"
        content="此选项将会存储在您的浏览器当中."
        placement="bottom-start"
      >
        <span>导航展示：</span>
      </el-tooltip>
      <el-switch
        @change="navShow"
        v-model="switchShow"
        active-color="#702e49"
        inactive-color="#9baebd99"
      >
      </el-switch>
    </div>
    <i @click="changeShow" class="el-icon-menu mentBtn"></i>
    <div v-show="menuValue" class="search">
      <Search ref="inp"></Search>
    </div>

    <NavList v-if="switchShow" v-show="menuValue"></NavList>
    <Links v-show="!menuValue"></Links>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import "animate.css";
import Search from "./components/Search.vue";
import NavList from "./components/navList.vue";
import Links from "./components/Links.vue";
import SearchBar from "./components/search-bar.vue";
export default {
  name: "App",
  components: {
    Search,
    NavList,
    Links,
    SearchBar,
  },
  data() {
    return {
      switchShow: true,
      menuValue: true,
    };
  },
  methods: {
    navShow() {
      localStorage.setItem("switchShow", this.switchShow);
    },
    changeShow() {
      this.menuValue = !this.menuValue;
    },
  },
  mounted() {
    // 坑一:浏览器存储的值都是字符串
    this.switchShow = JSON.parse(localStorage.getItem("switchShow"));
    this.$bus.$on("showIf", () => {
      this.menuValue = !this.menuValue;
    });
    this.$refs.inp.autoFocus();
  },
  beforeDestroy() {
    this.$bus.$off("showIf");
  },
};
</script>

<style>
body {
  background-image: url(./wallpaper/1.png);
  background-size: 100% auto;
}
.menuhide {
  position: absolute;
  right: 6%;
  top: 3%;
  color: aliceblue;
}
.mentBtn {
  font-size: 34px;
  color: #fff;
  position: absolute;
  top: 2%;
  right: 2%;
  cursor: pointer;
}
.search {
  width: 365px;
  margin: 220px auto;
}
/* 禁止链接展示按钮点击样式 */
.preventClick {
  display: none;
}
/* 优化图标显示 */
.el-avatar > img {
  margin: 0 auto;
}
</style>