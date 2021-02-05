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
  </div>
</template>
<script>
import AsciinemaPlayer from "@/components/asciinema-player.vue";
import data from "./record.cast";
export default {
  data() {
    return {
      data: data
    };
  },
  components: {
    AsciinemaPlayer
  }
};
</script>
<style scoped>
/* @import url("./css/asciinema-player.css"); */
</style>
