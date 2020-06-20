<template>
  <div id="clock">
    <slot name="header"></slot>
    <slot>Now :</slot>{{ time }}
    <slot name="footer"></slot>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "Clock",
  mounted() {
    setInterval(() => {
      this.time = moment(new Date()).format('DD/MM/YYYY hh:mm:ss')
    }, 100)
  },
  data() {
    return {
      time: ''
    }
  }
}
</script>

<style>

</style>
