<template>
  <section class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    <div v-for="pilot of pilots" :key="pilot._id" class="transition transform shadow hover:-translate-y-1 hover:shadow-sm">
      <router-link :to="'/pilots/' + pilotNameToURL(pilot.name)">
        <PilotCard :pilot="pilot" />
      </router-link>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

import { usePilotList } from "@/hooks/usePilotList";

import { pilotNameToURL } from "@/helpers";

import PilotCard from "@/components/Pilots/PilotCard";

export default defineComponent({
  name: "Pilots",
  setup() {
    const { pilots } = usePilotList();

    return { pilots, pilotNameToURL };
  },
  components: {
    PilotCard,
  },
});
</script>

<style>
</style>