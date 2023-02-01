<template>
  <div v-if="hasNextPage || hasPreviousPage" class="posts-pagination">
    <button
      class="posts-pagination__button button-link button-link-backward"
      v-if="hasPreviousPage"
      @click="goPrevious"
    >
      Previous page
    </button>
    <button
      class="posts-pagination__button button-link button-link-forward"
      v-if="hasNextPage"
      @click="goNext"
    >
      Next page
    </button>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  query: {
    type: Object as PropType<{offset: number, limit: number}>,
    required: true,
  },
  count: {
    type: Number,
    required: true,                 
  }
})
const emit = defineEmits(['update'])
const page = ref(1)
const goNext = () => {
  page.value++
  emit('update', page.value)
} 
const hasNextPage = computed(() => {
  return props.count > page.value * props.query.limit
})

const goPrevious = () => {
  page.value--
  emit('update', page.value)
} 
const hasPreviousPage = computed(() => {
  return props.query.offset > 0
})
</script>

<style lang="scss" scoped>
.posts-pagination {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &__button.button-link {
    &::after,
    &::before {
      margin-bottom: 0.2rem;
    }
  }
}
</style>