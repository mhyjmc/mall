<template>
  <div id="app">
    <div class="content content-nav-base datails-content">
      <div class="data-cont-wrap w1200">
        <div class="crumb">
          <a href="javascript:;">首页</a>
          <span>></span>
          <a href="javascript:;">所有商品</a>
          <span>></span>
          <a href="javascript:;">产品详情</a>
        </div>
        <div class="product-intro layui-clear">
          <div class="preview-wrap">
            <a href="javascript:;"><img src="./imags/details_img1.jpg" /></a>
          </div>
          <div class="itemInfo-wrap">
            <div class="itemInfo">
              <div class="title">
                <h4>
                  男女宝宝秋冬装套装0一1岁婴儿衣服潮加厚连体衣保暖冬季外出抱衣
                </h4>
                <span
                  ><i class="layui-icon layui-icon-rate-solid"></i>收藏</span
                >
              </div>
              <div class="summary">
                <p class="reference"><span>参考价</span> <del>￥280.00</del></p>
                <p class="activity">
                  <span>活动价</span
                  ><strong class="price"
                    ><i>￥</i>{{ price * value }}.00</strong
                  >
                </p>
                <p class="address-box">
                  <span>送&nbsp;&nbsp;&nbsp;&nbsp;至</span
                  ><strong class="address"
                    >江西&nbsp;&nbsp;南昌&nbsp;&nbsp;东湖区</strong
                  >
                </p>
              </div>
              <div class="choose-attrs">
                <div class="color layui-clear">
                  <span class="title">颜&nbsp;&nbsp;&nbsp;&nbsp;色</span>
                  <div class="color-cont">
                    <span
                      class="btn"
                      :class="{ active: isShow }"
                      @click="colorFn"
                      >白色</span
                    >
                    <span class="btn" :class="{ active: !isShow }" @click="colorFn"
                      >粉色</span
                    >
                  </div>
                </div>
                <div class="number layui-clear">
                  <span class="title">数&nbsp;&nbsp;&nbsp;&nbsp;量</span>
                  <div class="number-cont">
                    <span class="cut btn" @click="delFn">-</span
                    ><input
                      onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
                      onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"
                      maxlength="4"
                      type=""
                      name=""
                      value="1"
                      v-model="value"
                    /><span class="add btn" @click="addFn">+</span>
                  </div>
                </div>
              </div>
              <div class="choose-btns">
                <button class="layui-btn layui-btn-primary purchase-btn" @class="buyFn">
                  立刻购买
                </button>
                <button class="layui-btn layui-btn-danger car-btn">
                  <i class="layui-icon layui-icon-cart-simple"></i>加入购物车
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="layui-clear">
          <div class="aside">
            <h4>热销推荐</h4>
            <div class="item-list">
              <div class="item">
                <img src="./imags/details_img2.jpg" />
                <p>
                  <span>可爱宝宝粉色连体秋裤</span
                  ><span class="pric">￥99.00</span>
                </p>
              </div>
              <div class="item">
                <img src="./imags/details_img2.jpg" />
                <p>
                  <span>可爱宝宝粉色连体秋裤</span
                  ><span class="pric">￥99.00</span>
                </p>
              </div>
              <div class="item">
                <img src="./imags/details_img2.jpg" />
                <p>
                  <span>可爱宝宝粉色连体秋裤</span
                  ><span class="pric">￥99.00</span>
                </p>
              </div>
              <div class="item">
                <img src="./imags/details_img2.jpg" />
                <p>
                  <span>可爱宝宝粉色连体秋裤</span
                  ><span class="pric">￥99.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="detail">
            <h4>详情</h4>
            <div class="item">
              <img src="./imags/details_imgbig.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value: 1,
      price: 99,
      isShow: true,
    };
  },
  activated() {},
  watch: {},
  created() {
    //创建时拿到商品详情数据
    
  },
  mounted() {},
  methods: {
    //+点击事件
    addFn() {
      this.value++;
    },
    //-点击事件
    delFn() {
      if (this.value <= 1) {
        this.value = 1;
      } else {
        this.value--;
      }
    },
    //颜色选择事件
    colorFn(e) {
      if(!e.target.className.includes('active')){
        this.isShow = !this.isShow;
      }
      
    },
    //购买按钮事件 拿到商品的唯一id 获取数量，颜色，地址
    buyFn(){

    }
  },
};
</script>
<style>
</style>
