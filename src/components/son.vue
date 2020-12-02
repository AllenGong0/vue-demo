<template>
  <div>
    <button @click="addCount">+</button>
    <button @click="redCount">-</button>
    <div>{{myCount}}</div>
    <div>{{msg}}</div>
    <div>{{arr}}</div>
    <div v-for="(item,index) in arr" :key="index">
        {{item}}
    </div>
  </div>
</template>

<script>
  import { onUpdated, reactive, ref, toRaw, toRef, toRefs } from 'vue'
  export default {
    props:{
        count:Number
    },
    updated(){
        console.log('组建更新')
        console.log(this)
    },
    setup(props,context) {
        let myCount  = ref(0)
        let arr = reactive([])
        onUpdated(()=>{
            console.log(this)
            // console.log(props.count)   
        })
        let addCount = ()=>{
            myCount.value++
            arr.push(myCount.value)
        }
        function redCount(){
            myCount.value--
            if(arr.length){
                arr.length--
            }
        }
      //const count = ref(props.count)
      return {
        arr,
        myCount,
        msg: 'ss',
        addCount,
        redCount
      }
    }
  }
</script>