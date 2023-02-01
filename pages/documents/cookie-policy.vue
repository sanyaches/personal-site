<template>
  <TemplatesDocumentPage :document-path="documentPath">
    <template #ending>
      <BlocksContactMeLead :title="contactTitle"/>
    </template>
  </TemplatesDocumentPage>
</template>

<script setup>
const documentPath = '/documents/cookie-policy'
const contactTitle = 'Do you have any questions about our cookie policy?'
</script>
