<template>
  <img class="object-cover w-16 h-16 rounded-full" :src="src" :alt="alt" />
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
