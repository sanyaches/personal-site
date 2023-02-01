<template>
  <div class="posts-grid">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.5rem;

  @include media-breakpoint-up(md) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem 3.75rem;
  }
}
</style>