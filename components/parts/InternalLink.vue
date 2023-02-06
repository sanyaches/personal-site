<template>
  <NuxtLink :to="path" class="internal-link">
    {{ text }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: '',
  },
  path: {
    type: String,
    default: '/',
  },
})
</script>