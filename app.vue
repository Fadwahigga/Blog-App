<template>
  <NuxtLayout>
    <NuxtPage :class="directionClass"/>
  </NuxtLayout>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from "vue-i18n";
const { locale } = useI18n();


// Compute the direction class based on the locale
const directionClass = computed(() => {
  return locale.value === 'ar' ? "rtl" : "ltr";
});
</script>
<style>
.rtl {
  direction: rtl;
}

/* LTR Styles */
.ltr {
  direction: ltr;
}
</style>