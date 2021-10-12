<template>
  <div class="login">
    <el-card class="box-card" shadow="always">
      <el-avatar :style="success?'border-color:#67C23A':'border-color:#F56C6C'" class="circle" :size="80" :src="circl_image?circl_image:circl"></el-avatar>
      <el-form :model="form" label-width="70px" label-position="left">
        <el-form-item label="账号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd" show-password></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="验证码">
              <el-input v-model="form.check"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-image
                style="width:100%;height: 40px;background: aqua"
                :src="circl"
                fit="contain"
            ></el-image>
          </el-col>
          <el-col :span="2" :offset="2">
            <el-checkbox v-model="form.remember">记住我</el-checkbox>
          </el-col>
        </el-row>
        <el-form-item label-width="0" style="text-align: center">
          <el-button style="width: 90%;" type="primary" @click="onSubmit" :loading="loading">{{ loading?'登录中':'登录' }}</el-button>
        </el-form-item>
        <el-form-item label-width="0" style="text-align: center">
          <el-button style="width: 90%;" type="primary" @click="toregister">前往注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import circl from '@/assets/image/circl.png'
import login from '@/assets/api/login.js'
import { ElMessage } from 'element-plus'
export default {
  name: "Login",
  data(){
    return {
      loading: false,
      success: false,
      circl,
      circl_image: '',
      form: {
        name: '',
        pwd: '',
        check: '',
        remember: false
      }
    }
  },
  methods: {
    onSubmit(){
      this.loading = true;
      ElMessage({
        message: '您的账号不正确，请检查并重新填写',
        type: 'warning',
      })
    },
    // 前往注册
    toregister(){

    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../assets/image/loginbackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.el-card {
  overflow: visible;
}
.box-card {
  padding: 50px 0;
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translatey(-50%);
  background: rgba(255,255,255,0.9);
}
.circle {
  position: absolute;
  left: 50%;
  transform: translateY(-140%) translateX(-50%);
  z-index: 9999;
  border: 3px solid;
}
</style>