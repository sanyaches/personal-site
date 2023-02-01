<template>
  <div class="layout">
    <TemplatesTheHeader />

    <main class="main pt-5rem">
      <div>
        <slot />
      </div>
    </main>

    <div class="footer">
      <TemplatesTheFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header,
.footer,
.main {
  width: 100%;
}

.header,
.footer {
  flex-shrink: 0;
}

.main {
  flex-grow: 1;
}
</style>
