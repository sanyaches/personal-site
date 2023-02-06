<template>
  <div class="socials">
    <ul class="socials__list">
      <li class="socials__item">
        <a class="socials__link" target="_blank" href="https://linkedin.com/in/sanyaches" rel="noopener noreferrer">
          <LinkedinIcon />
        </a>
      </li>
      <li class="socials__item">
        <a class="socials__link" target="_blank" href="https://t.me/sanya_ches" rel="noopener noreferrer">
          <TelegramIcon />
        </a>
      </li>
      <li class="socials__item">
        <a class="socials__link" target="_blank" href="https://github.com/sanyaches" rel="noopener noreferrer">
          <GithubIcon />
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import LinkedinIcon from '@/assets/icons/social-linkedin.svg?component'
import TelegramIcon from '@/assets/icons/telegram.svg?component'
import GithubIcon from '@/assets/icons/github.svg?component'
</script>

<style lang="scss" scoped>
.socials {
  &__list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    gap: 0.5rem;
  }

  &__link {
    width: 36px;
    height: 36px;
    border-radius: 4px;
    display: block;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover, &:focus, &:active {
      background-color: #e9e5e5;
    }
  }
}
</style>