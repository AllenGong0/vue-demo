<template>
  <!-- <h1>{{ msg }}</h1> -->
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div v-bind:title="message">sww</div>
</template>

<script>
import { ref, onBeforeUpdate, onUpdated, reactive } from "vue";

export default {
  // reactive state
  data() {
    return {
      count: 0,
      message: new Date().toLocaleString(),
      // msg:'ww'
    };
  },
  created() {
    const count = ref(0);
    const list = ref([1, 2, 34]);
    const state = reactive({
      count,
      list,
    });
    state.count++;
    state.list.push(5);
  },
  props: {
    title: String,
  },
  setup() {
    console.log();
    let itemRefs = [];
    const setItemRef = (el) => {
      itemRefs.push(el);
    };
    onBeforeUpdate(() => {
      itemRefs = [];
    });
    onUpdated(() => {
      console.log(itemRefs);
    });
    return {
      itemRefs,
      setItemRef,
    };
  },
};
</script>
