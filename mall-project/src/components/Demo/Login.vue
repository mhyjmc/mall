<template>
  <div>
    <div class="content content-nav-base login-content">
      <div class="login-bg">
        <div class="login-cont w1200">
          <div class="form-box">
            <form class="layui-form" action="">
              <legend>用户密码登录</legend>
              <div class="layui-form-item">
                <div class="layui-inline iphone">
                  <div class="layui-input-inline">
                    <input
                      type="tel"
                      name="phone"
                      id="name"
                      lay-verify="required|phone"
                      placeholder="请输入用户名"
                      autocomplete="off"
                      class="layui-input"
                    />
                  </div>
                </div>
              </div>
              <div class="layui-inline veri-code">
                <div class="layui-input-inline">
                  <input
                    id="pnum"
                    type="text"
                    name="pnum"
                    lay-verify="required"
                    placeholder="请输入密码"
                    autocomplete="off"
                    class="layui-input"
                  />
                </div>
              </div>
              <div class="layui-form-item login-btn">
                <div class="layui-input-block">
                  <button
                    class="layui-btn"
                    lay-submit=""
                    lay-filter="demo1"
                    onclick="return false"
                  >
                    登录
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="ng-promise-box">
        <div class="ng-promise w1200">
          <p class="text">
            <a class="icon1" href="javascript:;">7天无理由退换货</a>
            <a class="icon2" href="javascript:;">满99元全场免邮</a>
            <a class="icon3" style="margin-right: 0" href="javascript:;"
              >100%品质保证</a
            >
          </p>
        </div>
      </div>
      <div class="mod_help w1200">
        <p>
          <a href="javascript:;">关于我们</a>
          <span>|</span>
          <a href="javascript:;">帮助中心</a>
          <span>|</span>
          <a href="javascript:;">售后服务</a>
          <span>|</span>
          <a href="javascript:;">母婴资讯</a>
          <span>|</span>
          <a href="javascript:;">关于货源</a>
        </p>
        <p class="coty">母婴商城版权所有 &copy; 2012-2020</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#name {
  padding-left: 10px;
}
</style>