<template>
  <section v-if="pilot" class="home">
    <Card :pilot="pilot" />

    <div class="grid grid-cols-2 gap-4 my-4 md:grid-cols-3">
      <div v-for="race of races" :key="race.name">
        <PilotRaceResult :result="race" />
      </div>
    </div>
  </section>

  <section v-else>
    <p>Seems this pilot does not exist, pal :(</p>
    <router-link to="/pilots">
      <div
        class="inline-flex p-4 my-4 text-center text-white bg-blue-500 rounded-lg"
      >
        Browse all pilots
      </div>
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

import { Leaderboard, Pilot } from "@/interfaces";

import { useFindPilotByName, useLeaderboard } from "@/hooks";

import Card from "@/components/Pilots/Card.vue";
import PilotRaceResult from "@/components/Races/PilotRaceResult.vue";

export default defineComponent({
  name: "PilotDashboardView",

  setup() {
    const route = useRoute();

    const leaderboard = useLeaderboard();

    const pilot: Pilot | undefined = useFindPilotByName(`${route.params.name}`);

    function createRaceList(leaderboard: Leaderboard[], pilotId: string) {
      const races = [];
      for (const race of leaderboard) {
        const x = {
          raceName: race.raceName,
          time: race.result.find((r) => r.pilotId === pilotId)?.time || "",
          position: race.result.findIndex((r) => r.pilotId === pilotId) + 1,
        };
        races.push(x);
      }

      return races;
    }

    let races = null;
    if (pilot) races = createRaceList(leaderboard, pilot._id);

    return { pilot, races };
  },
  components: {
    Card,
    PilotRaceResult,
  },
});
</script>
