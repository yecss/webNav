<template>
  <div class="wrapper">
    <el-col :span="2.5" class="content">
      <el-menu
        @select="getMenuIndex"
        default-active="1"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="1">
          <i class="el-icon-discover"></i>
          <span slot="title">技术论坛</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-finished"></i>
          <span slot="title">技术文档</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-magic-stick"></i>
          <span slot="title">UI框架</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-ice-drink"></i>
          <span slot="title">前端插件</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-headset"></i>
          <span slot="title">音乐网站</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-video-play"></i>
          <span slot="title">在线影视</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-news"></i>
          <span slot="title">壁纸网站</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-monitor"></i>
          <span slot="title">软件下载</span>
        </el-menu-item>
        <div class="setting">
          <span>导航 > </span>
          <el-tooltip
            class="item"
            effect="dark"
            content="是否展示首页导航."
            placement="bottom-start"
          >
            <el-switch
              class="switch"
              @change="navShow"
              v-model="switchShow"
              active-color="#717ff9"
              inactive-color="#9baebd99"
            >
            </el-switch>
          </el-tooltip>
        </div>
      </el-menu>
    </el-col>
    <div class="box">
      <el-button
        size="medium"
        @click="changeShow"
        class="el-icon-close closeBtn"
      ></el-button>
      <!-- 链接展示区 start -->
      <div class="cardWrapper">
        <a
          v-for="(i, index) in linksData"
          :key="index"
          :href="i.url"
          target="_blank"
        >
          <div class="card">
            <div class="card-header">
              <img :src="`assets/links/${i.LocationIcon}`" class="link-icon" />
              <!-- <el-avatar
                class="link-icon"
                :src="`assets/links/${i.LocationIcon}`"
              >{{ i.title }}</el-avatar> -->
              <!-- 当没有可以图标时，默认以名称代替 -->
              <span class="card-title">{{ i.title }}</span>
            </div>
            <el-divider><i class="el-icon-more"></i></el-divider>
            <div class="card-description">
              {{ i.description }}
            </div>
          </div>
        </a>
      </div>
      <!-- 链接展示区 end -->
    </div>
  </div>
</template>

<script>
import forumData from "../data/forum";
import docData from "../data/doc";
import uiData from "../data/ui";
import pluginsData from "../data/plugins";
import music from "../data/music";
import movie from "../data/movie";
import wallpaper from "../data/wallpaper";
import software from "../data/software";
export default {
  name: "Links-tab",
  data() {
    return {
      linksData: forumData,
      switchShow: "",
    };
  },
  methods: {
    navShow() {
      localStorage.setItem("switchShow", this.switchShow);
      this.$emit("changeIndexLink",this.switchShow)
    },
    getMenuIndex(value) {
      if (value == 1) {
        this.linksData = forumData;
      } else if (value == 2) {
        this.linksData = docData;
      } else if (value == 3) {
        this.linksData = uiData;
      } else if (value == 4) {
        this.linksData = pluginsData;
      } else if (value == 5) {
        this.linksData = music;
      } else if (value == 6) {
        this.linksData = movie;
      } else if (value == 7) {
        this.linksData = wallpaper;
      } else if (value == 8) {
        this.linksData = software;
      }
    },
    changeShow() {
      this.$bus.$emit("showIf");
      this.$bus.$emit('changeIndexLink',this.switchShow)
    },
  },
  mounted() {
    // 坑一:浏览器存储的值都是字符串
    this.switchShow = JSON.parse(localStorage.getItem("switchShow"));
  },
};
</script>

<style scoped>
.wrapper {
  width: 72%;
  height: 600px;
  margin: 60px auto;
}
@media screen and (min-device-width: 1600px) {
  .wrapper {
    height: 800px;
    margin-top: 100px;
  }
}
@media screen and (max-width: 480px) {
  .cardWrapper {
    overflow: scroll;
  }
}
.content {
  z-index: 99;
  position: relative;
}
.box {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: relative;
}
.closeBtn {
  position: absolute;
  right: 0;
  border-radius: 0;
  border: 0;
  font-size: 18px;
  height: 40px;
  width: 60px;
}
a {
  text-decoration: none;
  color: #000;
}
/* 链接展示 */
.cardWrapper {
  position: relative;
  top: 52px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-left: 10px;
  padding-right: 10px;
}
.card {
  width: 220px;
  height: 130px;
  margin-bottom: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
  padding-top: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  /* 增大链接卡片之间的距离 */
  margin-left: 5px;
  margin-top: 4px;
}
.link-icon {
  margin-left: 20px;
  vertical-align: middle;
  background-color: #fff;
  color: #000;
  width: 40px;
}
.card-header {
  width: 220px;
  height: 40px;
  line-height: 40px;
}
.card-title {
  font-size: 20px;
  font-family: "Times New Roman", "宋体";
  font-weight: bold;
  vertical-align: middle;
  margin-left: 10px;
}
.card-description {
  font-size: 14.5px;
  color: #566f6f;
  width: 208px;
  margin: 0 auto;
}
.setting {
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  color: #717ff9;
  margin-left: 15px;
}
</style>