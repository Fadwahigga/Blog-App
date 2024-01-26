<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const posts = ref([
  { id: 1, title: 'Blog Post 1', description: 'This is blog post 1', slug: 'blog-post-1' },
  { id: 2, title: 'Blog Post 2', description: 'This is blog post 2', slug: 'blog-post-2' },
]);
</script>
