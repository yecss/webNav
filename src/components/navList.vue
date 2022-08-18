<template>
  <div class="container">
    <a
      v-for="(i, index) in indexData"
      :key="index"
      :href="i.url"
      target="_blank"
    >
      <div class="card">
        <img class="icon-nav pa" :src="`assets/${i.LocationIcon}`" />
        <h4>{{ i.title }}</h4>
      </div>
    </a>
  </div>
</template>

<script>
import indexDataFile from "../data/index";
export default {
  name: "NavList",
  data() {
    return {
      name: "Vue",
      indexData: [],
    };
  },
  mounted() {
    this.indexData = [...indexDataFile];
  },
};
</script>

<style scoped>
.icon-nav {
  width: 44px;
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
}
.pa {
  padding: 10px;
}
.card {
  padding-top: 5px;
  width: 200px;
  height: 106px;
  text-align: center;
  position: relative;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
}
h4 {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 10px;
  margin: 0;
  color: rgb(182, 144, 144);
}
</style>