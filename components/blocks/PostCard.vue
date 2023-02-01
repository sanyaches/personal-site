<template>
  <div class="post-card">
    <div v-if="isTopicShown" class="post-card__topic">
      <span>
        {{ article.topic }}
      </span>
    </div>
    <NuxtLink :to="article._path" :title="article.title">
      <div class="post-card__thumbnail">
        <div class="post-card__thumbnail-cover" />
        <span class="post-card__thumbnail-image">
          <img :alt="article.description" :src="article.thumbnailUrl">
        </span>
      </div>
    </NuxtLink>
    <div class="post-card__spacer" />
    <h3 class="post-card__title">
      <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
    </h3>
    <NuxtLink v-if="article.description" class="post-card__subtitle" :to="article._path">
      {{ article.description }}
    </NuxtLink>
    <div class="post-card__author">
      <PartsPerson :name="article.author" >
        <template #image>
          <img class="w-full h-auto rounded-999" src="/alex-savkin.jpeg">
        </template>
      </PartsPerson>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  isTopicShown: {
    type: Boolean,
    default: true,
  }
})
</script>

<style lang="scss" scoped>
.post-card {
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

  &__author-content {
    display: flex;
    align-items: center;
  }

  &__author-image {
    margin-right: 6px;
    mix-blend-mode: multiply;
  }

  &__author-text {
    font-size: 0.875rem;
    margin-left: 6px;
    padding-bottom: 0.125rem;
  }

  &__author-name {
    color: rgba(17, 17, 17, 1);
  }

  &__author-title {
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>