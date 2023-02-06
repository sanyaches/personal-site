<template>
  <TemplatesBlogPage>
    <div class="topic-header">
      <div class="topic-text">
        <h3 class="topic-title">{{ topicSlug }}</h3>
        — {{ topicDescription }}
      </div>
    </div>
    <div>
      <template v-if="blogArticlesByTopic.length > 0">
        <BlocksPostsGrid>
          <div v-for="article in blogArticlesByTopic" :key="article._path">
            <BlocksPostCard :article="article" :is-topic-shown="false" />
          </div>
        </BlocksPostsGrid>
      </template>
      <template v-else>
        <p>No articles found.</p>
      </template>
    </div>
    <BlocksPostsPagination :query="query" :count="count" @update="paginate" />
  </TemplatesBlogPage>
</template>

<script setup>
const route = useRoute();
const topicSlug = computed(() => {
  return route.params.topicSlug
})
const { query, getArticles, count, goPage, setQueryParams, getTopicsInfo } = useQueryArticles()

const blogArticlesByTopic = ref([])
const updateArticles = async () => {
  blogArticlesByTopic.value = await getArticles({ topic: topicSlug.value })
}
setQueryParams({ topic: topicSlug.value })
updateArticles()

watch(topicSlug, (value) => {
  setQueryParams({ topic: value })
  updateArticles()
})

const topicsInfo = ref({})
const loadTopics = async () => {
  topicsInfo.value = await getTopicsInfo()
}
loadTopics()
const topicDescription = computed(() => {
  return topicsInfo.value[topicSlug.value]
})

const paginate = (page) => {
  goPage(page)
  updateArticles()
}

definePageMeta({
  colorMode: 'light',
})
</script>

<style lang="scss" scoped>
.topic-header {
  height: 7rem;
  display: flex;
  padding: 0 0 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  
  @include media-breakpoint-up(lg) {
    height: 10rem;
    padding: 1rem 0 2rem;
  }
}

.topic-text {
  width: 200px;
  padding-bottom: 1rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9375rem;
}

.topic-title {
  display: inline;
  font-weight: 544;
  color: #111;
  font-size: 0.9375rem;
}
</style>