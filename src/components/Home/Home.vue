<template>
  <div class="home">
    <!-- <mt-header fixed title="搜索">
      <mt-button class="iconfont icon-all" slot="left"></mt-button>
      <mt-button class="iconfont icon-add" slot="right"></mt-button>
      <mt-button class="iconfont icon-xiaoxizhongxin" slot="right"></mt-button>
      <mt-button></mt-button>
    </mt-header> -->
    <div class="header">
      <div class="btn">
        <span class="iconfont icon-all"></span>
        <span><input type="text" class="search" placeholder="搜索"></span>
        <span class="iconfont icon-add"></span>
        <span class="iconfont icon-xiaoxizhongxin"></span>
      </div>
      <div class="tab">
        <router-link to="/recommend" >推 荐</router-link>
        <router-link to="">关 注</router-link>
      </div>
    </div>
    <div class="carousel">
      <mt-swipe :auto="4000" style="width:100%;height:190px;">
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow3.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow2.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow7.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow4.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
        <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow5.jpg" alt="" style="width:100%;height:auto;"></router-link></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
 <!--  <div class="carousel2">   
  </div>
  <div id="lazyContainer">
    <ul>
      <li v-for="item in list">
        <img v-lazy.lazyContainer="item">
      </li>
    </ul> 
  </div> -->
</template>

<script>
export default {
}
</script>

<style scoped>
/*.mint-header{
  height: 3.5rem;
  background-color: #fff;
  color: #999;
  border-bottom: 0.014rem solid #ddd;
}
.mint-searchbar{
  height: 3rem;
  line-height: 3rem;
  border: 0.014rem solid #ddd;
  border-radius: 9px;
}
.iconfont{
  font-size: 1.5rem;
  background-color:rgba(1,86,179);
  color: #000;
  margin-right: 0.7rem;
}
.mint-button .search{
  width: 50px;
  height: 20px;
  border: 1px solid #999;
  align-items:center;
}
.mint-header-title{
  border: 1px solid;
  line-height: 1.6;
  background-color: rgb(163,163,163);
}*/
.home .header{
  width: 100%;
  height: 6rem;
  /*line-height: */
  position: fixed;
  top: 0;
  z-index: 2;
  align-items:center;
  border-bottom: 0.014rem solid #ddd;
  /*font-size: 3rem;*/
}
.search{
  margin: 0 0.9rem 0 0.9rem;
  width: 60%;
  height: 2.1rem;
  text-align: center;
  border:0.014rem solid #ddd;
  background-color: rgba(163,163,163,0.2);
}
.btn span{
  /*margin-right: 0.8rem;*/
}
.home .btn{
  line-height:3rem;
  align-items:center;
  height: 3rem;
}
.home .tab{
  line-height:3rem;
  align-items:center;
  height: 3rem;
}
.iconfont{
  font-size: 1.5rem;
}
.home a :after{
  color: #000;
}
.carousel{
  /*position: absolute;*/
  z-index: -1;
  margin: 7.5rem 1.5rem;
}
</style>
