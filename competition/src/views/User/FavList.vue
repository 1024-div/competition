<!--关注页面-->
<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="16">
          <el-card>
<!--            分类和搜索功能-->
            <div>
              <el-row>
                <el-col :span="4">
                  <el-tabs>
                    <el-tab-pane>
                      <template #label>
                        <span><i class="el-icon-date"></i> Route</span>
                      </template>
                    </el-tab-pane>
                    <el-tab-pane label="Config"></el-tab-pane>
                  </el-tabs>
                </el-col>
                <el-col :span="6" :offset="14">
                  <el-input v-model="searchtext" placeholder="Type something">
                    <template #prefix>
                      <i class="el-input__icon el-icon-search"></i>
                    </template>
                  </el-input>
                </el-col>
              </el-row>
            </div>
            <div class="favlist">
              <CompetitionCard></CompetitionCard>
              <CompetitionCard></CompetitionCard>
              <CompetitionCard></CompetitionCard>
              <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-card>
            <el-row>
              <el-avatar :size="50" :src="favlist"></el-avatar>
              <div style="line-height: 50px;font-weight: bold;margin-left: 8px">
                用户名是第几奥施康定
              </div>
            </el-row>
            <el-row style="line-height: 20px;margin: 12px 0">
              <el-col :span="4" style="text-align: center">
                <span class="iconfont" style="font-size: 20px;color: #409EFF">&#xe601;</span>
              </el-col>
              <el-col :span="20">
                <span style="font-size: 14px;color: #000;">参加比赛1200次</span>
              </el-col>
            </el-row>
            <el-row style="line-height: 20px;margin: 12px 0">
              <el-col :span="4" style="text-align: center">
                <span class="iconfont" style="font-size: 20px;color: #409EFF">&#xe637;</span>
              </el-col>
              <el-col :span="20">
                <span style="font-size: 14px;color: #000;">收藏比赛1200个</span>
              </el-col>
            </el-row>
            <el-row style="line-height: 20px;margin: 12px 0">
              <el-col :span="4" style="text-align: center">
                <span class="iconfont" style="font-size: 20px;color: #409EFF">&#xe658;</span>
              </el-col>
              <el-col :span="20">
                <span style="font-size: 14px;color: #000;">获取积分数 58</span>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import CompetitionCard from "../../components/CompetitionCard";
import Header from "../../components/Header";
import favlist from '@/assets/image/favlist.png'
export default {
  name: "FavList",
  data(){
    return {
      favlist,
      searchtext: ''
    }
  },
  components: {
    Header,
    CompetitionCard
  }
}
</script>

<style scoped>
.favlist {
  min-height: 650px;
  position: relative;
}
.el-pagination {
  position: absolute;
  bottom: 10px;
  right: 4px;
}
</style>