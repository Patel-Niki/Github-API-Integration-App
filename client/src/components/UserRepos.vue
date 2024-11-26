<!-- src/components/UserRepos.vue -->
<template>
    <div>
      <h3>{{ username }}'s Repositories:</h3>
      <ul>
        <li v-for="repo in repos" :key="repo.id">{{ repo.name }}</li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    props: {
      username: String,
    },
    setup(props) {
      const repos = ref([]);
  
      onMounted(async () => {
        try {
          const response = await axios.get(`/api/github/repos/${props.username}`);
          repos.value = response.data;
        } catch (error) {
          console.error('Error fetching repositories:', error);
        }
      });
  
      return { repos };
    },
  });
  </script>
  