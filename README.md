##backstage-management-system##
此项目是基于Vue2.0+Element UI编译的后台管理系统（写的不够全面，可参考 http://panjiachen.github.io/vue-element-admin
或https://github.com/lin-xin/vue-manage-system.git）

## 前言 ##
由于在公司的后台管理项目中，用到的一些常用的功能，也看到一些大神编写的功能，自己总结编译了下，遇到过很多欲罢不能的bug，也积累到了宝贵的经验，重点写了vchart/拖拽这些常用的功能

## 功能 ##
    登陆/注销
    首页
    tab选项卡
    v-chart中国地图及数据可视化的柱状图等
    列表拖拽

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- bus.js           	 // Event Bus
	|           |-- Header.vue           // 公共头部
	|           |-- Home.vue           	 // 公共路由入口
	|           |-- Sidebar.vue          // 公共左边栏
	|           |-- Tags.vue           	 // 页面切换标签组件
	|       |-- page                   	 // 主要路由页面
	|           |-- 403.vue
	|           |-- 404.vue
	|           |-- BaseCharts.vue       // 基础图表
	|           |-- BaseForm.vue         // 基础表单
	|           |-- BaseTable.vue        // 基础表格
	|           |-- DashBoard.vue        // 系统首页
	|           |-- DragList.vue         // 拖拽列表组件
	|           |-- Login.vue          	 // 登录
	|           |-- Markdown.vue         // markdown组件
	|           |-- Premission.vue       // 权限测试组件
	|           |-- Upload.vue           // 图片上传
	|           |-- VueEditor.vue        // 富文本编辑器
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 安装步骤 ##

    git clone https://@github.com/daweian/backstage-management-system.git

    cd backstage-management-system  //进入目录
    npm i       //安装项目依赖

## 本地开发 ##
    npm run dev

## 构建生产 ##
    npm run build

## 踩过的坑 ##
    很多用element的插件过程中，样式达不到自己的预期，用js改过，或者添加自己的div来解决，但是很吃力，直接可以对element的样式进行简单的更改就好了，但是尽量避免影响到其他组件中的样式，因为是公共样式。。
    