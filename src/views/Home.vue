<template>
  
  <p>home</p>
 
  <div class="grid grid-cols-4 gap-8 bg-red-200 home" >

<!-- 
    <div v-for="pilot of pilots" :key="pilot._id" >
      <router-link :to="'/pilot/'+formatName(pilot.name)">{{pilot.name}}</router-link>
    </div> -->

    <!-- <PilotList /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";

import PilotList from "@/components/Pilots/PilotList.vue";

import { Pilot } from "@/interfaces";
import { useData } from "@/hooks/useData.ts";

export default defineComponent({
  name: "Home",
  // setup() {
  //   console.log( useData());
  //   // const pilots: Pilot[] = useData();

  //   const formatName = (name: string) => {
  //     return name.trim().toLowerCase().replace(" ", "-");
  //   };
  //   return { pilots, formatName };
  // },
  components: {
    // PilotList,
  },
});
</script>
