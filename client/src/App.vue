<template>
  <div id="app">
    <navbar />
    <alert :msg="flash.msg" v-model="show" v-if="flash.exists" />
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { Navbar, Alert } from '@/components'

  export default {
    components: {
      Navbar,
      Alert
    },
    data() {
      return {
        show: true
      }
    },
    computed: {
      ...mapState(['flash'])
    },
    methods: {
      ...mapMutations(['resetFlash'])
    },
    mounted() {
      this.$Progress.finish()
    },
    created() {
      this.$Progress.start()

      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start()

        this.resetFlash()
        next()
      })

      this.$router.afterEach(() => {
        this.$Progress.finish()
      })
    }
  }
</script>