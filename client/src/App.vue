<template>
  <div id="app">
    <navbar />
    <alert :msg="flash.msg" v-model="flash.exists" />
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { Navbar, Alert } from '@/components'

  export default {
    components: {
      Navbar,
      Alert
    },
    computed: {
      ...mapState(['flash'])
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