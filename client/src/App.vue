<!-- src/App.vue -->
<template>
  <div id="app">
    <UserInfo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserInfo from './components/UserInfo.vue';

export default defineComponent({
  components: {
    UserInfo,
  },
});
</script>
