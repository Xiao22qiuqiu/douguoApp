<template>
  <div class="home">
    <div class="header">
      <div class="btn">
        <span class="iconfont icon-all"></span>
        <span><input type="text" class="search"  placeholder="搜索"></span>
        <span class="iconfont icon-add"></span>
        <span class="iconfont icon-xiaoxizhongxin"></span>
      </div>
      <!-- 切换 -->
      <div class="tab">
        <mu-tabs :value="activeTab" @change="handleTabChange">
          <mu-tab value="tab1" title="推 荐"/>
          <mu-tab value="tab2" title="关 注"/>
        </mu-tabs>
      </div>
      <!-- 切换 -->
    </div>
    <!-- 切换的内容 -->
    <div class="tabcontent">
      <div v-if="activeTab === 'tab1'">
        <!-- 轮播图 -->
         <div class="carousel">
           <mt-swipe :auto="4000" style="width:100%;height:190px;">
             <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow3.jpg" alt="" class="imgSize"></router-link></mt-swipe-item>
             <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow2.jpg" alt="" class="imgSize"></router-link></mt-swipe-item>
             <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow7.jpg" alt="" class="imgSize"></router-link></mt-swipe-item>
             <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow4.jpg" alt="" class="imgSize"></router-link></mt-swipe-item>
             <mt-swipe-item ><router-link to="/" ><img src="../../assets/homeImg/foodShow5.jpg" alt="" class="imgSize"></router-link></mt-swipe-item>
           </mt-swipe>
         </div>
        <!-- 轮播图 -->
        <div class="gridlist-demo-container">
          <mu-grid-list class="gridlist-inline-demo">
            <mu-grid-tile v-for="tile, index in list" :key="index">
              <img :src="tile.image">
              <span slot="title">{{tile.title}}</span>
              <span slot="subTitle">by <b>{{tile.author}}</b></span>
              <mu-icon-button icon="" slot="action"/></mu-icon-button>  
            </mu-grid-tile>
          </mu-grid-list>
        </div>
        <div class="todayShow">今日午餐</div>
      </div>
      <div v-if="activeTab === 'tab2'">
        <h2>Tab Two</h2>
        <p>
           这是第二个 tab
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1',
      list: ''
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  },
  created () {
    // GET /someUrl
    this.$http.get('../../static/Json/homeJson/homeList.json').then(response => {
    // get body data
      this.list = response.body.list
      console.log(this.list)
    }, response => {
  // error callback
    })
  }
}
</script>

<style scoped>
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
/*选项卡*/
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
/*轮播*/
.tabcontent{
  /*position: absolute;*/
  z-index: -1;
  margin: 7.5rem 1.5rem;
  /*overflow: hidden;*/
}
/*.tabcontennt::-webkit-scrollbar {
  display: none;
}*/
.imgSize{
  width:100%;
  height:auto;
}
/*选项卡*/
.mu-tab-link{
  color:rgba(163,163,163,0.9);
  width: 30px;
}
.mu-tabs{
  background-color: #fff;
  color: #000;
}
.mu-tab-active{
  color: #000;
}
.mu-circle-ripple, .mu-ripple-wrapper{
  height: 100%;
  width: 100%;
}
/*GridList*/
.gridlist-demo-container{
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 1.5rem;
}

.gridlist-inline-demo{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
/*今日热图*/
.todayShow{
  width: 70%;
  height: 3rem;
  border: 1px solid #ddd;
  margin: auto;
}
</style>
