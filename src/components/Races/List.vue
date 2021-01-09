<template>
  <section class="grid grid-cols-3 gap-8">

      <div v-for="race of races" :key="race.raceName">
          <router-link :to="'/races/'+nameToURL(race.raceName)">
          <RaceCard :race="race" class="transition transform hover:-translate-y-1" />
          </router-link>
      </div>
     
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useLeaderboard } from "@/hooks";

import {nameToURL} from '@/helpers'

import RaceCard from '@/components/Races/Card.vue'

export default defineComponent({
  setup() {
    return {races: useLeaderboard(), nameToURL};
  },
  name: "Race List",
  components: {RaceCard},
});
</script>
