<template>
  <Leaderboard />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Leaderboard from "@/components/Leaderboard.vue";

export default defineComponent({
  name: "LeaderboardsView",
  components: {
    Leaderboard,
  },
});
</script>
