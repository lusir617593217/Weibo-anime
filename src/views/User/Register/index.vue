<template>
  <div class="page-register">
    <div class="input-box">
      <input type="number" placeholder="请输入手机号">
    </div>

    <div class="input-box">
      <input type="password" placeholder="请输入密码(8-16位数字or英文)">
    </div>

    <div class="input-box code">
      <input type="text" placeholder="请输入验证码">
      <span>获取验证码</span>
    </div>
    <button>注册</button>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style lang="scss" scoped>
.page-register {
  width: 100%;
  .input-box {
    width: 100%;
    height: 50px;
    padding: 0 8px;
    margin-top: 16px;
    border: 1px solid #efefef;
    border-radius: 4px;
    input {
      width: 100%;
      height: 46px;
      line-height: 46px;
      padding: 1px 0;
      border: 0;
      outline: none;
    }
  }
  .code {
    input {
      width: 150px;
    }
    span {
      font-size: 14px;
      color: #999;
      padding-left: 10px;
      padding-top: 2px;
    }
  }
  button {
    width: 230px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    color: #fff;
    background-color: #ccc;
    padding: 1px 6px;
    margin: 16px 9px 0;
    border: 0;
    outline: none;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  }
}
</style>
