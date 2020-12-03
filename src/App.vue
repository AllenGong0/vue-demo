<template>
  <router-view></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Father from './components/father.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Father
  }
}
</script>
