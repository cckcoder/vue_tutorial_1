<template>
  <div id="ref">
    <h1 ref="title">Waiting for change by Ref</h1>
    <input
      ref="input1"
      type="text"
      placeholder="This will be focused automatically">
  </div>
</template>

<script>
export default {
  name: 'Ref',
  mounted() {
    this.$refs["title"].textContent = 'CodeWiz change Ref'
    this.$refs["input1"].focus()
    this.$refs["input1"].value = "12345"
  }
}
</script>

<style>

</style>
