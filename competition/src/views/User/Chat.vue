<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="6">
<!--          <el-card style="background-color: #2e2e2e">-->
          <div style="background-color: #2e2e2e;border-radius: 8px 0 0 8px;overflow: hidden;">
<!--            个人信息行-->
            <div style="width: 100%;padding: 8px 0;border-bottom: 1px solid #666">
              <el-row>
                <el-col :span="8" style="text-align: center">
                  <el-avatar :size="50" :src="favlist"></el-avatar>
                </el-col>
                <el-col :span="26">
                  <div class="title" style="display:inline-block;line-height: 50px;margin-left: 8px;vertical-align: top">
                    用户名是第几奥施康定
                  </div>
                </el-col>
              </el-row>
            </div>
<!--            消息用户列表-->
            <el-scrollbar height="579px">
              <div>
                <ul>
                  <li style="background-color: #3d3d3d;padding: 8px 0">
                    <el-row>
                      <el-col :span="8" style="text-align: center">
                        <el-avatar :size="50" :src="favlist"></el-avatar>
                      </el-col>
                      <el-col :span="12">
                       <el-row style="flex-direction: row">
                         <el-col class="title">
                           用户名
                         </el-col>
                         <el-col class="message">
                           消息爱神的箭暗红色的较好的啊实打实大家伙
                         </el-col>
                       </el-row>
                      </el-col>
                      <el-col :span="3" class="time">
                        9-20
                      </el-col>
                    </el-row>
                  </li>
                </ul>
              </div>
            </el-scrollbar>
          </div>
<!--          </el-card>-->
        </el-col>
<!--        消息展示区-->
        <el-col :span="18" style="background-color: #FFFFFF;border-radius: 0 8px 8px 0;">
          <div style="line-height: 50px;padding-left: 20px;border-bottom: 1px solid #ccc">消息展示区</div>
          <div>消息</div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "Chat",
  components: {
    Header
  }
}
</script>

<style scoped>
.title {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
.message {
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  line-height: 22px;
}
.time {
  color: #999;
  font-size: 12px;
  line-height: 20px;
}
.el-main {
  height: 100% !important;
}
</style>