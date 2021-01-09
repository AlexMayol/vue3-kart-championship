<template>
  <section>
    <h1 class="mb-4 text-2xl font-bold text-center">Current Leaderboard</h1>
    <section class="grid gap-4 sm:grid-cols-2">
      <div v-for="x of data" :key="x.pilotId">
        <router-link
          :to="'/pilots/' + nameToURL(useFindPilotById(x.pilotId).name)"
        >
          <Card :pilot="useFindPilotById(x.pilotId)">
            <template v-slot:points>
              <span class="text-lg font-semibold"> {{ x.points }} </span>
              <span> points</span>
            </template>
          </Card>
        </router-link>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "@/components/Pilots/Card.vue";

// import { Pilot } from "@/interfaces";
import { nameToURL } from "@/helpers";
import { useRanking, useFindPilotById } from "@/hooks";

export default defineComponent({
  name: "Home",
  setup() {

    return { data: useRanking(), useFindPilotById, nameToURL };
  },
  components: {
    Card,
  },
});
</script>
