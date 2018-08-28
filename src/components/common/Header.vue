<template>
    <div class="headers">
        <div class="left item">
            <!-- 折叠按钮 -->
            <el-radio-group v-model="isCollapse" class="elRadio">
                <el-button class="share-button  bgc el-icon-menu" type="primary" @click="radioBtn">
                </el-button> 
                 <!-- <el-radio-button @click="radioBtn"  class="share-button  bgc el-icon-menu">
                </el-radio-button> -->
            </el-radio-group>
        </div>
        <div class="words item">后台管理系统</div>
        <div class="right">
            <!-- 全屏显示 -->
            <el-tooltip class="item" effect="dark" :content="!fullscreen ? `全屏显示` : `取消全屏`" placement="bottom-start">
                <el-button type="primary" @click="openFullScreen" class="el-icon-rank  bgc bgct">
                </el-button>
            </el-tooltip>
            <!-- 消息中心 -->
            <el-tooltip class="item" effect="dark" content="两条未读信息" placement="bottom-start">
                <!-- <div class="dot"></div> -->
                <el-badge class="item ">
                    <div class="dot"></div>
                    <el-button class="share-button bgc el-icon-bell " type="primary">
                    </el-button>
                </el-badge>
            </el-tooltip>
            <!-- 用户图像 -->
            <div class="item"><img src="static/img/img.jpg" alt=""></div>
            <!-- 用户下拉菜单 -->
            <el-dropdown class="item">
                <el-button type="primary " class="bgca">
                    admin
                    <i class="el-icon-arrow-down el-icon-right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <a href="http://www.github.com" target="black">
                        <el-dropdown-item>关于作者</el-dropdown-item>
                    </a>
                    <span @click="loginOut">
                        <el-dropdown-item >退出登录</el-dropdown-item>
                    </span>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import Bus from './bus.js'
export default {
  data() {
    return {
      isCollapse: false, //折叠
      extend: true,
      fullscreen: false //提示文字，是否全屏显示
    };
  },
  methods: {
    radioBtn(){
      this.isCollapse=!this.isCollapse;
      var val=this.isCollapse;
      Bus.$emit('coll',val);
      /* this.$router.push('/home') */
    },
    openFullScreen() {
      var element = document.documentElement;
      if (this.fullscreen) {
        //关闭全屏
        if (document.exitFullscreen) {
          //兼容
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        //打开全屏
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    loginOut() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.headers {
  padding-top: 10px;
  height: 60px;
}
.left {
  float: left;
  margin-left: 15px;
}
.elRadio {
  margin-bottom: 20px;
  margin-left: 10px;
}
.words {
  line-height: 55px;
  margin-left: 30px;
  color: white;
  font-size: 20px;
}
.right {
  float: right;
  margin-right: 20px;
}
.item {
  margin-right: 10px;
  float: left;
}
.item > img {
  width: 30px;
  border-radius: 50%;
  margin-left: 15px;
  margin-top: 12px;
  margin-right: -8px;
}
.bgc {
  background-color: rgb(36, 47, 66);
  border: 0;
  padding: 0 0;
  width: 14px;
  height: 14px;
  transform: scale(1.5);
  margin-top: 20px;
  color: white;
}
.bgct {
  transform: rotate(45deg) scale(1.5);
}
.bgca {
  background-color: rgb(36, 47, 66);
  border: 0;
  color: white;
  margin-top: 8px;
}
.el-dropdown {
  vertical-align: top;
  float: left;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.wh {
  width: 14px;
  height: 14px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: red;
  float: right;
  margin-top: 7px;
}
</style>

