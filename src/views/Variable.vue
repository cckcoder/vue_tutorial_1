<template>
  <div id="variable">
    <h1>Normal vs State Variable</h1>
    <div>{{ count }}</div>
    <br>
    <br>
    <div>TimeStamp: {{ timeStamp }}</div>
    <button @click="timeStamp = Date.now()">Update TimeStamp</button>
    <button @click="count++">Update Count</button>
  </div>
</template>

<script>
export default {
  name: "Variable",
  created() {
    this.timeStamp = 0
  },
  mounted() {
    setInterval(() => {
      //this.count++;
      console.log("Timestamp: " + this.timeStamp)
    }, 100)
  },
  data() {
    return {
      count: 0 // Local State
    }
  }
}
</script>

<style>

</style>
