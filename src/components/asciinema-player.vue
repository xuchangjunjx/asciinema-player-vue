<template>
  <div id="player"></div>
</template>
<script>
import Base64 from "../utils/Base64";
const Base64Instance = new Base64();
export default {
  name: "asciinema-player",
  props: {
    src: String,
    cols: Number,
    rows: Number,
    title: String,
    author: String,
    authorUrl: String,
    authorImgUrl: String,
    idleTimeLimit: {
      type: Number,
      default: 2
    },
    preload: Boolean,
    autoplay: Boolean,
    fontSize: {
      type: Number,
      default: 12
    },
    speed: {
      type: Number,
      default: 1,
      validator(value) {
        return value > 0;
      }
    },
    startAt: String,
    theme: {
      type: String,
      required: true,
      validator(value) {
        return (
          [
            "asciinema",
            "tango",
            "solarized-dark",
            "solarized-light",
            "monokai"
          ].indexOf(value) != -1
        );
      }
    }
  },
  data() {
    return {
      player: null
    };
  },
  methods: {
    pause() {
      if (this.player) {
        this.player.pause();
      }
    },
    play() {
      if (this.player) {
        this.player.play();
      }
    }
  },
  beforeDestroy() {
    this.player = null;
  },
  mounted() {
    let data =
      "data:application/json;base64," + Base64Instance.encode(this.src);
    this.player = window.asciinema.player.js.CreatePlayer(
      document.getElementById("player"),
      data,
      {
        width: this.cols,
        height: this.rows,
        loop: false,
        "font-size": this.fontSize,
        title: this.title,
        author: this.author,
        "author-img-url": this.authorImgUrl,
        "author-url": this.authorUrl,
        theme: this.theme,
        "idle-time-limit": this.idleTimeLimit,
        startAt: this.startAt,
        poster: this.poster,
        speed: this.speed,
        autoPlay: this.autoplay,
        preload: this.preload
      }
    );
  }
};
</script>
