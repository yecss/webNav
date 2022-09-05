<template>
  <div class="group">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
      <g>
        <path
          d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
        ></path>
      </g>
    </svg>
    <input
      ref="Input"
      placeholder=""
      type="search"
      class="input"
      @keyup.enter="getBaidu"
    />
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "Search-Input",
  data() {
    return {
      searchEngine: [
        "https://www.baidu.com/s?wd=",
        "https://www.google.com/search?q=",
        "https://github.com/search?q=",
        "https://cn.bing.com/search?q=",
      ],
      INDEX: 3,
    };
  },
  methods: {
    autoFocus() {
      this.$refs.Input.focus();
    },
    // 按下回车搜索函数
    getBaidu(value) {
      window.open(
        `${this.searchEngine[this.INDEX]}${value.target.value}`,
        "_blank"
      );
    },
  },
  mounted() {
    // 订阅消息
    // 该方法能接收到两个参数，第一个是消息的名称，第二个是传递过来的信息
    this.pubId = pubsub.subscribe("resolveIndex", (_msgName, Value) => {
      // 此处不能用普通函数，因为普通函数的this指向window
      this.INDEX = Value;
    });
  },
  beforeDestroy() {
    // 解除订阅
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.group {
  display: flex;
  line-height: 46px;
  align-items: center;
  position: relative;
  /* max-width: 300px; */
}

.input {
  width: 100%;
  height: 46px;
  line-height: 46px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: rgb(243 243 244 / 91%);
  color: #0d0c22;
  transition: 0.3s ease;
}

.input::placeholder {
  color: #9e9ea7;
}

.input:focus,
input:hover {
  outline: none;
  border-color: rgba(163, 167, 172, 0.4);
  background-color: #fff;
  box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
}

.icon {
  position: absolute;
  left: 1rem;
  fill: #1111e6;
  width: 1rem;
  height: 1rem;
}
</style>