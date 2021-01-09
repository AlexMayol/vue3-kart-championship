<template>
  <main class="h-full grid-cols-10 md:grid">
    <div
      class="fixed top-0 left-0 right-0 z-10 flex flex-col lg:col-span-2 md:col-span-3 md:bg-gradient-to-r bg-gradient-to-b from-blue-600 to-blue-500 md:mb-0 md:relative"
    >
      <Menu />
    </div>

    <div class="p-4 mt-20 md:col-span-7 lg:col-span-8 md:m-0">
      <router-view v-slot="slotProps">
        <transition name="fade" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </main>
</template>

<script>
import Menu from "@/views/layout/Menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>