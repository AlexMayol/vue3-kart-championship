<template>
  <div class="space-y-2">
    <router-link
      :to="'/pilots/' + nameToURL(position.pilot.name)"
      v-for="(position, index) of pilotRanking"
      :key="position.pilot._id"
      class="flex items-center p-2 space-x-2 transition bg-blue-200 rounded hover:bg-blue-400"
    >
      <div>
        <Avatar :src="position.pilot.picture" />
      </div>
      <div class="flex flex-col">
        <span
          :class="{
            'text-3xl': index + 1 === 1,
            'text-2xl': index + 1 === 2,
            'text-xl': index + 1 === 3,
          }"
        >
          {{ index + 1 }}{{ addPositionSufix(index + 1) }}
        </span>

        <span class="font-bold">{{ position.pilot.name }} </span>
      </div>
      <div>
        <TrophyIcon
          v-if="index + 1 < 4"
          class="w-8 h-8 p-0.5 fill-current"
          :class="{
            'text-yellow-300': index + 1 === 1,
            'text-gray-400': index + 1 === 2,
            'text-yellow-600': index + 1 === 3,
          }"
        />
      </div>
      <span class="text-sm"
        >(team
        <span class="text-lg font-semibold">{{ position.pilot.team }}</span
        >)</span
      >
      <span>{{ position.points }} points</span>
      <span v-if="position.victories > 0">({{ position.victories }} wins)</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useRanking, usePilotList } from "@/hooks";
import { addPositionSufix, nameToURL } from "@/helpers";
import { Pilot, Ranking } from "@/interfaces";

import {TrophyIcon} from "@/components/UI/Icons";
import Avatar from "@/components/Pilots/Avatar.vue";

export default defineComponent({
  setup() {
    const pilots = usePilotList();
    const ranking = useRanking();

    function mixPilots(pilots: Pilot[], ranking: Ranking[]) {
      const res = [];

      for (const rank of ranking)
        for (const pilot of pilots)
          if (rank.pilotId === pilot._id)
            res.push({ pilot, points: rank.points, victories: rank.victories });

      return res;
    }

    const pilotRanking = mixPilots(pilots, ranking);
    return { pilotRanking, addPositionSufix, nameToURL };
  },
  name: "Leaderboard",
  components: {
    Avatar,
    TrophyIcon,
  },
});
</script>
