<template>
  <div class="p-8">
    <form @submit.prevent="submitForm">
      <label class="block mb-2">
        {{ $t('Title') }}*
        <input
          v-model="title"
          type="text"
          class="border p-2 w-full focus:outline-none"
          required
        />
      </label>
      <label class="block mb-2">
        {{ $t('Description') }}*
        <textarea
          v-model="description"
          class="border p-2 w-full focus:outline-none"
          required
        ></textarea>
      </label>
      <label class="block mb-2 focus:outline-none">
        {{ $t('Category') }}*
        <input
          v-model="category"
          type="text"
          class="border p-2 w-full focus:outline-none"
          required
        />
      </label>
      <label class="block mb-2 focus:outline-none">
        {{ $t('Content') }}*
        <textarea
          v-model="content"
          class="border p-2 w-full focus:outline-none"
          required
        ></textarea>
      </label>
      <label class="block mb-2 focus:outline-none">
        {{ $t('Photo') }}*
        <div class="relative border p-2 w-full focus:outline-none">
          <input
            type="file"
            accept="image/*"
            @change="handleFileUpload"
            class="opacity-0 absolute inset-0"
            required
          />
          <div class="flex">
            <span> {{ $t('FileSelected') }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="cursor-pointer"
            >
              <path
                fill="#333"
                d="M9 16h6v-6h4l-7-7-7 7h4v6zm3-10h-4.18C14.4 6.35 13.35 6 12 6c-1.35 0-2.4.35-3.18.94L6.82 9H9v2H7v2h2v2h2v-2h2v-2h-2V9z"
              />
            </svg>
          </div>
        </div>
      </label>
      <button
        type="submit"
        class="bg-black text-white p-2 rounded focus:outline-none"
      >
        {{ $t('AddBlog') }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const title = ref('')
const description = ref('')
const category = ref('')
const content = ref('')
const photo = ref(null)

const submitForm = () => {
  const newBlog = {
    title: title.value,
    description: description.value,
    category: category.value,
    content: content.value,
    photo: photo.value,
  }
  // Clear form fields after submission
  title.value = ''
  description.value = ''
  category.value = ''
  content.value = ''
  photo.value = null

  // Dispatch the addBlog action to add the new blog to the store
  store.dispatch('blog/addBlog', newBlog)
}
const handleFileUpload = (event: any) => {
  const file = event.target.files[0]
  photo.value = file
}
</script>
