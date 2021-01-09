<template>
  <div
    class="overflow-hidden transition border border-gray-300 rounded hover:bg-blue-100"
    :style="style"
  >
    <div class="p-2 text-center bg-white bg-opacity-90">
      <h2 class="text-lg font-bold text-center">{{ result.raceName }}</h2>
      <p>
        Time: <span class="text-lg font-semibold">{{ result.time }}</span>
      </p>
      <div class="flex items-center justify-center space-x-2">
        <Trophy v-if="result.position === 1" classes="w-4 h-4 animate-bounce" />

        <span class="text-xl font-semibold">
          {{ result.position + addPositionSufix(result.position) }}
        </span>
        <span> position</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { addPositionSufix } from "@/helpers";

import Trophy from "@/components/UI/Icons/Trophy.vue";
export default defineComponent({
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const style = `
            background-image: url(img/circuit.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            
      `;
    return { style, addPositionSufix };
  },
  name: "PilotRaceResult",
  components: {
    Trophy,
  },
});
</script>
