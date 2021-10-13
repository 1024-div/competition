<template>
  <router-view/>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
}
body,html {
  width: 100%;
  height: 100%;
  min-width: 1250px;
}
li {
  list-style: none;
}
.el-container {
  height: 100%;
  background-image: url("./assets/image/texture.png");
}
.el-header {
  background-color: #FFFFFF;
  box-shadow: 0 -4px 7px rgb(0 0 0);
}
.el-main {
  width: 1380px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
