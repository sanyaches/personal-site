<template>
  <footer class="footer pt-2.5rem position-relative">
    <div class="footer-lists single-page-container">
      <div class="flex flex-wrap py-2rem mb-2rem">
        <div class="w-12/12 lg:w-4/12 mb-2rem">
          <NuxtLink to="/">
            <LogoIcon />
          </NuxtLink>
        </div>

        <div class="w-6/12 sm:w-3/12 lg:w-2/12 mb-2rem md:mb-0.5rem pr-1rem lg:pr-0 lg:pl-2.4rem">
          <h2 class="mb-1rem text-mono color-fg-muted font-normal">
            Projects
          </h2>

          <ul class="list-none color-fg-muted f5">
            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/projects/3d-simulations">3D simulations</NuxtLink>
            </li>

            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/projects/vikosto">Education platform</NuxtLink>
            </li>

            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/projects">All projects</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="w-6/12 sm:w-3/12 lg:w-2/12 mb-2rem md:mb-0.5rem pr-1rem md:pr-0 md:pl-2.4rem">
          <h2 class="mb-1rem text-mono color-fg-muted font-normal">
            Resources
          </h2>

          <ul class="list-none f5">
            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/blog">Blog</NuxtLink>
            </li>   
          </ul>
        </div>

        <div class="w-6/12 sm:w-3/12 lg:w-2/12 mb-2rem md:mb-0.5rem pr-1rem md:pr-0 md:pl-2.4rem">
          <h2 class="mb-1rem text-mono color-fg-muted font-normal">
            Me
          </h2>

          <ul class="list-none f5">
            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/about">About</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="w-6/12 sm:w-3/12 lg:w-2/12 mb-2rem md:mb-0.5rem pr-1rem md:pr-0 md:pl-2.4rem">
          <h2 class="mb-1rem text-mono color-fg-muted font-normal">
            Reach me
          </h2>

          <ul class="list-none f5">
            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/contacts">Contacts</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-copyright">
      <div class="single-page-container py-2.4rem sm:flex justify-between flex-row-reverse items-center">
        <BlocksSocials />

        <ul class="list-none flex flex-wrap color-fg-muted">
          <li class="mr-1rem">
            © 2023 Aleksandr Savkin
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import LogoIcon from '@/assets/icons/logo.svg?component'
</script>

<style lang="scss" scoped>
.footer {
  z-index: var(--z-footer);
  background: var(--footer-background);
}

.footer-lists, h2 {
  font-size: 1.1rem;
}

.footer-copyright {
  font-size: 0.85rem;
  font-family: var(--font-family-2);
}
</style>
