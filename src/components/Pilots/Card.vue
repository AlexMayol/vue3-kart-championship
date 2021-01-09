<template>
  <div class="transition border border-blue-300 rounded">
    <div class="h-16 bg-gradient-to-r from-blue-500 to-blue-400"></div>
    <div class="p-2 text-center">
      <div class="flex justify-center w-full -mt-10">
        <Avatar :src="pilot.picture" />
      </div>


      <h1 class="text-lg font-bold text-center text-gray-700">
        {{ pilot.name }}
      </h1>

      <slot name="points"></slot>

      <div class="text-gray-600">
        Team
        <span class="text-lg font-semibold text-gray-700">{{
          pilot.team
        }}</span>
      </div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Avatar from "@/components/Pilots/Avatar.vue";
export default defineComponent({
  props: {
    pilot: {
      type: Object,
      required: true,
    },
  },
  name: "PilotCard",
  components: {
    Avatar,
  },
});
</script>
