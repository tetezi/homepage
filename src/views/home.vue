<template>
    <div>
        <BackgroundVideo :src="backgroundVideoSrc"></BackgroundVideo> 
    </div>
</template>
<script lang="ts" setup>
import BackgroundVideo from "@/components/BackgroundVideo.vue";
import { computed } from "vue";
const backgroundVideoSrc = computed(() => {
    return ("/src/assets/bg.mp4")
})
</script>