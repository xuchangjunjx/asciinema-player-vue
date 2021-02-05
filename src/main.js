import AsciinemaPlayer from "./components/asciinema-player";
function install(Vue) {
  Vue.components(AsciinemaPlayer.name, AsciinemaPlayer);
}
if (window && window.Vue) install(window.Vue);
export { AsciinemaPlayer };
export default {
  install
};
