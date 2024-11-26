<!-- src/components/UserInfo.vue -->
<template>
  <div v-if="userInfo" class="p-4">
    <img :src="userInfo.avatar_url" alt="Avatar" class="w-32 h-32 rounded-full mb-4" />
    <h2 class="text-2xl font-bold mb-2">{{ userInfo.name }}</h2>
    <p class="text-lg mb-4">{{ userInfo.bio }}</p>
    <button @click="fetchRepos" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
      Get Repositories
    </button>
    <UserRepos :username="username" />
  </div>
  <div v-else class="text-center text-gray-500">
    <p>Loading...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import UserRepos from './UserRepos.vue';

export default defineComponent({
  components: {
    UserRepos,
  },
  data() {
    return {
      userInfo: null,
      username: 'octocat',
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`/api/github/user/${this.username}`);
      this.userInfo = response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  },
  methods: {
    fetchRepos() {
      // Handle fetching repos, if necessary
    },
  },
});
</script>
