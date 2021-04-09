<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import { Navbar } from '@/components'

  export default {
    components: {
      Navbar
    }
  }
</script>