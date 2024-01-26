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

const submitForm = () => {
  const newBlog = {
    title: title.value,
    description: description.value,
    category: category.value,
    content: content.value,
  }

  store.dispatch('addNewBlog', newBlog)

  // Clear form fields after submission
  title.value = ''
  description.value = ''
  category.value = ''
  content.value = ''
}
</script>
