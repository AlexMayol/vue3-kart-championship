<template>
  <router-link :to="raceName">
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
          <Trophy
            v-if="result.position === 1"
            classes="w-4 h-4 animate-bounce"
          />

          <span class="text-xl font-semibold">
            {{ result.position + addPositionSufix(result.position) }}
          </span>
          <span> position</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>

import { addPositionSufix, nameToURL } from "@/helpers";

import Trophy from "@/components/UI/Icons/Trophy.vue";
export default {
  props: {
    result: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const style = `
            background-image: url(img/circuit.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            
      `;
    const raceName = `/races/${nameToURL(props.result.raceName)}`;
    return { style, addPositionSufix, raceName };
  },
  name: "PilotRaceResult",
  components: {
    Trophy,
  },
};
</script>
