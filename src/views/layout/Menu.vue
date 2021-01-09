<template>
  <nav class="md:fixed">
    <div
      class="top-0 flex items-end justify-center px-2 space-x-2 md:my-2 md:block md:sticky"
    >
      <router-link to="/" v-slot="{ isActive }">
        <MenuLink :class="{ 'current-page': isActive }">
          <h1
            class="flex flex-col items-center space-x-1 md:items-end md:flex-row"
          >
            <CircuitIcon classes="w-8 h-8 fill-current" />
            <div>
              <span class="hidden text-sm md:flex">Welcome to</span>
              <p class="text-xs font-bold sm:text-base md:text-xl">KartAway</p>
            </div>
          </h1>
        </MenuLink>
      </router-link>
      <router-link to="/leaderboard"  v-slot="{ isActive }">
        <MenuLink :class="{ 'current-page': isActive }">
          <h2
            class="flex flex-col items-center space-x-1 md:items-end md:flex-row"
          >
            <PodiumIcon classes="w-8 h-8 fill-current" />
            <div>
              <span class="hidden text-sm md:flex">Explore the</span>
              <p class="text-xs font-bold sm:text-base md:text-xl">
                Leaderboard
              </p>
            </div>
          </h2>
        </MenuLink>
      </router-link>
      <router-link to="/races"  v-slot="{ isActive }">
        <MenuLink :class="{ 'current-page': isActive }">
          <h2
            class="flex flex-col items-center space-x-1 md:items-end md:flex-row"
          >
            <FlagsIcon classes="w-8 h-8 fill-current" />
            <div>
              <span class="hidden text-sm md:flex">Watch the</span>
              <p class="text-xs font-bold sm:text-base md:text-xl">Races</p>
            </div>
          </h2>
        </MenuLink>
      </router-link>
      <router-link to="/pilots"  v-slot="{ isActive }">
        <MenuLink :class="{ 'current-page': isActive }">
          <h2
            class="flex flex-col items-center space-x-1 md:items-end md:flex-row"
          >
            <CarIcon classes="w-8 h-8 fill-current" />
            <div>
              <span class="hidden text-sm md:flex">Meet the</span>
              <p class="text-xs font-bold sm:text-base md:text-xl">Pilots</p>
            </div>
          </h2>
        </MenuLink>
      </router-link>
    </div>
  </nav>
</template>

<script>

import MenuLink from "@/components/UI/MenuLink.vue";
import {CarIcon, PodiumIcon, CircuitIcon, FlagsIcon} from "@/components/UI/Icons";

export default {
  components: {
    MenuLink,
    CarIcon,
    PodiumIcon,
    CircuitIcon,
    FlagsIcon,
  },
};
</script>