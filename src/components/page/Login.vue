<template>
  <div class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <el-form :model="ruleForm" status-icon label-position="left" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名：" prop="user">
          <el-input type="user" v-model="ruleForm.user" placeholder="请输入用户名" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入密码" @keydown.enter.native="submit($event)"></el-input>
        </el-form-item>
        <el-form-item class="rePass">
          <el-checkbox v-model="checked" label="记住密码" name="type" class="checkbox" @keydown.enter.native="submit($event)"></el-checkbox>
        </el-form-item>
        <el-form-item class="el-btn">
          <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button class="login-btn" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        user: "",
        password: ""
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      form: {
        type: []
      },
      checked: ""
    };
  },
  created() {
    this.rePassword();
  },
  methods: {
    //判断上次登录是否记住密码
    rePassword() {
      if (JSON.parse(localStorage.getItem("Key"))) {//判断进入此页面是否是第一次进入，第一次进入本地存储为空
        let rePass = localStorage.getItem("user");
        if (rePass && JSON.parse(rePass)) {
          this.ruleForm = JSON.parse(localStorage.getItem("user"));
          this.checked = true; //是否选中记住密码
        } else {
          this.checked = false;
        }
      }
    },
    submit(e) {
      //enter键
      if (e && e.keyCode == 13) {
        this.submitForm();
      }
    },
    submitForm(formName) {
      //登录
       if (this.ruleForm.user == "admin" && this.ruleForm.password == "123456") {
        let obj = this.ruleForm;
        if (this.checked) {
          localStorage.setItem("user", JSON.stringify(this.ruleForm));
        } else {
          localStorage.setItem("user", {});
        }
        this.$router.push("/dashboard");
      } else {
        this.$message({
          type: "error",
          message: "请输入正确的用户名和密码"
        });
        return false;
      } 
    },
    resetForm(formName) {
      //重置
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
}
.ms-title {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-230px);
  text-align: center;
  font-size: 30px;
  color: #fff;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 160px;
  margin: -150px 0 0 -190px;
  padding: 40px;
  border-radius: 5px;
  background-color: #fff;
}
.login-btn {
  text-align: center;
}
.el-btn {
  margin-left: -80px;
}
.login-tip {
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.demo-ruleForm {
  text-align: center;
}
.rePass {
  margin-bottom: 10px;
  text-align: left;
  height: 20px;
  margin: -15px 0 20px 130px;
}
.el-form-item__content {
  margin-left: 0px;
}
</style>


