<template>
    <div class="content-wrapper">
      <router-view/>
    </div>
</template>

<script>
export default {
  name: "Content"
}
</script>

<style scoped>
.content-wrapper {
  margin: 24px;
  padding: 24px;
  border: 1px dashed grey;
}
</style>
