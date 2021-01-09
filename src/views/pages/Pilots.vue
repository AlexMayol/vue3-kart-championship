<template>
  <section class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    <div
      v-for="pilot of pilots"
      :key="pilot._id"
      class="transition transform hover:-translate-y-1"
    >
      <router-link :to="getPilotUrl(pilot.name)">
        <Card :pilot="pilot" />
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { usePilotList } from "@/hooks";

import { nameToURL } from "@/helpers";

import Card from "@/components/Pilots/Card.vue";

export default defineComponent({
  name: "PilotsView",
  setup() {
    const pilots = usePilotList();

    const getPilotUrl = (name: string) => {
      return `/pilots/${nameToURL(name)}`;
    };

    return { pilots, getPilotUrl };
  },
  components: {
    Card,
  },
});
</script>