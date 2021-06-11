<template>
  <div class="bg-gray-50">
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">{{ $route.meta.title }}</h1>
      </div>
    </header>

    <div
      class="
        max-w-screen-xl
        px-4
        py-12
        mx-auto
        sm:px-6
        lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between
      "
    >
      <h2
        class="
          text-3xl
          font-extrabold
          leading-9
          tracking-tight
          text-gray-900
          sm:text-4xl sm:leading-10
        "
      >
        Kou & Wang~~~
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/about"
            class="
              inline-flex
              items-center
              justify-center
              px-5
              py-3
              text-base
              font-medium
              leading-6
              text-white
              transition
              duration-150
              ease-in-out
              bg-indigo-600
              border border-transparent
              rounded-md
              hover:bg-indigo-500
              focus:outline-none
            "
          >
            Next Page
          </router-link>
        </div>
        <ButtonRepo></ButtonRepo>
      </div>
    </div>

    <div>
      <BeakerIcon class="h-5 w-5 text-blue-500"></BeakerIcon>
      <BellIcon class="h-5 w-5 text-blue-500"></BellIcon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonRepo from '@/components/ButtonRepo.vue'
import { BeakerIcon, BellIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'HomePage',
  components: { ButtonRepo, BeakerIcon, BellIcon }
})
</script>

<style lang="scss" scoped></style>
