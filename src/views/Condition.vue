<template>
  <div id="condition">
    <h1>Condition</h1>
    <div v-if="type === 'A'">
      I am A
    </div>
    <div v-else-if="type === 'B'">
      I am B
    </div>
    <div v-else-if="type === 'C'">
      I am C
    </div>
    <div v-else>
      Not A/B/C
    </div>

    <div v-if="isShow">
      Blink 1
    </div>
    <div v-else>
      Blink 2
    </div>

    <div v-show="isShow">
      Blink V-show
    </div>

  </div>
</template>

<script>
export default {
  name: "condition",
  mounted() {
    setInterval(() => {
      //this.isShow = !this.isShow
      this.isShow = false
    }, 1000)
  },
  data() {
    return {
      type: "A",
      isShow: true
    }
  }
}
</script>

<style>

</style>
