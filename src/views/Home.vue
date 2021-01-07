<template>
  <p>home</p>

  <div v-for="x of data" :key="x.pilotId">
    <Card :pilot="useFindPilotById(x.pilotId)" />
    {{x.pilotId}}  tiene {{x.points}} points y ha ganado {{x.victories}} carreras
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "@/components/Pilots/Card.vue";

// import { Pilot } from "@/interfaces";
import { useRanking } from "@/hooks/useRanking";
import { useFindPilotById } from "@/hooks/useFindPilot";

export default defineComponent({
  name: "Home",
  setup() {
    const data = useRanking();

    return { data, useFindPilotById };
  },
  components: {
    Card,
  },
});
</script>
