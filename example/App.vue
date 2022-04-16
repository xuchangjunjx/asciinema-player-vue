<template>
  <div class="home">
    <asciinema-player
      theme="tango"
      title="hello world"
      author="xubowen"
      authorImgUrl="https://iconfont.alicdn.com/t/431d51a3-6e5c-49ba-9c32-ddf358832252.png@200h_200w.jpg"
      authorUrl="https://www.baidu.com"
      startAt="0:03"
      poster="0:03"
      :speed="1"
      :fontSize="12"
      autoplay
      :src="data"
    ></asciinema-player>
    <button @click="setSrc">setSrc</button>
    <button @click="setSrc1">setSrc1</button>
  </div>
</template>
<script>
import AsciinemaPlayer from "@/components/asciinema-player.vue";
import cast from "./record.cast"; // 本地加载 loading local file
export default {
  data() {
    return {
      data: cast
    };
  },
  components: {
    AsciinemaPlayer
  },
  methods: {
    setSrc() {
      // load from third service
      this.data = "/cast/just-demo-record.cast";
    },
    setSrc1() {
      this.data = "/cast/just-demo-record1.cast";
    }
  },
  mounted() {
    console.log(process.env);
  }
};
</script>
<style scoped>
/* @import url("./css/asciinema-player.css"); */
</style>
