<template>
    <video autoplay muted loop class="background-video">
        <source :src="props.src" type="video/mp4">
        您的浏览器不支持视频标签。
    </video>
</template>
<script lang="ts" setup>
const props = defineProps<{
    src: string
}>() 
</script>
<style scoped>
.background-video {
    /* position: fixed; */
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
</style>