<template>
  <div>
    <div class="wrapper">
      <div
        data-index="0"
        @click="changeBar($event)"
        class="bar-icon search-tip"
      >
        <img test src="../../public/assets/bar/baidu.svg" alt="" />
      </div>
      <div data-index="1" @click="changeBar($event)" class="bar-icon">
        <img src="../../public/assets/bar/google.svg" alt="" />
      </div>
      <div data-index="2" @click="changeBar($event)" class="bar-icon">
        <img src="../../public/assets/bar/github.svg" alt="" />
      </div>
      <div data-index="3" @click="changeBar($event)" class="bar-icon">
        <img src="../../public/assets/bar/biying.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "search-bar",
  methods: {
    changeBar(e) {
      let itmes = document.querySelectorAll(".bar-icon");
      // 发布信息
      pubsub.publish(
        "resolveIndex",
        e.currentTarget.getAttribute("data-index")
      );
      for (let i = 0; i < 4; i++) {
        itmes[i].classList.remove("search-tip");
      }
      e.currentTarget.classList.add("search-tip");
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 40px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 55px;
}
.search-tip::before {
  content: "";
  width: 5px;
  height: 16px;
  display: inline-block;
  background-color: #409eff;
  position: relative;
  border-radius: 3px;
  bottom: 20%;
  right: 4px;
}
img {
  width: 30px;
  cursor: pointer;
}
</style>