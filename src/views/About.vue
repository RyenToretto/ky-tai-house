<template>
  <div class="bg-gray-50">
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
        About Page~e~~
      </h2>
      <div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <router-link
            to="/"
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
            Back Home
          </router-link>
        </div>
        <ButtonRepo></ButtonRepo>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonRepo from '@/components/ButtonRepo.vue'

export default defineComponent({
  name: 'AboutPage',
  components: { ButtonRepo }
})
</script>

<style lang="scss" scoped></style>
