<template>
  <div class="header">
    <el-row :gutter="20">
      <el-col :span="2" class="logo">
        <el-row>
          <el-col :span="24">all</el-col>
        </el-row>
        <el-row>
          <el-col :span="24">win</el-col>
        </el-row>
      </el-col>

      <el-col :span="7">
        <el-row :gutter="5">
          <el-col :span="6">
            <router-link to="Home">网站首页</router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="/CompetitionList">比赛分类</router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="Home">志愿者征集</router-link>
          </el-col>
          <el-col :span="6">
            <router-link to="Home">关于我们</router-link>
          </el-col>
        </el-row>
      </el-col>
      <!--          搜索框-->
      <el-col :span="8">
        <el-row>
          <el-input
              placeholder="请输入内容"
              v-model="search">
            <template #suffix>
              <i class="el-input__icon el-icon-search"></i>
            </template>
          </el-input>
        </el-row>
      </el-col>
      <!--          右侧栏-->
      <el-col :span="5" :offset="2">
        <el-row :gutter="5">
          <el-col :span="8">
            <router-link to="/favlist">我的收藏</router-link>
          </el-col>
          <el-col :span="8">
            <router-link to="/chat">
              <el-badge is-dot class="item">
                消息提醒
              </el-badge>
            </router-link>
          </el-col>
          <el-col :span="8">
            <router-link to="">
              <el-dropdown trigger="click">
                <el-badge is-dot class="item">
                  <el-avatar :size="40" :src="circl"></el-avatar>
                </el-badge>
                <template #dropdown>
                  <el-dropdown-menu style="background: #F2F6FC;width: 100px;font-size: 30px">
                    <el-dropdown-item>
                      <el-badge is-dot class="item">
                      我的比赛
                      </el-badge>
                    </el-dropdown-item>
                    <el-dropdown-item>我的证书</el-dropdown-item>
                    <el-dropdown-item>我的积分</el-dropdown-item>
                    <el-dropdown-item>我的信息</el-dropdown-item>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </router-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import circl from '@/assets/image/circl.png'
export default {
  name: "Header",
  data(){
    return {
      circl
    }
  }
}
</script>

<style scoped>
  a,.header span {
    text-decoration: none;
    color: black;
  }
  .header a {
    display: block;
    height: 40px;
    margin-top: 10px;
    line-height: 40px;
  }
  .el-input {
    margin-top: 10px;
  }
  .logo {
    text-align: center;
    line-height: 30px;
    font-size: 30px;
    font-weight: bold;
  }
  .el-dropdown-item {
    background: #409EFF;
  }
</style>