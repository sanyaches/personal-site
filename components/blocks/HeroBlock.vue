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
          <p>
            I'm passionate about web development with care about customers (UX/UI). 
            <br>Also I'm a fan of clean code
          </p>
          <p>Feel free to reach me by links below:</p>
          <div class="mb-4">
            <BlocksSocials />
          </div>
          <p>
            Scilled in JavaScript, Typescript, HTML, CSS, Vue.js, React.js and Node.js
          </p>
          <p>
            4 years of experience
          </p>
          <p class="mt-2rem md:mt-3rem">
            <b>Navigation:</b>
          </p>
          <nav class="hero__links mb-2rem">
            <NuxtLink class="button-link button-link-forward button-link--deg-45" to="/projects">Projects</NuxtLink>
            <NuxtLink class="button-link button-link-forward button-link--deg-45" to="/about">About</NuxtLink>
            <NuxtLink class="button-link button-link-forward button-link--deg-45" to="/blog">Blog</NuxtLink>
          </nav>
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

  &__info {
    font-size: 1.2rem;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @include media-breakpoint-up(sm) {
      flex-direction: row;
    }
  }
}
</style>
