<template>
<div>
    今日团购
</div>
  <!-- 模版引擎导入 -->
 <!--  <script type="text/html" id="demo">
    <div class="main-nav">
      <div class="inner-cont0">
        <div class="inner-cont1 w1200">
          <div class="inner-cont2">
            <a href="commodity.html">所有商品</a>
            <a href="buytoday.html" class="active">今日团购</a>
            <a href="information.html">母婴资讯</a>
            <a href="about.html">关于我们</a>
          </div>
        </div>
      </div>
    </div>
    <div class="banner-box">
      <div class="banner"></div>
    </div>
    <div class="product-list-box">
      <div class="product-list w1200">  
        <div class="tab-title">
          <a href="javascript:;" class="active tuang">今日团购</a>
          <a href="javascript:;">明日预告</a>
        </div>
        <div class="list-cont">
          <div class="item-box layui-clear">
              {{# layui.each(d.productList,function(index,item){}}
              <div class="item">
                <img src="{{item.img}}" alt="">
                <div class="text-box">
                  <p class="title">{{item.title}}</p>
                  <p class="plic">
                    <span class="ciur-pic">{{item.ciurPic}}</span>
                    <span class="Ori-pic">{{item.OriPic}}</span>
                    <span class="discount">{{item.discount}}</span>
                  </p>
                </div>
              </div>
              {{#})}}
          </div>
         <div id="demo0" style="text-align: center;"></div>
        </div>
      </div>  
    </div>
    <div class="footer-wrap">
      <div class="footer w1200">
        <div class="title">
          <h3>团购销量榜</h3>
        </div>
        <div class="list-box layui-clear" id="footerList">
             {{# layui.each(d.footerList,function(index,item){}}
              <div class="item">
                <img src="{{item.img}}" alt="">
                <div class="text">
                  <div class="right-title-number">1</div>
                  <div class="commod">
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                  </div>
                </div>
              </div>
              {{# });}}
        </div>
      </div>
    </div>
  </script> -->
</template>

<script>
export default {

}
</script>

<style>

</style>