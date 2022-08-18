<template>
  <div class="footer">
    {{ aWord }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "A-Word",
  data() {
    return {
      aWord: "",
    };
  },
  mounted() {
    axios.get("https://v1.hitokoto.cn/").then(
      (response) => {
        console.log(response.data.hitokoto);
        this.aWord = response.data.hitokoto;
      },
      (error) => {
        console.log(error.message);
      }
    );
  },
};
</script>

<style scoped>
.footer{
  position: absolute;
  bottom: 2%;
  font-size: 14px;
  left: 50%;
  transform: translateX(-50%);
  color: rgb(87, 122, 122);
  text-align: center;
}
</style>