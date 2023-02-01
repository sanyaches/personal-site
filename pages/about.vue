<template>
  <div class="about initial-page-padding">
    <div class="single-page-container about__container">
      <section class="about__first-section">
        <div class="container-m">
          <div class="about__header">
            <h1>About my personality</h1>
            <h2>My story</h2>
          </div>
          <div class="story-section" v-for="i of Array.from({ length: 10 })">
            <div class="story-section__image">
              <img src="~/assets/images/about-01-v2.png" alt="">
            </div>
            <div class="story-section__text">Hi there! If you're reading this, you're probably like me—spending most of your days in your office, in front of a computer.</div>
          </div>
          <div class="section-margin-xl">
            <q class="quote">
              <b>”The best way to predict the future is to invent it.”</b>
              <br>
              Alan Kay, computing pioneer
            </q>
          </div>
        </div>
      </section>
      <section>
        <div class="container-m">
          <hr>
          <div class="section-margin-m">
            <ContactMeLead />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import ContactMeLead from '~~/components/blocks/ContactMeLead.vue';

</script>

<style lang="scss" scoped>
.about {
  &__header,
  &__first-section {
    margin-bottom: 3.75rem;

    @include media-breakpoint-up(md) {
      margin-bottom: 5rem;
    }

    @include media-breakpoint-up(xl) {
      margin-bottom: 7.5rem;
      margin-top: 3.75rem;
    }
  }

  &__header h1 {
    color: var(--text-color-light);
    font-size: 1.3125rem;
    font-weight: 544;
    letter-spacing: -0.010625em;
    margin-bottom: 1.4375rem;
    margin-top: 0.875rem;
  }

  &__header h2 {
    font-variation-settings: "wght" 669;
    letter-spacing: -0.0307em;
    font-size: 3.3125rem;
    line-height: 2.25rem;
    font-weight: 700;

    @include media-breakpoint-down(md) {
      font-size: 4.5rem;
      line-height: 5rem;
      letter-spacing: -0.0269em;
    }
  }

  &__text {
    margin-top: 0.75rem;
    max-width: 37em;
  }

  &__text p {
    margin: 1rem 0;
  }
}

.story-section {
  max-width: 940px;
  margin: 0 auto 7.5rem;

  @include media-breakpoint-up(md) {
    display: flex;
    margin-bottom: 8.75rem;
  }

  &__image {
    align-items: flex-start;
    border-bottom: 2px solid black;
    display: flex;
    flex: 0 0 auto;
    line-height: 0;

    @include media-breakpoint-up(md) {
      width: 450px;
    }
  }

  &__image img {
    width: 100%;
    height: auto;
  }

  &__text {
    flex: 1 1 auto;
    padding-top: 1.25rem;
    margin: 0;

    @include media-breakpoint-up(md) {
      padding: 0 1rem 0 4rem;
    }
  }
}

hr {
  height: 1px;
  outline: none;
  border: none;
  margin: 0 auto;
  padding: 0;
  display: block;
  width: 100%;
  border-top: 1px solid var(--border-color-regular);
}
.quote {
  font-size: 1.5em;
  font-weight: 430;
  line-height: 1.375;
  letter-spacing: -0.015em;

  &::before, &::after {
    content: none;
  }
}
</style>