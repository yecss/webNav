<template>
  <div>
    <div class="menu-btn">
      <i @click="changeShow" class="el-icon-menu mentBtn"></i>
    </div>
    <div v-show="menuValue" class="search">
      <Search ref="inp"></Search>
    </div>

    <div class="nav-list">
      <NavList v-if="switchShow" v-show="menuValue"></NavList>
    </div>
    <Links @changeIndexLink="handleChange" v-if="!menuValue"></Links>
  </div>
</template>

<script>
import "animate.css";
import Search from "./components/Search.vue";
import NavList from "./components/navList.vue";
import Links from "./components/Links.vue";
export default {
  name: "App",
  components: {
    Search,
    NavList,
    Links,
  },
  data() {
    return {
      menuValue: true,
      switchShow:''
    };
  },
  methods: {
    handleChange(v){
      this.switchShow = v
    },
    changeShow() {
      this.menuValue = !this.menuValue;
    },
  },
  mounted() {
    if (!localStorage.getItem("switchShow")) {
      localStorage.setItem("switchShow", true);
    }
    this.switchShow = JSON.parse(localStorage.getItem("switchShow"))
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
  background-image: url(./wallpaper/2.png);
  background-size: cover;
  background-repeat: no-repeat;
}
.mentBtn {
  font-size: 34px;
  color: #fff;
  position: absolute;
  top: 2%;
  right: 1%;
  cursor: pointer;
}
.search {
  margin: 180px auto;
}
/* 禁止链接展示按钮点击样式 */
.preventClick {
  display: none;
}
/* 优化图标显示 */
.el-avatar > img {
  margin: 0 auto;
}
@media screen and (max-width: 480px) {
  body {
    background-color: #fff;
    background-image: none;
  }
  .nav-list {
    display: none;
  }
  .menu-btn {
    display: none;
  }
}
</style>