<template>
  <img class="object-cover w-16 h-16 bg-gray-300 border-2 border-blue-600 rounded-full" :src="src" :alt="alt" />
</template>

<script lang="ts">
export default {
  props:{
      src:{
          type: String,
          required: true
      },
      alt:{
          type: String,
          default: ''
      }
  },
};
</script>
