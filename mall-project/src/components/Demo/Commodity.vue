<template>
  <div class="content content-nav-base commodity-content">
    所有商品
      <!-- <div class="commod-cont-wrap">
        <div class="commod-cont w1200 layui-clear">
          <div class="left-nav">
            <div class="title">所有分类</div>
            <div class="list-box">
              <dl>
                <dt>奶粉辅食</dt>
                <dd><a href="javascript:;">进口奶粉</a></dd>
                <dd><a href="javascript:;">宝宝辅食</a></dd>
                <dd><a href="javascript:;">营养品</a></dd>
              </dl>
              <dl>
                <dt>儿童用品</dt>
                <dd><a href="javascript:;">纸尿裤</a></dd>
                <dd><a href="javascript:;">婴儿湿巾</a></dd>
                <dd><a href="javascript:;">婴儿车</a></dd>
                <dd><a href="javascript:;">婴儿床</a></dd>
                <dd><a href="javascript:;">儿童安全座椅</a></dd>
              </dl>
              <dl>
                <dt>儿童早教</dt>
                <dd><a href="javascript:;">儿童玩具</a></dd>
                <dd><a href="javascript:;">早教书籍</a></dd>
                <dd><a href="javascript:;">孕产育儿书</a></dd>
              </dl>
              <dl>
                <dt>儿童服饰</dt>
                <dd><a href="javascript:;">童装</a></dd>
                <dd><a href="javascript:;">童鞋</a></dd>
                <dd><a href="javascript:;">宝宝配饰</a></dd>
              </dl>
              <dl>
                <dt>孕妈专区</dt>
                <dd><a href="javascript:;">孕妇装</a></dd>
                <dd><a href="javascript:;">孕妇护肤</a></dd>
                <dd><a href="javascript:;">孕妇用品</a></dd>
              </dl>
            </div>
          </div>
          <div class="right-cont-wrap">
            <div class="right-cont">
              <div class="sort layui-clear">
                <a class="active" href="javascript:;" event="volume">销量</a>
                <a href="javascript:;" event="price">价格</a>
                <a href="javascript:;" event="newprod">新品</a>
                <a href="javascript:;" event="collection">收藏</a>
              </div>
              <div class="prod-number">
                <span>200个</span>
              </div>
              <div class="cont-list layui-clear" id="list-cont">
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img1.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img2.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img3.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img1.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img2.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img3.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img1.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img2.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img3.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img1.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img2.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img3.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img1.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img2.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"
                      ><img src="./res/static/img/paging_img3.jpg"
                    /></a>
                  </div>
                  <div class="text">
                    <p class="title">森系小清新四件套</p>
                    <p class="price">
                      <span class="pri">￥200</span>
                      <span class="nub">1266付款</span>
                    </p>
                  </div>
                </div>
              </div> -->
              <!-- 模版引擎导入 -->
              <!-- <script type="text/html" id="demo">
              {{# layui.each(d.menu.milk.content,function(index,item){}}    
                <div class="item">
                  <div class="img">
                    <a href="javascript:;"><img src="{{item.img}}"></a>
                  </div>
                  <div class="text">
                    <p class="title"></p>
                    <p class="price">
                      <span class="pri">{{item.pri}}</span>
                      <span class="nub">{{item.nub}}</span>
                    </p>
                  </div>
                </div>
              {{# }); }}
            </script> -->
              <!-- <div id="demo0" style="text-align: center;"></div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>