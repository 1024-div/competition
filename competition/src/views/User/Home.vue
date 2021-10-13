<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="6">
          <el-card style="text-align: center;border: none">
            <h3 style="line-height: 40px">排行榜</h3>
            <el-row style="flex-direction: column">
              <el-col>
                <el-avatar style="border: 3px solid #fcc307" :size="50" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636621522&t=f90b862f2777c1e3433ec9c3a1df4cb4"></el-avatar>
              </el-col>
              <el-col>
                <el-row style="flex-direction: row">
                  <el-col :span="12">
                    <el-avatar style="border: 3px solid #c0c0c0" :size="50" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636621522&t=f90b862f2777c1e3433ec9c3a1df4cb4"></el-avatar>
                  </el-col>
                  <el-col :span="12">
                    <el-avatar style="border: 3px solid #8C7853" :size="50" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636621522&t=f90b862f2777c1e3433ec9c3a1df4cb4"></el-avatar>
                  </el-col>
                </el-row>
              </el-col>
              <el-col>
                <div>
                  <div v-for="i in 2" style="height: 40px;border-bottom: 1px dashed #000000;margin-top: 15px">
                    <el-row style="flex-direction: row">
                      <el-col :span="2">
                        <span style="line-height: 40px">4</span>
                      </el-col>
                      <el-col :span="6">
                        <el-avatar style="border: 3px solid #8C7853" :size="40" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180520%2F0473e00bdfd2476fbe0c228a45a1652c.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636621522&t=f90b862f2777c1e3433ec9c3a1df4cb4"></el-avatar>
                      </el-col>
                      <el-col :span="6">
                        <span style="line-height: 40px">用户名</span>
                      </el-col>
                      <el-col :span="6">
                        <span style="line-height: 40px">255</span>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="16" :offset="2">
          <!--      轮播图-->
          <el-carousel>
            <el-carousel-item v-for="i in 4" style="text-align: center;">
              <router-link to="">
                <el-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.onextrapixel.com%2Fwp-content%2Fuploads%2F2013%2F08%2Fdemo-4.jpg&refer=http%3A%2F%2Fwww.onextrapixel.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636619346&t=0af71b19e7829a0a2157f34762885787"></el-image>
              </router-link>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
<!--      主内容-->
      <el-card class="content">
        <el-row>
          <el-col :span="18">
            <el-card>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="最新" name="first">
                  <CompetitionCard ></CompetitionCard>
                  <CompetitionCard ></CompetitionCard>
                </el-tab-pane>
                <el-tab-pane label="热榜" name="second">Config</el-tab-pane>
              </el-tabs>
            </el-card>
          </el-col>
<!--          侧边栏-->
          <el-col :span="5" :offset="1" style="background-color: silver">

          </el-col>
        </el-row>
      </el-card>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
  <el-backtop />
</template>

<script>
import CompetitionCard from "../../components/CompetitionCard";
import Header from "../../components/Header";
export default {
  name: "Home",
  data(){
    return {
      activeName: 'first',
    }
  },
  components: {
    Header,
    CompetitionCard
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 15222px;
  border: none;
  margin-top: 20px;
  padding: 0 0;
  /*background: none;*/
  box-shadow: none;
}
</style>