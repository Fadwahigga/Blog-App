<template>
  <div class="p-8 mb-10 font-sans ">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
    >
      <div
        v-if="blogs"
        v-for="blog in blogs"
        :key="blog.id"
        :style="{ background: getRandomColor() }"
        class="bg-white rounded-2xl py-24 px-4 shadow-md text-white relative"
      >
        <h1 class="block lg:text-2xl md:text-2xl sm:text-xl font-bold">
          {{ blog.title.slice(0, -1)  }}
        </h1>
        <p class="mt-2 text-sm">{{ blog.description.slice(0, -1)  }}</p>
        <p class="mt-2 text-sm capitalize">Category: {{ blog.category }}</p>
        <NuxtLink
          :to="`/posts/${blog.id}`"
          class="absolute bottom-2 right-4 text-sm hover:underline"
        >
          {{$t('More')}}
        </NuxtLink>
      </div>
      <div v-else>
        <!-- Skeleton Loader -->
        <div class="animate-pulse h-6 bg-gray-300 w-3/4 mb-4"></div>
        <div class="animate-pulse h-4 bg-gray-300 w-2/3 mb-2"></div>
        <div class="animate-pulse h-4 bg-gray-300 w-1/2 mb-2"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted, h } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const store = useStore()
const blogs = ref()

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  // Add shadow to the background
  return `${color} linear-gradient(rgba(0, 0,1, 0.5), rgba(0, 0, 0, 0.5))`
}

onMounted(async () => {
  try {
    const response = await axios.get(
      'https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=9'
    )
    blogs.value = response.data.blogs
    store.commit('setDataState', response.data.blogs)
  } catch (error) {
    console.error('Error fetching blog data:', error)
  }
})
</script>
