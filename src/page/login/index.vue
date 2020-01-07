<template>
    <div class="login">
      <!--<form action="#" class="login-form">
        <h2>登录</h2>
          <input type="text" placeholder="用户名" />
          <input type="password" placeholder="密码" />
        <button type="submit" >登录</button>
      </form>
      <button class="water">按钮</button>-->
      <div v-for="item in 5" :key="item" :style="{'left':item*320+'px', animationDelay: Math.random()*10+'s',
      boxShadow: `inset 0 0 20px rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255})`}" class="login-pop"></div>
    </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss" scoped>
  button {
    &:focus, &:active {
      outline: none;
    }
  }
  .login {
    width: 100%;
    height: 100%;
    background: url("../../assets/bac2.jpg") no-repeat fixed;
    background-size: cover;
    // display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login-pop {
        position: absolute;
        border-radius: 50%;
        z-index: 99999;
        width: 300px;
        height: 300px;
        box-shadow: inset 0 0 20px rgb(255, 255, 255);
        animation: whterAct 10s infinite linear;
    }

    .login-form {
      box-sizing: border-box;
      width: 420px;
      height: 300px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      background: inherit;
      border-radius: 14px;
      overflow: hidden;
      position: relative;
      z-index: 99;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
        background: inherit;
        box-shadow: inset 0 0 300px rgba(255, 255, 255, 0.4);
        filter: blur(3px);
      }
      input, button {
        margin: 6px 0;
        height: 36px;
        border: none;
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 4px;
        padding:  0 14px;
        color: #305e49;
      }
      input::placeholder {
        color: #1b5464;
      }
      input:focus {
        box-shadow: 0 0 7px 3px #7ff9c1;
        border: none;
        outline: none;
      }
      button {
        margin-top: 24px;
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: 0.4s;
        &:before, &:after {
          content: '';
          display: block;
          width: 80px;
          height: 100%;
          background-color: rgba(255,249,255,0.7);
          opacity: 0.5;
          position: absolute;
          left: 0;
          top: 0;
          transform: skewX(-17deg);
          overflow: hidden;
          filter: blur(30px);
        }
        &:before {
          transition: 1s;
          transform: translateX(-100px);
        }
        &:after {
          transition: 1s;
          transform: translateX(-100px);
          filter: blur(15px);
          left: 60px;
          opacity: 0;
        }
        &:hover:before {
          transition: 1s;
          width: 40px;
          transform: translateX(350px);
          opacity: 0.7;
        }
        &:hover:after {
          transition: 1s;
          width: 40px;
          transform: translateX(350px);
          opacity: 0.5;
        }
      }
    }

    .water {
      border: 0;
      width: 320px;
      height: 40px;
      margin-top: 20px;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.2);
      color: white;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      z-index: 99;
      &:before,&:after {
        content: '';
        position: absolute;
        left: 50%;
        top: 20px;
        width: 0;
        height: 0;
        border-radius: 50%;
        box-shadow: inset 0 0 20px rgba(82, 171, 255, 0.7);
        opacity: 0;
        transition: 1s;
      }
      /*&:hover{*/
      /*  background-color: rgba(82, 171, 255, 0.7);*/
      /*}*/
      &:hover:before,&:hover:after {
        width: 350px;
        height: 350px;
        left: -20px;
        top: -170px;
        opacity: 1;
        z-index: -1;
      }
      &:before {
        background-color: rgba(82, 171, 255, 0.7);
        box-shadow: inset 0 0 20px rgba(250, 248, 255, 0.7);
        transition-delay: .2s;
      }
      &:after {
        background-color: rgba(250, 248, 255, 0.1);
        box-shadow: inset 0 0 20px rgba(82, 171, 255, 0.7);
      }
    }
  }
  @keyframes whterAct {
    0% {
      top: 0;
    }
    50% {
      top: calc(100% - 300px);
      box-shadow: inset 0 0 20px rgb(255,255,255);
    }
    100% {
      top:  0;
    }
  }

</style>
