<template>
  <div class="document-page">
    <section class="document-page__header">
      <div class="document-page__container">
        <p class="document-page__date">Last Updated <span>{{updatedDateText}}</span></p>
        <h1 class="document-page__title">{{document.heading || document.title}}</h1>
      </div>
    </section>
    <section class="document-page__content">
      <div class="document-page__container">
        <ContentRenderer :value="document" class="document-page__markdown markdown-body" />
      </div>
    </section>
    <section v-if="$slots.ending" class="document-page__content document-page__ending">
      <div class="document-page__container">
        <slot name="ending" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSeoMeta } from '@unhead/vue';
import { format } from 'date-fns'

const props = defineProps({
  documentPath: {
    type: String,
    required: true,
  }
})

const { path } = useRoute()
const { data: document } = await useAsyncData(`content-${props.documentPath}`, async () => {
  return queryContent('documents').where({ _path: props.documentPath }).findOne();
});

useSeoMeta({
  ogTitle: document.value.ogTitle,
  ogDescription: document.value.ogDescription,
  keywords: document.value.keywords,
})
useHead({
  title: document.value.title
})

const updatedDate = computed(() => {
  return new Date(document.value.updatedAt)
})
const updatedDateText = computed(() => {
  return format(updatedDate.value, 'MMMM dd, yyyy')
})

</script>

<style lang="scss">
.document-page {
  padding-top: 4.5rem;
  background-color: #0d1117;

  &__container {
    padding: 0 1rem;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }

  &__header {
    padding: 5rem 0;
    min-height: 160px;
    color: #fff;
  }

  &__content {
    padding: 5rem 0;
    background-color: #fefefe;
    color: #0d1117;
  }

  &__ending {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__title {
    font-size: 2.2rem;
    font-weight: 300;
    line-height: 1.1;

    @include media-breakpoint-up(md) {
      font-size: 3.2rem;
    }
  }

  &__date {
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.0933rem;
    font-size: 1rem;
    text-align: center;
    display: inline-block;
    background: linear-gradient(90deg, #6557FF 0%, #AA3FFF 29.43%, #AA3FFF 68.23%, #F8522E 100%);
    color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  &__markdown {
    font-size: 1rem;
    color: #0d1117;
    line-height: 1.6;

    ul, ol {
      padding-left: 2rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-style: normal;
      font-weight: bold;
      border: 0;
      padding: 0;
    }

    b,
    strong {
      font-weight: bold;
    }
  }
}
</style>