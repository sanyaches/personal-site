<template>
  <div class="projects single-page-container">
    <section class="projects__hero section-margin-l">
      <div class="projects__hero-title-wrap">
        <h1 class="title-size-xl">Projects</h1>
        <div class="projects__hero-subtitle-wrap">
          <h2 class="subtitle-size">Explore projects which I was proud to work on</h2>
        </div>
      </div>
      <div class="projects__hero-image-wrap">
        <div class="projects__hero-image">
          <img src="@/assets/images/programming.png">
        </div>
      </div>
    </section>

    <section class="section-margin-l">
      <BlocksPostsGrid>
        <div v-for="project in projects" :key="project._path">
          <BlocksProjectCard :project="project" />
        </div>
      </BlocksPostsGrid>
    </section>
  </div>
</template>

<script setup lang="ts" >
import type { Project } from '@/composables/useQueryProjects';

const { data: projects } = await useAsyncData(async () => {
  return queryContent<Project>('projects')
    .sort({ companySize: -1 })
    .find()
});
</script>

<style lang="scss" scoped>
.projects {
  padding-top: 6rem;

  @include media-breakpoint-down(xl) {
    padding-top: 4rem;
  }

  &__hero.section-margin-l {
    margin-top: 1.25rem;
  }

  &__hero {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;

    @include media-breakpoint-up(lg) {
      flex-direction: row;
      align-items: center;
    }
  }

  &__hero-title-wrap {
    text-align: center;

    @include media-breakpoint-up(lg) {
      width: 55%;
      text-align: left;
    }
  }

  &__hero-subtitle-wrap {
    max-width: 520px;
    margin: 0 auto;

    @include media-breakpoint-up(lg) {
      margin: 0;
    }
  }

  &__hero-image-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1.5625rem;  

    @include media-breakpoint-up(lg) {
      width: 45%;
      padding: 0 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.9375rem;
    }
  }

  &__hero-image {
    width: 100%;
    max-width: 320px;

    img {
      width: 100%;
      height: auto;
    }

    @include media-breakpoint-up(lg) {
      max-width: 480px;
    }
  }
}
</style>