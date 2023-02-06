<template>
  <section class="hero">
    <div class="single-page-container position-relative">
      <div class="hero__content">
        <div class="hero__image">
          <img src="@/assets/images/alex-smiley.jpg">
        </div>
        <div class="hero__info">
          <h1 class="title-size-l mb-4">Aleksandr Savkin</h1>
          <p>
            Hey, I'm Aleksandr. I’m a frontend/fullstack javascript developer
          </p>
          <div class="mb-4">
            <BlocksSocials />
          </div>
          <p>
            Scilled in JavaScript, Vue.js, React.js and Node.js
          </p>
          <p>
            4 years of experience
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.hero {
  padding: 2rem 0;
  
  @include media-breakpoint-up(md) {
    padding: 4rem 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @include media-breakpoint-up(md) {
      gap: 2rem;
      display: grid;
      grid-template-columns: 1fr 3fr;
    }
  }

  &__image {
    width: 50%;
    margin: 0 auto;

    @include media-breakpoint-up(md) {
      width: 100%;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
