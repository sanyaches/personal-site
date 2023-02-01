<template>
  <div class="project-card">
    <NuxtLink class="project-card__link" :to="project._path" :title="project.title">
      <div class="project-card__thumbnail">
        <div class="project-card__thumbnail-cover" />
        <span class="project-card__thumbnail-image">
          <img :alt="project.description" :src="project.thumbnailUrl">
        </span>
      </div>
      <blockquote class="project-card__quote">
        <div class="project-card__quote-inner">
          <div class="project-card__quote-person">
            <AvatarPerson />
          </div>
          <div class="project-card__quote-text">
            {{ project.authorQuote }}
          </div>
          <div class="project-card__quote-actions">
            <div class="project-card__quote-view-link">
              <span class="inline-link has-arrow-right">View project</span>
            </div>
          </div>
        </div>
      </blockquote>
    </NuxtLink>
    <div class="project-card__spacer" />
    <div class="project-card__logo" v-if="project.logoUrl">
      <img :src="project.logoUrl" :alt="project.title">
    </div>
    <h3 class="project-card__title">
      <NuxtLink :to="project._path">{{ project.title }}</NuxtLink>
    </h3>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Project } from '@/composables/useQueryProjects'
import AvatarPerson from '@/assets/icons/avatar-person.svg?component'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  }
})
</script>

<style lang="scss" scoped>
.project-card {
  &__topic {
    display: block;
    margin-bottom: 0.3125rem;
  }

  &__topic span {
    font-variation-settings: "wght" 556;
    letter-spacing: 0.0074em;
    text-transform: uppercase;
    font-feature-settings: "case", "cpsp";
    font-size: 0.75rem;
    line-height: 1.7rem;
    font-weight: 500;
    color: rgba(0,0,0,0.6);
  }

  &__thumbnail {
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    aspect-ratio: 1200 / 630;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &__thumbnail-cover {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: background 150ms;
    background: rgba(0, 0, 0, 0);
    z-index: 2;
  }

  &__thumbnail:hover &__thumbnail-cover {
    background: rgba(0,0,0,0.03);
  }

  &__thumbnail-image {
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  &__thumbnail-image img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  &__spacer {
    min-height: 0.9375rem;
    width: 100%;
  }

  &__logo {
    margin-bottom: 10px;

    img {
      max-height: 30px;
      object-fit: contain;
    }
  }

  &__title {
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: 700;
    font-variation-settings: "wght" 666;
    letter-spacing: -0.0168em;
  }

  &__title a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    display: inline;
  }

  &__title a:hover {
    color: #EB5757;
    opacity: 1;
    text-decoration: none;
  }

  &__subtitle {
    display: block;
    margin: 0.5rem 0 1rem 0;
    text-decoration: none;
    letter-spacing: 0.0005em;
    line-height: 1.4375rem;
    color: rgba(0,0,0,0.6);
  }

  &__author-image {
    width: 100%;
    height: auto;
  }

  &__link {
    position: relative;
  }

  &__link:hover &__quote {
    @include media-breakpoint-up(lg) {
      opacity: 1;
    }
  }

  &__link:hover &__quote-inner {
    @include media-breakpoint-up(lg) {
      transform: translateY(0px);
    }
  }

  &__quote {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 2.5rem;
    border-radius: 6px;
    margin: 0;
    opacity: 0;
    transition: 150ms opacity linear;
    z-index: 3;
  }

  &__quote-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-6px);
    transition: 250ms transform cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &__quote-person {
    width: 5rem;
    height: 5rem;
    margin-top: -0.3125rem;
    text-align: center;
  }

  &__quote-person img {
    width: auto;
    height: 100%;
  }

  &__quote-text {
    text-align: center;
    margin-top: 1rem;
    max-width: 460px;
    font-size: 1.7rem;

    &::before {
      content: open-quote;
    }

    &::after {
      content: close-quote;
    }
  }

  &__quote-view-link {
    margin-top: 1rem;
    color: #ea4e43;
    text-underline-offset: 0.1em;
    text-decoration-thickness: 1px;
    font-size: 0.9375rem;
  }
}
</style>