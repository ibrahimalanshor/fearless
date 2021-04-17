<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import { Navbar } from '@/components'

  export default {
    components: {
      Navbar
    },
    mounted() {
      this.$Progress.finish()
    },
    created() {
      this.$Progress.start()

      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start()

        next()
      })

      this.$router.afterEach(() => {
        this.$Progress.finish()
      })
    }
  }
</script>