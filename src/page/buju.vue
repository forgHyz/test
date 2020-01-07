<template>
    <div>
      <ul>
        <li @click="$router.push({name:'colum'})" :title="'用于文章左右分栏或多栏分页'">多栏布局</li>
        <li @click="$router.push({name:'box'})">盒布局</li>
        <li @click="$router.push({name:'flex'})">弹性盒布局</li>
      </ul>
      <router-view />
    </div>
</template>

<script>
export default {
  name: 'buju'
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}
  li {
    width: 200px;
    line-height: 30px;
    border: 1px solid #fff;
    background-color: #51a388;
    color: white;
  }
  li:hover {
    background-color: #63c8a7;
  }
</style>
