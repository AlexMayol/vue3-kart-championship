<template>
  <main class="h-full grid-cols-8 md:grid">
    <nav class="flex flex-col col-span-2 p-2 bg-pink-600">
      <router-link to="/">
         <MenuLink>
          <h2>
            <p class="text-2xl font-bold">Home</p>
          </h2>
        </MenuLink>
      </router-link>
      <router-link to="/leaderboard">
        <MenuLink>
          <h2>
            <span class="text-sm">Explore the</span>
            <p class="text-2xl font-bold">Leaderboard</p>
          </h2>
        </MenuLink>
      </router-link>
      <router-link to="/pilots">
          <MenuLink>
          <h2>
             <span class="text-sm">Meet the</span>
            <p class="text-2xl font-bold">Pilots</p>
          </h2>
        </MenuLink>
      </router-link>
    </nav>

    <div class="col-span-6 p-4">
      <router-view />
    </div>
    
  </main>
</template>

<script>
import MenuLink from "@/components/UI/MenuLink";
export default {
  components: {
    MenuLink,
  },
};
</script>