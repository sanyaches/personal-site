<template>
  <div class="project single-page-container">
    <article>
      <section class="project__section section-margin-l">
        <div class="project__header project__section-grid">
          <div class="container-m">
            <div class="project__header-back-link">
              <NuxtLink class="is-mobile button-link button-link-backward" to="/projects">All projects</NuxtLink>
              <NuxtLink class="is-desktop" to="/projects">All projects</NuxtLink>
            </div>
            <div class="project__header-title">
              <div class="project__logo" v-if="project.logoUrl">
                <img :src="project.logoUrl" :alt="project.title">
              </div>
              <div class="project__header-title-content">
                <h1 class="title-size-xl">
                  {{ project.title }}
                </h1>
                <div class="project__spacer" />
                <p class="project__header-description subtitle-size">
                  {{ project.description }}
                </p>
              </div>
              <div class="project__meta">
                <div class="project__meta-scroller">
                  <div class="project__meta-inner">
                    <div class="project__meta-people-wrap">
                      <div class="smallcaps-title">
                        Reference from
                      </div>
                      <div class="project__meta-people">
                        <PartsPerson class="project__meta-person" :name="project.authorName" :department="project.authorDepartment" >
                          <template #image>
                            <AvatarPerson class="project__author-image" />
                          </template>
                        </PartsPerson>
                      </div>
                    </div>
                    <div class="project__meta-tags-wrap">
                      <div class="smallcaps-title">
                        Reference
                      </div>
                      <div class="project__meta-tags">
                        {{ project.authorQuote }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="project__section section-margin-m">
        <div class="container-m">
          <div class="project__content markdown-body">
            <ContentDoc />
          </div>
        </div>
      </section>
    </article>

    <section v-if="surroundProject.length > 0" class="project__section section-margin-l">
      <div class="project__keep">
        <div class="project__keep-header">
          <h2>Other excited projects</h2>
        </div>
        <div class="project__keep-articles section-margin-m">
          <BlocksPostsGrid>
            <div v-for="project in surroundProject" :key="project._path">
              <BlocksProjectCard :project="project" />
            </div>
          </BlocksPostsGrid>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue';
import AvatarPerson from '@/assets/icons/avatar-person.svg?component'
import 'github-markdown-css/github-markdown.css'

definePageMeta({
  colorMode: 'light',
})

const route = useRoute()
const { data: project } = await useAsyncData(`content-${route.params.slug.join('')}`, async () => {
  const post = queryContent('projects', ...route.params.slug).findOne();
  return post
});

const { data: surroundProject } = await useAsyncData(`surrounds-${route.params.slug.join('')}`, async () => {
  const surroundStories = await queryContent('projects')
    .sort({ companySize: -1 })
    .findSurround(project.value._path, {before: 2, after: 2})

  return surroundStories.filter(Boolean).slice(0, 2)
})
useSeoMeta({
  title: project.value.title,
  description: project.value.description,
  ogTitle: project.value.ogTitle,
  ogDescription: project.value.ogDescription,
  keywords: project.value.keywords,
})
</script>

<style lang="scss" scoped>
.project {
  &__spacer {
    min-height: 1rem;
    width: 100%;
  }

  &__header {
    margin-top: -1.25rem;
  }

  &__header-title {
    margin-top: 1.25rem;

    @include media-breakpoint-up(lg) {
      margin-top: 0;
    }
  }

  &__header-back-link {
    width: 100%;
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.9375rem;
    margin-bottom: 2rem;
  }

  &__header-back-link a {
    &.is-mobile {
      display: inline-flex;

      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    &.is-desktop {
      display: none;
      cursor: pointer;
      color: inherit;
      text-decoration: none;
      align-items: center;
      gap: 0.3rem;
      border: 0;

      &:hover {
        color: #EB5757;
        opacity: 1;
      }

      &::before {
        content: "← ";
        font-size: 1.2rem;
        line-height: 1;
      }

      @include media-breakpoint-up(lg) {
        display: flex;
        
        &::before {
          margin-right: 0;
        }
      }
    }
  }

  &__header-title-content {
    max-width: 800px;
    margin-top: 0.3125rem;
  }
  
  &__logo {
    position: relative;
    height: 30px;
    margin-bottom: 15px;
    margin-left: 3px;

    img {
      max-height: 30px;
      max-width: 110px;
      object-fit: contain;
    }
  }


  &__header-meta {
    margin-bottom: 0.75rem;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.9375rem;
    font-weight: 500;
  }

  &__header-topic-link {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.1em;
    text-decoration-thickness: 1px;
    cursor: pointer;
    display: inline;
    text-decoration-color: rgba(0, 0, 0, 0.1);

    &:hover {
      color: #EB5757;
      opacity: 1;
      text-decoration: none;
    }
  }

  &__header-author {
    margin-top: 0.75rem;
  }

  &__author-image {
    width: 100%;
    height: auto;
  }

  &__meta {
    margin-top: 1.5625rem;
  }

  &__meta-scroller {
    padding-bottom: 1.25rem;
    margin-bottom: -1.25rem;
    margin: 0 -1.25rem;
    overflow-x: scroll;

    @include media-breakpoint-up(sm) {
      padding-bottom: 1.25rem;
      margin-bottom: -1.25rem;
      margin: 0 -2.5rem;
      overflow-x: auto;
    }

    @include media-breakpoint-up(lg) {
      padding-bottom: 0;
      margin: 0;
    }
  }

  &__meta-inner {
    display: flex;
    margin: 0 1.25rem;

    @include media-breakpoint-up(sm) {
      margin: 0 2.5rem;
    }

    @include media-breakpoint-up(lg) {
      margin: 0;
    }
  }

  &__meta-people-wrap {
    flex-shrink: 0;
  }

  &__meta-people {
    display: flex;
    margin-top: 0.8125rem;
  }

  &__meta-person {
    margin-right: 1.5625rem;
  }

  &__meta-tags-wrap {
    flex-shrink: 0;
    padding: 0 3rem;
    margin: 0 1rem;
    border-left: 1px solid var(--border-color-regular);
  }

  &__meta-tags {
    margin-top: 0.8125rem;
    font-size: 0.875rem;
  }

  &__keep-header {
    display: flex;
    justify-content: center;
    margin-bottom: 2.5rem;
  }

  &__keep-header h2 {
    font-size: 3rem;
    line-height: 3.4rem;
    font-weight: 700;
    font-variation-settings: "wght" 667;
    letter-spacing: -0.0208em;
  }
}
</style>