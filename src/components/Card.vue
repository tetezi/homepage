<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<script lang="ts" setup>
</script>
<style scoped>
.card {
    background-color: #f4f6ff;
    /* 卡片背景颜色 */
    border-radius: 10px;
    /* 圆角 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* 阴影效果 */
    padding: 20px;
    /* 内边距 */
    opacity: 0.6;
    /* 不透明度 */
}

.card:hover {
    opacity: 0.9;
    /* 鼠标悬停时不透明度 */
}
</style>