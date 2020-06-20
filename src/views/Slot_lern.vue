<template>
  <div id="slotLearn">
    <Clock>
      <span style="color:blue;">เวลาปัจจุบัน :</span>
    </Clock>

    <Clock>
      <span style="color:hotpink;">เวลาปัจจุบัน 123:</span>

      <template v-slot:header>
        <h1>Header</h1>
      </template>

      <template v-slot:footer>
        <h3>Footer</h3>
      </template>

    </Clock>

  </div>
</template>

<script>
import Clock from '@/components/helpers/Clock'

export default {
  name: "SlotLearn",
  components: {
    Clock
  }
}
</script>

<style>

</style>
