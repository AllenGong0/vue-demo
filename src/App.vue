<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld />
  <Father />
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
