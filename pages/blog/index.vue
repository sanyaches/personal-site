<template>
  <TemplatesBlogPage>
    <div>
      <BlocksPostsGrid>
        <div v-for="article in articles" :key="article._path">
          <BlocksPostCard :article="article" />
        </div>
      </BlocksPostsGrid>
    </div>
  </TemplatesBlogPage>
</template>

<script lang="ts" setup>
import type { Article } from '@/composables/useQueryArticles';

const { data: articles } = await useAsyncData(async () => {
  return queryContent<Article>('blog')
    .sort({ publishedAt: -1 })
    .find()
});
</script>