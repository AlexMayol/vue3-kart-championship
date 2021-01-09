<template>
  <RacesList />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import RacesList from "@/components/Races/List.vue";

export default defineComponent({
  name: "RacesView",
  components: {
    RacesList,
  },
});
</script>
