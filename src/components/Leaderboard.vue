<template>
  <div class="space-y-2">
      <router-link :to="'/pilots/'+pilotNameToURL(position.pilot.name)" v-for="(position, index) of pilotRanking" :key="position.pilot._id" class="flex items-center p-2 space-x-2 transition bg-pink-200 rounded hover:bg-pink-400">
          <div>
            <Avatar :src="position.pilot.picture" />
          </div>
          <span>
          {{index + 1}}{{addPositionSufix(index + 1)}}
          </span>

          <span>{{position.pilot.name}}</span>
          <span>{{position.points}} points</span>
          <span v-if="position.victories > 0">({{position.victories}} wins)</span>
  </router-link>
      </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useRanking, usePilotList } from "@/hooks";
import {addPositionSufix, pilotNameToURL} from '@/helpers'
import { Pilot, Ranking } from "@/interfaces";

import Avatar from '@/components/Pilots/Avatar.vue'

export default defineComponent({
  setup() {
    const pilots = usePilotList();
    const ranking = useRanking();

    function mixPilots(pilots: Pilot[], ranking: Ranking[]) {
      const res = [];

      for (const rank of ranking)
        for (const pilot of pilots) if (rank.pilotId === pilot._id) res.push({ pilot, points: rank.points, victories: rank.victories });

      console.log(res);
      return res;
    }

    const pilotRanking = mixPilots(pilots, ranking);
    return { pilotRanking, addPositionSufix, pilotNameToURL };
  },
  name: "Leaderboard",
  components:{
    Avatar
  }
});
</script>
