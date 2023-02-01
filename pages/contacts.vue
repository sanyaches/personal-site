<template>
  <div class="container-m initial-page-padding contact-us">
    <div class="contact-us__content">
      <div class="contact-us__header">
        <h1>Contact me</h1>
        <p>I'm always open to your offers and suggestions</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-us {
  &__content {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &__header {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 4rem;
  }

  &__header h1 {
    font-size: 3rem;
  }

  &__header p {
    font-size: 1.2rem;
  }

  &__header-error {
    color: red;
  }
}
</style>
