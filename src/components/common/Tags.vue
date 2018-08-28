<template>
  <div class="tags" v-if="showTags">
    <el-tag :key="tag.name" :class="[tag.bool ? 'current' : '']" ref="elTag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)" class="drop">
      <div class="center" @click="enterPath(tag.path)">{{tag.name}}</div>
    </el-tag>
    <div class="tags-close-box" v-if="inputVisible">
      <el-dropdown trigger="click" @command="handleCommand">
        <el-button type="primary" class="drop dorpRight">
          更多菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      showTags: true,
      dynamicTags: [{ name: "系统首页", path: "/dashboard", bool: true }],
      inputVisible: true,
      inputValue: "",
      tagStyle: ""
    };
  },
  created() {
    this.showTags = true;
    this.$router.push("/dashboard");
  },
  methods: {
    //el-tags
    handleClose(tag) {
      //删除一个内容
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    enterPath(path) {
      //点击那个tag，跳转相应组件，同时点亮所点击对象，兄弟标签不要高亮
      this.$router.push(path);
      this.dynamicTags.map(function(val, index, array) {
        if (val.path == path) {
          val.bool = true;
        } else {
          val.bool = false;
        }
      });
    },
    //更多菜单
    handleCommand(command) {
      //command就是对应下拉el的command内容
      if (command == "other") {
        this.dynamicTags = [
          { name: "系统首页", path: "/dashboard", bool: true }
        ];
      } else {
        this.dynamicTags = [];
        this.showTags = false;
      }
    }
  },
  watch: {
    $route: function(obj) {
      //console.log("obj==>", obj);
      let arr = this.dynamicTags,
        title = obj.meta.title,
        path = obj.fullPath,
        boole = true, //判断dynamicTags里面是有将要添加的对象
        that=this;
      arr.map(function(val, index, arr) {
        if (val.name == title) {
          boole = false;
          that.enterPath(val.path);
        }
      });
      if (boole) {
        arr.push({ name: title, path: path, bool: false });
      }
    }
  }
};
</script>

<style scoped lang="less">
.tags {
  padding: 3px 5px 2px 3px;
  background-color: green;
  overflow: auto;
  /* &::after {clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;}  */
  .tagsUl {
    float: left;
    .tags-li {
      float: left;
    }
  }
  .tags-close-box {
    float: right;
  }
}
.drop,.el-tag {
  padding: 5px;
  float: left;
  margin-left: 10px;
  background-color: rgb(255, 255, 255);
  height: 26px;
  color: black;
  font-size: 14px;
  text-align: center;
  line-height: 18px;
  .center {
    display: inline-block;
  }
  .el-icon-close{
    color:black;
  }
}
.dorpRight,
.current {
  background-color: rgb(64, 158, 255);
  color: white;
  .el-icon-close{
    color:white;
  }
}
</style>
