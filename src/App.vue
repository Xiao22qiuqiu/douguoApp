<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import footNav from '@/components/foot-nav.vue'
export default {
  components: {
    footNav
  }
}
</script>

<style>
body{
  margin: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0px;
}
.mint-header-title{
  border: 1px solid;
  /*color: #fff;*/
  line-height: 1.9;
  background-color: rgba(163,163,163,0.2);
}
.mint-swipe-indicator {
  width: 1.5rem;
  height: 3px;
  display: inline-block;
  background: orange;
  margin: 0 3px;
  opacity: 0.8;
}
.mint-swipe-indicator.is-active {
  background: #fff;
}
.mu-tab-link-highlight{
  background-color:rgba(163,163,163,1);
}
</style>
