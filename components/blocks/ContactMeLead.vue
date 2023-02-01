<template>
  <div class="contact-us-lead">
    <h2>{{ title || fallbackTitle }}</h2>
    <p>{{ description || fallbackDescription }}</p>
    <NuxtLink to="/contacts" class="contact-us__button button-link">
      Contact me
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: ''
  }
})
const fallbackTitle = 'Do you have an opportunity for me?'
const fallbackDescription = "I would be delightful to talk"
</script>

<style lang="scss">
.contact-us-lead {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__button {
    margin-top: 0.5rem;
  }
}
</style>