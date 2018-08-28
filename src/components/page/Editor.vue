<template>
    <div class="faBox">
        <div class="brother">
            <i class="el-icon-rank fl"></i>
            <i class="fl f2">拖拽排序</i>
        </div>
        <div class="under">
            <div class="underTop">
                Vue.Draggable：基于Sortable.js的Vue拖拽组件。 访问地址：
                <a href="https://www.jb51.net/article/106304.htm">vue-schart</a>
            </div>
            <div class="underCenter">
                <div class="flow">
                    <draggable :list="contentsOne" class="draggable" :move="getdata" @update="datadragEnd" :options="dargOptions">
                        <transition-group name="list-complete">
                            <div v-for="element in contentsOne" :key="element.name" class="list-complete-item">
                                <div class="styleclass">{{element.name}}</div>
                            </div>
                        </transition-group>
                    </draggable>
                </div>
                <div class="flow">
                    <draggable :list="contentsT" class="draggable" :move="getdata" @update="datadragEnd" :options="dargOptions">
                        <transition-group name="list-complete">
                            <div v-for="element in contentsT" :key="element.name" class="list-complete-item">
                                <div class="styleclass">{{element.name}}</div>
                            </div>
                        </transition-group>
                    </draggable>
                </div>
                <div class="flow">
                    <draggable :list="contents" class="draggable" :move="getdata" @update="datadragEnd" :options="dargOptions">
                        <transition-group name="list-complete">
                            <div v-for="element in contents" :key="element.name" class="list-complete-item">
                                <div class="styleclass">{{element.name}}</div>
                            </div>
                        </transition-group>
                    </draggable>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      contentsOne: [
        { name: "第一列数据1" },
        { name: "第一列数据2" },
        { name: "第一列数据3" }
      ],
      contentsT: [
        { name: "第二列数据1" },
        { name: "第二列数据2" },
        { name: "第二列数据3" }
      ],
      contents: [
        { name: "第三列数据1" },
        { name: "第三列数据2" },
        { name: "第三列数据3" }
      ],
      dargOptions: {
        animation: 120,
        group: "sdfa",
        ghostClass: "dragClass"
      }
    };
  },
  components: {
    draggable
  },
  methods: {
    getdata: function(evt) {
      console.log(evt.draggedContext.element.id);
    },
    datadragEnd: function(evt) {
      console.log("拖动前的索引：" + evt.oldIndex);
      console.log("拖动后的索引：" + evt.newIndex);
    }
  }
};
</script>

<style socped lang="less">
.faBox {
  .brother {
    .fl {
      float: left;
      margin-right: 10px;
    }
    .f2 {
      margin-top: -3px;
    }
    &:after {
      //清楚浮动的影响
      display: block;
      clear: both;
      content: "";
      visibility: hidden;
      height: 0;
    }
  }
  .under {
    margin-top: 15px;
    padding: 30px 50px 30px 20px;
    background-color: #fff;
    margin-bottom: 80px;
    .underTop {
      height: 50px;
      line-height: 50px;
      margin-left: 10px;
      background-color: rgb(238, 241, 246);
      text-align: left;
      padding-left: 15px;
      > a {
        color: blue;
      }
    }
    .underCenter {
      margin-top: 30px;
      &:after {
        display: block;
        clear: both;
        content: "";
        height: 0;
        visibility: hidden;
      }
      .flow {
        /* display: inline-block; */
        &:before {
          //清楚浮动的影响
          display: block;
          clear: both;
          content: "";
          visibility: hidden;
          height: 0;
        }
        float: left;
        width: 30%;
        height: 450px;
        background-color: rgb(240, 240, 240);
        margin-right: 15px;
        padding: 8px;
        border-radius: 5px;
        box-sizing: border-box;
        font-weight: 500;
      }
    }
  }
}
.styleclass {
  box-sizing: border-box;
  padding: 5px 3px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(225, 228, 232);
  height: 35px;
  margin-top: 12px;
  border-radius: 8px;
  &:hover {
    border-color: rgb(125, 193, 244);
  }
}
.dragClass {
  display: block;
  color: transparent;
  border: dashed;
}
</style>