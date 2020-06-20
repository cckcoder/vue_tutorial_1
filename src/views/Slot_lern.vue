<template>
  <div id="slotLearn">
    <Clock>
      <span style="color:blue;">เวลาปัจจุบัน :</span>
    </Clock>

    <Clock>
      <span style="color:red;">Current time :</span>
    </Clock>

    <!-- Use slot fallback or Default slot template -->
    <Clock />
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
