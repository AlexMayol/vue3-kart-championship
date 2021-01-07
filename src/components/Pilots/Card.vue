<template>
  <div
    class="p-2 transition border rounded cursor-pointer "
  >
    <div class="flex justify-center w-full">
     <Avatar :src="pilot.picture" />
    </div>
    <h1 class="text-lg font-bold text-center">{{ pilot.name }}</h1>
    <p>{{ pilot.age }}</p>
    <p>{{ pilot.team }}</p>
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
  components:{
    Avatar
  }
});
</script>
