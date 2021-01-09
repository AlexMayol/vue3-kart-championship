<template>
  <section v-if="race">
    <h2 class="mb-4 text-3xl font-semibold">{{ race.raceName }}</h2>

    <div class="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
      <div v-for="(result, index) of race.result" :key="result.pilotId">
        <PilotCard
          :pilot="useFindPilotById(result.pilotId)"
          :position="index + 1"
        />
      </div>
    </div>
  </section>

  <section v-else>
    <p>Seems this race does not exist, pal :(</p>
    <router-link to="/races">
      <div
        class="inline-flex p-4 my-4 text-center text-white bg-blue-500 rounded-lg"
      >
        Browse all races
      </div>
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useRoute } from "vue-router";

import { Race } from "@/interfaces";

import { useFindRaceByName, useFindPilotById } from "@/hooks";

import PilotCard from "@/components/Races/Pilot.vue";

export default defineComponent({
  name: "RaceDashboardView",

  setup() {
    const route = useRoute();

    const race: Race | undefined = useFindRaceByName(`${route.params.name}`);

    return { race, useFindPilotById };
  },
  components: {
    PilotCard,
    // PilotRaceResult,
  },
});
</script>
