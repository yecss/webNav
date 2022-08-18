<template>
  <div>
    <div class="wrapper">
      <div @click="changeBar($event)" class="bar-icon search-tip">
        <img test src="../../public/assets/bar/baidu.svg" alt="" />
      </div>
      <div @click="changeBar($event)" class="bar-icon">
        <img src="../../public/assets/bar/google.svg" alt="" />
      </div>
      <div @click="changeBar($event)" class="bar-icon">
        <img src="../../public/assets/bar/github.svg" alt="" />
      </div>
      <div @click="changeBar($event)" class="bar-icon">
        <img src="../../public/assets/bar/biying.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "search-bar",
  methods: {
    changeBar(e) {
      let itmes = document.querySelectorAll(".bar-icon");
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
  width: 8px;
  height: 3px;
  display: inline-block;
  background-color: #fff;
  position: relative;
  bottom: 30%;
}
img {
  width: 30px;
  cursor: pointer;
}
</style>