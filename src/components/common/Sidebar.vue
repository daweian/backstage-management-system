<template>
  <div class="bgc">
    <el-menu :default-active="onRoute" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
      <el-menu-item index="dashboard" class="elMenuBgc">
        <div id="abc">
          <i class="el-icon-setting"></i>
          <span slot="title">系统首页</span>
        </div>
      </el-menu-item>
      <el-menu-item index="table" class="elMenuBgc">
        <div id="abc">
          <i class="el-icon-tickets"></i>
          <span slot="title">基础表格</span>
        </div>
      </el-menu-item>
      <el-menu-item index="tabs" class="elMenuBgc">
        <div id="abc">
          <i class="el-icon-message"></i>
          <span slot="title">tab选项卡</span>
        </div>
      </el-menu-item>
      <el-submenu index="4" class="elMenuBgc">
        <template slot="title" class="deBgc">
          <i class="el-icon-date"></i>
          <span slot="title">表单相关</span>
        </template>
        <el-menu-item-group class="group">
          <el-menu-item class="menuItem meBgc" index="form">基本表单</el-menu-item>
          <el-menu-item class="menuItem meBgc" index="editor">富文本编辑器</el-menu-item>
          <el-menu-item class="menuItem meBgc" index="markdown">markdown编辑器</el-menu-item>
          <el-menu-item class="menuItem meBgc" index="upload">文件上传</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="charts" class="elMenuBgc">
        <div>
          <i class="el-icon-star-on"></i>
          <span slot="title">schart图标</span>
        </div>

      </el-menu-item>
      <el-menu-item index="drag" class="elMenuBgc">
        <div id="abc">
          <i class="el-icon-rank"></i>
          <span slot="title">拖拽列表</span>
        </div>

      </el-menu-item>
      <el-menu-item index="permission" class="elMenuBgc">
        <div>
          <i class="el-icon-warning"></i>
          <span slot="title">权限测试</span>
        </div>

      </el-menu-item>
      <el-menu-item index="404页面" class="elMenuBgc">
        <div>
          <i class="el-icon-error"></i>
          <span slot="title">404页面</span>
        </div>
      </el-menu-item>
      <el-menu-item index="12" class="elMenuBgc">
        <div>
          <i class="el-icon-error"></i>
          <span slot="title">{{test}}</span>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Bus from "./bus.js";
export default {
  data() {
    return {
      test:"",
      isCollapse: false
    };
  },
  created() {
    Bus.$on("coll", val => {
      this.isCollapse = val;
    });
  },
  methods: {
    handleOpen(key, keyPath) {
       console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    updateStyle(ele) {},
  },
  computed:{
    onRoute(){
       this.test=this.$route.path; 
    }
  }
};
</script>


<style scoped lang="less">
.bgc {
  float:left;
  height: 100%;
  > ul {
    position: relative;
    height: 100%;
    background-color: rgb(50, 65, 87);
    > li {
      text-align: left;
      
      #abc{
        display: inline-block;
      }
      &:hover,&:focus{
        background-color: rgba(40, 52, 70);
      }
    }
  }
}
#tab {
  color: red;
  background-color: rgb(50, 65, 87);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 800px;
  background-color: rgb(50, 65, 87);
  text-align: left;
}
.el-icon-tickets,
span {
  color: rgb(178, 192, 217);
}

.elMenuBgc:hover {
  background-color: rgba(40, 52, 70);
}
.elMenuBgc:focus {
  background-color: rgb(50, 65, 87);
}

.group {
  background-color: rgb(50, 65, 87);
  .menuItem {
    color: rgb(178, 192, 217);
  }
  .menuItem:hover {
    background-color: rgba(40, 52, 70);
  }
}
.meBgc:focus {
  background-color: rgb(50, 65, 87);
}

</style>