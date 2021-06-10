<template>
  <div>
    <main class="main-container">
      <div class="top"></div>

      <div class="bottom">
        <div class="left"></div>

        <div class="right">
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss" scoped>
.main-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .content {
    box-sizing: border-box;
  }
}
</style>
