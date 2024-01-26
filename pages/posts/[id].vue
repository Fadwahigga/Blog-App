<template>
  <div class="col-span-2 flex justify-center m-10 font-sans">
    <div class="w-full h-4/5 mb-10">
      <div class="relative bg-white rounded-lg shadow">
        <div class="py-5 px-6" v-if="blog">
          <h1
            class="text-2xl sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 text-center capitalize"
          >
            {{ blog.title.slice(0, -1) }}
          </h1>
          <div class="flex justify-center mb-4">
            <img :src="blog.photo_url" alt="" class="max-w-full h-auto" />
          </div>
          <p
            class="text-gray-600 text-2xl sm:text-l md:text-xl lg:text-lg xl:text-xl"
          >
            {{ blog.content_text }}
          </p>
        </div>
        <div v-else>
          <!-- Skeleton Loader -->
          <div class="animate-pulse h-6 bg-gray-300 w-3/4 mb-4"></div>
          <div class="animate-pulse h-4 bg-gray-300 w-2/3 mb-2"></div>
          <div class="animate-pulse h-4 bg-gray-300 w-1/2 mb-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
const store = useStore()

const {
  params: { id },
} = useRoute()
const blog = ref()

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
    )
    blog.value = response.data.blog
    store.commit('setDataState', response.data.blog)
  } catch (error) {
    console.error('Error fetching blog data:', error)
  }
})
</script>
