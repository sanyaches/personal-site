<template>
  <div class="single-blog-page single-page-container">
    <article>
      <section class="single-blog-page__section">
        <div class="single-blog-page__header single-blog-page__section-grid">
          <div class="single-blog-page__header-back-link">
            <NuxtLink class="is-mobile button-link button-link-backward" to="/blog">All posts</NuxtLink>
            <NuxtLink class="is-desktop" to="/blog">All posts</NuxtLink>
          </div>
          <div class="single-blog-page__header-title">
            <div class="single-blog-page__header-title-expanded">
              <div class="single-blog-page__header-meta">
                Published
                <time :datetime="publishedDate">
                  {{ publishedDateText }}
                </time>
                in
                <NuxtLink class="single-blog-page__header-topic-link" :to="topicLink">{{ article.topic }}</NuxtLink>
              </div>

              <h1 class="single-blog-page__header-heading">
                {{ article.title }}
              </h1>

              <div class="single-blog-page__header-author">
                <PartsPerson :name="article.author">
                  <template #image>
                    <img class="w-full h-auto rounded-999" src="/alex-savkin.jpeg">
                  </template>
                </PartsPerson>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="single-blog-page__section">
        <div class="single-blog-page__section-content-grid">
          <div class="single-blog-page__share">
            <div class="single-blog-page__share-title">
              Share this post
            </div>
            <div class="single-blog-page__share-socials">
              <ClientOnly>
                <ul class="single-blog-page__share-socials-list">
                  <li class="single-blog-page__share-social-item variant-twitter">
                    <ShareNetwork
                      class="single-blog-page__share-social-button"
                      network="twitter"
                      :url="currentUrl"
                      :title="article.title"
                      :description="article.description"
                      :hashtags="article.topic"
                    >
                      <TwitterIcon class="w-7" />
                    </ShareNetwork>
                  </li>
                  <li class="single-blog-page__share-social-item variant-facebook">
                    <ShareNetwork
                      class="single-blog-page__share-social-button"
                      network="facebook"
                      :url="currentUrl"
                      :title="article.title"
                      :description="article.description"
                      :hashtags="article.topic"
                    >
                      <FacebookIcon class="w-7" />
                    </ShareNetwork>
                  </li>
                  <li class="single-blog-page__share-social-item variant-linkedin">
                    <ShareNetwork
                      class="single-blog-page__share-social-button"
                      network="linkedin"
                      :url="currentUrl"
                      :title="article.title"
                      :description="article.description"
                      :hashtags="article.topic"
                    >
                      <LinkedinIcon class="w-7" />
                    </ShareNetwork>
                  </li>
                </ul>
              </ClientOnly>
            </div>
          </div>
          <div class="single-blog-page__content">
            <ContentDoc />
          </div>
        </div>
      </section>
    </article>

    <section v-if="surroundArticles.length > 0" class="single-blog-page__section size-large">
      <div class="single-blog-page__keep">
        <div class="single-blog-page__keep-header">
          <h2>Keep reading</h2>
          <NuxtLink class="button-link button-link-forward" to="/blog">All posts</NuxtLink>
        </div>
        <div class="single-blog-page__keep-articles">
          <BlocksPostsGrid>
            <div v-for="article in surroundArticles" :key="article._path">
              <BlocksPostCard :article="article" :is-topic-shown="false"/>
            </div>
          </BlocksPostsGrid>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue';
import { format } from 'date-fns'
import TwitterIcon from '@/assets/icons/social-twitter.svg?component'
import FacebookIcon from '@/assets/icons/social-facebook.svg?component'
import LinkedinIcon from '@/assets/icons/social-linkedin.svg?component'

definePageMeta({
  colorMode: 'light',
})

const route = useRoute()
const { data: article } = await useAsyncData(`content-articles-${route.params.slug.join('')}`, async () => {
  return queryContent('blog', ...route.params.slug).findOne();
});

const { data: surroundArticles } = await useAsyncData(`surrounds-articles-${route.params.slug.join('')}`, async () => {
  const surrounds = await queryContent('blog')
    .where({ topic: article.value.topic })
    .sort({ publishedAt: -1 })
    .findSurround(article.value._path, { before: 1, after: 1 })
  
  return surrounds.filter(Boolean)
})

