<template>
  <header
    class="header"
    :class="{'menu-open': menuOpen}"
    role="banner"
  >
    <div class="Header-backdrop">
      <div class="HeaderMenu">
        <div class="HeaderMenu__wrapper single-page-container">
          <ul class="list-none">
            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/projects">Projects</NuxtLink>
            </li>
            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/about">About me</NuxtLink>
            </li>   
            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/blog">Blog</NuxtLink>
            </li>
            <li class="lh-condensed mb-1rem">
              <NuxtLink class="link" to="/contacts">Contacts</NuxtLink>
            </li> 
          </ul>
        </div>
      </div>
    </div>

    <div class="header-wrapper">
      <div class="header-container single-page-container">
        <div class="header-nav__mobile">
          <nuxt-link
            to="/"
            class="header-logo"
            aria-label="Homepage"
          >
            <span>
              <LogoIcon />
            </span>
          </nuxt-link>
          <div class="header-nav__mobile-item header-burger-wrapper">
            <button
              aria-label="Toggle navigation"
              aria-expanded="false"
              type="button"
              @click="menuOpen = !menuOpen"
              class="js-details-target Button--link Button--medium menu-button"
            >
              <span class="menu-button-content">
                <span class="menu-button-label">
                  <div class="HeaderMenu-toggle-bar"></div>
                  <div class="HeaderMenu-toggle-bar"></div>
                  <div class="HeaderMenu-toggle-bar"></div>
                </span>
              </span>
            </button>
          </div>
        </div>

        <div class="header-nav__desktop">
          <nav class="nav">
            <ul class="nav-list">
              <li class="mr-2">
                <nuxt-link
                  to="/projects"
                  class="nav-link nav-link-button"
                >
                  Projects
                </nuxt-link>
              </li>
              <li class="mr-2">
                <nuxt-link
                  to="/about"
                  class="nav-link nav-link-button"
                >
                  About
                </nuxt-link>
              </li>
              <li class="mr-2">
                <nuxt-link
                  to="/blog"
                  class="nav-link nav-link-button"
                >
                  Blog
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/contacts"
                  class="nav-link nav-link-button"
                >
                  Contacts
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoIcon from '@/assets/icons/logo.svg?component'
const menuOpen = ref(false)
const route = useRoute()
const closeMenu = () => {
  menuOpen.value = false;
}
watch(route, closeMenu)
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: block;
  z-index: var(--z-header);
  transition: background-color;
  font-weight: 500;
  color: var(--header-text-color);
  
  &-wrapper {
    box-shadow: var(--header-box-shadow);
    background: var(--header-background);
  }
  
  &-container {
    display: flex;
    align-items: center;
  }

  &-logo {
    flex-shrink: 0;

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}

.header-wrapper {
  padding: 0 1rem;

  .header-container {
    position: relative;
    padding: var(--header-padding);
    transition: all 0.3s ease;
  }

  .header-nav__desktop {
    display: none;
    flex: 1 1 0%;
    justify-content: space-between;

    @include media-breakpoint-up(lg) {
      display: flex;
    }
  }

  .header-nav__mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @include media-breakpoint-up(lg) {
      width: auto;
    }
  }

  .header-nav__mobile-item {
    flex: 1 1 0%;

    @include media-breakpoint-up(lg) {
      display: none;
    }
  }

  .header-burger-wrapper {
    order: 2;
    text-align: right;
  }

  .header-logo {
    margin-right: 0;
    order: 2;

    @include media-breakpoint-up(lg) {
      margin-right: 1rem;
    }
  }
}

.nav {
  &-list {
    display: flex;
    align-items: center;
  }

  .nav-button,
  .nav-link {
    @include button-reset;

    padding: 0.5rem;
    position: relative;
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 0.0125rem;
    color: var(--header-nav-link-color);
  }

  .nav-link.nav-link-button {
    transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    opacity: 1;
    border-radius: 0.25rem;

    &:hover,
    &:focus {
      background: var(--header-button-background-hover);
    }

    &:active {
      background: var(--header-button-background-active);
    }
  }

  .nav-item {
    position: relative;
  }
}

.menu-button {
  align-items: center;
  background-color: initial;
  border: none;
  border-radius: 6px;
  color: var(--color-btn-text);
  cursor: pointer;
  flex-direction: row;
  font-size: 0.875rem;
  font-weight: 500;
  gap: 0.5rem;
  justify-content: space-between;
  min-width: max-content;
  position: relative;
  text-align: center;
  transition: 80ms cubic-bezier(0.65,0,0.35,1);
  transition-property: color,fill,background-color,border-color;
  user-select: none;
  display: inline-block;
  height: unset;
  padding: 0.25rem;

  @include media-breakpoint-up(lg) {
    display: none;
  }

  &-content {
    align-items: center;
    display: grid;
    flex: 1 0 auto;
    grid-template-columns: min-content minmax(0, auto) min-content;
    place-content: center;
  }

  &-label {
    grid-area: text;
    line-height: 1.42857;
    white-space: nowrap;
  }
}

.HeaderMenu-toggle-bar:nth-of-type(1) {
  transform-origin: bottom right;
}

.HeaderMenu-toggle-bar:nth-of-type(3) {
  transform-origin: top right;
}

.HeaderMenu-toggle-bar {
  width: 1.375rem;
  height: 0.125rem;
  background-color: var(--color-fg-on-emphasis);
  margin: 0.25rem 0;
  border-radius: 0.25rem;
}

.menu-open .HeaderMenu-toggle-bar:nth-of-type(1) {
  transform: rotate(-45deg) translateY(-3px);
}

.menu-open .HeaderMenu-toggle-bar:nth-of-type(2) {
  opacity: 0;
  transform: scale(0);
}

.menu-open .HeaderMenu-toggle-bar:nth-of-type(3) {
  transform: rotate(45deg) translateY(3px);
}

@media (prefers-reduced-motion: no-preference) {
  .HeaderMenu-toggle-bar,
  .Header-backdrop,
  .HeaderMenu {
    transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    transition-duration: 500ms;
    transition-property: opacity,transform;
  }
}

.Header-backdrop {
  visibility: hidden;
  background: var(--header-backdrop-background);
  opacity: 0;
  border-width: 0;
  border-style: solid;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem 0;

  @include media-breakpoint-up(lg) {
    display: none;
  }
}

.menu-open .Header-backdrop {
  visibility: visible;
  opacity: 1;
  backdrop-filter: blur(3px);
}

.HeaderMenu {
  contain: layout;
  width: 100%;
  pointer-events: none;
  visibility: visible;
  padding-top: 4.5rem;
  padding-bottom: 2.4rem;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  font-size: 1.5rem;

  @include media-breakpoint-up(lg) {
    width: auto;
    padding: 0 !important;
    transition: none;
    visibility: hidden;
    position: relative;
  }

  @include media-breakpoint-down(lg) {
    display: flex;
    height: 100%;
    transform-origin: top right;
  }
}

@include media-breakpoint-down(lg) {
  .header:not(.menu-open) .HeaderMenu {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transform: scale(0.9) translateY(-24px);
  }
}

.HeaderMenu__wrapper {
  pointer-events: auto;
}

.HeaderMenu a.router-link-active {
  padding-left: 0.5rem;
  text-decoration: underline;
}
</style>
