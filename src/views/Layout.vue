<template>
    <div>
        <BackgroundVideo :src="backgroundVideoSrc"></BackgroundVideo>
        <!-- TODO:3D旋转/滚动特效 -->
        <Home></Home>
    </div>
</template>
<script lang="ts" setup>
import BackgroundVideo from "@/components/BackgroundVideo.vue";
import Home from "./Home.vue";
import { computed } from "vue";
const backgroundVideoSrc = computed(() => {
    return ("/src/assets/bg.mp4")
}) 
</script>