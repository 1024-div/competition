<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-card>
        分类标签
      </el-card>
      <el-card>
        <CompetitionCard></CompetitionCard>
        <CompetitionCard></CompetitionCard>

        <CompetitionCard></CompetitionCard>

        <CompetitionCard></CompetitionCard>

      </el-card>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import CompetitionCard from "../../components/CompetitionCard";
import Header from "../../components/Header";
export default {
  name: "Category",
  components: {
    Header,
    CompetitionCard
  }
}
</script>

<style scoped>

</style>