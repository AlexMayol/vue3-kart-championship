<template>
  <router-link :to="pilotURL">
    <div class="relative flex p-2 space-x-2 bg-blue-200 rounded">
      <div>
        <PilotAvatar :src="pilot.picture" />
      </div>
      <div class="flex flex-col">
        <div class="text-xl">
          {{ pilot.name }}
        </div>
        <span>{{ position }}{{ addPositionSufix(position) }} position</span>
        <TrophyIcon v-if="position < 4" class="absolute top-0 right-0 w-8 h-8 p-0.5 fill-current"
        :class="{'text-yellow-300': position === 1,'text-gray-400': position === 2, 'text-yellow-600': position === 3}"
         />
      </div>
    </div>
  </router-link>
</template>

<script>
import { nameToURL, addPositionSufix } from "@/helpers";

import TrophyIcon from '@/components/UI/Icons/Trophy.vue'

import PilotAvatar from "@/components/Pilots/Avatar.vue";
export default {
  props: {
    pilot: {
      type: Object,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const pilotURL = `/pilots/${nameToURL(props.pilot.name)}`;
    return { pilotURL, addPositionSufix };
  },
  components: {
    PilotAvatar,
    TrophyIcon
  },
};
</script>
