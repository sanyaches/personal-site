<template>
  <div class="loader"></div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.loader {
  display: inline-block;
  width: 3rem;
  height: 3rem;
}
.loader:after {
  content: " ";
  display: block;
  width: 1.5625rem;
  height: 1.5625rem;
  margin: 0.125rem;
  border-radius: 50%;
  border: 3px solid #222;
  border-color: #222 transparent #222 transparent;
  animation: loader 1.2s linear infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>