<template>
  <div id="app">
    <!--<img src="./assets/logo.png">
    <cjw-button v-model="val" :user="user"></cjw-button>
    <cjw-select></cjw-select>
    <cjw-checkbox v-model="checkval"><span>选择</span></cjw-checkbox>
    <input :value="val">-->
    <!--<div class="app-content">-->
    <!--  <ul>-->
    <!--    <li><a href="#t1" >t1</a></li>-->
    <!--    <li><a href="#t2" >t2</a></li>-->
    <!--    <li><a href="#t3" >t3</a></li>-->
    <!--  </ul>-->
    <!--  <div id="t1">国家药品监督管理局12月31日消息</div>-->
    <!--  <div id="t2">国家药品监督管理局12月31日消息</div>-->
    <!--  <div id="t3">国家药品监督管理局12月31日消息</div>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      val: '',
      checkval: false,
      user: {
        firstName: 'stephe',
        lastName: 'whels'
      }
    }
  }
}
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  body {
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

  :target {
    background-color: #42b983;
    color: #fff;
  }
  li {
    counter-increment: mycount;
    text-shadow: 2px 2px 0 #96b9a8,
    4px 6px 12px #b96e66,
    6px 13px 13px #5155b9;
    font-size: 20px;
    font-weight: 600;
  }
li:before {
  content: '第'counter(mycount, upper-latin)':';
}
</style>
