<template>
    <div class="foot-nav-containner">
        <ul class="bottom-nav">
            <router-link to="/" class="iconfont icon-shouye" title="shouye"></router-link>
            <router-link to="/recommend" class="iconfont icon-wodedingdan"></router-link>
            <router-link to="/shoppingCart" class="iconfont icon-gouwuche"></router-link>
            <router-link to="/personalHomepage" class="iconfont icon-account"></router-link>
        </ul>
     </div>
</template>
<script>
export default {
  name: 'foot-nav',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
/*<link rel="stylesheet" type="text/css" >*/
  .router-link-active{
      color:#fd0909;
  }
  .foot-nav-containner{
    position: fixed;
    bottom:0;
    width: 100%;
    border-top: 0.014rem solid #ddd;
    /*background: #999;*/
    .bottom-nav{
      display: flex;
      .bottom-nav__li{
        flex:1;
        align-items:center;
        justify-content:center;
        /*text-align: center;*/
        height:1.111rem;
        line-height:1.111rem;
        /*@include fz(20px)*/
      }
    }
  }
.foot-nav-containner a{
  text-decoration: none;
  padding-right: 3rem;
}
.foot-nav-containner .iconfont{
  font-size: 2rem;
  /*background-color:rgba(1,86,179);*/
  color: #666;
}
</style>