<template>
  <div class="topic-list">
    <ul class="article-topics">
      <li>
        <NuxtLink to="/blog">Latest</NuxtLink>
      </li>
      <li v-for="(topic, n) in articleTopics" :key="n" class="topic">
        <NuxtLink :to="`/blog/topics/${topic}`"> {{ topic }} </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const flatten = (topics, key) => {
  return topics.map((item) => {
    return item[key];
  });
};

const { data } = await useAsyncData("topics", () => queryContent("blog").only(["topic"]).find());

const articleTopics = [...new Set(flatten(data.value, "topic"))];
</script>


<style scoped lang="scss">
.topic-list {
  ul {
    margin: 0 -1rem;
    padding: 1rem 0;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;

    @include media-breakpoint-up(lg) {
      display: block;
      padding: 1em 0;
      margin: 0;
    }
  }

  li {
    display: inline;
    margin: 0 1rem;
    list-style: none;
    line-height: 2rem;
    font-size: 0.9375rem;
    white-space: nowrap;

    @include media-breakpoint-up(lg) {
      display: block;
      margin: 0;
    }
  }

  a {
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: 0.01875rem;
  }

  a:hover {
    color: #ea4e43;
  }

  a.router-link-active {
    font-weight: 600;
    color: #111;
  }
}
</style>