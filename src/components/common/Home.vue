<template>
    <div class="wrapper">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div class="content-box">
            <v-tags></v-tags>
            <div class="content">
                <transition>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import vHeader from "./Header.vue";
import vSidebar from "./Sidebar.vue";
import vTags from "./Tags.vue";
import bus from "./bus.js";
export default {
  components: {
    vHeader,
    vSidebar,
    vTags
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped>
</style>
