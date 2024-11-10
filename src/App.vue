<template>
  <RouterView></RouterView>
</template>
<script lang="tsx" setup>
import { useTitle } from "./hooks/useTitle";
import { RouterView } from 'vue-router'
useTitle() 
</script>
