<template>
  <div class="blog-page blog-container">
    <div class="blog-page__layout">
      <aside class="blog-page__aside">
        <div class="blog-page__aside-content">
          <div class="blog-page__aside-content-inner">
            <h1>Alex's blog</h1>
            <p>
              My personal thoughts and achievements
            </p>
            <div class="blog-page__aside-topics">
              <BlocksTopics />
            </div>
          </div>
        </div>
      </aside>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-container {
  width: 100%;
  padding: 0 2.4rem;
  margin: 0 auto;

  @include media-breakpoint-up(md) { 
    width: 88vw;
    max-width: 1392px;
    padding: 0;
    margin: 0 auto;
  }
}

.blog-page {
  padding-top: 8rem;
  padding-bottom: 1rem;

  @include media-breakpoint-up(md) { 
    padding-bottom: 4rem;
  }

  @include media-breakpoint-up(lg) {
    padding-bottom: 8rem;
  }

  &__layout {
    margin-bottom: 3.75rem;

    @include media-breakpoint-up(lg) { 
      display: grid;
      grid-template-columns: 235px auto;
      grid-gap: 3.75rem;
    }
  }
  
  &__aside {
    @include media-breakpoint-up(lg) {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  
  &__aside-content {
    top: 140px;
    position: sticky;
    overflow: auto;
    padding-right: 1rem;
  }

  &__aside-content h1 {
    font-size: 3rem;
    line-height: 0.9;
    margin-bottom: 2rem;
  }

  &__aside-content p {
    font-size: 0.9375rem;
    color: rgba(0, 0, 0, 0.6);
    max-width: 300px;
    
    @include media-breakpoint-up(lg) { 
      font-size: 0.875rem;
      max-width: 200px;
    }
  }

  &__aside-content-inner {
    position: relative;
  }

  &__aside-topics {
    margin: 3rem 0;

    @include media-breakpoint-up(lg) { 
      margin: 3rem 0 0;
    }
  }

  &__aside-topics::before {
    content: '';
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    display: block;
    
    @include media-breakpoint-up(lg) {
      width: 5rem;
    }
  }
}
</style>