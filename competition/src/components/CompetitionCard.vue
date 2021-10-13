<template>
  <el-card>
    <el-row>
      <div class="lan card_font">
        <div>所属时间</div>
        <div class="fenge"></div>
        <div>几天前</div>
        <div class="fenge"></div>
        <div>类别</div>
      </div>
    </el-row>
    <el-row>
      <el-col :span="19">
        <h4>心理知识竞赛</h4>
        <div class="card_font">
          性能是留住用户很重要的一环，开发者们希望用户能在网站上进行有意义的交互。同时性能在任何在线企业中都起着至关重要的作用，因为高性能的网站相较于表现不佳的网站更能吸引和留住用户。
        </div>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.keputj.cn%2Fpic%2F003%2F000%2F452%2F00300045248_a5985462.jpg&refer=http%3A%2F%2Fwww.keputj.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636677373&t=da44e8836770329c71c8619cbfdfed56"></el-image>
      </el-col>
    </el-row>
    <el-row class="icon">
      <el-col :span="2">
        <span class="iconfont icon_1">&#xe600;</span>
        <span class="number">1222</span>
      </el-col>
      <el-col :span="2">
        <span class="iconfont icon_2">&#xe703;</span>
        <span class="number">1222</span>
      </el-col>
      <el-col :span="2">
        <span class="iconfont icon_3">&#xe72c;</span>
        <span class="number">1222</span>
      </el-col>
<!--      已结束标签 --在我的收藏中显示-->
      <el-col :span="2" :offset="10">
        <el-tag v-if="over" size="mini" style="margin-top: 5px">已结束</el-tag>
        <el-tag v-else size="mini" type="success" style="margin-top: 5px">正在进行中</el-tag>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: "CompetitionCard",
  props: {
    over: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.lan>div {
  display: inline-block;
  line-height: 30px;
}
.fenge {
  width: 1px;
  height: 14px;
  background: #e5e6eb;
  margin: 0 8px;
}
h4 {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #1d2129;
  margin-bottom: 8px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.card_font {
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #86909c;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.iconfont {
  color: #86909c;
  line-height: 30px;
  cursor: pointer;
}
.icon_1 {
  font-size: 24px;
}
.icon_2 {
  font-size: 20px;
}
.icon_2:hover {
  color: #409EFF;
}
.icon_3 {
  font-size: 30px;
}
.number {
  font-size: 14px;
  line-height: 30px;
  vertical-align: top;
  color: #86909c;
  margin-left: 4px;
}
.el-card {
  cursor: pointer;
  margin: 10px 0;
}
.el-card:hover {
  border-color: #409EFF;
}
</style>