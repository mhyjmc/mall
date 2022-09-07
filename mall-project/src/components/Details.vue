<template>
  <div>
    <div class="site-nav-bg">
      <div class="site-nav w1200">
        <p class="sn-back-home">
          <i class="layui-icon layui-icon-home"></i>
          <router-link to="">首页</router-link>
        </p>
        <div class="sn-quick-menu">
          <div class="login"><router-link to="#">登录</router-link></div>
          <div class="sp-cart">
            <router-link to="#">购物车</router-link> <span>2</span>
          </div>
        </div>
      </div>
    </div>

    <div class="header">
      <div class="headerLayout w1200">
        <div class="headerCon">
          <h1 class="mallLogo">
            <a href="#" title="母婴商城">
              <img src="../static/img/logo.png" />
            </a>
          </h1>
          <div class="mallSearch">
            <form action="" class="layui-form" novalidate>
              <input
                type="text"
                name="title"
                required
                lay-verify="required"
                autocomplete="off"
                class="layui-input"
                placeholder="请输入需要的商品"
              />
              <button class="layui-btn" lay-submit lay-filter="formDemo">
                <i class="layui-icon layui-icon-search"></i>
              </button>
              <input type="hidden" name="" value="" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="content content-nav-base datails-content">
      <div class="main-nav">
        <div class="inner-cont0">
          <div class="inner-cont1 w1200">
            <div class="inner-cont2">
              <router-link to="Product" class="active">所有商品</router-link>
              <router-link to="Today">今日团购</router-link>
              <router-link to="About">关于我们</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  activated() {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style>
</style>
