<template>
  <div>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">{{ blog.title }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const blogs = ref(store.state.blogs);

const fetchBlogs = async () => {
  await store.dispatch('fetchBlogs');
  blogs.value = store.state.blogs;
};

onMounted(() => {
  fetchBlogs();
});
</script>
