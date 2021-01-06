<template>
  <div
    class="p-2 transition border border-gray-300 rounded cursor-pointer hover:bg-pink-100"
  >
    <div class="flex justify-center w-full">
      <img class="rounded-full" :src="pilot.picture" alt="" />
    </div>
    <h1 class="text-lg font-bold text-center">{{ pilot.name }}</h1>
    <p>{{ pilot.age }}</p>
    <p>{{ pilot.team }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { Pilot } from "@/interfaces";
export default defineComponent({
  props: {
    pilot: {
      type: Object,
      required: true,
    },
  },
  name: "PilotCard",
});
</script>