const currentUrl = ref('')
onMounted(() => {
  currentUrl.value = window.location.href
})

useSeoMeta({
  title: article.value.title,
  description: article.value.description,
  ogTitle: article.value.ogTitle,
  ogDescription: article.value.ogDescription,
  keywords: article.value.keywords,
})

const publishedDate = computed(() => {
  return new Date(article.value.publishedAt)
})
const publishedDateText = computed(() => {
  return format(publishedDate.value, 'MMMM dd, yyyy')
})
const topicLink = computed(() => {
  return `/blog/topics/${article.value.topic}`
})
</script>

<style lang="scss" scoped>
.single-page-container {
  width: 100%;
  padding: 0 2.4rem;
  margin: 0 auto;

  @include media-breakpoint-up(md) { 
    width: 88vw;
    max-width: 1392px;
    padding: 0;
    margin: 0 auto;
  }
}
.single-blog-page {
  padding-top: 8rem;
  padding-bottom: 1rem;

  @include media-breakpoint-up(md) {
    padding-bottom: 4rem;
  }

  @include media-breakpoint-up(lg) { 
    padding-bottom: 8rem;
  }

  &__section {
    margin: 2.5rem 0;

    @include media-breakpoint-up(xxl) {
      margin: 3.75rem 0;
    }

    &.size-large {
      margin: 5rem 0;

      @include media-breakpoint-up(xxl) {
        margin: 7.5rem 0;
      }
    }
  }

  &__section-grid {
    @include media-breakpoint-up(lg) {
      display: grid;
      grid-template-columns: 1fr 700px 1fr;
      width: 100%;
    }
  }

  &__section-content-grid {
    @include media-breakpoint-up(xxl) {
      display: grid;
      grid-template-columns: 1fr 700px 1fr;
      width: 100%;
    }
  }

  &__content {
    max-width: 700px;
    margin: 0 auto;

    @include media-breakpoint-up(xxl) {
      margin: 0;
    }
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

  &__header-title-expanded {
    width: 120%;
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

  &__header-heading {
    font-size: 3.3125rem;
    line-height: 2.25rem;
    font-variation-settings: "wght" 669;
    letter-spacing: -0.0307em;
    font-weight: 700;
  }

  &__header-author {
    margin-top: 0.75rem;
  }

  &__header-back-link {
    width: 100%;
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 0.9375rem;
    margin-bottom: 3rem;

    @include media-breakpoint-up(lg) {
      margin-bottom: 0;
    }
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

  &__share {
    max-width: 700px;
    margin: 0 auto 2.5rem;

    &::after {
      content: "";
      display: block;
      width: 60px;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      margin-top: 3rem;
    }

    @include media-breakpoint-up(xxl) {
      display: block;
      max-width: 200px;
      margin: 0;

      &::after {
        content: none;
      }
    }
  }

  &__share-title {
    display: block;
    color: rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
    font-size: 1.1rem;
    line-height: 1;
    letter-spacing: 0.06em;
    font-weight: 544;
  }

  &__share-socials {
    margin-top: 0.5rem;
  }

  &__share-socials-list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__share-social-item {
    list-style: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 0.375rem;

    &.variant-twitter:hover {
      color: #1d9bf0;
    }
    
    &.variant-linkedin:hover {
      color: #2867b2;
    }

    &.variant-facebook:hover {
      color: #1877f2;
    }
  }


  &__share-social-button {
    min-height: 2.25rem;
    font-size: 1rem;
    line-height: 1.4375rem;
    letter-spacing: 0.0005em;
    transition: background 150ms;
    height: auto;
    padding: 0.375rem;
    font-weight: inherit;
    color: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    word-break: break-word;
    white-space: pre-line;
    border-radius: 5px;
    border: 0;
    height: auto;
    background: transparent;
    text-decoration: none;
    min-width: auto;

    &:hover {
      background: rgba(0,0,0,0.03);
    }
  }

  &__keep-header {
    display: flex;
    justify-content: space-between;
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