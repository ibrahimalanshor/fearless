<template>
  <div id="app">
    <navbar />
    <alert :msg="flash.msg" v-model="flash.exists" />
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import { Navbar, Alert } from '@/components'

  export default {
    components: {
      Navbar,
      Alert
    },
    computed: {
      ...mapState(['flash'])
    },
    methods: {
      ...mapMutations(['resetFlash']),
      ...mapActions('post', ['read'])
    },
    async mounted() {
      try {
        await this.read()
        
        this.$Progress.finish()
      } catch (err) {
        console.log('obj');
      }
    },
    created() {
      this.$Progress.start()

      this.resetFlash()
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