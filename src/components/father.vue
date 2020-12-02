<template>
  <div>sahelldad</div>
  <button @click="count++">count: {{count}}</button>
  <Son :count=count />
</template>

<script>
import Son from "./son.vue";
export default {
  name: "father",
  components: {
    Son,
  },
  data() {
    return {
        count: 0
    };
  }
};
</script>

<style></style>
