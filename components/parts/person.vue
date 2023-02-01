<template>
  <div class="person" :class="{'is--large': size === 'large'}">
    <div v-if="$slots.image" class="person__image">
      <slot name="image" />
    </div>
    <div class="person__text">
      <div v-if="name" class="person__name">
        {{ name }}
      </div>
      <div v-if="department" class="person__title">
        {{ department }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: null,
  },
  department: {
    type: String,
    default: null,
  }
})
</script>

<style lang="scss" scoped>
.person {
  display: flex;
  align-items: center;
  
  &__image {
    margin-right: 0.375rem;
    mix-blend-mode: multiply;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    .is--large & {
      width: 60px;
      height: 60px;
    }
  }

  &__text {
    font-size: 0.875rem;
    margin-left: 0.375rem;
    padding-bottom: 0.125rem;
  }

  &__name {
    color: rgba(17, 17, 17, 1);
  }

  &__title {
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>