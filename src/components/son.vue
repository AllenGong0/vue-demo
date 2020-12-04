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
  <el-input v-model="input" placeholder="请输入内容"></el-input>
</template>

<script lang="ts">
  import { onUpdated, reactive, ref } from 'vue'
  export default {
    props:{
        count:Number
    },
    setup() {
        let myCount  = ref(0)
        let myArr:number[] = []
        let arr = reactive(myArr)
        onUpdated(()=>{
            console.log(`setUp 更新`)
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
        input:ref(''),
        arr,
        myCount,
        msg: 'ss',
        addCount,
        redCount
      }
    }
  }
</script>