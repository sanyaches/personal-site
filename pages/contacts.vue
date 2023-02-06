<template>
  <div class="container-m initial-page-padding contacts">
    <div class="contacts__content">
      <div class="contacts__header">
        <h1>Contact me</h1>
        <p>I'm always open to any offer</p>
      </div>
      <div class="contacts__socials">
        <BlocksSocials />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contacts {
  padding-bottom: 8rem;
  
  &__content {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &__header {
    text-align: center;
    margin-bottom: 2rem;
  }

  &__header h1 {
    font-size: 3rem;
  }

  &__header p {
    font-size: 1.2rem;
  }

  &__socials {
    display: flex;
    justify-content: center;
  }
}
</style>
