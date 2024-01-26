<template>
  <nav
    :class="{ 'text-right flex-row-reverse': isArabic }"
    class="flex items-center justify-between flex-wrap bg-black p-6"
  >
    <div
      class="flex items-center flex-shrink-0 text-white mx-4 border-white border-2 p-4 rounded-2xl"
    >
      <span class="font-sans text-2xl tracking-tight">{{ $t('MyBlog') }}</span>
    </div>
    <div class="w-full lg:flex lg:items-center lg:w-auto lg:justify-between">
      <div
        :class="{ 'mr-4': !isArabic, 'ml-4 flex-row-reverse': isArabic }"
        class="text-sm lg:flex lg:items-center"
      >
        <NuxtLink
          to="/"
          class="block mt-4 mx-5 lg:inline-block lg:mt-0 text-white hover:bg-white hover:text-black hover:p-2 hover:rounded-lg font-bold text-base"
          active-class="text-black bg-white p-2 rounded-lg active-link"
        >
          {{ $t('Home') }}
        </NuxtLink>
        <NuxtLink
          to="/addBlog"
          class="block mt-4 mx-5 lg:inline-block lg:mt-0 text-white hover:bg-white hover:text-black hover:p-2 hover:rounded-lg font-bold text-base"
          active-class="text-black bg-white p-2 rounded-lg active-link"
        >
          {{ $t('AddBlog') }}
        </NuxtLink>
      </div>
    </div>
    <div
      class="grid grid-cols-2 divide-x divide-x-gray-400 border border-white text-white rounded-md lg:w-24 md:w-14 sm:5 m-5"
    >
      <button
        :class="`uppercase px-2 ${
          locale === 'en' ? 'bg-white text-black' : ''
        }`"
        @click="changeLang('en')"
      >
        en
      </button>
      <button
        :class="`uppercase px-2 ${
          locale === 'ar' ? 'bg-white text-black' : ''
        }`"
        @click="changeLang('ar')"
      >
        ar
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const changeLang = (lang: any) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
const isArabic = computed(() => locale.value === 'ar')
</script>
<style scoped>
.active-link {
  color: black !important;
}
</style>
