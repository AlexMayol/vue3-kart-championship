<template>
  <div v-if="pilot" class=" home">

    <PilotCard :pilot="pilot" />
   
    <div v-for="race of races" :key="race.name">
      {{race.name}}
      {{race.time}}
    </div>
  </div>

  <div v-else>
    Seems this pilot does not exist, pal :(
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

import { Pilot } from "@/interfaces";

import { useFindPilot } from "@/hooks/useFindPilot.ts";

import PilotCard from '@/components/Pilots/PilotCard.vue'

export default defineComponent({
  name: "Pilot Dashboard",

  setup() {
    const route = useRoute();

    console.log(route.params.name)


    const pilot: Pilot | undefined = useFindPilot(`${route.params.name}`);

    console.log(pilot);

    return { pilot };
  },
  components:{
    PilotCard
  }
});
</script>
