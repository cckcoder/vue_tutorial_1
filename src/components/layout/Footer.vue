<template>
  <div id="footer">
    <span :style="{color}">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    setInterval(() => {
      this.$emit('onClock', Date())
    }, 1000)
  },
  props: [
    "title",
    "color"
  ]
}
</script>

<style scoped>
#footer {
  margin-top: 40px;
}
</style>
